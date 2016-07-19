package org.nem.ncc.model;

import java.math.*;
import org.nem.core.serialization.*;

public class MarketDepthQuote implements SerializableEntity
{
    private final BigDecimal amount;
    private final BigDecimal price;
    
    public MarketDepthQuote(final BigDecimal amount, final BigDecimal price) {
        this.amount = amount;
        this.price = price;
    }
    
    public MarketDepthQuote(final com.sharedobjects.client.MarketDepthQuote quote) {
        this(quote.getAmount(), quote.getPrice());
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeString("amount", this.amount.toString());
        serializer.writeString("price", this.price.toString());
    }
    
    public BigDecimal getAmount() {
        return this.amount;
    }
    
    public BigDecimal getPrice() {
        return this.price;
    }
}
