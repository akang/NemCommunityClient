"use strict";
/* globals ncc:true */
define(['NccModal', 'Utils', 'ValidatedForm', 'TradeInfoListener', './OrderEnums'], function(NccModal, Utils, ValidatedForm, TradeInfoListener, OrderEnums) {
    return NccModal.extend({
        computed: {
            totalWithoutFee: function() {
                var amountObj = this.get('amount'),
                    priceObj = this.get('price');

                if(!amountObj || !priceObj) {
                    return 0;
                }

                var format = Utils.format.nem;
                var amount = format.getNemValue(amountObj),
                    price = format.getNemValue(priceObj);

                var uNemTotalAmount = (price * amount / Utils.config.nemDivisibility);
                return format.uNemToNem(uNemTotalAmount);
            },
            totalWithFee: function() {
                var format = Utils.format.nem;
                var totalWithoutFeeObj = this.get('totalWithoutFee'),
                    feeObj = this.get('fee');

                if(!totalWithoutFeeObj || !feeObj) {
                    return 0;
                }

                if (this.get('type') === OrderEnums.TradeOperationType.BUY) {
                    return totalWithoutFeeObj;
                }

                var uNemTotalWithoutFee = format.getNemValue(totalWithoutFeeObj),
                    uNemFee = format.getNemValue(feeObj);

                return format.uNemToNem(uNemTotalWithoutFee - uNemFee);
            },
            total: function() {
                var strategy = this.get('strategy');
                if ((strategy === OrderEnums.Strategy.MARKET || strategy === OrderEnums.Strategy.STOP)
                    && this.get('type') === OrderEnums.TradeOperationType.BUY) {
                    return this.get('escrowAccount.balanceObj');
                }
                return this.get('totalWithFee');
            },
            formattedTotal: function() {
                return Utils.format.nem.formatNem(this.get('total'));
            },
            fee: function() {
                var strategy = this.get('strategy');
                if (strategy === OrderEnums.Strategy.MARKET || strategy === OrderEnums.Strategy.STOP) {
                    return 0;
                }

                var format = Utils.format.nem;
                var commissionObj = this.get('tradePair.commissionObj'),
                    totalWithoutFeeObj = this.get('totalWithoutFee'),
                    amountObj = this.get('amount');

                if (!commissionObj || !totalWithoutFeeObj || !amountObj) {
                    return 0;
                }

                var commission = format.getNemValue(commissionObj);
                var totalWithoutFee = format.getNemValue(totalWithoutFeeObj);
                var amount = format.getNemValue(amountObj);

                if (this.get('type') === OrderEnums.TradeOperationType.BUY) {
                    var uNemFee = amount * (commission / 100) / Utils.config.nemDivisibility;
                } else {
                    var uNemFee = totalWithoutFee * (commission / 100) / Utils.config.nemDivisibility;
                }
                return format.uNemToNem(uNemFee);
            },
            formattedFee: function() {
                return Utils.format.nem.formatNem(this.get('fee'));
            },
            amount: function() {
                return Utils.format.nem.stringToNem(this.get('form').get('amount'));
            },
            price: function() {
                var form = this.get('form');
                return this.get('priceVariant') === OrderEnums.PriceVariant.MARKET ?
                    this.get('marketPrice') : Utils.format.nem.stringToNem(form.get('price'));
            },
            blankMarketPrice: function() {
                return !this.get('extendedPair') || (this.get('type') === OrderEnums.TradeOperationType.SELL ?
                    this.get('extendedPair.blankAsk') : this.get('extendedPair.blankBid'));
            },
            marketPrice: function() {
                return this.get('type') === OrderEnums.TradeOperationType.SELL ?
                    this.get('extendedPair.askObj') :
                    this.get('extendedPair.bidObj');
            },
            formattedMarketPrice: {
                // disabled input
                set: function() {},
                get: function() {
                    return this.get('type') === OrderEnums.TradeOperationType.SELL ?
                        this.get('extendedPair.formattedAsk') :
                        this.get('extendedPair.formattedBid');
                }
            },
            validated: function() {
                var form = this.get('form');
                if (!form || !form.submitValidate) return;
                return form.submitValidate();
            },
            formattedCommission: function() {
                var commissionObj = this.get('tradePair.commission');
                if (!commissionObj) {
                    return 0;
                }
                return Utils.format.nem.formatNem(commissionObj);
            },
            escrowAccount: function() {
                var tradePair = this.get('tradePair');
                if (!tradePair) {
                    return;
                }
                return this.get('type') === OrderEnums.TradeOperationType.SELL ?
                    Utils.findEscrowByInstrument(tradePair.baseInstrument) :
                    Utils.findEscrowByInstrument(tradePair.quoteInstrument);
            }
        },
        onrender: function() {
            this.resetDefaultData();
            var self = this;

            this.on({
                modalOpened: function() {
                    this.set('loading', true);
                    this.resetDefaultData();
                    console.log(this.get('blankMarketPrice'));
                },
                modalClosed: function() {
                    this.unsubscribe();
                },
                dataLoaded: function() {
                    this.set('loading', false);
                    this.subscribe();
                },
                placeOrder: function() {
                    var price = this.get('price');
                    var order = {
                        tradePair: this.get('tradePair'),
                        type: this.get('type'),
                        cancelInHours: this.get('validity'),
                        price: price ? (Utils.format.nem.getNemValue(price) / Utils.config.nemDivisibility) + '' : 0,
                        amount: (Utils.format.nem.getNemValue(this.get('amount')) / Utils.config.nemDivisibility) + '',
                        strategy: this.get('strategy')
                    };

                    ncc.confirmWithPassword(function(values) {
                        self.set('placing', true);
                        values.order = order;
                        var success = false;

                        ncc.postRequest('trading/orders/place', values, function(response) {
                            success = true;
                        }, {
                            complete: function() {
                                self.set('placing', false);
                                if (success) {
                                    ncc.showMessage(ncc.get('texts.common.success'),
                                        ncc.get('texts.modals.placeOrder.placeSuccess'));
                                    ncc.fire('orderPlaced');
                                    self.closeModal();
                                }
                            }
                        });
                    });
                }
            });
        },
        createForm: function() {
            var self = this;
            return ValidatedForm.createForm({
                moduleSelector: '.placeOrderModal',
                ractiveModule: self,
                fields: {
                    validity: $.extend({}, ValidatedForm.fields.amount, {
                        customValidate: function(defaultValidate) {
                            return (self.get('validity') === OrderEnums.Validity.GOOD_TILL_CANCELLED) || defaultValidate();
                        }
                    }),
                    amount: ValidatedForm.fields.amount,
                    price: $.extend({}, ValidatedForm.fields.amount, {
                        customValidate: function(defaultValidate) {
                            if (self.get('strategy') === OrderEnums.Strategy.MARKET) {
                                return true;
                            }
                            if (self.get('priceVariant') === OrderEnums.PriceVariant.MARKET) {
                                return !!self.get('marketPrice');
                            }
                            return defaultValidate();
                        }
                    })
                }
            });
        },
        resetDefaultData: function() {
            var form = this.createForm();
            this.set({
                type: OrderEnums.TradeOperationType.BUY,
                types: OrderEnums.TradeOperationType,
                validities: OrderEnums.Validity,
                validity: OrderEnums.Validity.GOOD_TILL_CANCELLED,
                strategies: OrderEnums.Strategy,
                strategy: OrderEnums.Strategy.LIMIT,
                priceVariants: OrderEnums.PriceVariant,
                priceVariant: OrderEnums.PriceVariant.MARKET,
                placing: false,
            });
            form.resetFields();
        },
        subscribe: function() {
            var self = this;
            TradeInfoListener.subscribe('/topic/extendedPair', function(extendedPair) {
                var tradePair = self.get('tradePair');
                if (extendedPair.code === tradePair.code) {
                    var pair = Utils.processExtendedPair(extendedPair);
                    self.set('extendedPair', pair);
                    if (self.get('blankMarketPrice')) {
                        self.setPriceVariant(OrderEnums.PriceVariant.CUSTOM);
                    }
                }
            }, function(subscription) {
                this.set('subscription', subscription);
            }.bind(this));
        },
        unsubscribe: function() {
            if (!this.get('subscription')) {
                return;
            }
            this.get('subscription').unsubscribe();
        },
        setPriceVariant: function(priceVariant) {
            if(priceVariant === OrderEnums.PriceVariant.MARKET && this.get('blankMarketPrice')) {
                return;
            }
            this.set('priceVariant', priceVariant);
        },
        setStrategy: function(strategy) {
            if(strategy === OrderEnums.Strategy.MARKET) {
                this.set('validity', OrderEnums.Validity.GOOD_TILL_CANCELLED);
            } else if(strategy === OrderEnums.Strategy.PEG) {
                if (this.get('blankMarketPrice')) {
                    return;
                }
                var format = Utils.format.nem;
                var uNemBid = format.getNemValue(this.get('extendedPair.bidObj'));
                var uNemAsk = format.getNemValue(this.get('extendedPair.askObj'));
                var average = (uNemAsk + uNemBid) / 2
                this.get('form').set('price', average);
            }

            this.set('strategy', strategy);
        },
        setGTCValidity: function() {
            this.set('validity', OrderEnums.Validity.GOOD_TILL_CANCELLED);
            this.get('form').set('validity', '');
        },
        setHoursValidity: function() {
            if (this.get('strategy') === OrderEnums.Strategy.MARKET) {
                return;
            }
            this.set('validity', OrderEnums.Validity.HOURS);
            this.get('form').set('validity', '');
        }
    });
});
