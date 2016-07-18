'use strict';
define([], function() {

    function ValidatedField(init) {
        $.extend(this, init);
        // don't show error initially
        this.valid = true;
    }

    ValidatedField.prototype = {
        defaultValidate: function() {
            return this.regexp.test(this.value);
        },
        validate: function() {
            if (this.customValidate) {
                return this.customValidate(this.defaultValidate.bind(this));
            }
            return this.defaultValidate();
        }
    };

    function watchFields(ractiveModule, fields, moduleSelector, formKeypath) {
        $.each(fields, function(key, field) {
            var options = $.extend({}, field.options);
            options.onKeyPress = function() {
                var baseKeypath = formKeypath + '.fields.' + key;
                var valid = fields[key].validate();
                ractiveModule.set(baseKeypath + '.valid', valid);
            };
            $(moduleSelector + ' #' + field.name)
                .mask(field.mask, options);
        });
    }

    function validate(fields, predicate) {
        var field;

        for (field in fields) {
            if (fields.hasOwnProperty(field)) {
                if (!predicate(fields[field])) {
                    return false;
                }
            }
        }
        return true;
    }

    function getFieldKey(fields, name) {
        var key;
        for (key in fields) {
            if (fields.hasOwnProperty(key) && fields[key].name === name) {
                return key;
            }
        }
        throw "no such field: " + name;
    }

    function getFieldByName(fields, name) {
        return fields[getFieldKey(fields, name)];
    }

    function constructValidatedFields(fields, initValues) {

        function fromArrayIteree(key, field, validatedFields) {
            var validatedField = new ValidatedField(field);
            if (initValues && initValues[validatedField.value]) {
                validatedField.value = initValues[validatedField.name];
            }
            validatedFields.push(validatedField);
        }

        function fromObjectIteree(key, field, validatedFields) {
            var validatedField = new ValidatedField(field);
            validatedField.name = key;
            if (initValues && initValues[key]) {
                validatedField.value = initValues[key];
            }
            validatedFields[key] = validatedField;
        }

        var validatedFields, iteree;
        if (fields.constructor === Array) {
            validatedFields = [];
            iteree = fromArrayIteree;
        } else {
            validatedFields = {};
            iteree = fromObjectIteree;
        }

        $.each(fields, function(key, field) {
            iteree(key, field, validatedFields);
        });
        return validatedFields;
    }

    function createForm(init) {
        var formKeypath = 'form';

        var validatedFields = constructValidatedFields(init.fields, init.values),
            form = {
                fields: validatedFields,
                resetFields: function() {
                    $.each(validatedFields, function(key, field) {
                        init.ractiveModule.set(formKeypath + '.fields.' + key + '.value', '');
                        init.ractiveModule.set(formKeypath + '.fields.' + key + '.valid', true);
                    });
                },
                submitValidate: function() {
                    return validate(validatedFields, function(field) {
                        return !(field.required || field.value) || field.validate();
                    });
                },
                getValues: function() {
                    var values = {};
                    $.each(validatedFields, function(key, field) {
                        values[field.name] = field.value;
                    });
                    return values;
                },
                get: function(name) {
                    return getFieldByName(validatedFields, name).value;
                },
                set: function(name, value) {
                    var key = getFieldKey(validatedFields, name);
                    init.ractiveModule.set(formKeypath + '.fields.' + key + '.value', value);
                    return this;
                },
                observe: function(name, callback) {
                    var keypath = name ?
                        formKeypath + '.fields.' + getFieldKey(validatedFields, name) + '.value' :
                        formKeypath + '.fields';
                    init.ractiveModule.observe(keypath, callback);
                }
            };
        init.ractiveModule.set(formKeypath, form);
        watchFields(init.ractiveModule, validatedFields, init.moduleSelector, formKeypath);
        return form;
    }

    var fields = {
        email: {
            name: 'email',
            type: 'text',
            mask: 'e',
            options: {
                translation: {
                    e: {
                        pattern: /[a-zA-Z0-9@.]/,
                        recursive: true
                    }
                }
            },
            regexp: /^[a-zA-Z0-9\._%\+\-]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,6}$/
        },
        amount: {
            type: 'text',
            mask: 'a',
            required: true,
            regexp: /^[0-9]+(\.[0-9]{1,6})?$/,
            options: {
                translation: {
                    a: {
                        pattern: /[0-9.]/,
                        recursive: true
                    }
                }
            }
        },
        address: {
            type: 'text',
            mask: '@#####-#',
            required: true,
            regexp: /^([0-9a-zA-Z]{6}\-)+[0-9a-zA-Z]{1,6}$/,
            options: {
                translation: {
                    '#': {
                        pattern: /[0-9a-zA-Z]/,
                        recursive: true
                    },
                    '@': {
                        pattern: /[0-9a-zA-Z]/
                    }
                }
            }
        },
        text: {
            type: 'text',
            mask: 'w',
            options: {
                translation: {
                    w: {
                        pattern: /[a-zA-Z]/,
                        recursive: true
                    }
                }
            },
            readonly: 'true',
            regexp: /^[a-zA-Z]+$/,
            required: true
        },
        date: {
            type: 'text',
            mask: '30.10.2000',
            options: {
                placeholder: 'dd.mm.yyyy',
                translation: {
                    '0': {
                        pattern: /[0-9]/
                    },
                    '3': {
                        pattern: /[0-3]/
                    },
                    '1': {
                        pattern: /[01]/
                    },
                    '2': {
                        pattern: /[0-2]/
                    }
                }
            },
            readonly: 'true',
            regexp: /^[0-9]{2}\.[0-9]{2}\.[0-9]{4}$/,
            required: true
        },
        numbers: {
            type: 'text',
            mask: '0',
            options: {
                translation: {
                    0: {
                        pattern: /[0-9]/,
                        recursive: true
                    }
                }
            },
            regexp: /^[0-9]+$/,
            required: true
        },
        phone: {
            type: 'text',
            mask: '+00 (000) 000 0000',
            options: {
                translation: {
                    '0': {
                        pattern: /[0-9]/
                    }
                },
                placeholder: '+__ (___) __ ___'
            },
            regexp: /^\+[0-9]{2}\s\([0-9]{3}\)\s[0-9]{3}\s[0-9]{4}$/,
            required: true
        },
        floats: {
            type: 'text',
            mask: '0fdffffff',
            options: {
                translation: {
                    'f': {
                        pattern: /[0-9]/,
                        optional: true
                    },
                    'd': {
                        pattern: /\./
                    },
                    '0': {
                        pattern: /[0-9]/
                    }
                }
            },
            placeholder: '_.______',
            regexp: /^[0-9]{1,2}(\.[0-9]+)?$/,
            required: true
        },
        miscellaneous: {
            type: 'text',
            mask: 'm',
            options: {
                translation: {
                    'm': {
                        pattern: /^[0-9a-zA-Z .\/-]$/,
                        recursive: true
                    }
                }
            },
            regexp: /^[0-9a-zA-Z .\/-]+$/,
            required: true
        },
        everything: {
            type: 'text',
            mask: 'e',
            options: {
                translation: {
                    'e': {
                        pattern: /^.$/,
                        recursive: true
                    }
                }
            },
            regexp: /^.+$/,
            required: true
        },
        textAndNumbers: {
            type: 'text',
            mask: 't',
            options: {
                translation: {
                    t: {
                        pattern: /[0-9a-zA-Z]/,
                        recursive: true
                    }
                }
            },
            regexp: /^[0-9a-zA-Z]+$/
        }
    };

    return {
        fields: fields,
        createForm: createForm
    };
});
