package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import java.util.*;
import org.nem.core.serialization.*;

public class RemoveOrderRequest extends TradingStorageNamePasswordPair
{
    private final UUID orderId;
    
    public RemoveOrderRequest(final Deserializer deserializer) {
        super(deserializer);
        this.orderId = UUID.fromString(deserializer.readString("orderId"));
    }
    
    public UUID getOrderId() {
        return this.orderId;
    }
}
