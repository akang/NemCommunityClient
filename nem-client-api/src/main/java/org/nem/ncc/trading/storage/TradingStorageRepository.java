package org.nem.ncc.trading.storage;

public interface TradingStorageRepository
{
    void save(final TradingStorageDescriptor p0, final StorableTradingStorage p1);
    
    StorableTradingStorage load(final TradingStorageDescriptor p0);
}
