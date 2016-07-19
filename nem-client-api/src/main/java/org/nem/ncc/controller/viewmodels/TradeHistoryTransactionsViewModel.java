package org.nem.ncc.controller.viewmodels;

import java.util.*;
import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class TradeHistoryTransactionsViewModel implements SerializableEntity
{
    private final TradePair tradePair;
    private final Collection<TradeHistoryTransaction> transactions;
    
    public TradePair getTradePair() {
        return this.tradePair;
    }
    
    public Collection<TradeHistoryTransaction> getTransactions() {
        return this.transactions;
    }
    
    public TradeHistoryTransactionsViewModel(final TradePair tradePair, final Collection<TradeHistoryTransaction> transactions) {
        this.tradePair = tradePair;
        this.transactions = transactions;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeObject("tradePair", (SerializableEntity)this.tradePair);
        serializer.writeObjectArray("transactions", (Collection)this.transactions);
    }
}
