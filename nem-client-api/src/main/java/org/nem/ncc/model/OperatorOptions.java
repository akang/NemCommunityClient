package org.nem.ncc.model;

import org.nem.core.serialization.*;

public class OperatorOptions implements SerializableEntity
{
    private final long escrowsExpiry;
    
    public OperatorOptions(final long escrowsExpiry) {
        this.escrowsExpiry = escrowsExpiry;
    }
    
    public OperatorOptions(final Deserializer deserializer) {
        this.escrowsExpiry = deserializer.readLong("escrowsExpiry");
    }
    
    public long getEscrowsExpiry() {
        return this.escrowsExpiry;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeString("escrowsExpiry", Long.toString(this.escrowsExpiry));
    }
    
    public long getEscrowsExpirySec() {
        return this.escrowsExpiry;
    }
}
