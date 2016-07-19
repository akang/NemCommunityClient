package org.nem.ncc.services;

import org.nem.ncc.trading.storage.*;
import java.io.*;
import org.nem.ncc.model.*;

public interface TradingStorageServices
{
    TradingStorage get(final TradingStorageName p0);
    
    TradingStorage open(final TradingStorageNamePasswordPair p0);
    
    TradingStorage openOrCreate(final TradingStorageNamePasswordPair p0);
    
    TradingStorage create(final TradingStorageNamePasswordPair p0);
    
    void close(final TradingStorageName p0);
    
    void move(final TradingStorageNamePasswordPair p0, final TradingStorageNamePasswordPair p1);
    
    void copyTo(final TradingStorageNamePasswordPair p0, final OutputStream p1);
    
    BankAccount tryFindAccount(final TradeAddress p0);
}
