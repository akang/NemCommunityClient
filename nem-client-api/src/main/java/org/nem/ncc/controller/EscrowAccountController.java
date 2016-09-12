package org.nem.ncc.controller;

import org.nem.core.serialization.SerializableList;
import org.nem.ncc.connector.PrimaryBrokerConnector;
import org.nem.ncc.connector.TxBrokerConnector;
import org.nem.ncc.controller.viewmodels.EscrowAccountViewModel;
import org.nem.ncc.escrow.BtcEscrowsLocator;
import org.nem.ncc.escrow.DefaultEscrowsLocator;
import org.nem.ncc.escrow.EscrowMapper;
import org.nem.ncc.escrow.FiatEscrowsLocator;
import org.nem.ncc.escrow.NemEscrowsLocator;
import org.nem.ncc.model.EscrowAccount;
import org.nem.ncc.services.TradingStorageServices;
import org.nem.ncc.trading.storage.DiscoveredPublicKey;
import org.nem.ncc.trading.storage.TradingStorage;
import org.nem.ncc.trading.storage.TradingStorageName;
import org.nem.ncc.trading.storage.TradingStorageNamePasswordPair;
import org.nem.ncc.wallet.WalletNamePasswordPair;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
public class EscrowAccountController
{
    private final BtcEscrowsLocator btcEscrowLocator;
    private final NemEscrowsLocator nemEscrowServices;
    private final FiatEscrowsLocator fiatEscrowsLocator;
    private final PrimaryBrokerConnector brokerConnector;
    private final TxBrokerConnector txBrokerConnector;
    private final TradingStorageServices tradingStorageServices;

    @Autowired
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
        escrows = Stream.concat(escrows, this.getFiatEscrows(name).asCollection().stream());
        return (SerializableList<EscrowAccountViewModel>)new SerializableList((Collection)escrows.collect(Collectors.toList()));
    }
    
    @RequestMapping(value = { "/trading/accounts/escrow/btc/request" }, method = { RequestMethod.POST })
    public void requestNewBtcEscrowAccount(@RequestBody final TradingStorageNamePasswordPair pair) {
        final WalletNamePasswordPair walletPair = pair.toWalletNamePasswordPair();
        final TradingStorage tradingStorage = this.tradingStorageServices.open(pair);
        this.txBrokerConnector.requestNewBtcEscrowAccount(walletPair.getName(), tradingStorage.getTradingAccountAddress(), walletPair.getPassword());
    }
}
