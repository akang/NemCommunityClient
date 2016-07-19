package org.nem.ncc.trading.storage;

import org.nem.core.crypto.*;
import java.time.*;
import org.nem.core.serialization.*;

public class DiscoveredPublicKey extends DiscoveredEntity
{
    private final PublicKey publicKey;
    
    protected DiscoveredPublicKey(final Deserializer deserializer) {
        super(deserializer);
        this.publicKey = (PublicKey)deserializer.readObject("publicKey", PublicKey::new);
    }
    
    public DiscoveredPublicKey(final Instant created, final PublicKey publicKey) {
        super(created);
        this.publicKey = publicKey;
    }
    
    @Override
    public void serialize(final Serializer serializer) {
        super.serialize(serializer);
        serializer.writeObject("publicKey", (SerializableEntity)this.publicKey);
    }
    
    public PublicKey getPublicKey() {
        return this.publicKey;
    }
    
    @Override
    public boolean equals(final Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || this.getClass() != o.getClass()) {
            return false;
        }
        if (!super.equals(o)) {
            return false;
        }
        final DiscoveredPublicKey that = (DiscoveredPublicKey)o;
        return (this.publicKey != null) ? this.publicKey.equals((Object)that.publicKey) : (that.publicKey == null);
    }
    
    @Override
    public int hashCode() {
        int result = super.hashCode();
        result = 31 * result + ((this.publicKey != null) ? this.publicKey.hashCode() : 0);
        return result;
    }
    
    @Override
    public String toString() {
        return "DiscoveredPublicKey{created=" + this.getCreated().toString() + "publicKey=" + this.publicKey + '}';
    }
}
