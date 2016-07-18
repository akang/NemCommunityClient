"use strict";
/* global ncc: true */
define(['NccModal', 'Utils', 'typeahead'], function (NccModal, Utils) {
    return NccModal.extend({
        data: {},
        computed: {
            amount: function () {
                return Utils.format.nem.stringToNem(this.get('formattedAmount'));
            },
            formValid: function () {
                return this.get('formattedAmount') && this.get('withdrawalAccount.address') && this.get('escrowAccount.address');
            }
        },
        resetDefaultData: function () {
            this.set('formattedAmount', '');
            this.set('fullBalance', Utils.format.nem.formatNemAmount(ncc.get('activeAccount').balance, {keepTrailingZeroes: true}));
            this.set('privateLabels', ncc.get('privateLabels'));
        },
        withdraw: function () {
            var self = this;
            ncc.confirmWithPassword(function (secureValues) {
                var format = Utils.format.nem;
                var requestData = $.extend({
                    escrowAccountId: self.get('escrowAccount.id'),
                    withdrawAccountId: self.get('withdrawalAccount.id'),
                    amount: (format.getNemValue(self.get('amount')) / Utils.config.nemDivisibility) + ''
                }, secureValues);
                self.set('processing', true);
                var success = false;
                ncc.postRequest('trading/accounts/withdrawal/withdraw', requestData, function (data) {
                    success = true;
                }, {
                    complete: function () {
                        self.set('processing', false);
                        if (success) {
                            self.closeModal();
                            ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.withdraw.withdrawSuccess'));
                            ncc.refreshTradingAccounts();
                        }
                    }
                });
            });
        },
        onrender: function () {
            var self = this;

            this.viewAccount = ncc.viewAccount;

            var $amount = $('.js-withdraw-amount-textbox');
            var amountTxb = $amount[0];
            $amount.on('keypress', function (e) {
                Utils.mask.keypress(e, 'nem', self);
            });
            $amount.on('paste', function (e) {
                Utils.mask.paste(e, 'nem', self);
            });
            $amount.on('keydown', function (e) {
                Utils.mask.keydown(e, 'nem', self);
            });

            this.listeners.push(ncc.observe({
                'texts.preferences.thousandSeparator': function (newProp, oldProp) {
                    amountTxb.value = Utils.format.nem.reformat(amountTxb.value, oldProp, newProp);
                },
                'texts.preferences.decimalSeparator': function (newProp, oldProp) {
                    amountTxb.value = Utils.format.nem.reformat(amountTxb.value, null, null, oldProp, newProp);
                }
            }));
            this.on('modalOpened', function () {
                this.resetDefaultData();
            });
        },
        setupWithdrawalAccount: function () {
            this.closeModal();
            this.get('setupWithdrawalAccount')();
        }
    });
});
