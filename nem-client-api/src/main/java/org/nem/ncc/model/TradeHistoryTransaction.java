package org.nem.ncc.model;

import java.math.*;
import java.util.*;
import org.nem.core.serialization.*;

public class TradeHistoryTransaction implements SerializableEntity
{
    private final BigDecimal amount;
    private final BigDecimal price;
    private final Date time;
    
    public TradeHistoryTransaction(final BigDecimal amount, final BigDecimal price, final Date time) {
        this.amount = amount;
        this.price = price;
        this.time = time;
    }
    
    public TradeHistoryTransaction(final com.sharedobjects.client.TradeHistoryTransaction tradeHistroy) {
        this(tradeHistroy.getAmount(), tradeHistroy.getPrice(), tradeHistroy.getTime());
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeString("amount", this.amount.toString());
        serializer.writeString("price", this.price.toString());
        serializer.writeLong("time", this.time.getTime());
    }
    
    public BigDecimal getAmount() {
        return this.amount;
    }
    
    public BigDecimal getPrice() {
        return this.price;
    }
    
    public Date getTime() {
        return this.time;
    }
}
