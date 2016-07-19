package org.nem.ncc.trading.storage;

public interface TradingStorageDescriptorFactory
{
    TradingStorageDescriptor createNew(final TradingStorageNamePasswordPair p0, final TradingStorageFileExtension p1);
    
    TradingStorageDescriptor openExisting(final TradingStorageNamePasswordPair p0, final TradingStorageFileExtension p1);
}
