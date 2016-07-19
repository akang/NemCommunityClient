package org.nem.ncc.controller.viewmodels;

import java.math.*;
import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class BankAccountInfo implements SerializableEntity
{
    private final TradeAddress address;
    private final BigDecimal balance;
    private final BigDecimal availableBalance;
    private final TradeInstrument tradeInstrument;
    
    public BankAccountInfo(final Deserializer deserializer) {
        this.address = TradeAddress.readFrom(deserializer, "address");
        this.balance = new BigDecimal(deserializer.readString("balance"));
        this.availableBalance = new BigDecimal(deserializer.readString("availableBalance"));
        this.tradeInstrument = (TradeInstrument)deserializer.readObject("tradeInstrument", TradeInstrument::new);
    }
    
    public BankAccountInfo(final TradeAddress address, final BigDecimal balance, final BigDecimal availableBalance, final TradeInstrument tradeInstrument) {
        this.address = address;
        this.balance = balance;
        this.availableBalance = availableBalance;
        this.tradeInstrument = tradeInstrument;
    }
    
    public void serialize(final Serializer serializer) {
        TradeAddress.writeTo(serializer, "address", this.address);
        serializer.writeString("balance", this.balance.toString());
        serializer.writeString("availableBalance", this.availableBalance.toString());
        serializer.writeObject("tradeInstrument", (SerializableEntity)this.tradeInstrument);
    }
    
    public TradeAddress getAddress() {
        return this.address;
    }
    
    public BigDecimal getBalance() {
        return this.balance;
    }
    
    public BigDecimal getAvailableBalance() {
        return this.availableBalance;
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
}
