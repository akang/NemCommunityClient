"use strict";
/* globals ncc:true */
define(['NccModal', 'Utils', 'ValidatedForm'], function (NccModal, Utils, ValidatedForm) {

    return NccModal.extend({
        computed: {
            loaded: function () {
                return this.get('type') === 'edit' ?
                this.get('userDetailsLoaded') && this.get('countriesLoaded') :
                    this.get('countriesLoaded');
            },
            step: function () {
                var steps = this.get('steps');
                if (!steps || !this.get('stepIds')) {
                    return;
                }

                var step = $.map(Object.keys(steps), function (key) {
                    return steps[key];
                }).find(function (step) {
                    return step.id === this.get('stepIds')[(this.get('stepIndex'))];
                }.bind(this));
                return step;
            },
            validated: function () {
                switch (this.get('step.id')) {
                    case this.steps.DETAILS_FORM.id:
                        var form = this.get('form');
                        if (!form) {
                            return false;
                        }
                        if (this.get('type') === 'setup') {
                            return form.submitValidate() && this.get('country');
                        } else {
                            var mutated = this.get('updateMutated');
                            return form.submitValidate() && mutated && this.get('country');
                        }
                    case this.steps.IMMUTABLE_DETAILS.id:
                        return this.get('chkTermsOfUsage');
                    case this.steps.DETAILS_FEE.id:
                        return !this.get('insufficientBalance');
                    default:
                        return true;
                }
            }
        },
        data: {
            isImmutable: function (fieldName) {
                return !!(this.get('type') === 'edit' && this.get('immutableFields').indexOf(fieldName) !== -1);
            }
        },
        onrender: function () {
            this.set('form', this.createForm());
            this.on({
                modalOpened: function () {
                    this.resetDefaultData();
                }
            });

            this.observe('form country', function (newVal) {
                this.set('updateMutated', true);
            }, {
                init: false
            });

            this.set({
                immutableFields: [
                    'firstName', 'lastName', 'dateOfBirth'
                ],
                steps: this.steps
            });

        },
        openKickstart: function() {
            this.closeModal();
            ncc.openKickstart();
        },
        resetDefaultData: function () {
            this.get('form').resetFields();
            this.set('steps', this.steps);
            this.set('stepIndex', 0);

            this.set('updating', false);
            this.set('submitting', false);
            this.set('processing', false);

            this.set('country', null);
            this.set('fieldsToCheck', null);
            this.set('chkTermsOfUsage', false);

            this.set('fee', null);
            this.set('formattedFee', null);

            if (this.get('type') === 'setup') {
                this.set('stepIds', [
                    this.steps.DETAILS_FORM.id,
                    this.steps.DETAILS_FEE.id,
                    this.steps.IMMUTABLE_DETAILS.id,
                    this.steps.DETAILS_CONFIRMATION.id
                ]);
            } else {
                this.set('stepIds', [
                    this.steps.DETAILS_FORM.id,
                    this.steps.DETAILS_FEE.id,
                    this.steps.DETAILS_CONFIRMATION.id
                ]);
            }

            this.get('step').onrender.call(this);
            this.set('updateMutated', false);
        },
        createForm: function () {
            return ValidatedForm.createForm({
                moduleSelector: '.setUserDetails',
                ractiveModule: this,
                fields: [
                    $.extend({}, ValidatedForm.fields.text, {
                        name: 'firstName'
                    }),
                    $.extend({}, ValidatedForm.fields.text, {
                        name: 'lastName'
                    }),
                    $.extend({}, ValidatedForm.fields.date, {
                        name: 'dateOfBirth'
                    }),
                    $.extend({}, ValidatedForm.fields.textAndNumbers, {
                        name: 'passport'
                    }), {
                        name: 'address',
                        type: 'text',
                        mask: 'a',
                        options: {
                            translation: {
                                a: {
                                    pattern: /[a-zA-Z0-9 \-\.,]/,
                                    recursive: true
                                }
                            }
                        },
                        regexp: /^[a-zA-Z0-9 \-,\.]+$/,
                        required: true
                    },
                    $.extend({}, ValidatedForm.fields.phone, {
                        name: 'contactNumber'
                    }),
                    $.extend({}, ValidatedForm.fields.email, {
                        name: 'email'
                    })
                ]
            });
        },
        parseDate: function (raw) {
            var components = raw.split('.'),
                day = components[0],
                month = components[1],
                year = components[2];
            return new Date(year, month, day).getTime();
        },
        gatherData: function () {
            var form = this.get('form'),
                values = form.getValues();
            values.dateOfBirth = this.parseDate(values.dateOfBirth);
            values.id = ncc.get('trading.info.user');
            values.country = this.get('country');
            values.publicKey = ncc.get('activeAccount.publicKey');
            return values;
        },
        submitUserDetails: function () {
            var self = this;
            var userDetails = this.gatherData();
            this.set('submitting', true);
            var success = false;
            ncc.confirmWithPassword(function (values) {
                values.userDetails = userDetails;
                ncc.postRequest('trading/user_details/setup', values, function (response) {
                    success = true;
                }, {
                    complete: function () {
                        self.set('submitting', false);

                        if (success) {
                            ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.setUserDetails.setup.success'));
                            self.closeModal();
                            ncc.fire('userDetailsSubmitted');
                            ncc.refreshTradingInfo();
                        }
                    }
                });
            });
        },
        updateUserDetails: function () {
            var self = this;
            var userDetails = this.gatherData();
            this.set('updating', true);
            var success = false;
            ncc.confirmWithPassword(function (values) {
                values.userDetails = userDetails;
                ncc.postRequest('trading/user_details/update', values, function (response) {
                    success = true;
                }, {
                    complete: function () {
                        self.set('updating', false);

                        if (success) {
                            ncc.showMessage(ncc.get('texts.common.success'), ncc.get('texts.modals.setUserDetails.edit.success'));
                            self.closeModal();
                            ncc.refreshUserDetails();
                        }
                    }
                });
            });
        },
        loadCountries: function () {
            var self = this;
            ncc.getRequest('trading/user_details/countries', function (response) {
                self.set('countries', response.data);
                self.set('countriesLoaded', true);
            });
        },
        submitStep: function () {
            var add = function() {
                this.add('stepIndex').then(function () {
                    this.get('step').onrender.call(this);
                }.bind(this));
            }.bind(this);

            if (this.get('step.onsubmit')) {
                this.get('step.onsubmit').call(this, add);
            } else add();
        },
        formatDate: function (date) {
            return Utils.format.date.format(date, 'dd.mm.yyyy');
        },
        fillUserDetails: function () {
            var userDetails = this.get('userDetails');
            if (!userDetails) {
                return;
            }
            var form = this.get('form'),
                props = [
                    'firstName',
                    'lastName',
                    'dateOfBirth',
                    'passport',
                    'address',
                    'contactNumber',
                    'email'
                ],
                self = this;

            this.set('country', this.get('userDetails.country'));
            $.each(props, function (index, prop) {
                var value = userDetails[prop];
                if (prop === 'dateOfBirth') {
                    form.set(prop, self.formatDate(value));
                }
                else {
                    form.set(prop, value);
                }
            });

        },
        checkTxFee: function (callback) {
            var url = this.get('type') === 'edit' ?
                'trading/user_details/update/price' :
                'trading/user_details/setup/price';

            var userDetails = this.gatherData();
            this.set('processing', true);
            ncc.postRequest(url, userDetails, function (uNemAmount) {

                var insufficientBalance = uNemAmount > ncc.get('tradingAccount.balance');
                this.set('insufficientBalance', insufficientBalance);

                var fee = Utils.format.nem.uNemToNem(uNemAmount)
                this.set('fee', fee);
                this.set('formattedFee', Utils.format.nem.formatNem(fee));
                this.set('processing', false);
                if (callback) {
                    callback();
                }
            }.bind(this));
        },
        steps: {
            DETAILS_FORM: {
                id: 1,
                onrender: function () {
                    this.loadCountries();
                    this.fillUserDetails();
                },
                onsubmit: function(callback) {
                    this.checkTxFee(callback);
                }
            },
            DETAILS_FEE: {
                id: 2,
                onrender: function () {
                }
            },
            IMMUTABLE_DETAILS: {
                id: 3,
                onrender: function () {
                    var data = this.gatherData();
                    data.dateOfBirth = this.formatDate(data.dateOfBirth);
                    this.set('fieldsToCheck', data);
                },
            },
            DETAILS_CONFIRMATION: {
                id: 4,
                onrender: function () {
                }
            }
        }
    });
});
