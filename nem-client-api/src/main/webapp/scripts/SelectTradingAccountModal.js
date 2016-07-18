"use strict";
/* globals ncc:true */
define(['NccModal', 'Utils'], function(NccModal, Utils) {
    return NccModal.extend({
        computed: {
            validated: function () {
                return this.get('tradingAccount');
            }
        },
        resetDefaultData: function () {
            var allAccounts = ncc.get('allAccounts');
            var tradingAccount = allAccounts.find(function(account) {
                return account.address === ncc.get('trading.info.tradingAccount.address');
            });
            this.set('tradingAccount', tradingAccount);
            this.set('submitting', false);
            this.set('allAccounts', allAccounts);
        },
        submitSelect: function() {
            var success = false;
            var self = this;
            this.set('submitting', true);
            var requestFunc = function (url, values) {
                ncc.postRequest(url, values, function (data) {
                    success = true;
                }, {
                    complete: function () {
                        self.set('submitting', false)
                        if (success) {
                            self.closeModal();
                            ncc.refreshTradingStorage(null, true, self.get('callback'));
                            ncc.refreshUserDetails();
                        }
                    }
                });
            };

            var url;
            if (ncc.get('trading.info.tradingAccount.address')) {
                url = 'trading/storage/change_account';
                ncc.confirmWithPassword(function(values) {
                    values.tradingStorage = ncc.get('params.wallet');
                    values.tradingAccountAddress = this.get('tradingAccount').address;
                    requestFunc(url, values);
                }.bind(this));
            } else {
                url = 'trading/storage/account';
                var values = {};
                values.tradingStorage = ncc.get('params.wallet');
                values.tradingAccountAddress = this.get('tradingAccount').address;
                requestFunc(url, values);
            }


        },
        onrender: function() {
            this.on('modalOpened', function () {
                this.resetDefaultData();
            });
        }
    });
});
