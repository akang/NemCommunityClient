package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.*;
import org.nem.core.serialization.*;
import org.nem.ncc.wallet.*;

public class TradingStorageNamePasswordPair extends StorableEntityNamePasswordPair<TradingStorageName, TradingStoragePassword, TradingStorageNamePasswordPair>
{
    public TradingStorageNamePasswordPair(final TradingStorageName name) {
        this(name, new TradingStoragePassword(""));
    }
    
    public TradingStorageNamePasswordPair(final TradingStorageName name, final TradingStoragePassword password) {
        super(name, password, TradingStorageNamePasswordPair.class);
    }
    
    public TradingStorageNamePasswordPair(final String name, final String password) {
        this(new TradingStorageName(name), new TradingStoragePassword(password));
    }
    
    public TradingStorageNamePasswordPair(final Deserializer deserializer) {
        super(new TradingStorageName(deserializer), new TradingStoragePassword(deserializer), TradingStorageNamePasswordPair.class);
    }
    
    public WalletNamePasswordPair toWalletNamePasswordPair() {
        return new WalletNamePasswordPair(((StorableEntityNamePasswordPair<TradingStorageName, TEntityPassword, TDerived>)this).getName().toString(), ((StorableEntityNamePasswordPair<TEntityName, TradingStoragePassword, TDerived>)this).getPassword().toString());
    }
}
