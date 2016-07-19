package org.nem.ncc.controller.requests;

import org.nem.core.model.*;
import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;

public class TradingAccountRequest
{
    private final Address tradingAccountAddress;
    private final TradingStorageName name;
    
    public Address getTradingAccountAddress() {
        return this.tradingAccountAddress;
    }
    
    public TradingAccountRequest(final Deserializer deserializer) {
        this.tradingAccountAddress = Address.readFrom(deserializer, "tradingAccountAddress");
        this.name = TradingStorageName.readFrom(deserializer, "tradingStorage");
    }
    
    public TradingStorageName getName() {
        return this.name;
    }
}
