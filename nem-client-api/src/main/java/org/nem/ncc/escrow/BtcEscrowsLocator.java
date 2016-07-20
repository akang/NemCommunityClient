package org.nem.ncc.escrow;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import org.nem.core.model.ncc.*;
import org.nem.core.model.*;
import com.sharedobjects.nis.*;
import com.sharedobjects.broker.*;
import com.sharedobjects.*;
import java.util.*;
import java.util.function.*;
import org.apache.commons.lang3.tuple.*;
import org.nem.ncc.model.*;
import java.util.stream.*;
import java.math.*;
import com.sharedobjects.client.*;
import java.time.*;
import org.nem.ncc.trading.storage.*;

public class BtcEscrowsLocator
{
    private final PrimaryNisConnector nisConnector;
    private final PrimaryBrokerConnector brokerConnector;
    private final SecureRequestMapper secureRequestMapper;
    private final TradingStorageServices tradingStorageServices;
    private final BtcEscrowsServices btcEscrowsServices;
    private final TradeInstrumentsProvider instrumentsProvider;
    
    public BtcEscrowsLocator(final PrimaryNisConnector nisConnector, final TradingStorageServices tradingStorageServices, final PrimaryBrokerConnector brokerConnector, final SecureRequestMapper secureRequestMapper, final BtcEscrowsServices btcEscrowsServices, final TradeInstrumentsProvider instrumentsProvider) {
        this.nisConnector = nisConnector;
        this.brokerConnector = brokerConnector;
        this.secureRequestMapper = secureRequestMapper;
        this.tradingStorageServices = tradingStorageServices;
        this.btcEscrowsServices = btcEscrowsServices;
        this.instrumentsProvider = instrumentsProvider;
    }
    
    public Collection<BtcEscrowAccount> getEscrowBalances(final TradingStorageName name) {
        final TradingStorage tradingStorage = this.tradingStorageServices.get(name);
        final Pair<Collection<DiscoveredAddress>, Integer> discoveredAddresses = this.discoverAddresses(tradingStorage);
        tradingStorage.addBtcEscrowAddresses((Collection<DiscoveredAddress>)discoveredAddresses.getLeft());
        final Collection<DiscoveredAddress> fullList = tradingStorage.getBtcEscrowAddresses();
        final Collection<BtcEscrowAccount> escrowBalances = this.getBalances(this.secureRequestMapper.toTradingAccount(tradingStorage), fullList);
        escrowBalances.addAll(this.getEmptyAccounts((int)discoveredAddresses.getRight(), tradingStorage.getTradingAccountAddress()));
        return escrowBalances;
    }
    
    public List<TransactionMetaDataPair> getBtcEscrowRequests(final Address tradingAddress, final Collection<Address> brokerAddresses, final Long lastScannedBtcTxId) {
        return (List<TransactionMetaDataPair>)NisTransactionHistoryHelper.getAllOutgoingTransactions(this.nisConnector, tradingAddress, (Long)null, txPair -> this.isBtcEscrowRequest(txPair, new HashSet<Address>(brokerAddresses)), txPair -> ((TransactionMetaData)txPair.getMetaData()).getId().equals(lastScannedBtcTxId));
    }
    
    public List<TransactionMetaDataPair> getBtcEscrowResponses(final Account tradingAccount, final Collection<Address> brokerAddresses, final Long lastScannedBtcTxId) {
        return (List<TransactionMetaDataPair>)NisTransactionHistoryHelper.getAllIncomingTransactions(this.nisConnector, tradingAccount.getAddress(), (Long)null, txPair -> this.isBtcEscrowResponse(tradingAccount, txPair, new HashSet<Address>(brokerAddresses)), txPair -> ((TransactionMetaData)txPair.getMetaData()).getId().equals(lastScannedBtcTxId));
    }
    
    public boolean isBtcEscrowRequest(final TransactionMetaDataPair trPair, final Set<Address> recipients) {
        if (((Transaction)trPair.getEntity()).getType() != 257) {
            return false;
        }
        final TransferTransaction tr = (TransferTransaction)trPair.getEntity();
        if (!recipients.contains(tr.getRecipient().getAddress())) {
            return false;
        }
        final NemRequestType requestType = NisHelper.getInstance().getNemRequestType(((TransactionMetaData)trPair.getMetaData()).getId(), tr, tr.getRecipient());
        return NemRequestType.BTC_KEY_GENERATION == requestType;
    }
    
