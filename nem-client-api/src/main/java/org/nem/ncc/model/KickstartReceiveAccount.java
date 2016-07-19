package org.nem.ncc.model;

import java.math.*;
import org.nem.core.serialization.*;

public class KickstartReceiveAccount implements SerializableEntity
{
    private final TradeAddress address;
    private final BigDecimal rate;
    private final TradeInstrument tradeInstrument;
    
    public KickstartReceiveAccount(final TradeAddress address, final BigDecimal rate, final TradeInstrument tradeInstrument) {
        this.address = address;
        this.rate = rate;
        this.tradeInstrument = tradeInstrument;
    }
    
    public KickstartReceiveAccount(final Deserializer deserializer) {
        this.address = TradeAddress.readFrom(deserializer, "address");
        this.rate = new BigDecimal(deserializer.readString("rate"));
        this.tradeInstrument = (TradeInstrument)deserializer.readObject("tradeInstrument", TradeInstrument::new);
    }
    
    public void serialize(final Serializer serializer) {
        TradeAddress.writeTo(serializer, "address", this.address);
        serializer.writeString("rate", this.rate.toString());
        serializer.writeObject("tradeInstrument", (SerializableEntity)this.tradeInstrument);
    }
    
    public TradeAddress getAddress() {
        return this.address;
    }
    
    public BigDecimal getRate() {
        return this.rate;
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
}
