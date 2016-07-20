package org.nem.ncc.trading.storage;

import java.io.*;
import org.nem.core.serialization.*;
import org.nem.ncc.storable.entity.*;
import java.util.*;

public class TradingStorageFileLocator extends StorableEntityFileLocator<StorableTradingStorage, TradingStorageName, TradingStorageFileExtension, TradingStorageDescriptor> implements TradingStorageLocator
{
    public TradingStorageFileLocator(final File directory) {
        super(directory, (dir, name) -> TradingStorageFileExtension.isValidAndHasDefaultExtension(name), MemoryTradingStorage::new, TradingStorageName::new, TradingStorageFileExtension::new, TradingStorageFileDescriptor::new);
    }
    
    @Override
    public List<TradingStorageDescriptor> getAllTradingStorages() {
        return super.getAll();
    }
}
