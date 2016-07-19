package org.nem.ncc.services;

import org.nem.ncc.model.*;
import org.nem.ncc.connector.*;
import java.util.function.*;
import java.util.stream.*;
import java.util.*;

public class TradePairsProvider extends UpdatableDataProvider<Map<Integer, TradePair>>
{
    private final PrimaryBrokerConnector connector;
    
    public TradePairsProvider(final PrimaryBrokerConnector connector) {
        super(60L);
        this.connector = connector;
    }
    
    public synchronized Map<Integer, TradePair> getTradePairsMap() {
        return this.getData();
    }
    
    public TradePair getTradePair(final int code) {
        if (this.getTradePairsMap() == null) {
            return null;
        }
        return this.getTradePairsMap().get(code);
    }
    
    @Override
    protected Map<Integer, TradePair> fetchDataFromRemote() {
        final Collection<TradePair> pairs = this.connector.getTradePairs();
        if (pairs == null) {
            return null;
        }
        return pairs.stream().collect(Collectors.toMap((Function<? super TradePair, ? extends Integer>)TradePair::getCode, (Function<? super TradePair, ? extends TradePair>)Function.identity()));
    }
    
    public Collection<TradePair> getTradePairs() {
        return this.getTradePairsMap().values();
    }
}
