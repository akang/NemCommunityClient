"use strict";
define(['jquery', 'ncc', 'NccLayout', 'Utils', 'Chart', 'TradeInfoListener', 'Pager'], function($, ncc, NccLayout, Utils, Chart,
        TradeInfoListener, Pager) {

    ncc.openPlaceOrder = function(tradePairCode) {
        if (!ncc.get('userDetails') || !ncc.get('userDetails.submitted')) {
            ncc.notifyNoDetails();
            return;
        }
        var m = ncc.getModal('placeOrder');
        m.open();
        getAvailablePair();

        function getAvailablePair() {
            ncc.postRequest('trading/pairs/available/' + tradePairCode, {
                tradingStorage: ncc.get('wallet.wallet')
            }, function(data) {
                if (!data.name) {
                    m.closeModal();
                    ncc.notifyTradePairNotAvailable();
                } else {
                    var pair = Utils.processTradePair(data);
                    m.set('tradePair', pair);
                    m.fire('dataLoaded');
                }
            });
        }
    };

    ncc.removeOrder = function(order) {
        ncc.showConfirmation(ncc.get('texts.modals.removeOrder.title'), ncc.get('texts.modals.removeOrder.message'), {
            yes: function() {
                ncc.confirmWithPassword(function(values) {
                    values.orderId = order.orderId;
                    var success = false;
                    ncc.postRequest('/trading/orders/remove', values, function(response) {
                        success = true;
                    }, {
                        complete: function() {
                            if (success) {
                                ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.removeOrder.removeSuccess'));
                                ncc.fire('orderRemoved');
                            }
                        }
                    });
                });
            }
        });
    };

    ncc.notifyTradePairNotAvailable = function() {
        ncc.showConfirmation(ncc.get('texts.modals.tradePairNotAvailable.title'), ncc.get('texts.modals.tradePairNotAvailable.message'), {
            yes: function() {
                ncc.loadPage('financial-transactions', ncc.get('params'));
            }
        });
    };

    return $.extend(true, {}, NccLayout, {
        name: 'trading',
        url: 'trading.html',
        template: 'rv!layout/trading',
        parent: 'wallet',
        local: {
            scrollBottomTolerance: 100,
            pageSize: 7,
            subscribers: []
        },
        steps: [
            'fifteenMinutes',
            'oneHour',
            'oneDay'
        ],
        initOnce: function() {
            var self = this;

            console.log("init once fired  ccc");

            ncc.on({
                showPlaceOrder: function() {
                    console.log("showPlaceOrder called");
                    var tradePair = ncc.get('tradingPage.tradePair');
                    ncc.openPlaceOrder(tradePair.code);
                },
                selectTradePair: function(event, tradePair) {
                    ncc.set('tradingPage.tradePair', tradePair);
                    ncc.set('tradingPage.loading.marketDepth', true);
                    self.loadTradeHistoryWithFade('');
                },
                setChartStep: function(event, step) {
                    ncc.set('tradingPage.step', step);
                    this.fillChartDataWithFade();
                }.bind(this),
                orderPlaced: function() {
                    self.loadPendingOrdersWithFade();
                },
                removeOrder: function(event, order) {
                    ncc.removeOrder(order);
                },
                orderRemoved: function() {
                    self.loadPendingOrdersWithFade();
                },
                orderUpdate: function() {
                    self.loadPendingOrdersWithFade();
                }
            });

            ncc.set({
                tradingPage: {
                    sellQuotes: Array(5),
                    buyQuotes: Array(5),
                    panels: [
                        'tradeHistory',
                        'escrowBalances',
                        'pendingOrders',
                    ],
                    steps: this.steps,
                    step: this.steps[0],
                    activePanel: 'tradeHistory',
                    historyPager: new Pager(this.local.pageSize, []),
                    tradePairsPager: new Pager(this.local.pageSize, []),
                    escrowsPager: new Pager(this.local.pageSize, []),
                    ordersPager: new Pager(this.local.pageSize, []),
                }
            });

            ncc.observe('tradingPage.activePanel', function() {
                ncc.ensureBrokerConnected(function() {
                    self.loadTradeHistoryWithFade();
                    self.fillChartDataWithFade();
                    self.loadPendingOrdersWithFade();
                });
            });

            ncc.observe('escrowAccounts', function(escrowAccounts) {
                ncc.set('tradingPage.escrowsPager.list', escrowAccounts);
            });

        },
        setupEverytime: function() {
            var self = this;

            self.setupGridster();
            self.resetState();
            Chart.setup('#chart');

            ncc.ensureBrokerConnected(function() {
                self.loadTradePairsWithFade(function(tradePairs) {
                    self.mergeTradePairs(tradePairs);

                    var selected = tradePairs[0];
                    ncc.set('tradingPage.tradePair', selected);

                    self.local.intervalJobs.push(setInterval(self.loadTradeHistory.bind(self), self.local.autoRefreshInterval));
                    self.local.intervalJobs.push(setInterval(self.loadPendingOrders.bind(self), self.local.autoRefreshInterval));
                    self.local.intervalJobs.push(setInterval(self.loadChartData.bind(self), self.local.autoRefreshInterval));

                    self.loadTradeHistoryWithFade();
                    self.fillChartDataWithFade();
                    self.loadPendingOrdersWithFade();
                });

                self.subscribe();
            })
        },
        resetState: function() {
            ncc.set('tradingPage.alreadySetup', false);
            return ncc.set('tradingPage.loading', {
                tradePairs: true,
                tradeHistory: true,
                chartData: true,
                pendingOrders: true
            });
        },
        setupGridster: function() {
            this.local.$trading = $('.js-trading');
            return Utils.setupGridster(this.local.$trading);
        },
        subscribe: function() {
            var self = this,
                subscribers = this.local.subscribers;
            TradeInfoListener.subscribe('/topic/extendedPair', function(extendedPair) {
                var pair = Utils.processExtendedPair(extendedPair);
                self.mergeTradePairs([pair]);
            }, subscribers.push.bind(subscribers));

            TradeInfoListener.subscribe('/topic/marketDepth',
                this.updateMarketDepth.bind(this),
                subscribers.push.bind(subscribers));

        },
        unsubscribe: function() {
            $.each(this.local.subscribers, function(index, subscriber) {
                subscriber.unsubscribe();
            });
            this.local.subscribers = [];
        },
        updateMarketDepth: function(marketDepth) {
            if (ncc.get('tradingPage.tradePair.code') !== marketDepth.tradePair.code) {
                return;
            }
            var buyQuotes = $.map(marketDepth.buyQuotes, Utils.processDepthQuote);
            var sellQuotes = $.map(marketDepth.sellQuotes, Utils.processDepthQuote);
            ncc.set('tradingPage.buyQuotes', buyQuotes);
            ncc.set('tradingPage.sellQuotes', sellQuotes);
        },
        loadTradePairs: function(callback) {
            ncc.getRequest('trading/pairs/all', function(response) {
                var pairs = $.map(response.data, Utils.processTradePair);
                ncc.set('tradingPage.tradePairs', pairs);
                ncc.set('tradingPage.tradePairsPager.list', pairs);
                callback(pairs);
            })
        },
        loadTradeHistory: function(callback) {
            if (!ncc.get('tradingPage.tradePair')) {
                return;
            }
            var tradePairCode = ncc.get('tradingPage.tradePair.code');
            ncc.postRequest('trading/history/transactions', {
                tradePairCode: tradePairCode
            }, function(response) {
                var transactions = $.map(response.data, Utils.processTradeHistoryTx);
                transactions = transactions.sort(function(t1, t2) {
                    return new Date(t1.time) - new Date(t2.time);
                });

                ncc.set('tradingPage.historyTxs', transactions);
                ncc.set('tradingPage.historyPager.list', transactions);
                callback && callback(transactions);
            })
        },
        loadPendingOrders: function(cbSuccess, cbError) {
            if (!ncc.get('userDetails.submitted')) {
                if (cbError) {
                    cbError();
                }
                return;
            }
            ncc.postRequest('trading/orders/pending', {
                tradingStorage: ncc.get('wallet.wallet'),
                skip: 0,
                limit: 10
            }, function(response) {
                var orders = Utils.processOrders(response.data);
                ncc.set('tradingPage.pendingOrders', orders);
                ncc.set('tradingPage.ordersPager.list', orders);
                if (cbSuccess) {
                    cbSuccess(orders);
                }
            });
        },
        loadChartData: function(callback) {
            if (!ncc.get('tradingPage.tradePair')) {
                return;
            }
            ncc.postRequest('trading/history/candlesticks', {
                tradePairCode: ncc.get('tradingPage.tradePair.code'),
                step: ncc.get('tradingPage.step')
            }, function(response) {
                var candlesticks = response.data;
                if (callback) {
                    callback(candlesticks);
                }
            });
        },
        fillChartData: function(callback) {
            this.loadChartData(function(candlesticks) {
                Chart.fillData(candlesticks);
                if (callback) {
                    callback(candlesticks)
                }
            });
        },
        mergeTradePairs: function(newPairs) {
            function findPairIndex(array, code) {
                var pairIndex = -1;
                $.each(array, function(index, pair) {
                    if (pair.code === code) {
                        pairIndex = index;
                    }
                });
                return pairIndex;
            }

            var currentPairs = ncc.get('tradingPage.tradePairs');
            if (currentPairs) {
                $.each(newPairs, function(index, pair) {
                    var pairIndex = findPairIndex(currentPairs, pair.code);
                    if (pairIndex === -1) {
                        currentPairs.push(pair);
                    } else {
                        currentPairs.splice(pairIndex, 1, pair);
                    }
                });
            }
            ncc.set('tradingPage.tradePairs', currentPairs);
            ncc.set('tradingPage.tradePairsPager.list', currentPairs);
        },
        fade: function(fetcher, keypath, callback) {
            function hideLoading(data) {
                ncc.set('tradingPage.loading.' + keypath, false);
                return data;
            }
            ncc.set('tradingPage.loading.' + keypath, true);

            fetcher(function(data) {
                hideLoading();
                if (callback) {
                    callback(data);
                }
            }, hideLoading);
        },
        loadTradePairsWithFade: function(callback) {
            this.fade(this.loadTradePairs.bind(this), 'tradePairs', callback);
        },
        loadTradeHistoryWithFade: function(callback) {
            this.fade(this.loadTradeHistory.bind(this), 'tradeHistory', callback);
        },
        loadPendingOrdersWithFade: function(callback) {
            this.fade(this.loadPendingOrders.bind(this), 'pendingOrders', callback);
        },
        fillChartDataWithFade: function(callback) {
            this.fade(this.fillChartData.bind(this), 'chartData', callback);
        },
        leave: [function() {
            this.unsubscribe();
        }]
    });
});
