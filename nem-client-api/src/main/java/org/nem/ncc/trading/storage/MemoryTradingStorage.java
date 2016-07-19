package org.nem.ncc.trading.storage;

import org.nem.ncc.model.*;
import org.nem.core.model.*;
import java.util.*;
import org.eclipse.jetty.util.*;
import java.util.concurrent.*;
import org.nem.core.serialization.*;
import org.nem.ncc.exceptions.*;
import java.util.function.*;
import org.nem.ncc.storable.entity.*;

public class MemoryTradingStorage implements StorableTradingStorage
{
    private static final String EMPTY_STRING = "null";
    private final TradingStorageName name;
    private final TradingStorageFileExtension fileExtension;
    private final Set<DiscoveredPublicKey> xemEscrowPublicKeys;
    private final Set<DiscoveredAddress> btcEscrowAddresses;
    private final Set<DiscoveredFiatAddress> fiatEscrowAddresses;
    private final Map<TradeAddress, BankAccount> fiatAccounts;
    private final Map<Integer, InstrumentTransactionPair> lastScannedTxIds;
    private final UUID userId;
    private Address tradingAccountAddress;
    private String pendingPublicKey;
    private Long changedPublicKeyTxId;
    
    public MemoryTradingStorage(final TradingStorageName name) {
        this(name, new ArrayList<DiscoveredPublicKey>(), new ArrayList<DiscoveredAddress>(), new ArrayList<DiscoveredFiatAddress>(), new ArrayList<BankAccount>(), new ArrayList<InstrumentTransactionPair>(), null);
    }
    
    public MemoryTradingStorage(final TradingStorageName name, final Collection<DiscoveredPublicKey> xemEscrowPublicKeys, final Collection<DiscoveredAddress> btcEscrowAddresses, final Collection<DiscoveredFiatAddress> fiatEscrowAddresses, final Collection<BankAccount> fiatAccounts, final Collection<InstrumentTransactionPair> lastScannedTxIds, final Address tradingAccountAddress) {
        this(name, xemEscrowPublicKeys, btcEscrowAddresses, fiatEscrowAddresses, fiatAccounts, lastScannedTxIds, tradingAccountAddress, UUID.randomUUID());
    }
    
    public MemoryTradingStorage(final TradingStorageName name, final Collection<DiscoveredPublicKey> xemEscrowPublicKeys, final Collection<DiscoveredAddress> btcEscrowAddresses, final Collection<DiscoveredFiatAddress> fiatEscrowAddresses, final Collection<BankAccount> fiatAccounts, final Collection<InstrumentTransactionPair> lastScannedTxIds, final Address tradingAccountAddress, final UUID userId) {
        this.fileExtension = new TradingStorageFileExtension();
        this.xemEscrowPublicKeys = (Set<DiscoveredPublicKey>)new ConcurrentHashSet();
        this.btcEscrowAddresses = (Set<DiscoveredAddress>)new ConcurrentHashSet();
        this.fiatEscrowAddresses = (Set<DiscoveredFiatAddress>)new ConcurrentHashSet();
        this.fiatAccounts = new ConcurrentHashMap<TradeAddress, BankAccount>();
        this.lastScannedTxIds = new ConcurrentHashMap<Integer, InstrumentTransactionPair>();
        if (name == null) {
            throw new IllegalArgumentException("name can't be null");
        }
        if (xemEscrowPublicKeys == null) {
            throw new IllegalArgumentException("xemEscrowPubKeys can't be null");
        }
        if (btcEscrowAddresses == null) {
            throw new IllegalArgumentException("btcEscrowAddresses can't be null");
        }
        if (fiatEscrowAddresses == null) {
            throw new IllegalArgumentException("fiatEscrowAddresses can't be null");
        }
        if (fiatAccounts == null) {
            throw new IllegalArgumentException("fiatAccounts can't be null");
        }
        if (lastScannedTxIds == null) {
            throw new IllegalArgumentException("lastScannedTxIds can't be null");
        }
        this.name = name;
        this.addXemEscrowPublicKeys(xemEscrowPublicKeys);
        this.addBtcEscrowAddresses(btcEscrowAddresses);
        this.addFiatEscrowAddresses(fiatEscrowAddresses);
        this.addFiatAccounts(fiatAccounts);
        this.addLastScannedTxIds(lastScannedTxIds);
        this.tradingAccountAddress = tradingAccountAddress;
        this.userId = userId;
    }
    
