'use strict';
/* globals ncc:true */
define(['NccModal', 'Utils', 'ValidatedForm'], function(NccModal, Utils, ValidatedForm) {
    return NccModal.extend({
        computed: {
            validated: function() {
                var form = this.get('form');
                if (!form || !form.submitValidate) return;
                return form.submitValidate();
            },
            escrowAccount: {
                get: function() {
                    var accountGroups = this.get('fiatAccountGroups') || [];
                    var instrument = this.get('account.tradeInstrument');
                    if (!instrument) return;
                    return accountGroups.find(function(group) {
                        return group.tradeInstrument.code === instrument.code;
                    }).currentEscrowAccount;
                },
                set: function() {}
            },
            recipient: function() {
                var form = this.get('form');
                if (this.get('deposit')) {
                    return this.get('recipientType') === this.recipientTypes.escrow
                        ? this.get('escrowAccount.address') : form.get('recipient');
                }
                return form.get('recipient');
            }
        },
        onrender: function() {
            this.set('form', this.createForm());

            this.on({
                modalOpened: function() {
                    this.resetDefaultData();
                }
            });

            this.observe('account', function(account) {
                if (!account) {
                    return;
                }
                this.set('receiveInstrument', account.tradeInstrument);
            });
        },
        resetDefaultData: function() {
            this.get('form').resetFields();
            var accounts = ncc.get('bankAccounts') || [];
            var account = accounts[0]

            this.set({
                accounts: accounts,
                account: account,
                fiatAccountGroups: ncc.get('trading.fiat'),
                transferring: false,
                depositing: false,
                instruments: ncc.get('trading.instruments.fiat'),
                receiveInstrument: account ? account.tradeInstrument : null,
                narrative: ''
            });

            if (this.get('deposit')) {
                this.set({
                    recipientType: this.recipientTypes.escrow,
                    recipientTypes: this.recipientTypes
                });
            }
        },
        createForm: function() {
            var self = this;
            return ValidatedForm.createForm({
                moduleSelector: '.transferFiat',
                ractiveModule: this,
                fields: {
                    recipient: $.extend({
                        customValidate: function(validate) {
                            if (self.get('deposit')) {
                                return self.get('recipientType') === self.recipientTypes.escrow
                                    ? self.get('escrowAccount') : validate();
                            }
                            return validate();
                        }
                    }, ValidatedForm.fields.numbers),
                    amount: $.extend({}, ValidatedForm.fields.amount)
                }
            });
        },
        recipientTypes: {
            escrow: 'escrow',
            other: 'other'
        },
        gatherData: function(callback) {
            var form = this.get('form'),
                self = this;

            ncc.confirmWithPassword(function (values) {
                values.recipient = self.get('recipient');
                values.amount = form.get('amount');
                values.receiveInstrument = self.get('receiveInstrument');
                values.sender = self.get('account.address');
                values.narrative = self.get('narrative');

                callback(values);
            });
        },
        transfer: function() {
            var self = this;

            this.gatherData(function(values) {
                self.set('transferring', true);
                var success = false;
                ncc.postRequest('bank_transfer', values, function() {
                    success = true;
                }, {
                    complete: function() {
                        self.set('transferring', false);
                        if (success) {
                            ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.transferFiat.transferSuccess'));
                            self.closeModal();
                        }
                    }
                });
            });
        },
        deposit: function() {
            var self = this;
            this.gatherData(function (values) {
                self.set('depositing', true);
                var success = false;
                ncc.postRequest('bank_deposit', values, function() {
                    success = true;
                }, {
                    complete: function() {
                        self.set('depositing', false);
                        if (success) {
                            ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.transferFiat.depositSuccess'));
                            self.closeModal();
                        }
                    }
                });
            });
        }
    });
});
