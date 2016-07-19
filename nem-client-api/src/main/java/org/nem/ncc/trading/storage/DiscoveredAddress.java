package org.nem.ncc.trading.storage;

import org.nem.ncc.model.*;
import java.time.*;
import org.nem.core.serialization.*;

public class DiscoveredAddress extends DiscoveredEntity
{
    private final TradeAddress address;
    
    public DiscoveredAddress(final Deserializer deserializer) {
        super(deserializer);
        this.address = TradeAddress.readFrom(deserializer, "address");
    }
    
    public DiscoveredAddress(final TradeAddress address, final Instant created) {
        super(created);
        this.address = address;
    }
    
    public TradeAddress getAddress() {
        return this.address;
    }
    
    @Override
    public void serialize(final Serializer serializer) {
        super.serialize(serializer);
        TradeAddress.writeTo(serializer, "address", this.address);
    }
    
    @Override
    public boolean equals(final Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || this.getClass() != o.getClass()) {
            return false;
        }
        final DiscoveredAddress that = (DiscoveredAddress)o;
        return this.address.equals(that.address);
    }
    
    @Override
    public int hashCode() {
        return this.address.hashCode();
    }
    
    @Override
    public String toString() {
        return "DiscoveredAddress{created=" + this.getCreated().toString() + "address=" + this.address + '}';
    }
}
