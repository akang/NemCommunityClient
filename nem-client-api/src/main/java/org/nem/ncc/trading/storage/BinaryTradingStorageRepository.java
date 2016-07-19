package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.*;
import org.nem.ncc.storable.entity.storage.*;

public class BinaryTradingStorageRepository extends BinaryStorableEntityRepository<StorableTradingStorage, TradingStorageName, TradingStorageFileExtension, TradingStorageDescriptor> implements TradingStorageRepository
{
    @Override
    protected StorableEntityStorageException getException(final int value, final Exception ex) {
        return (ex == null) ? new TradingStorageException(value + 40) : new TradingStorageException(value + 40, ex);
    }
}
