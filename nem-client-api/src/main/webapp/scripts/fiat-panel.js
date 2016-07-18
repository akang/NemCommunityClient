"use strict";
define(['jquery', 'ncc', 'NccLayout', 'Utils', 'Chart', 'TradeInfoListener', 'Pager'], function($, ncc, NccLayout, Utils, Chart,
        TradeInfoListener, Pager) {
    return $.extend(true, {}, NccLayout, {
        name: 'fiat-panel',
        url: 'fiat-panel.html',
        template: 'rv!layout/fiat-panel',
        parent: 'wallet',
        local: {
            scrollBottomTolerance: 100,
            pageSize: 4,
            subscribers: []
        },
        initOnce: function() {

            ncc.addFiatAccount = function(tradeInstrument) {
                var fields = [{
                    name: 'instrument',
                    type: 'text',
                    readonly: true,
                    unimportant: true,
                    label: {
                        content: ncc.get('texts.modals.addFiatAccount.tradeInstrument')
                    }
                }, {
                    name: 'address',
                    type: 'text',
                    label: {
                        content: ncc.get('texts.modals.addFiatAccount.accountNumber')
                    }
                }, {
                    name: 'btcPrivateKey',
                    type: 'text',
                    label: {
                        content: ncc.get('texts.modals.addFiatAccount.btcPrivateKey')
                    },
                    sublabel: {
                        content: ncc.get('texts.modals.addFiatAccount.correspondingKey')
                    }
                }];

                ncc.showInputForm(
                    ncc.get('texts.modals.addFiatAccount.title'),
                    ncc.get('texts.modals.addFiatAccount.message'),
                    fields, {
                        tradeInstrument: tradeInstrument,
                        instrument: tradeInstrument.name
                    },
                    function(values, closeModal) {
                        closeModal();
                        ajaxSubmit(values);
                    },
                    ncc.get('texts.modals.addFiatAccount.add')
                );

                function ajaxSubmit(values) {
                    ncc.confirmWithPassword(function(secureValues) {
                        secureValues.bankAccount = values;
                        var success = false;
                        ncc.postRequest('trading/bank_accounts/add', secureValues, function() {
                            success = true;
                        }, {
                            complete: function() {
                                if (success) {
                                    ncc.showMessage(ncc.get("texts.common.success"), ncc.get('texts.modals.addFiatAccount.successMessage'));
                                    ncc.refreshBankAccounts(null, true);
                                }
                            }
                        });
                    });
                }
            };

            ncc.set('fiatPage', {
                transfersPager: new Pager(this.local.pageSize, [])
            });

            ncc.observe('trading.instruments.fiat', function(instruments) {
                if (!instruments) {
                    return;
                }

                var instrument = ncc.get('fiatPage.instrument');
                if (!instrument) {
                    ncc.set('fiatPage.instrument', instruments[0]);
                }
            });

            ncc.observe('fiatPage.instrument bankAccounts fiatPage.account', function() {
                var bankAccounts = ncc.get('bankAccounts') || [],
                    instrument = ncc.get('fiatPage.instrument');

                if (!instrument) {
                    return;
                }

                var filteredAccounts = bankAccounts.filter(function(bankAccount) {
                    return bankAccount.tradeInstrument.code === instrument.code;
                });

                ncc.set('fiatPage.filteredAccounts', filteredAccounts);

                if (!filteredAccounts.length) {
                    ncc.set('fiatPage.account', null);
                } else if (!ncc.get('fiatPage.account')) {
                    ncc.set('fiatPage.account', filteredAccounts[0]);
                } else {
                    ncc.set('fiatPage.account', filteredAccounts.find(function(account) {
                        return account.address === ncc.get('fiatPage.account.address');
                    }));
                }

                ncc.get('fiatPage.transfersPager').setList(ncc.get('fiatPage.account.transfers') || []);
            });

            this.local.intervalJobs.push(setInterval(this.refreshTransfers, this.local.autoRefreshInterval));
        },
        setupEverytime: function() {
            this.setupGridster();
            ncc.refreshBankAccounts(null, true);
        },
        setupGridster: function() {
            this.local.$fiatPanel = $('.js-fiatPanel');
            return Utils.setupGridster(this.local.$fiatPanel);
        },
        refreshTransfers: function() {
            var account = ncc.get('fiatPage.account');
            if (!account) {
                return;
            }
            ncc.postRequest('trading/transfers/all', {
                lastQueried: 0,
                address: account.address
            }, function (response) {
                var transfers = $.map(response.data, Utils.processTransfer);
                ncc.set('fiatPage.account.transfers', transfers);
                ncc.get('fiatPage.transfersPager').setList(transfers);
            }, {}, true);
        },
        leave: [function() {
        }]
    });
});
