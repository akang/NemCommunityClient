package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.storage.*;

public class SecureTradingStorageDescriptor extends SecureStorableEntityDescriptor<StorableTradingStorage, TradingStorageName, TradingStorageFileExtension, TradingStoragePassword, TradingStorageDescriptor> implements TradingStorageDescriptor
{
    protected SecureTradingStorageDescriptor(final TradingStorageDescriptor descriptor, final TradingStoragePassword password) {
        super(descriptor, password);
    }
    
    @Override
    public TradingStorageName getTradingStorageName() {
        return ((SecureStorableEntityDescriptor<StorableTradingStorage, TradingStorageName, TradingStorageFileExtension, TradingStoragePassword, TradingStorageDescriptor>)this).getDescriptor().getTradingStorageName();
    }
    
    @Override
    public String getTradingStorageLocation() {
        return ((SecureStorableEntityDescriptor<StorableTradingStorage, TradingStorageName, TradingStorageFileExtension, TradingStoragePassword, TradingStorageDescriptor>)this).getDescriptor().getTradingStorageLocation();
    }
    
    @Override
    protected StorableEntityStorageException getException(final int value, final Exception ex) {
        return (ex == null) ? new TradingStorageException(value + 40) : new TradingStorageException(value + 40, ex);
    }
}
