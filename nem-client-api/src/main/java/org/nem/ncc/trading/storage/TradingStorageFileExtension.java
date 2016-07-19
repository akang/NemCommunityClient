package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.*;
import org.nem.ncc.storable.entity.storage.*;

public class TradingStorageFileExtension extends StorableEntityFileExtension<TradingStorageFileExtension>
{
    public static final String DEFAULT_FILE_EXTENSION = ".tst";
    
    public TradingStorageFileExtension() {
        this(".tst");
    }
    
    public TradingStorageFileExtension(final String fileExtension) {
        super(fileExtension, TradingStorageFileExtension.class);
    }
    
    public static TradingStorageFileExtension getDefaultFileExtension() {
        return new TradingStorageFileExtension(".tst");
    }
    
    public static boolean isValidAndHasDefaultExtension(final String fileName) {
        return fileName.toLowerCase().endsWith(".tst") && fileName.indexOf(".") > 0;
    }
    
    @Override
    protected StorableEntityStorageException getException(final int value, final Exception ex) {
        return (null == ex) ? new TradingStorageException(value + 40) : new TradingStorageException(value + 40, ex);
    }
}
