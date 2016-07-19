package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class TradingOperationsRequest
{
    private final TradingStorageName tradingStorageName;
    private final TradingOperationType type;
    
    public TradingOperationsRequest(final Deserializer deserializer) {
        this.tradingStorageName = TradingStorageName.readFrom(deserializer, "tradingStorage");
        this.type = TradingOperationType.getByCode(deserializer.readInt("type"));
    }
    
    public TradingStorageName getTradingStorageName() {
        return this.tradingStorageName;
    }
    
    public TradingOperationType getType() {
        return this.type;
    }
}