    public MemoryTradingStorage(final Deserializer deserializer) {
        this.fileExtension = new TradingStorageFileExtension();
        this.xemEscrowPublicKeys = (Set<DiscoveredPublicKey>)new ConcurrentHashSet();
        this.btcEscrowAddresses = (Set<DiscoveredAddress>)new ConcurrentHashSet();
        this.fiatEscrowAddresses = (Set<DiscoveredFiatAddress>)new ConcurrentHashSet();
        this.fiatAccounts = new ConcurrentHashMap<TradeAddress, BankAccount>();
        this.lastScannedTxIds = new ConcurrentHashMap<Integer, InstrumentTransactionPair>();
        final String tradingAccountAddressStr = deserializer.readString("tradingAccountAddress");
        this.tradingAccountAddress = (tradingAccountAddressStr.equals("null") ? null : Address.fromEncoded(tradingAccountAddressStr));
        this.addXemEscrowPublicKeys(deserializer.readObjectArray("xemEscrowPublicKeys", DiscoveredPublicKey::new));
        this.addBtcEscrowAddresses(deserializer.readObjectArray("btcEscrowAddresses", DiscoveredAddress::new));
        this.addFiatEscrowAddresses(deserializer.readObjectArray("fiatEscrowAddresses", DiscoveredFiatAddress::new));
        this.addFiatAccounts(deserializer.readObjectArray("fiatAccounts", BankAccount::new));
        this.addLastScannedTxIds(deserializer.readObjectArray("lastScannedTxIds", InstrumentTransactionPair::new));
        this.changedPublicKeyTxId = deserializer.readLong("changedPublicKeyTxId");
        this.changedPublicKeyTxId = ((this.changedPublicKeyTxId == 0L) ? null : this.changedPublicKeyTxId);
        this.pendingPublicKey = deserializer.readString("pendingPublicKey");
        this.pendingPublicKey = (this.pendingPublicKey.equals("null") ? null : this.pendingPublicKey);
        this.name = TradingStorageName.readFrom(deserializer, "tradingStorage");
        this.userId = UUID.fromString(deserializer.readString("userId"));
    }
    
    @Override
    public Collection<DiscoveredPublicKey> getXemEscrowPublicKeys() {
        return new ArrayList<DiscoveredPublicKey>(this.xemEscrowPublicKeys);
    }
    
    @Override
    public Collection<DiscoveredAddress> getBtcEscrowAddresses() {
        return new ArrayList<DiscoveredAddress>(this.btcEscrowAddresses);
    }
    
    @Override
    public Address getTradingAccountAddress() {
        return this.tradingAccountAddress;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeString("tradingAccountAddress", (this.tradingAccountAddress != null) ? this.tradingAccountAddress.getEncoded() : MemoryTradingStorage.EMPTY_STRING);
        serializer.writeObjectArray("xemEscrowPublicKeys", (Collection)this.xemEscrowPublicKeys);
        serializer.writeObjectArray("btcEscrowAddresses", (Collection)this.btcEscrowAddresses);
        serializer.writeObjectArray("fiatEscrowAddresses", (Collection)this.fiatEscrowAddresses);
        serializer.writeObjectArray("fiatAccounts", (Collection)this.fiatAccounts.values());
        serializer.writeObjectArray("lastScannedTxIds", (Collection)this.lastScannedTxIds.values());
        serializer.writeLong("changedPublicKeyTxId", (this.changedPublicKeyTxId != null) ? ((long)this.changedPublicKeyTxId) : 0L);
        serializer.writeString("pendingPublicKey", (this.pendingPublicKey != null) ? this.pendingPublicKey : MemoryTradingStorage.EMPTY_STRING);
        StorableEntityName.writeTo(serializer, "tradingStorage", (StorableEntityName<StorableEntityName>)this.name);
        serializer.writeString("userId", this.userId.toString());
    }
    
    @Override
    public TradingStorageName getName() {
        return this.name;
    }
    
    @Override
    public String getPendingPublicKey() {
        return this.pendingPublicKey;
    }
    
    @Override
    public void setPendingPublicKey(final String pendingPublicKey) {
        this.pendingPublicKey = pendingPublicKey;
    }
    
    @Override
    public Long getChangedPublicKeyTxId() {
        return this.changedPublicKeyTxId;
    }
    
