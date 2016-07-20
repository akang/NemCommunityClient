package org.nem.ncc.controller;

import org.nem.ncc.services.*;
import org.nem.ncc.connector.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.core.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.nem.ncc.broker.*;
import org.nem.ncc.wallet.*;
import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;
import org.nem.ncc.model.*;
import java.util.*;
import org.nem.ncc.storable.entity.*;

@RestController
public class UserDetailsController
{
    private final PrimaryBrokerConnector brokerConnector;
    private final SecureRequestMapper secureRequestMapper;
    private final TradingStorageServices tradingStorageServices;
    private final TradingTransactionsServices tradingTransactionsServices;
    private final TxBrokerConnector txBrokerConnector;

    @Autowired
    public UserDetailsController(final PrimaryBrokerConnector brokerConnector, final SecureRequestMapper secureRequestMapper, final TradingStorageServices tradingStorageServices, final TradingTransactionsServices tradingTransactionsServices, final TxBrokerConnector txBrokerConnector) {
        this.brokerConnector = brokerConnector;
        this.secureRequestMapper = secureRequestMapper;
        this.tradingStorageServices = tradingStorageServices;
        this.tradingTransactionsServices = tradingTransactionsServices;
        this.txBrokerConnector = txBrokerConnector;
    }
    
    @RequestMapping(value = { "/trading/user_details" }, method = { RequestMethod.POST })
    public UserDetailsViewModel getUserDetails(@RequestBody final TradingStorageName name) {
        final UUID userId = this.secureRequestMapper.toUserId(name);
        if (this.brokerConnector.hasUserDetails(userId)) {
            final Account tradingAccount = this.secureRequestMapper.toTradingAccount(name);
            return new UserDetailsViewModel(this.brokerConnector.getUserDetails(tradingAccount, userId));
        }
        if (this.tradingTransactionsServices.getUserDetailsSetupTxs(name).size() > 0) {
            return new UserDetailsViewModel(UserDetailsViewModel.Status.PROCESSING);
        }
        return new UserDetailsViewModel(UserDetailsViewModel.Status.EMPTY);
    }
    
    @RequestMapping(value = { "/trading/user_details/setup" }, method = { RequestMethod.POST })
    public void setupUserDetails(@RequestBody final UserDetailsRequest userDetails) {
        final WalletNamePasswordPair walletPair = userDetails.toWalletNamePasswordPair();
        final TradingStorage tradingStorage = this.tradingStorageServices.open(userDetails);
        final boolean success = this.txBrokerConnector.setupUserDetails(((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getName(), tradingStorage.getTradingAccountAddress(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getPassword(), userDetails.getUserDetails());
        if (!success) {
            throw new BrokerException();
        }
    }
    
    @RequestMapping(value = { "/trading/user_details/update" }, method = { RequestMethod.POST })
    public void updateUserDetails(@RequestBody final UserDetailsRequest request) {
        final WalletNamePasswordPair walletPair = request.toWalletNamePasswordPair();
        final TradingStorage tradingStorage = this.tradingStorageServices.open(request);
        final boolean success = this.txBrokerConnector.updateUserDetails(((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getName(), tradingStorage.getTradingAccountAddress(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getPassword(), request.getUserDetails());
        if (!success) {
            throw new BrokerException();
        }
    }
    
    @RequestMapping(value = { "/trading/user_details/update/price" }, method = { RequestMethod.POST })
    public long updateUserDetailsPrice(@RequestBody final UserDetails userDetails) {
        final long amount = this.txBrokerConnector.updateUserDetailsPrice(userDetails);
        return amount;
    }
    
    @RequestMapping(value = { "/trading/user_details/setup/price" }, method = { RequestMethod.POST })
    public long setupUserDetailsPrice(@RequestBody final UserDetails userDetails) {
        final long amount = this.txBrokerConnector.setupUserDetailsPrice(userDetails);
        return amount;
    }
    
    @RequestMapping(value = { "/trading/user_details/countries" }, method = { RequestMethod.GET })
    public SerializableList<Country> getCountries() {
        return (SerializableList<Country>)new SerializableList((Collection)this.brokerConnector.getCountries());
    }
}
