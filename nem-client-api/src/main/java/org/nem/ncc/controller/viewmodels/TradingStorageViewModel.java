package org.nem.ncc.controller.viewmodels;

import java.util.*;
import org.nem.core.model.*;
import org.nem.core.serialization.*;

public class TradingStorageViewModel implements SerializableEntity
{
    private final UUID userId;
    private final Address tradingAccountAddress;
    
    public TradingStorageViewModel(final UUID userId, final Address tradingAccountAddress) {
        this.userId = userId;
        this.tradingAccountAddress = tradingAccountAddress;
    }
    
    public void serialize(final Serializer serializer) {
        if (this.tradingAccountAddress != null) {
            Address.writeTo(serializer, "tradingAccountAddress", this.tradingAccountAddress);
        }
        serializer.writeString("user", this.userId.toString());
    }
}
