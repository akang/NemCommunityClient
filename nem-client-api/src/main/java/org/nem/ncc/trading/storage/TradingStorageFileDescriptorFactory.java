package org.nem.ncc.trading.storage;

import java.io.*;
import org.nem.core.serialization.*;
import org.nem.ncc.function.*;
import java.util.function.*;
import org.nem.ncc.storable.entity.storage.*;

public class TradingStorageFileDescriptorFactory extends StorableEntityFileDescriptorFactory<StorableTradingStorage, TradingStorageName, TradingStoragePassword, TradingStorageFileExtension, TradingStorageNamePasswordPair, TradingStorageDescriptor> implements TradingStorageDescriptorFactory
{
    public TradingStorageFileDescriptorFactory(final File directory) {
        this(directory, (ObjectDeserializer<StorableTradingStorage>)MemoryTradingStorage::new, TradingStorageName::new, TradingStorageFileExtension::new, (QuadFunction<File, ObjectDeserializer<StorableTradingStorage>, Function<String, TradingStorageName>, Function<String, TradingStorageFileExtension>, TradingStorageDescriptor>)TradingStorageFileDescriptor::new);
    }
    
    public TradingStorageFileDescriptorFactory(final File directory, final ObjectDeserializer<StorableTradingStorage> deserializer, final Function<String, TradingStorageName> nameActivator, final Function<String, TradingStorageFileExtension> fileExtensionActivator, final QuadFunction<File, ObjectDeserializer<StorableTradingStorage>, Function<String, TradingStorageName>, Function<String, TradingStorageFileExtension>, TradingStorageDescriptor> descriptorActivator) {
        super(directory, deserializer, nameActivator, fileExtensionActivator, descriptorActivator);
    }
    
    @Override
    protected StorableEntityStorageException getException(final int value) {
        return new TradingStorageException(value + 40);
    }
}
