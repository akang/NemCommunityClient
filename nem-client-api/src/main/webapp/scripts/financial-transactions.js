"use strict";
define(['jquery', 'ncc', 'NccLayout', 'Utils', 'Pager', 'TradingOperationType'], function ($, ncc, NccLayout, Utils, Pager, TradingOperationType) {

    ncc.openTransferXem = function () {
        ncc.openSendNem(ncc.get('trading.xem.currentEscrowAccount.address'), true);
    };

    ncc.setXemWithdrawalAccount = function () {
        var m = ncc.getModal('setXemWithdrawalAccount');

        if (!ncc.get('userDetails.submitted')) {
            ncc.notifyNoDetails();
            return;
        }

        ncc.viewUserDetails({
            title: ncc.get('texts.modals.setXemWithdrawalAccount.title'),
            isConfirm: true,
            message: ncc.get('texts.modals.setXemWithdrawalAccount.detailsMessage'),
            onConfirm: function() {
                m.open();
            }
        });
    };

    ncc.setFiatWithdrawalAccount = function (tradeInstrument) {
        if (!ncc.get('userDetails.submitted')) {
            ncc.notifyNoDetails();
            return;
        }

        var m = ncc.getModal('setFiatWithdrawalAccount');
        m.set('tradeInstrument', tradeInstrument);

        ncc.viewUserDetails({
            title: ncc.get('texts.modals.setFiatWithdrawalAccount.title'),
            isConfirm: true,
            message: ncc.get('texts.modals.setFiatWithdrawalAccount.detailsMessage'),
            onConfirm: function() {
                m.open();
            }
        });
    };

    ncc.setBtcWithdrawalAccount = function () {
        ncc.viewUserDetails({
            title: ncc.get('texts.modals.setBtcWithdrawalAccount.title'),
            isConfirm: true,
            message: ncc.get('texts.modals.setBtcWithdrawalAccount.detailsMessage'),
            onConfirm: function() {
                var modal = ncc.getModal('setBtcWithdrawalAccount');
                modal.open();
            }
        });
    };

    ncc.requestBtcEscrowAccount = function () {
        ncc.showConfirmation(ncc.get('texts.modals.requestBtcEscrowAccount.title'),
            ncc.get('texts.modals.requestBtcEscrowAccount.message'), {
                yes: function () {
                    var success = false;
                    ncc.confirmWithPassword(function (values) {
                        ncc.postRequest('trading/accounts/escrow/btc/request', values, function (response) {
                            success = true;
                        }, {
                            complete: function () {
                                if (success) {
                                    ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.requestBtcEscrowAccount.requestSuccess'));
                                    ncc.fire('btcEscrowRequested');
                                }
                            }
                        });
                    });
                }
            });
    };

    ncc.withdrawBtc = function (escrowAccount) {
        var m = ncc.getModal('withdraw');
        m.set('escrowAccount', escrowAccount);
        m.set('withdrawalAccount', ncc.get('trading.btc.withdrawalAccount'));
        m.set('modalTitle', ncc.get('texts.modals.withdraw.btc.title'));
        m.set('setupWithdrawalAccount', ncc.setBtcWithdrawalAccount.bind(ncc));
        m.open();
    };

    ncc.withdrawXem = function (escrowAccount) {
        var m = ncc.getModal('withdraw');
        m.set('escrowAccount', escrowAccount);
        m.set('withdrawalAccount', ncc.get('trading.xem.withdrawalAccount'));
        m.set('modalTitle', ncc.get('texts.modals.withdraw.xem.title'));
        m.set('setupWithdrawalAccount', ncc.setXemWithdrawalAccount.bind(ncc));
        m.open();
    };

    ncc.withdrawFiat = function(escrowAccount) {
        var m = ncc.getModal('withdraw');
        m.set('escrowAccount', escrowAccount);
        m.set('withdrawalAccount', Utils.findFiatAccountsGroup(escrowAccount.tradeInstrument).withdrawalAccount);
        m.set('modalTitle', ncc.get('texts.modals.withdraw.fiat.title'));
        m.set('setupWithdrawalAccount', ncc.setFiatWithdrawalAccount.bind(ncc, escrowAccount.tradeInstrument));
        m.open();
    };

    return $.extend(true, {}, NccLayout, {
        name: 'financial-transactions',
        url: 'financial-transactions.html',
        template: 'rv!layout/financial-transactions',
        parent: 'wallet',
        local: {
            autoRefreshInterval: 3000,
            pageSize: 6,
            operationsPageSize: 10,
            ALL_TRADING_OPERATIONS: 0
        },
        initOnce: function () {
            var self = this;

            var requestStatuses = {
                requested: 'requested',
                confirmed: 'confirmed',
                established: 'established',
                invalid: 'invalid'
            };

            var escrowsFilters = {
                ALL: 'trading/accounts/escrow',
                XEM: 'trading/accounts/escrow/xem',
                BTC: 'trading/accounts/escrow/btc',
                FIAT: 'trading/accounts/escrow/fiat'
            };

            var operationTypes = $.extend({}, TradingOperationType);
            operationTypes.ALL = this.local.ALL_TRADING_OPERATIONS;

            ncc.set({
                finTxsPage: {
                    settingsTab: 'details',
                    requestStatuses: requestStatuses,
                    escrowsFilters: escrowsFilters,
                    escrowsPager: new Pager(this.local.pageSize, []),
                    operationTypes: operationTypes,
                    operationType: operationTypes.ALL,
                    operationsPager: new Pager(this.local.operationsPageSize, [], true)
                }
            });

            ncc.on({
                showTransferFiat: ncc.openTransferFiat.bind(ncc),
                showTransferXem: ncc.openTransferXem.bind(ncc),
                setupUserDetails: ncc.setupUserDetails.bind(ncc),
                viewUserDetails: ncc.viewUserDetails.bind(ncc),
                editUserDetails: ncc.editUserDetails.bind(ncc),
                setXemWithdrawalAccount: ncc.setXemWithdrawalAccount.bind(ncc),
                setFiatWithdrawalAccount: function() {
                    ncc.setFiatWithdrawalAccount(ncc.get('finTxsPage.fiatInstrument'));
                },
                setBtcWithdrawalAccount: ncc.setBtcWithdrawalAccount.bind(ncc),
                requestBtcEscrowAccount: ncc.requestBtcEscrowAccount.bind(ncc),
                withdrawXem: ncc.withdrawXem.bind(ncc),
                withdrawBtc: ncc.withdrawBtc.bind(ncc),
                changeTradingAccount: ncc.selectTradingAccount.bind(ncc),
                userDetailsSubmitted: function() {
                    ncc.set('pendingUserDetails', true);
                },
                xemWithdrawalAccountSet: function() {
                    ncc.set('pendingXemWithdrawalAccount', true);
                },
                btcWithdrawalAccountSet: function() {
                    ncc.set('pendingBtcWithdrawalAccount', true);
                }
            });

            ncc.observe('finTxsPage.settingsTab trading userDetails', function (settingsTab) {
                ncc.set('finTxsPage.loading.settings', getSettingsLoading());

                function getSettingsLoading() {
                    var userDetailsLoading = !ncc.get('userDetails');
                    if (userDetailsLoading) {
                        return true;
                    }
                    if (!ncc.get('userDetails.submitted')) {
                        return false;
                    }
                    switch (settingsTab) {
                        case 'xem':
                            return !ncc.get('trading.xem');
                        case 'btc':
                            return !ncc.get('trading.btc');
                        case 'fiat':
                            return !ncc.get('trading.fiat');
                    }
                }
            });

            ncc.observe('finTxsPage.operationType', function() {
                self.loadTradingOperations('reload');
            });

            ncc.observe('finTxsPage.escrowsFilter', function (newValue) {
                self.fillEscrowAccounts();
                self.loadEscrowAccounts();
            });

            ncc.observe('trading.instruments.fiat', function(newValue) {
                if (ncc.get('finTxsPage.fiatInstrument')) {
                    return;
                }
                var instruments = newValue || [];
                ncc.set('finTxsPage.fiatInstrument', instruments[0]);
            });

            ncc.observe('trading.fiat finTxsPage.fiatInstrument', function() {
                var instrument = ncc.get('finTxsPage.fiatInstrument');
                ncc.set('finTxsPage.fiatAccountsGroup', Utils.findFiatAccountsGroup(instrument));
            });

        },
        setupEverytime: function () {
            this.setupGridster();
            ncc.ensureBrokerConnected(function () {
                ncc.refreshTradingAccounts();
                this.loadEscrowAccounts();
                this.loadTradingOperations('reload');

                this.local.intervalJobs.push(setInterval(this.loadTradingOperations.bind(this, 'refresh'),
                    this.local.autoRefreshInterval));
                this.local.intervalJobs.push(setInterval(this.loadEscrowAccounts.bind(this),
                    this.local.autoRefreshInterval));
            }.bind(this));
        },
        fillEscrowAccounts: function() {
            var filters = ncc.get('finTxsPage.escrowsFilters');
            var filter = ncc.get('finTxsPage.escrowsFilter') || filters.ALL;
            var pager = ncc.get('finTxsPage.escrowsPager');

            var escrows;
            switch(filter) {
                case filters.ALL:
                    escrows = ncc.get('escrowAccounts');
                    break;
                case filters.XEM:
                    escrows = ncc.get('trading.xem.escrowAccounts');
                    break;
                case filters.FIAT:
                    escrows = ncc.get('trading.fiat')
                        .map(function(group) {
                            return group.escrowAccounts;
                        })
                        .reduce(function(aggr, arr) {
                            return aggr.concat(arr);
                        }, []);
                    break;
                case filters.BTC:
                    escrows = ncc.get('trading.btc.escrowAccounts');
                    break;
            }
            pager.setList(escrows || []);
            pager.resetPage();
        },
        loadEscrowAccounts: function () {
            if (!ncc.get('userDetails.submitted')) {
                return false;
            }
            var pager = ncc.get('finTxsPage.escrowsPager');
            var filters = ncc.get('finTxsPage.escrowsFilters');
            var filter = ncc.get('finTxsPage.escrowsFilter') || filters.ALL;

            ncc.postRequest(filter, {
                    tradingStorage: ncc.get('wallet.wallet')
                },
                function (response) {
                    var data = response.data || [];
                    var escrows = $.map(data, function (escrow) {
                        return Utils.processEscrowAccount(escrow, {
                            processAddress: escrow.tradeInstrument.name === "XEM"
                        });
                    });
                    pager.setList(escrows);
                });
        },
        loadTradingOperations: function (type) {
            var operationType = ncc.get('finTxsPage.operationType');
            var url = operationType == this.local.ALL_TRADING_OPERATIONS ?
                'trading/operations/all' : 'trading/operations';
            var pager = ncc.get('finTxsPage.operationsPager');

            if (!ncc.get('userDetails.submitted') && !ncc.get('userDetails.isBeingProcessed')) {
                pager.setList([]);
                pager.setLoading(false);
                return;
            }

            if (type === 'reload') {
                pager.resetPage();
                pager.setLoading(true);
                pager.setList([]);
            }
            ncc.postRequest(url, {
                    tradingStorage: ncc.get('wallet.wallet'),
                    type: operationType
                },
                function (response) {
                    var data = response.data || [];
                    var operations = $.map(data, function(operation) {
                        operation.transaction = Utils.processTransaction(operation.transaction); return operation;
                    });
                    pager.setList(operations);
                    pager.setLoading(false);
                });
        },
        setupGridster: function () {
            this.local.$financialTransactions = $('.js-financialTransactions');
            Utils.setupGridster(this.local.$financialTransactions);
        },
        fade: function (fetcher, keypath, callback) {
            function hideLoading(data) {
                ncc.set('finTxsPage.loading.' + keypath, false);
                return data;
            }

            ncc.set('finTxsPage.loading.' + keypath, true);

            fetcher(function (data) {
                hideLoading();
                if (callback) {
                    callback(data);
                }
            }, hideLoading);
        },
    });
});
