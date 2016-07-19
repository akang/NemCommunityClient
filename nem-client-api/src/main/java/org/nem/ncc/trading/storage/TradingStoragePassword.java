package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.*;
import org.nem.core.serialization.*;

public class TradingStoragePassword extends StorableEntityPassword<TradingStoragePassword>
{
    public TradingStoragePassword(final String password) {
        super(password, TradingStoragePassword.class);
    }
    
    public TradingStoragePassword(final Deserializer deserializer) {
        super(deserializer, "password", TradingStoragePassword.class);
    }
    
    public static TradingStoragePassword readFrom(final Deserializer deserializer, final String label) {
        return new TradingStoragePassword(deserializer.readString(label));
    }
    
    public static TradingStoragePassword readFromOptional(final Deserializer deserializer, final String label) {
        final String password = deserializer.readOptionalString(label);
        return (null == password) ? null : new TradingStoragePassword(password);
    }
}
