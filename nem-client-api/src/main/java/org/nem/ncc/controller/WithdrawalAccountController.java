package org.nem.ncc.controller;

import org.nem.ncc.services.*;
import org.nem.ncc.connector.*;
import org.nem.ncc.broker.*;
import org.nem.ncc.wallet.*;
import org.nem.ncc.trading.storage.*;
import org.springframework.web.bind.annotation.*;
import org.nem.ncc.controller.requests.*;
import org.nem.ncc.storable.entity.*;

@RestController
public class WithdrawalAccountController
{
    private final SecureRequestMapper secureRequestMapper;
    private final PrimaryBrokerConnector brokerConnector;
    private final TradingStorageServices tradingStorageServices;
    private final TxBrokerConnector txBrokerConnector;
    
    public WithdrawalAccountController(final SecureRequestMapper secureRequestMapper, final PrimaryBrokerConnector brokerConnector, final TradingStorageServices tradingStorageServices, final TxBrokerConnector txBrokerConnector) {
        this.secureRequestMapper = secureRequestMapper;
        this.brokerConnector = brokerConnector;
        this.tradingStorageServices = tradingStorageServices;
        this.txBrokerConnector = txBrokerConnector;
    }
    
    @RequestMapping(value = { "/trading/accounts/withdrawal/btc/set" }, method = { RequestMethod.POST })
    public void setupBtcWithdrawalAccount(@RequestBody final BtcWithdrawalAccountRequest request) {
        final WalletNamePasswordPair walletPair = request.toWalletNamePasswordPair();
        final TradingStorage tradingStorage = this.tradingStorageServices.open(request);
        final boolean success = this.txBrokerConnector.setBtcWithdrawalAccount(request.getEncodedWithdrawalAddress(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getName(), tradingStorage.getTradingAccountAddress(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getPassword());
        if (!success) {
            throw new BrokerException();
        }
    }
    
    @RequestMapping(value = { "/trading/accounts/withdrawal/fiat/set" }, method = { RequestMethod.POST })
    public void setFiatWithdrawalAccount(@RequestBody final FiatWithdrawalAccountRequest request) {
        final WalletNamePasswordPair walletPair = request.toWalletNamePasswordPair();
        final boolean success = this.txBrokerConnector.setFiatWithdrawalAccount(request.getAccountNumber(), request.getTradeInstrument(), this.secureRequestMapper.toTradingAccount(request).getAddress(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getName(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getPassword());
        if (!success) {
            throw new BrokerException();
        }
    }
    
    @RequestMapping(value = { "/trading/accounts/withdrawal/btc/set/price" }, method = { RequestMethod.POST })
    public long setupBtcWithdrawalAccountPrice(@RequestBody final BtcWithdrawalAccountPriceRequest request) {
        final long price = this.txBrokerConnector.setBtcWithdrawalAccountPrice(request.getEncodedWithdrawalAddress());
        return price;
    }
    
    @RequestMapping(value = { "/trading/accounts/withdrawal/xem/set/price" }, method = { RequestMethod.POST })
    public long setXemWithdrawalAccount(@RequestBody final XemWithdrawalAccountPriceRequest request) {
        final long price = this.txBrokerConnector.getXemWithdrawalAccountSettingPrice(request.getAccountPublicKey());
        return price;
    }
    
    @RequestMapping(value = { "/trading/accounts/withdrawal/fiat/set/price" }, method = { RequestMethod.POST })
    public long setFiatWithdrawalAccountPrice(@RequestBody final FiatWithdrawalAccountPriceRequest request) {
        final long price = this.txBrokerConnector.setFiatWithdrawalAccountPrice(request.getAccountNumber());
        return price;
    }
    
    @RequestMapping(value = { "/trading/accounts/withdrawal/xem/set" }, method = { RequestMethod.POST })
    public void setXemWithdrawalAccountPrice(@RequestBody final XemWithdrawalAccountRequest request) {
        final WalletNamePasswordPair walletPair = request.toWalletNamePasswordPair();
        final TradingStorage tradingStorage = this.tradingStorageServices.open(request);
        final boolean success = this.txBrokerConnector.setXemWithdrawalAccount(request.getAccountPublicKey(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getName(), tradingStorage.getTradingAccountAddress(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)walletPair).getPassword());
        if (!success) {
            throw new BrokerException();
        }
    }
    
    @RequestMapping(value = { "/trading/accounts/withdrawal/withdraw" }, method = { RequestMethod.POST })
    public void withdraw(@RequestBody final WithdrawRequest request) {
        final boolean success = this.brokerConnector.withdraw(request.getEscrowAccountId(), request.getWithdrawAccountId(), request.getAmount(), this.secureRequestMapper.toTradingAccount(request));
        if (!success) {
            throw new BrokerException();
        }
    }
}
