package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import org.nem.core.serialization.*;
import org.nem.ncc.controller.viewmodels.*;
import org.springframework.web.bind.annotation.*;
import org.nem.ncc.model.*;
import java.util.*;
import java.util.stream.*;
import org.nem.ncc.wallet.*;
import org.nem.ncc.trading.storage.*;
import org.nem.ncc.escrow.*;
import org.nem.ncc.storable.entity.*;

@RestController
public class EscrowAccountController
{
    private final BtcEscrowsLocator btcEscrowLocator;
    private final NemEscrowsLocator nemEscrowServices;
    private final FiatEscrowsLocator fiatEscrowsLocator;
    private final PrimaryBrokerConnector brokerConnector;
    private final TxBrokerConnector txBrokerConnector;
    private final TradingStorageServices tradingStorageServices;
    
    public EscrowAccountController(final NemEscrowsLocator nemEscrowServices, final BtcEscrowsLocator btcEscrowLocator, final FiatEscrowsLocator fiatEscrowsLocator, final PrimaryBrokerConnector brokerConnector, final TxBrokerConnector txBrokerConnector, final TradingStorageServices tradingStorageServices) {
        this.nemEscrowServices = nemEscrowServices;
        this.btcEscrowLocator = btcEscrowLocator;
        this.fiatEscrowsLocator = fiatEscrowsLocator;
        this.brokerConnector = brokerConnector;
        this.txBrokerConnector = txBrokerConnector;
        this.tradingStorageServices = tradingStorageServices;
    }
    
    @RequestMapping(value = { "/trading/accounts/escrow/xem" }, method = { RequestMethod.POST })
    public SerializableList<EscrowAccountViewModel> getXemEscrows(@RequestBody final TradingStorageName name) {
        return (SerializableList<EscrowAccountViewModel>)new SerializableList((Collection)EscrowMapper.toViewModelList(((DefaultEscrowsLocator<? extends EscrowAccount, DiscoveredPublicKey>)this.nemEscrowServices).getEscrowBalances(name)));
    }
    
    @RequestMapping(value = { "/trading/accounts/escrow/fiat" }, method = { RequestMethod.POST })
    public SerializableList<EscrowAccountViewModel> getFiatEscrows(@RequestBody final TradingStorageName name) {
        return (SerializableList<EscrowAccountViewModel>)new SerializableList((Collection)EscrowMapper.toViewModelList((this.fiatEscrowsLocator).getEscrowBalances(name)));
    }
    
    @RequestMapping(value = { "/trading/accounts/escrow/btc" }, method = { RequestMethod.POST })
    public SerializableList<EscrowAccountViewModel> getBtcEscrows(@RequestBody final TradingStorageName name) {
        return (SerializableList<EscrowAccountViewModel>)new SerializableList((Collection)EscrowMapper.toViewModelList(this.btcEscrowLocator.getEscrowBalances(name)));
    }
    
    @RequestMapping(value = { "/trading/accounts/escrow" }, method = { RequestMethod.POST })
    public SerializableList<EscrowAccountViewModel> getEscrowAccounts(@RequestBody final TradingStorageName name) {
        Stream<EscrowAccountViewModel> escrows = Stream.concat(this.getBtcEscrows(name).asCollection().stream(), this.getXemEscrows(name).asCollection().stream());
        escrows = Stream.concat((Stream<? extends EscrowAccountViewModel>)escrows, this.getFiatEscrows(name).asCollection().stream());
        return (SerializableList<EscrowAccountViewModel>)new SerializableList((Collection)escrows.collect(Collectors.toList()));
    }
    
    @RequestMapping(value = { "/trading/accounts/escrow/btc/request" }, method = { RequestMethod.POST })
    public void requestNewBtcEscrowAccount(@RequestBody final TradingStorageNamePasswordPair pair) {
        final WalletNamePasswordPair walletPair = pair.toWalletNamePasswordPair();
        final TradingStorage tradingStorage = this.tradingStorageServices.open(pair);
        this.txBrokerConnector.requestNewBtcEscrowAccount(((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getName(), tradingStorage.getTradingAccountAddress(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getPassword());
    }
}
