package org.nem.ncc.trading.storage;

import java.io.*;
import org.nem.core.serialization.*;
import java.util.function.*;
import org.nem.ncc.storable.entity.storage.*;

public class TradingStorageFileDescriptor extends StorableEntityFileDescriptor<StorableTradingStorage, TradingStorageName, TradingStorageFileExtension> implements TradingStorageDescriptor
{
    public TradingStorageFileDescriptor(final File file) {
        this(file, (ObjectDeserializer<StorableTradingStorage>)MemoryTradingStorage::new, TradingStorageName::new, TradingStorageFileExtension::new);
    }
    
    public TradingStorageFileDescriptor(final File file, final ObjectDeserializer<StorableTradingStorage> deserializer, final Function<String, TradingStorageName> nameActivator, final Function<String, TradingStorageFileExtension> fileExtensionActivator) {
        super(file, deserializer, nameActivator, fileExtensionActivator);
    }
    
    @Override
    public TradingStorageName getTradingStorageName() {
        return super.getName();
    }
    
    @Override
    public String getTradingStorageLocation() {
        return super.getStorableEntityLocation();
    }
    
    @Override
    protected StorableEntityStorageException getException(final int value, final Exception ex) {
        return (null == ex) ? new TradingStorageException(value + 40) : new TradingStorageException(value + 40, ex);
    }
}
