package org.nem.ncc.trading.storage;

import org.nem.ncc.model.*;
import java.time.*;
import org.nem.core.serialization.*;

public class DiscoveredFiatAddress extends DiscoveredAddress
{
    private final TradeInstrument tradeInstrument;
    
    public DiscoveredFiatAddress(final TradeAddress address, final Instant created, final TradeInstrument tradeInstrument) {
        super(address, created);
        this.tradeInstrument = tradeInstrument;
    }
    
    public DiscoveredFiatAddress(final Deserializer deserializer) {
        super(deserializer);
        this.tradeInstrument = (TradeInstrument)deserializer.readObject("tradeInstrument", TradeInstrument::new);
    }
    
    @Override
    public void serialize(final Serializer serializer) {
        super.serialize(serializer);
        serializer.writeObject("tradeInstrument", (SerializableEntity)this.tradeInstrument);
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
}
