package org.nem.ncc.controller.viewmodels;

import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class TradingOperation implements SerializableEntity
{
    private final TradingOperationType operationType;
    private final TransactionViewModel transaction;
    
    public TradingOperation(final TradingOperationType operationType, final TransactionViewModel transaction) {
        this.operationType = operationType;
        this.transaction = transaction;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeInt("operationType", this.operationType.getCode());
        serializer.writeObject("transaction", (SerializableEntity)this.transaction);
    }
    
    public TradingOperationType getOperationType() {
        return this.operationType;
    }
    
    public TransactionViewModel getTransaction() {
        return this.transaction;
    }
}
