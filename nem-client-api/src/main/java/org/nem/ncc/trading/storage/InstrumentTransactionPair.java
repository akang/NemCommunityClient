package org.nem.ncc.trading.storage;

import org.nem.core.serialization.*;

public class InstrumentTransactionPair implements SerializableEntity
{
    private final int instrumentCode;
    private final Long lastScannedTxId;
    
    public InstrumentTransactionPair(final Deserializer deserializer) {
        this.instrumentCode = deserializer.readInt("instrumentCode");
        this.lastScannedTxId = deserializer.readLong("lastScannedTxId");
    }
    
    public InstrumentTransactionPair(final int instrumentCode, final Long lastScannedTxId) {
        this.instrumentCode = instrumentCode;
        this.lastScannedTxId = lastScannedTxId;
    }
    
    public int getInstrumentCode() {
        return this.instrumentCode;
    }
    
    public Long getLastScannedTxId() {
        return this.lastScannedTxId;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeInt("instrumentCode", this.instrumentCode);
        serializer.writeLong("lastScannedTxId", (long)this.lastScannedTxId);
    }
    
    @Override
    public boolean equals(final Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || this.getClass() != o.getClass()) {
            return false;
        }
        final InstrumentTransactionPair that = (InstrumentTransactionPair)o;
        return this.instrumentCode == that.instrumentCode && ((this.lastScannedTxId != null) ? this.lastScannedTxId.equals(that.lastScannedTxId) : (that.lastScannedTxId == null));
    }
    
    @Override
    public int hashCode() {
        int result = this.instrumentCode;
        result = 31 * result + ((this.lastScannedTxId != null) ? this.lastScannedTxId.hashCode() : 0);
        return result;
    }
}
