package org.nem.ncc.controller.viewmodels;

import org.nem.core.serialization.*;

public class BrokerInfoViewModel implements SerializableEntity
{
    private final boolean isConnected;
    
    public BrokerInfoViewModel(final boolean isConnected) {
        this.isConnected = isConnected;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeInt("isConnected", (int)(this.isConnected ? 1 : 0));
    }
    
    public boolean isConnected() {
        return this.isConnected;
    }
}
