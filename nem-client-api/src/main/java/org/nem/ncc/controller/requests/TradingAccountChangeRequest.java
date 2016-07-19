package org.nem.ncc.controller.requests;

import org.nem.core.model.*;
import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;
import org.nem.ncc.storable.entity.*;

public class TradingAccountChangeRequest extends TradingStorageNamePasswordPair
{
    private final Address tradingAccountAddress;
    private final TradingStorageName name;
    
    public Address getTradingAccountAddress() {
        return this.tradingAccountAddress;
    }
    
    public TradingAccountChangeRequest(final Deserializer deserializer) {
        super(deserializer);
        this.tradingAccountAddress = Address.readFrom(deserializer, "tradingAccountAddress");
        this.name = TradingStorageName.readFrom(deserializer, "tradingStorage");
    }
    
    @Override
    public TradingStorageName getName() {
        return this.name;
    }
}
