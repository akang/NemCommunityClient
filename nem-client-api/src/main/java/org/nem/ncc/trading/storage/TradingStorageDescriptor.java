package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.storage.*;

public interface TradingStorageDescriptor extends StorableEntityDescriptor<StorableTradingStorage, TradingStorageName, TradingStorageFileExtension>
{
    TradingStorageName getTradingStorageName();
    
    String getTradingStorageLocation();
}
