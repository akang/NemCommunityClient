package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.storage.*;
import java.io.*;
import org.nem.core.serialization.*;
import org.nem.ncc.storable.entity.*;
import org.nem.ncc.function.*;
import java.util.function.*;

public class SecureTradingStorageDescriptorFactory extends SecureStorableEntityDescriptorFactory<StorableTradingStorage, TradingStorageName, TradingStoragePassword, TradingStorageNamePasswordPair, TradingStorageFileExtension, TradingStorageDescriptor, TradingStorageFileDescriptorFactory, SecureTradingStorageDescriptor> implements TradingStorageDescriptorFactory
{
    public SecureTradingStorageDescriptorFactory(final File directory) {
        super(directory, MemoryTradingStorage::new, TradingStorageName::new, TradingStorageFileExtension::new, TradingStorageFileDescriptor::new, SecureTradingStorageDescriptor::new, TradingStorageFileDescriptorFactory::new);
    }
}
