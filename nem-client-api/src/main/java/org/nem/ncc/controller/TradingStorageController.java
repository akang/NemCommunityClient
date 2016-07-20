package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import com.sharedobjects.nis.*;
import org.nem.ncc.services.*;
import org.springframework.web.bind.annotation.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.trading.storage.*;
import org.nem.core.model.primitive.*;
import java.util.function.*;
import org.nem.ncc.wallet.*;
import org.nem.ncc.controller.requests.*;
import org.nem.ncc.storable.entity.*;

@RestController
public class TradingStorageController
{
    private final TradingStorageServices tradingStorageServices;
    private final TxBrokerConnector txBrokerConnector;
    private final SecureRequestMapper secureRequestMapper;
    private final PrimaryNisConnector nisConnector;
    private final ChainServices chainServices;
    
    public TradingStorageController(final TradingStorageServices tradingStorageServices, final TxBrokerConnector txBrokerConnector, final SecureRequestMapper secureRequestMapper, final PrimaryNisConnector nisConnector, final ChainServices chainServices) {
        this.tradingStorageServices = tradingStorageServices;
        this.txBrokerConnector = txBrokerConnector;
        this.secureRequestMapper = secureRequestMapper;
        this.chainServices = chainServices;
        this.nisConnector = nisConnector;
    }
    
    @RequestMapping(value = { "/trading/storage/create" }, method = { RequestMethod.POST })
    public void createTradingStorage(@RequestBody final TradingStorageNamePasswordPair pair) {
        this.tradingStorageServices.create(pair);
    }
    
    @RequestMapping(value = { "/trading/storage/open" }, method = { RequestMethod.POST })
    public void openTradingStorage(@RequestBody final TradingStorageNamePasswordPair pair) {
        this.tradingStorageServices.open(pair);
    }
    
    @RequestMapping(value = { "/trading/storage/info" }, method = { RequestMethod.POST })
    public TradingStorageViewModel getTradingStorage(@RequestBody final TradingStorageName name) {
        final TradingStorage tradingStorage = this.tradingStorageServices.get(name);
        return new TradingStorageViewModel(tradingStorage.getUserId(), tradingStorage.getTradingAccountAddress());
    }
    
    @RequestMapping(value = { "/trading/storage/close" }, method = { RequestMethod.POST })
    public void closeTradingStorage(@RequestBody final TradingStorageName name) {
        this.tradingStorageServices.close(name);
    }
    
    @RequestMapping(value = { "/trading/storage/change_account" }, method = { RequestMethod.POST })
    public void setTradingAccount(@RequestBody final TradingAccountChangeRequest request) {
        final TradingStorage tradingStorage = this.tradingStorageServices.get(request.getName());
        final WalletNamePasswordPair walletPair = request.toWalletNamePasswordPair();
        final boolean success = this.txBrokerConnector.updateTradingAccount(((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getName(), tradingStorage.getTradingAccountAddress(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getPassword(), this.secureRequestMapper.toTradingAccount(request.getName()).getAddress().getPublicKey());
        if (success) {
            final BlockHeight lastBlockHeight = (BlockHeight)this.nisConnector.forward(this.chainServices::getChainHeightAsync);
            tradingStorage.setPendingPublicKey(this.secureRequestMapper.toTradingAccount(request.getName()).getAddress().getPublicKey().toString());
            tradingStorage.setChangedPublicKeyTx(lastBlockHeight.getRaw());
        }
    }
    
    @RequestMapping(value = { "/trading/storage/account" }, method = { RequestMethod.POST })
    public void setTradingAccount(@RequestBody final TradingAccountRequest request) {
        this.tradingStorageServices.get(request.getName()).setTradingAccountAddress(request.getTradingAccountAddress());
    }
}