    @Override
    public void setChangedPublicKeyTx(final Long txId) {
        this.changedPublicKeyTxId = txId;
    }
    
    @Override
    public TradingStorageFileExtension getFileExtension() {
        return this.fileExtension;
    }
    
    public StorableTradingStorage deserialize(final Deserializer deserializer) {
        return new MemoryTradingStorage(deserializer);
    }
    
    @Override
    public void addXemEscrowPublicKeys(final Collection<DiscoveredPublicKey> xemEscrowPublicKeys) {
        if (xemEscrowPublicKeys == null) {
            throw new IllegalArgumentException("xemEscrowPublicKeys can't be null");
        }
        try {
            this.xemEscrowPublicKeys.addAll(xemEscrowPublicKeys);
        }
        catch (Exception e) {
            throw new TradingStorageException(TradingStorageException.Code.CANT_ADD_XEM_ESCROW_KEY, e);
        }
    }
    
    private void addFiatAccounts(final Collection<BankAccount> fiatAccounts) {
        fiatAccounts.forEach(this::addFiatAccount);
    }
    
    @Override
    public void addBtcEscrowAddresses(final Collection<DiscoveredAddress> btcEscrowAddresses) {
        if (btcEscrowAddresses == null) {
            throw new IllegalArgumentException("btcEscrowAddresses can't be null");
        }
        try {
            this.btcEscrowAddresses.addAll(btcEscrowAddresses);
        }
        catch (Exception e) {
            throw new TradingStorageException(TradingStorageException.Code.CANT_ADD_BTC_ESCROW_ADDRESS, e);
        }
    }
    
    @Override
    public Long getLastScannedTxId(final int tradeInstrumentCode) {
        final InstrumentTransactionPair tx = this.lastScannedTxIds.get(tradeInstrumentCode);
        return (tx == null) ? null : tx.getLastScannedTxId();
    }
    
    @Override
    public Collection<InstrumentTransactionPair> getLastScannedTxIds() {
        return this.lastScannedTxIds.values();
    }
    
    @Override
    public void setLastScannedTxId(final int tradeInstrumentCode, final long txId) {
        this.lastScannedTxIds.put(tradeInstrumentCode, new InstrumentTransactionPair(tradeInstrumentCode, txId));
    }
    
    @Override
    public void setTradingAccountAddress(final Address address) {
        if (address == null) {
            throw new IllegalArgumentException("address can't be null");
        }
        this.tradingAccountAddress = address;
    }
    
    @Override
    public UUID getUserId() {
        return this.userId;
    }
    
    @Override
    public Collection<BankAccount> getFiatAccounts() {
        return this.fiatAccounts.values();
    }
    
    @Override
    public BankAccount getFiatAccount(final TradeAddress address) {
        return this.fiatAccounts.get(address);
    }
    
    @Override
    public void addFiatAccount(final BankAccount account) {
        if (account == null) {
            throw new IllegalArgumentException("account can't be null");
        }
        if (this.fiatAccounts.values().contains(this.fiatAccounts)) {
            throw new TradingStorageException(TradingStorageException.Code.TRADING_STORAGE_ALREADY_CONTAINS_THIS_BANK_ACCOUNT);
        }
        this.fiatAccounts.put(account.getAddress(), account);
    }
    
    @Override
    public Collection<DiscoveredFiatAddress> getFiatEscrowAddresses() {
        return this.fiatEscrowAddresses;
    }
    
    @Override
    public void addFiatEscrowAddresses(final Collection<DiscoveredFiatAddress> addresses) {
        addresses.stream().forEach(this::addFiatEscrowAddress);
    }
    
    @Override
    public void addFiatEscrowAddress(final DiscoveredFiatAddress address) {
        if (address == null) {
            throw new IllegalArgumentException("address cannot be null");
        }
        if (this.fiatEscrowAddresses.contains(address)) {
            throw new TradingStorageException(TradingStorageException.Code.TRADING_STORAGE_ALREADY_CONTAINS_THIS_FIAT_ESCROW_ACCOUNT);
        }
        this.fiatEscrowAddresses.add(address);
    }
    
    private void addLastScannedTxIds(final Collection<InstrumentTransactionPair> lastScannedTxIds) {
        lastScannedTxIds.stream().forEach(pair -> this.setLastScannedTxId(pair.getInstrumentCode(), pair.getLastScannedTxId()));
    }
}
