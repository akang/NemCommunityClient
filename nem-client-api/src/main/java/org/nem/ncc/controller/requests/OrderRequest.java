package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class OrderRequest extends TradingStorageNamePasswordPair
{
    private final Order order;
    
    public OrderRequest(final Deserializer deserializer) {
        super(deserializer);
        this.order = (Order)deserializer.readObject("order", Order::new);
    }
    
    public Order getOrder() {
        return this.order;
    }
}
