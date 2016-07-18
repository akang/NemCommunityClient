"use strict";
/* globals ncc:true */
define(['NccModal', 'Utils', 'ValidatedForm'], function(NccModal, Utils, ValidatedForm) {
    return NccModal.extend({
        computed: {
            valid: function() {
                return this.get('withdrawalAddress') && this.get('tradeInstrument');
            }
        },
        onrender: function() {
            this.on('modalOpened', function() {
                this.set('step', 1);
                this.set('finishing', false);
                this.set('withdrawalAddress', null);
                this.set('loading', false);
            });
        },
        submit: function() {
            this.showTxModal(this.setFiatWithdrawalAccount.bind(this));
        },
        setFiatWithdrawalAccount: function() {
            var self = this;
            ncc.confirmWithPassword(function(values) {
                values.accountNumber = self.get('withdrawalAddress');
                values.tradeInstrument = self.get('tradeInstrument');
                var success = false;
                self.set('finishing', true);
                ncc.postRequest('trading/accounts/withdrawal/fiat/set', values, function(response) {
                    success = true;
                }, {
                    complete: function() {
                        self.set('finishing', false);
                        if (success) {
                            ncc.showMessage(ncc.get('texts.common.success'),
                                    ncc.get('texts.modals.setFiatWithdrawalAccount.createSuccess'));
                            ncc.refreshTradingInfo();
                            self.closeModal();
                            ncc.fire('fiatWithdrawalAccountSet');
                        }
                    }
                });
            });
        },
        showTxModal: function(callback) {
            var modal = ncc.getModal('withdrawalAccountTx');
            modal.set('loading', true);
            modal.open();
            modal.set('onSubmit', callback);

            var requestData = {
                accountNumber: this.get('withdrawalAddress'),
                tradeInstrument: this.get('tradeInstrument')
            };

            ncc.postRequest('trading/accounts/withdrawal/fiat/set/price', requestData, function(response) {
                modal.set('fee', response);
                modal.set('loading', false);
            });
        },
    });
});
