package org.nem.ncc.model;

import org.apache.log4j.*;
import com.sharedobjects.client.*;
import java.math.*;
import java.util.*;
import com.sharedobjects.trading.*;
import org.joda.time.*;
import org.nem.core.serialization.*;

public class Order implements SerializableEntity
{
    private static final Logger LOGGER;
    public static final int GOOD_TILL_CANCEL_FLAG = -1;
    private UUID orderId;
    private final TradePair tradePair;
    private final OrderType type;
    private final int cancelInSeconds;
    private final BigDecimal amount;
    private final BigDecimal price;
    private final Date createdOn;
    private final UUID userId;
    private final UUID withdrawAccountId;
    private final Strategy strategy;
    private final BigDecimal fee;
    private final BigDecimal total;
    
    public Order(final UUID orderId, final TradePair tradePair, final OrderType type, final int cancelInSeconds, final BigDecimal amount, final BigDecimal price, final Date createdOn, final UUID userId, final UUID withdrawAccountId, final Strategy strategy) {
        this.orderId = orderId;
        this.tradePair = tradePair;
        this.type = type;
        this.cancelInSeconds = cancelInSeconds;
        this.amount = amount;
        this.price = price;
        this.createdOn = createdOn;
        this.userId = userId;
        this.withdrawAccountId = withdrawAccountId;
        this.strategy = strategy;
        this.fee = this.calcFee();
        this.total = this.calcTotal();
    }
    
    private BigDecimal calcFee() {
        return this.amount.multiply(this.price).multiply(this.tradePair.getCommission().divide(new BigDecimal(100)));
    }
    
    private BigDecimal calcTotal() {
        return this.amount.multiply(this.price).add(this.calcFee());
    }
    
    public UUID getUserId() {
        return this.userId;
    }
    
    public Order(final Deserializer deserializer) {
        final String orderId = deserializer.readOptionalString("orderId");
        final String userId = deserializer.readOptionalString("userId");
        final String withdrawAccountId = deserializer.readOptionalString("withdrawAccountId");
        final Long createdOn = deserializer.readOptionalLong("createdOn");
        this.orderId = ((orderId != null) ? UUID.fromString(orderId) : null);
        this.userId = ((userId != null) ? UUID.fromString(userId) : null);
        this.withdrawAccountId = ((withdrawAccountId != null) ? UUID.fromString(withdrawAccountId) : null);
        this.type = OrderType.parse(deserializer.readString("type"));
        final int hours = deserializer.readInt("cancelInHours");
        this.cancelInSeconds = ((hours == -1) ? -1 : (hours * 3600));
        this.tradePair = (TradePair)deserializer.readObject("tradePair", TradePair::new);
        this.amount = new BigDecimal(deserializer.readString("amount"));
        this.price = new BigDecimal(deserializer.readString("price"));
        this.strategy = Strategy.getValueByCode((int)deserializer.readInt("strategy"));
        this.createdOn = ((createdOn != null) ? new Date(createdOn) : Instant.now().toDate());
        this.fee = this.calcFee();
        this.total = this.calcTotal();
    }
    
    public static int getGoodTillCancelFlag() {
        return -1;
    }
    
    public Strategy getStrategy() {
        return this.strategy;
    }
    
    public TradePair getTradePair() {
        return this.tradePair;
    }
    
    public OrderType getType() {
        return this.type;
    }
    
    public int getCancelInSeconds() {
        return this.cancelInSeconds;
    }
    
    public BigDecimal getAmount() {
        return this.amount;
    }
    
    public BigDecimal getPrice() {
        return this.price;
    }
    
    public Date getCreatedOn() {
        return this.createdOn;
    }
    
    public UUID getOrderId() {
        return this.orderId;
    }
    
    public UUID getWithdrawAccountId() {
        return this.withdrawAccountId;
    }
    
    public void setOrderId(final UUID orderId) {
        this.orderId = orderId;
    }
    
    public BigDecimal getFee() {
        return this.fee;
    }
    
    public BigDecimal getTotal() {
        return this.total;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeString("withdrawAccountId", this.withdrawAccountId.toString());
        serializer.writeObject("tradePair", (SerializableEntity)this.tradePair);
        serializer.writeString("type", this.type.toString());
        serializer.writeInt("cancelInHours", (this.cancelInSeconds == -1) ? -1 : (this.cancelInSeconds / 3600));
        serializer.writeString("amount", this.amount.toString());
        serializer.writeString("price", this.price.toString());
        serializer.writeString("fee", this.fee.toString());
        serializer.writeString("total", this.total.toString());
        serializer.writeInt("strategy", (int)this.strategy.getCode());
        if (this.orderId != null) {
            serializer.writeString("orderId", this.orderId.toString());
        }
        if (this.createdOn != null) {
            serializer.writeLong("createOn", this.createdOn.getTime());
        }
        if (this.userId != null) {
            serializer.writeString("userId", this.userId.toString());
        }
    }
    
    @Override
    public String toString() {
        return "Order [orderId=" + this.orderId + ", tradePair=" + this.tradePair + ", type=" + this.type + ", cancelInSeconds=" + this.cancelInSeconds + ", amount=" + this.amount + ", price=" + this.price + ", createdOn=" + this.createdOn + ", userId=" + this.userId + "]";
    }
    
    static {
        LOGGER = Logger.getLogger(Order.class.getName());
    }
}