    public boolean isBtcEscrowResponse(final Account recipient, final TransactionMetaDataPair trPair, final Set<Address> senders) {
        if (((Transaction)trPair.getEntity()).getType() != 257) {
            return false;
        }
        final TransferTransaction tr = (TransferTransaction)trPair.getEntity();
        if (!senders.contains(tr.getSigner().getAddress())) {
            return false;
        }
        final String message = NisHelper.getInstance().decodeMessage(((TransactionMetaData)trPair.getMetaData()).getId(), tr, recipient);
        return BtcEscrowResponse.isValid(message);
    }
    
    private Pair<Collection<DiscoveredAddress>, Integer> discoverAddresses(final TradingStorage tradingStorage) {
        final Account tradingAccount = this.secureRequestMapper.toTradingAccount(tradingStorage);
        final TradeInstrument btc = this.instrumentsProvider.getBtc();
        final Collection<Address> brokerAddresses = Arrays.asList(this.brokerConnector.requestBrokerAccount().getAddress());
        final List<TransactionMetaDataPair> requests = this.getBtcEscrowRequests(tradingAccount.getAddress(), brokerAddresses, tradingStorage.getLastScannedTxId(btc.getCode()));
        final List<TransactionMetaDataPair> responses = this.getBtcEscrowResponses(tradingAccount, brokerAddresses, tradingStorage.getLastScannedTxId(btc.getCode()));
        final List<TradeAddress> processedAddresses = tradingStorage.getBtcEscrowAddresses().stream().map((Function<? super DiscoveredAddress, TradeAddress>)DiscoveredAddress::getAddress).collect(Collectors.toList());
        final List<ImmutablePair<TransactionMetaDataPair, DiscoveredAddress>> matched = this.btcEscrowsServices.match(tradingAccount, requests, responses, processedAddresses);
        this.btcEscrowsServices.getLastToScanTx((List<? extends Pair<TransactionMetaDataPair, DiscoveredAddress>>)matched).ifPresent(txId -> tradingStorage.setLastScannedTxId(btc.getCode(), txId));
        final List<DiscoveredAddress> resolvedAddresses = matched.stream().filter(pair -> pair.getRight() != null).map(Pair::getRight).collect(Collectors.toList());
        return (Pair<Collection<DiscoveredAddress>, Integer>)new ImmutablePair((Object)resolvedAddresses, (Object)(matched.size() - resolvedAddresses.size()));
    }
    
    private Collection<BtcEscrowAccount> getEmptyAccounts(final int count, final Address tradingAccountAddress) {
        return IntStream.range(0, count).mapToObj(index -> this.getEmptyAccount(tradingAccountAddress)).collect(Collectors.toList());
    }
    
    private BtcEscrowAccount getEmptyAccount(final Address tradingAccountAddress) {
        return new BtcEscrowAccount(0, null, BigDecimal.ZERO, BigDecimal.ZERO, this.instrumentsProvider.getBtc(), BtcEscrowStatus.REQUESTED, tradingAccountAddress, Instant.ofEpochMilli(0L), Instant.ofEpochMilli(0L));
    }
    
    private Collection<BtcEscrowAccount> getBalances(final Account account, final Collection<DiscoveredAddress> discoveredAddresses) {
        final Collection<BtcEscrowAccount> balances = this.brokerConnector.getBtcEscrowBalances(account, (Collection<TradeAddress>)discoveredAddresses.stream().map((Function<? super DiscoveredAddress, TradeAddress>)DiscoveredAddress::getAddress).collect(Collectors.toList()));
        balances.stream().forEach(escrow -> escrow.setCreated(discoveredAddresses.stream().filter(address -> address.getAddress().equals(escrow.getAddress())).map(DiscoveredEntity::getCreated).findFirst().orElse(Instant.ofEpochMilli(0L))));
        return balances;
    }
}
