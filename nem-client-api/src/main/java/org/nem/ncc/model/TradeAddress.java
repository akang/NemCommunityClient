package org.nem.ncc.model;

import org.nem.core.serialization.*;

public class TradeAddress implements SerializableEntity
{
    private final String encoded;
    
    public TradeAddress(final String encoded) {
        this.encoded = encoded;
    }
    
    public TradeAddress(final Deserializer deserializer) {
        this.encoded = deserializer.readString("address");
    }
    
    public String getEncoded() {
        return this.encoded;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeString("address", this.encoded);
    }
    
    @Override
    public boolean equals(final Object object) {
        return object != null && object instanceof TradeAddress && this.encoded.equals(((TradeAddress)object).getEncoded());
    }
    
    @Override
    public int hashCode() {
        return this.encoded.hashCode();
    }
    
    public static void writeTo(final Serializer serializer, final String label, final TradeAddress tradeAddress) {
        if (tradeAddress != null) {
            serializer.writeString(label, tradeAddress.encoded);
        }
    }
    
    public static TradeAddress readFrom(final Deserializer deserializer, final String label) {
        return new TradeAddress(deserializer.readString(label));
    }
    
    @Override
    public String toString() {
        return this.encoded;
    }
}
