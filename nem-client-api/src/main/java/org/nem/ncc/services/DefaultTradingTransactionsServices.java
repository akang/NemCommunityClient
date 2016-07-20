package org.nem.ncc.services;

import org.nem.ncc.connector.*;
import org.nem.ncc.escrow.*;
import org.nem.ncc.model.*;
import org.nem.ncc.broker.*;
import java.util.*;
import com.sharedobjects.broker.*;
import java.util.stream.*;
import com.sharedobjects.nis.*;
import org.nem.core.model.ncc.*;
import org.nem.core.model.*;
import org.nem.ncc.wallet.*;
import org.nem.ncc.trading.storage.*;

public class DefaultTradingTransactionsServices implements TradingTransactionsServices
{
    private final AccountServices accountServices;
    private final TradingStorageServices tradingStorageServices;
    private final PrimaryBrokerConnector brokerConnector;
    private final SecureRequestMapper secureRequestMapper;
    private final WalletServices walletServices;
    private final BtcEscrowsLocator btcEscrowLocator;
    
    public DefaultTradingTransactionsServices(final AccountServices accountServices, final TradingStorageServices tradingStorageServices, final PrimaryBrokerConnector brokerConnector, final SecureRequestMapper secureRequestMapper, final WalletServices walletServices, final BtcEscrowsLocator btcEscrowLocator) {
        this.accountServices = accountServices;
        this.tradingStorageServices = tradingStorageServices;
        this.brokerConnector = brokerConnector;
        this.secureRequestMapper = secureRequestMapper;
        this.walletServices = walletServices;
        this.btcEscrowLocator = btcEscrowLocator;
    }
    
    private List<Address> getNemEscrowAddresses(final TradingStorageName name) {
        return this.tradingStorageServices.get(name).getXemEscrowPublicKeys().stream().map(pk -> Address.fromPublicKey(pk.getPublicKey())).collect(Collectors.toList());
    }
    
    private Address getNemWithdrawalAddress(final TradingStorageName name) {
        final WithdrawalAccount widthrawalAddress = this.brokerConnector.getXemWithdrawalAccount(this.secureRequestMapper.toTradingAccount(name));
        if (widthrawalAddress == null) {
            return null;
        }
        return Address.fromEncoded(widthrawalAddress.getAddress().getEncoded());
    }
    
    private Collection<Address> getAccountAddresses(final TradingStorageName name) {
        final Wallet wallet = this.walletServices.get(new WalletName(name.toString()));
        final Collection<Address> accountAddresses = wallet.getOtherAccounts().stream().map(account -> account.getAddress()).collect(Collectors.toList());
        accountAddresses.add(wallet.getPrimaryAccount().getAddress());
        return accountAddresses;
    }
    
    private boolean isTxFromAnyOfAddresses(final Collection<Address> accountAddresses, final Transaction transaction) {
        final List<Address> txAddresses = transaction.getAccounts().stream().map(acc -> acc.getAddress()).collect(Collectors.toList());
        txAddresses.retainAll(accountAddresses);
        return txAddresses.size() > 0;
    }
    
    private boolean hasEmptyMessage(final Transaction tx) {
        final TransferTransaction transferTransaction = (TransferTransaction)tx;
        return transferTransaction.getMessage() == null;
    }
    
    @Override
    public List<TransactionMetaDataPair> getDepositTxs(final TradingStorageName name) {
        final List<TransactionMetaDataPair> operations = new ArrayList<TransactionMetaDataPair>();
        final Collection<Address> accountAddresses = this.getAccountAddresses(name);
        final Collection<Address> nemEscrowAddresses = this.getNemEscrowAddresses(name);
        nemEscrowAddresses.stream().map(escrow -> this.getTransactions(TransactionDirection.INCOMING, escrow).stream().filter(tx -> this.isTxFromAnyOfAddresses(accountAddresses, (Transaction)tx.getEntity())).filter(tx -> this.hasEmptyMessage((Transaction)tx.getEntity())).collect(Collectors.toList())).forEach(ops -> operations.addAll(ops));
        return operations;
    }
    
    private boolean isTransactionFromMyEscrow(final Transaction transaction, final Collection<Address> nemEscrowAddresses) {
        return transaction.getAccounts().stream().anyMatch(account -> nemEscrowAddresses.contains(account.getAddress()));
    }
    
