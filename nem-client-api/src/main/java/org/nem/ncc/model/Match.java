package org.nem.ncc.model;

import java.math.*;
import org.nem.core.serialization.*;

public class Match implements SerializableEntity
{
    private final Order order;
    private final BigDecimal volume;
    private final BigDecimal price;
    
    public Match(final Order order, final BigDecimal volume, final BigDecimal price) {
        this.order = order;
        this.volume = volume;
        this.price = price;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeObject("order", (SerializableEntity)this.order);
        serializer.writeString("volume", this.volume.toString());
        serializer.writeString("price", this.price.toString());
    }
    
    public Order getOrder() {
        return this.order;
    }
    
    public BigDecimal getVolume() {
        return this.volume;
    }
    
    public BigDecimal getPrice() {
        return this.price;
    }
}
