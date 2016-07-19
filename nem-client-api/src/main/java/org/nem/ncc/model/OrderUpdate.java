package org.nem.ncc.model;

import com.sharedobjects.*;
import java.math.*;
import org.nem.core.serialization.*;

public class OrderUpdate implements SerializableEntity
{
    private final Order order;
    private final ResponseMessage message;
    private final BigDecimal reservedAmount;
    
    public OrderUpdate(final Order order, final ResponseMessage message, final BigDecimal reservedAmount) {
        this.order = order;
        this.message = message;
        this.reservedAmount = reservedAmount;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeInt("messageCode", (int)this.message.getCode());
        serializer.writeString("reservedAmount", this.reservedAmount.toString());
        serializer.writeObject("order", (SerializableEntity)this.order);
    }
    
    public Order getOrder() {
        return this.order;
    }
    
    public ResponseMessage getMessage() {
        return this.message;
    }
    
    public BigDecimal getReservedAmount() {
        return this.reservedAmount;
    }
}
