package org.nem.ncc.trading.storage;

import org.nem.core.model.*;
import org.nem.core.serialization.*;
import java.util.*;
import org.nem.ncc.model.*;
import org.nem.ncc.storable.entity.*;

public class AutoSavingTradingStorage implements StorableTradingStorage
{
    private final StorableTradingStorage tradingStorage;
    private final TradingStorageDescriptor descriptor;
    private final TradingStorageRepository repository;
    
    public AutoSavingTradingStorage(final StorableTradingStorage tradingStorage, final TradingStorageDescriptor descriptor, final TradingStorageRepository repository) {
        this.tradingStorage = tradingStorage;
        this.descriptor = descriptor;
        this.repository = repository;
    }
    
    @Override
    public Collection<DiscoveredPublicKey> getXemEscrowPublicKeys() {
        return this.tradingStorage.getXemEscrowPublicKeys();
    }
    
    @Override
    public void addXemEscrowPublicKeys(final Collection<DiscoveredPublicKey> xemEscrowPublicKeys) {
        this.tradingStorage.addXemEscrowPublicKeys(xemEscrowPublicKeys);
        this.save();
    }
    
    @Override
    public Collection<DiscoveredAddress> getBtcEscrowAddresses() {
        return this.tradingStorage.getBtcEscrowAddresses();
    }
    
    @Override
    public void addBtcEscrowAddresses(final Collection<DiscoveredAddress> btcEscrowAddress) {
        this.tradingStorage.addBtcEscrowAddresses(btcEscrowAddress);
        this.save();
    }
    
    @Override
    public Long getLastScannedTxId(final int tradeInstrumentCode) {
        return this.tradingStorage.getLastScannedTxId(tradeInstrumentCode);
    }
    
    @Override
    public Collection<InstrumentTransactionPair> getLastScannedTxIds() {
        return this.tradingStorage.getLastScannedTxIds();
    }
    
    @Override
    public void setLastScannedTxId(final int tradeInstrumentCode, final long txId) {
        this.tradingStorage.setLastScannedTxId(tradeInstrumentCode, txId);
        this.save();
    }
    
    @Override
    public Address getTradingAccountAddress() {
        return this.tradingStorage.getTradingAccountAddress();
    }
    
    public void serialize(final Serializer serializer) {
        this.tradingStorage.serialize(serializer);
    }
    
    @Override
    public TradingStorageName getName() {
        return this.tradingStorage.getName();
    }
    
    @Override
    public String getPendingPublicKey() {
        return this.tradingStorage.getPendingPublicKey();
    }
    
    @Override
    public void setPendingPublicKey(final String pendingPublicKey) {
        this.tradingStorage.setPendingPublicKey(pendingPublicKey);
        this.save();
    }
    
    @Override
    public Long getChangedPublicKeyTxId() {
        return this.tradingStorage.getChangedPublicKeyTxId();
    }
    
    @Override
    public void setChangedPublicKeyTx(final Long txId) {
        this.tradingStorage.setChangedPublicKeyTx(txId);
        this.save();
    }
    
    @Override
    public TradingStorageFileExtension getFileExtension() {
        return ((StorableEntity<TEntityName, TradingStorageFileExtension>)this.tradingStorage).getFileExtension();
    }
    
    public StorableTradingStorage deserialize(final Deserializer deserializer) {
        return (StorableTradingStorage)this.tradingStorage.deserialize(deserializer);
    }
    
    public void save() {
        if (this.repository != null) {
            this.repository.save(this.descriptor, this.tradingStorage);
        }
    }
    
    @Override
    public void setTradingAccountAddress(final Address address) {
        this.tradingStorage.setTradingAccountAddress(address);
        this.save();
    }
    
    @Override
    public UUID getUserId() {
        return this.tradingStorage.getUserId();
    }
    
    @Override
    public Collection<BankAccount> getFiatAccounts() {
        return this.tradingStorage.getFiatAccounts();
    }
    
    @Override
    public BankAccount getFiatAccount(final TradeAddress address) {
        return this.tradingStorage.getFiatAccount(address);
    }
    
    @Override
    public void addFiatAccount(final BankAccount account) {
        this.tradingStorage.addFiatAccount(account);
        this.save();
    }
    
    @Override
    public Collection<DiscoveredFiatAddress> getFiatEscrowAddresses() {
        return this.tradingStorage.getFiatEscrowAddresses();
    }
    
    @Override
    public void addFiatEscrowAddresses(final Collection<DiscoveredFiatAddress> addresses) {
        this.tradingStorage.addFiatEscrowAddresses(addresses);
        this.save();
    }
    
    @Override
    public void addFiatEscrowAddress(final DiscoveredFiatAddress address) {
        this.tradingStorage.addFiatEscrowAddress(address);
        this.save();
    }
}
