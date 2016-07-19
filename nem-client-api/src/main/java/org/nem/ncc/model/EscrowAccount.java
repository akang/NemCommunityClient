package org.nem.ncc.model;

import java.math.*;
import java.time.*;
import org.nem.core.serialization.*;

public class EscrowAccount implements SerializableEntity
{
    private final int id;
    private final TradeAddress address;
    private final BigDecimal balance;
    private final BigDecimal reserved;
    private final TradeInstrument tradeInstrument;
    private final Instant paymentsExpiration;
    private Instant created;
    
    public EscrowAccount(final int id, final TradeAddress address, final BigDecimal balance, final BigDecimal reserved, final TradeInstrument tradeInstrument, final Instant paymentsExpiration, final Instant created) {
        this.id = id;
        this.address = address;
        this.balance = balance;
        this.reserved = reserved;
        this.tradeInstrument = tradeInstrument;
        this.paymentsExpiration = paymentsExpiration;
        this.created = created;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeInt("id", this.id);
        TradeAddress.writeTo(serializer, "address", this.address);
        serializer.writeString("balance", this.balance.toString());
        serializer.writeString("reserved", this.reserved.toString());
        serializer.writeObject("tradeInstrument", (SerializableEntity)this.tradeInstrument);
        serializer.writeLong("paymentsExpiration", this.paymentsExpiration.toEpochMilli());
        serializer.writeLong("creationTime", this.created.toEpochMilli());
    }
    
    public TradeAddress getAddress() {
        return this.address;
    }
    
    public BigDecimal getBalance() {
        return this.balance;
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
    
    public BigDecimal getReserved() {
        return this.reserved;
    }
    
    public int getId() {
        return this.id;
    }
    
    public Instant getPaymentsExpiration() {
        return this.paymentsExpiration;
    }
    
    public Instant getCreated() {
        return this.created;
    }
    
    public void setCreated(final Instant created) {
        this.created = created;
    }
}
