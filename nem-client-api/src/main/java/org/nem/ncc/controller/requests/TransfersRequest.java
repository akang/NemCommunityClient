package org.nem.ncc.controller.requests;

import java.time.*;
import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class TransfersRequest
{
    final Instant lastQueried;
    final TradeAddress address;
    
    public TransfersRequest(final Deserializer deserializer) {
        this.lastQueried = Instant.ofEpochMilli(deserializer.readLong("lastQueried"));
        this.address = TradeAddress.readFrom(deserializer, "address");
    }
    
    public Instant getLastQueried() {
        return this.lastQueried;
    }
    
    public TradeAddress getAddress() {
        return this.address;
    }
}
