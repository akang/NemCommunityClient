"use strict";
/*globals ncc:true */
define(['NccModal', 'Utils'], function (NccModal, Utils) {
    return NccModal.extend({
        onrender: function () {
            this.on({
                editUserDetails: function () {
                    this.closeModal();
                    ncc.editUserDetails();
                },
                modalClosed: function () {
                },
                modalOpened: function () {
                    this.set('userDetails', ncc.get('userDetails'));
                },
                confirm: function() {
                    this.closeModal();
                    var onConfirm = this.get('onConfirm');
                    if (onConfirm) {
                        onConfirm();
                    }
                }
            });

            this.set('loading', false);
        }
    });
});
