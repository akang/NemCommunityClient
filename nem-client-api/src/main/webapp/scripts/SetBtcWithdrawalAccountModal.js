"use strict";
define(['NccModal', 'Utils', 'ValidatedForm'], function(NccModal, Utils, ValidatedForm) {
    return NccModal.extend({
        computed: {
            valid: function() {
                return this.get('withdrawalAddress');
            }
        },
        onrender: function() {
            this.on('modalOpened', function () {
                this.set('withdrawalAddress', null);
            });
        },
        showTxModal: function(callback) {
            var modal = ncc.getModal('withdrawalAccountTx');
            modal.set('loading', true);
            modal.open();
            modal.set('onSubmit', callback);

            var requestData = {
                encodedWithdrawalAddress: this.get('withdrawalAddress')
            };

            ncc.postRequest('trading/accounts/withdrawal/btc/set/price', requestData, function(response) {
                modal.set('fee', response);
                modal.set('loading', false);
            });
        },
        setBtcWithdrawalAccount: function () {
            this.showTxModal(this.submitToServer.bind(this));
        },
        submitToServer: function () {
            ncc.confirmWithPassword(function (values) {
                values.encodedWithdrawalAddress = this.get('withdrawalAddress');
                this.set('settingUp', true);
                var success = false;

                ncc.postRequest('trading/accounts/withdrawal/btc/set',
                    values,
                    function () {
                        success = true;
                    }, {
                        altFailCb: function (faultId) {
                            if (601 === faultId) {
                                ncc.refreshAppStatus();
                                this.closeModal();
                            }
                        },
                        complete: function () {
                            // self.unlockAction();
                            this.set('settingUp', false);
                            if (success) {
                                ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.setBtcWithdrawalAccount.setupSuccess'));
                                ncc.refreshTradingInfo();
                                this.closeModal();
                                ncc.fire('btcWithdrawalAccountSet');
                            }
                        }.bind(this)
                    }
                );
            }.bind(this));
        }
    });
});
