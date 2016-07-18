"use strict";
/* globals ncc:true */
define(['NccModal', 'Utils', 'ValidatedForm'], function(NccModal, Utils, ValidatedForm) {
    return NccModal.extend({
        computed: {
            valid: function() {
                return this.get('withdrawalAccount');
            }
        },
        onrender: function() {
            this.set({
                tradeInstrument: null,
                tradeInstruments: null
            });
            this.on('modalOpened', function() {
                this.set('step', 1);
                this.set('tradeInstrument', null);
                this.set('finishing', false);
                this.set('form', null);
                this.set('xemAccounts', ncc.get('allAccounts'));
                this.set('withdrawalAccount', null);
                this.set('loading', false);
                this.set('privateLabels', ncc.get('privateLabels'));
            });
        },
        setXemWithdrawalAccount: function() {
            var onSubmit = ncc.confirmWithPassword.bind(ncc, function(values) {
                this.set('finishing', true);
                values.accountPublicKey = this.get('withdrawalAccount').publicKey;
                var success = false;

                ncc.postRequest('trading/accounts/withdrawal/xem/set', values, function(response) {
                    success = true;
                }, {
                    complete: function() {
                        this.set('finishing', false);
                        if(success) {
                            ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.setXemWithdrawalAccount.createSuccess'));
                            this.closeModal();
                            ncc.refreshTradingInfo();
                            ncc.fire('xemWithdrawalAccountSet');
                        }
                    }.bind(this)
                });

            }.bind(this));
            this.openTxModal(onSubmit);
        },
        openTxModal: function(callback) {
            var modal = ncc.getModal('withdrawalAccountTx');
            modal.set('loading', true);
            modal.open();
            modal.set('onSubmit', callback);

            var requestData = {
                accountPublicKey: this.get('withdrawalAccount').publicKey
            };

            ncc.postRequest('trading/accounts/withdrawal/xem/set/price', requestData, function(response) {
                modal.set('fee', response);
                modal.set('loading', false);
            });
        }
    });
});
