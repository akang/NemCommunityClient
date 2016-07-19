package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.*;
import org.nem.core.serialization.*;

public class TradingStorageName extends StorableEntityName<TradingStorageName>
{
    public TradingStorageName(final String name) {
        super(name, "tradingStorage", TradingStorageName.class);
    }
    
    public TradingStorageName(final Deserializer deserializer) {
        super(deserializer, "tradingStorage", TradingStorageName.class);
    }
    
    public static TradingStorageName readFrom(final Deserializer deserializer, final String label) {
        return new TradingStorageName(deserializer.readString(label));
    }
}
