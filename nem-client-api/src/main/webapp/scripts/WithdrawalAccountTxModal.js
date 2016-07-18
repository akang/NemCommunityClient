"use strict";
define(['NccModal', 'Utils'], function (NccModal, Utils) {
    return NccModal.extend({
        data: {},
        computed: {
            valid: function() {
                return !this.get('insufficientBalance');
            },
            insufficientBalance: function() {
                return this.get('fee') > this.get('balance');
            },
            formattedFee: function() {
                return Utils.format.nem.formatNemAmount(this.get('fee'));
            }
        },
        onrender: function () {
            this.on({
                modalOpened: function() {
                    this.set('balance', ncc.get('tradingAccount.balance'));
                    var observation = ncc.observe('tradingAccount.balance', function(newVal) {
                        this.set('balance', newVal);
                    }, {
                        init: false
                    });
                    this.set('observation', observation);
                },
                modalClosed: function() {
                    var observation = this.get('observation');
                    if (observation) {
                        observation.cancel();
                    }
                }
            });
        },
        openKickstart: function() {
            this.closeModal();
            ncc.openKickstart();
        },
        submit: function() {
            this.closeModal();
            if(this.get('onSubmit')) {
                this.get('onSubmit')();
            }
        }
    });
});
