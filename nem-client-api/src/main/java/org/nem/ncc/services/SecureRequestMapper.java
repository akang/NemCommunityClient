package org.nem.ncc.services;

import org.nem.core.model.*;
import org.nem.ncc.exceptions.*;
import org.nem.core.crypto.*;
import org.nem.ncc.wallet.*;
import org.nem.ncc.trading.storage.*;
import java.util.*;

public class SecureRequestMapper
{
    private final WalletServices walletServices;
    private final TradingStorageServices tradingStorageServices;
    
    public SecureRequestMapper(final WalletServices walletServices, final TradingStorageServices tradingStorageServices) {
        this.walletServices = walletServices;
        this.tradingStorageServices = tradingStorageServices;
    }
    
    public Account toTradingAccount(final TradingStorageNamePasswordPair pair) {
        final TradingStorage tradingStorage = this.tradingStorageServices.open(pair);
        final WalletAccount tradingWalletAccount = this.walletServices.tryFindOpenAccount(tradingStorage.getTradingAccountAddress());
        if (tradingWalletAccount == null) {
            throw new NccException(NccException.Code.TRADING_ACCOUNT_WALLET_IS_NOT_OPEN);
        }
        return new Account(new KeyPair(tradingWalletAccount.getPrivateKey()));
    }
    
    public Account toTradingAccount(final TradingStorageName name) {
        return this.toTradingAccount(this.tradingStorageServices.get(name));
    }
    
    public UUID toUserId(final TradingStorageName name) {
        final TradingStorage tradingStorage = this.tradingStorageServices.get(name);
        return tradingStorage.getUserId();
    }
    
    public Account toTradingAccount(final TradingStorage tradingStorage) {
        final WalletAccount tradingWalletAccount = this.walletServices.tryFindOpenAccount(tradingStorage.getTradingAccountAddress());
        if (tradingWalletAccount == null) {
            throw new NccException(NccException.Code.TRADING_ACCOUNT_WALLET_IS_NOT_OPEN);
        }
        return new Account(new KeyPair(tradingWalletAccount.getPrivateKey()));
    }
}
