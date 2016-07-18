/**
 * Created by maxim on 02.12.15.
 */

define([], function() {
    return {
        Validity: {
            GOOD_TILL_CANCELLED: -1,
            HOURS: 1
        },
        Strategy: {
            LIMIT: 1,
            MARKET: 2,
            STOP: 3,
            PEG: 4
        },

        PriceVariant: {
            MARKET: 1,
            CUSTOM: 2
        },

        TradeOperationType: {
            BUY: 'buy',
            SELL: 'sell'
        }

    }
});
