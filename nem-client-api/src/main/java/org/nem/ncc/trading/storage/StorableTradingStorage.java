package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.*;
import org.nem.core.serialization.*;

public interface StorableTradingStorage extends TradingStorage, StorableEntity<TradingStorageName, TradingStorageFileExtension>, ObjectDeserializer<StorableTradingStorage>
{
}