    @Override
    public List<TransactionMetaDataPair> getWithdrawTxs(final TradingStorageName name) {
        Address nemWithdrawalAddress;
        try {
            nemWithdrawalAddress = this.getNemWithdrawalAddress(name);
        }
        catch (BrokerException ex) {
            return new ArrayList<TransactionMetaDataPair>();
        }
        final Collection<Address> nemEscrowAddresses = this.getNemEscrowAddresses(name);
        if (nemWithdrawalAddress == null) {
            return new ArrayList<TransactionMetaDataPair>();
        }
        return this.getTransactions(TransactionDirection.INCOMING, nemWithdrawalAddress).stream().filter(tx -> this.isTransactionFromMyEscrow((Transaction)tx.getEntity(), nemEscrowAddresses)).filter(tx -> this.hasEmptyMessage((Transaction)tx.getEntity())).collect(Collectors.toList());
    }
    
    @Override
    public List<TransactionMetaDataPair> getBtcEscrowRequestTxs(final TradingStorageName name) {
        final Address tradingAccountAddress = this.secureRequestMapper.toTradingAccount(name).getAddress();
        return this.btcEscrowLocator.getBtcEscrowRequests(tradingAccountAddress, Arrays.asList(this.brokerConnector.requestBrokerAccount().getAddress()), null);
    }
    
    @Override
    public List<TransactionMetaDataPair> getBtcEscrowResponseTxs(final TradingStorageName name) {
        return this.btcEscrowLocator.getBtcEscrowResponses(this.secureRequestMapper.toTradingAccount(name), Arrays.asList(this.brokerConnector.requestBrokerAccount().getAddress()), null);
    }
    
    @Override
    public List<TransactionMetaDataPair> getUserDetailsSetupTxs(final TradingStorageName name) {
        return this.getFromTradingAddressToBroker(name).filter(tx -> this.isOfType(tx, NemRequestType.ADDING_USER_DETAILS)).collect(Collectors.toList());
    }
    
    @Override
    public List<TransactionMetaDataPair> getUserDetailsUpdateTxs(final TradingStorageName name) {
        return this.getFromTradingAddressToBroker(name).filter(tx -> this.isOfType(tx, NemRequestType.UPDATING_USER_DETAILS)).collect(Collectors.toList());
    }
    
    @Override
    public List<TransactionMetaDataPair> getBtcWithdrawalAccountSetTxs(final TradingStorageName name) {
        return this.getFromTradingAddressToBroker(name).filter(tx -> this.isOfType(tx, NemRequestType.ADDING_BTC_WITHDRAWAL_ACCOUNT)).collect(Collectors.toList());
    }
    
    @Override
    public List<TransactionMetaDataPair> getXemWithdrawalAccountSetTxs(final TradingStorageName name) {
        return this.getFromTradingAddressToBroker(name).filter(tx -> this.isOfType(tx, NemRequestType.ADDING_XEM_WITHDRAWAL_ACCOUNT)).collect(Collectors.toList());
    }
    
    private Stream<TransactionMetaDataPair> getFromTradingAddressToBroker(final TradingStorageName name) {
        final Address brokerAddress = this.brokerConnector.requestBrokerAccount().getAddress();
        final Address tradingAddress = this.secureRequestMapper.toTradingAccount(name).getAddress();
        return this.getTransactions(TransactionDirection.ALL, brokerAddress).stream().filter(tx -> this.isTxFromAnyOfAddresses(Arrays.asList(tradingAddress), (Transaction)tx.getEntity()));
    }
    
    private List<TransactionMetaDataPair> getTransactions(final TransactionDirection direction, final Address address) {
        final List<TransactionMetaDataPair> txs = this.accountServices.getTransactions(direction, address, null);
        return txs;
    }
    
    private boolean isOfType(final TransactionMetaDataPair txPair, final NemRequestType type) {
        if (((Transaction)txPair.getEntity()).getType() != 257) {
            return false;
        }
        final TransferTransaction tr = (TransferTransaction)txPair.getEntity();
        final NemRequestType requestType = NisHelper.getInstance().getNemRequestType(((TransactionMetaData)txPair.getMetaData()).getId(), tr, tr.getRecipient());
        return type == requestType;
    }
}
