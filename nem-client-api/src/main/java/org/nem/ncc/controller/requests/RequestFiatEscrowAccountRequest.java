package org.nem.ncc.controller.requests;

import java.util.*;
import org.nem.core.serialization.*;

public class RequestFiatEscrowAccountRequest
{
    private final int tradeInstrumentCode;
    private final UUID userId;
    
    public RequestFiatEscrowAccountRequest(final Deserializer deserializer) {
        this.tradeInstrumentCode = deserializer.readInt("tradeInstrumentCode");
        this.userId = UUID.fromString(deserializer.readString("user"));
    }
    
    public int getTradeInstrumentCode() {
        return this.tradeInstrumentCode;
    }
    
    public UUID getUserId() {
        return this.userId;
    }
}
