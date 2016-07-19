package org.nem.ncc.model;

import java.util.*;
import org.nem.core.serialization.*;

public class WithdrawalAccount implements SerializableEntity
{
    private final TradeAddress address;
    private final UUID id;
    private final TradeInstrument instrument;
    
    public WithdrawalAccount(final TradeAddress address, final UUID id, final TradeInstrument instrument) {
        this.address = address;
        this.id = id;
        this.instrument = instrument;
    }
    
    public void serialize(final Serializer serializer) {
        TradeAddress.writeTo(serializer, "address", this.address);
        serializer.writeString("id", this.id.toString());
        serializer.writeObject("tradeInstrument", (SerializableEntity)this.instrument);
    }
    
    public TradeAddress getAddress() {
        return this.address;
    }
    
    public UUID getId() {
        return this.id;
    }
    
    public TradeInstrument getInstrument() {
        return this.instrument;
    }
}
