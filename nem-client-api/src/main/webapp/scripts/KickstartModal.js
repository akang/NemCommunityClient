'use strict';
/* globals ncc:true */
define(['NccModal', 'Utils', 'ValidatedForm'], function(NccModal, Utils, ValidatedForm) {
    return NccModal.extend({
        computed: {
            total: function() {
                var rate = this.get('kickstartAccount.rateObj');
                var amount = this.get('amount');
                if (!rate || !amount) {
                    return;
                }
                var rateUNem = Utils.format.nem.getNemValue(rate);
                var amountUNem = Utils.format.nem.getNemValue(amount);
                return Utils.format.nem.uNemToNem(Utils.config.nemDivisibility * amountUNem / rateUNem);
            },
            formattedTotal: function() {
                var total = this.get('total');
                if (!total) {
                    return 0;
                }
                return Utils.format.nem.formatNem(total, {
                    dimUnimportantTrailing: true
                });
            },
            amount: function() {
                var amountStr = this.get('form').get('amount');
                if (!amountStr) {
                    return null;
                }
                return Utils.format.nem.stringToNem(this.get('form').get('amount'));
            },
            validated: function() {
                var form = this.get('form');
                if (!form || !form.submitValidate) return;
                return form.submitValidate()
                    && this.get('kickstartAccounts')
                    && this.get('senderAccount')
                    && this.get('recipientAccount');

            },
            instrumentKickstartAccounts: function() {
                var instrument = this.get('senderAccount.tradeInstrument');
                var kickstartAccounts = this.get('kickstartAccounts');
                if (!instrument || !kickstartAccounts) {
                    return null;
                }
                return kickstartAccounts.filter(function(account) {
                    return account.tradeInstrument.code === instrument.code;
                });
            }
        },
        onrender: function() {
            this.set('form', this.createForm());

            this.on({
                modalOpened: function() {
                    this.resetDefaultData();
                }
            });
        },
        resetDefaultData: function() {
            this.get('form').resetFields();
            this.set({
                transferring: false,
                loading: false,
                senderAccount: null,
                kickstartAccount: null,
                recipientAccounts: null
            });
            this.loadKickstartReceiveAccounts();
        },
        createForm: function() {
            return ValidatedForm.createForm({
                moduleSelector: '.kickstartModal',
                ractiveModule: this,
                fields: {
                    amount: ValidatedForm.fields.amount
                }
            });
        },
        transfer: function() {
            var form = this.get('form'),
                self = this;
            ncc.confirmWithPassword(function (values) {

                var requestData = $.extend({
                    senderAddress: self.get('senderAccount.address'),
                    recipientPublicKey: self.get('recipientAccount.publicKey'),
                    amount: form.get('amount'),
                    kickstartAccount: self.get('kickstartAccount'),
                    tradeInstrument: self.get('kickstartAccount.tradeInstrument')
                }, values);

                self.set('transferring', true);
                var success = false;
                ncc.postRequest('kickstart/transfer', requestData, function(response) {
                    success = true;
                }, {
                    complete: function() {
                        self.set('transferring', false);
                        if (success) {
                            ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.kickstart.transferSuccess'));
                            self.closeModal();
                        }
                    }
                });
            });
        },
        loadKickstartReceiveAccounts: function() {
            this.set('loading', true);
            ncc.getRequest('kickstart/receive_accounts', function(response) {
                this.set('kickstartAccounts',  $.map(response.data, Utils.processKickstartAccount));
                this.set('loading', false);
            }.bind(this));
        }
    });
});
