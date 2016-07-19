package org.nem.ncc.trading.storage;

import java.time.*;
import org.nem.core.serialization.*;

public abstract class DiscoveredEntity implements SerializableEntity
{
    private final Instant created;
    
    protected DiscoveredEntity(final Deserializer deserializer) {
        this.created = Instant.ofEpochMilli(deserializer.readLong("created"));
    }
    
    protected DiscoveredEntity(final Instant created) {
        this.created = created;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeLong("created", this.created.toEpochMilli());
    }
    
    public Instant getCreated() {
        return this.created;
    }
    
    @Override
    public boolean equals(final Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || this.getClass() != o.getClass()) {
            return false;
        }
        final DiscoveredEntity that = (DiscoveredEntity)o;
        return (this.created != null) ? this.created.equals(that.created) : (that.created == null);
    }
    
    @Override
    public int hashCode() {
        return (this.created != null) ? this.created.hashCode() : 0;
    }
}
