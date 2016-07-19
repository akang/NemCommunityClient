package org.nem.ncc.controller.requests;

import org.nem.core.serialization.*;

public class TradeHistoryTransactionsRequest
{
    private final int tradePairCode;
    
    public TradeHistoryTransactionsRequest(final Deserializer deserializer) {
        this.tradePairCode = deserializer.readInt("tradePairCode");
    }
    
    public int getTradePairCode() {
        return this.tradePairCode;
    }
}
