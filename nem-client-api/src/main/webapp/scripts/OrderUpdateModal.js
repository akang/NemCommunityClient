"use strict";
define(['NccModal', 'OrderEnums', 'Utils'], function(NccModal, OrderEnums, Utils) {
    return NccModal.extend({
        computed: {},
        onrender: function () {
            this.on({
                modalOpened: function() {
                    this.resetDefaultData();
                }
            });
        },
        resetDefaultData: function() {
            this.set('types', OrderEnums.TradeOperationType);
            this.set('validities', OrderEnums.Validity);
            this.set('order', this.get('orderUpdate.order'));
        }
    });
});

