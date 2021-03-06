package org.nem.ncc.services;

import org.apache.commons.io.IOUtils;
import org.nem.core.utils.ExceptionUtils;
import org.nem.ncc.exceptions.NccException;
import org.nem.ncc.model.BankAccount;
import org.nem.ncc.model.TradeAddress;
import org.nem.ncc.storable.entity.storage.StorableEntityReadMode;
import org.nem.ncc.trading.storage.*;

import java.io.InputStream;
import java.io.OutputStream;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

public class DefaultTradingStorageServices implements TradingStorageServices
{
    private final TradingStorageRepository repository;
    private final TradingStorageDescriptorFactory descriptorFactory;
    private final Map<TradingStorageName, TradingStorage> tradingStorages;
    
    public DefaultTradingStorageServices(final TradingStorageRepository repository, final TradingStorageDescriptorFactory descriptorFactory) {
        this.tradingStorages = new ConcurrentHashMap<>();
        this.repository = repository;
        this.descriptorFactory = descriptorFactory;
    }
    
    public List<TradingStorageName> getOpenTradingStorageNames() {
        return this.tradingStorages.keySet().stream().collect(Collectors.toList());
    }
    
    @Override
    public TradingStorage get(final TradingStorageName name) {
        final TradingStorage tradingStorage = this.tradingStorages.get(name);
        if (tradingStorage == null) {
            throw new NccException(NccException.Code.TRADING_STORAGE_IS_NOT_OPEN);
        }
        return tradingStorage;
    }
    
    @Override
    public TradingStorage open(final TradingStorageNamePasswordPair pair) {
        final TradingStorage tradingStorage = this.tradingStorages.getOrDefault(pair.getName(), null);
        final TradingStorageDescriptor descriptor = this.descriptorFactory.openExisting(pair, new TradingStorageFileExtension());
        if (tradingStorage != null) {
            this.repository.load(descriptor);
            return tradingStorage;
        }
        return this.wrapTradingStorage(this.repository.load(descriptor), descriptor);
    }
    
    @Override
    public TradingStorage openOrCreate(final TradingStorageNamePasswordPair pair) {
        try {
            return this.open(pair);
        }
        catch (TradingStorageException e) {
            if (Integer.compare(TradingStorageException.Code.TRADING_STORAGE_DOES_NOT_EXIST.value(), e.getCode().value()) == 0) {
                return this.create(pair);
            }
            throw e;
        }
    }
    
    @Override
    public TradingStorage create(final TradingStorageNamePasswordPair pair) {
        final TradingStorageDescriptor descriptor = this.descriptorFactory.createNew(pair, new TradingStorageFileExtension());
        final AutoSavingTradingStorage tradingStorage = this.wrapTradingStorage(new MemoryTradingStorage(pair.getName()), descriptor);
        tradingStorage.save();
        return tradingStorage;
    }
    
    @Override
    public void close(final TradingStorageName name) {
        this.tradingStorages.remove(name);
    }
    
    @Override
    public void move(final TradingStorageNamePasswordPair originalPair, final TradingStorageNamePasswordPair desiredPair) {
        final boolean hasNameChange = !originalPair.getName().equals(desiredPair.getName());
        final TradingStorageDescriptor newTradingStorageDescriptor = hasNameChange ? this.descriptorFactory.createNew(desiredPair, new TradingStorageFileExtension()) : this.descriptorFactory.openExisting(desiredPair, new TradingStorageFileExtension());
        final TradingStorageDescriptor originalTradingStorageDescriptor = this.descriptorFactory.openExisting(originalPair, new TradingStorageFileExtension());
        final TradingStorage originalTradingStorage = this.repository.load(originalTradingStorageDescriptor);
        final AutoSavingTradingStorage addressBook = this.wrapTradingStorage(new MemoryTradingStorage(desiredPair.getName(), originalTradingStorage.getXemEscrowPublicKeys(), originalTradingStorage.getBtcEscrowAddresses(), originalTradingStorage.getFiatEscrowAddresses(), originalTradingStorage.getFiatAccounts(), originalTradingStorage.getLastScannedTxIds(), originalTradingStorage.getTradingAccountAddress(), originalTradingStorage.getUserId()), newTradingStorageDescriptor);
        addressBook.save();
        if (hasNameChange) {
            this.tradingStorages.remove(originalPair.getName());
            originalTradingStorageDescriptor.delete();
        }
    }
    
    @Override
    public void copyTo(final TradingStorageNamePasswordPair pair, final OutputStream outputStream) {
        final TradingStorageDescriptor descriptor = this.descriptorFactory.openExisting(pair, new TradingStorageFileExtension());
        ExceptionUtils.propagateVoid(() -> {
            try (final InputStream inputStream = descriptor.openRead(StorableEntityReadMode.Raw)) {
                IOUtils.copy(inputStream, outputStream);
            }
        });
    }
    
    @Override
    public BankAccount tryFindAccount(final TradeAddress address) {
        return this.tradingStorages.values().stream().map(TradingStorage::getFiatAccounts).flatMap(bankAccounts -> bankAccounts.stream()).filter(bankAccount -> bankAccount.getAddress().equals(address)).findFirst().orElseThrow(() -> new TradingStorageException(TradingStorageException.Code.NO_FIAT_ACCOUNT_WITH_ADDRESS));
    }
    
    private AutoSavingTradingStorage wrapTradingStorage(final StorableTradingStorage tradingStorage, final TradingStorageDescriptor descriptor) {
        final AutoSavingTradingStorage autoSavingTradingStorage = new AutoSavingTradingStorage(tradingStorage, descriptor, this.repository);
        this.tradingStorages.put(descriptor.getTradingStorageName(), autoSavingTradingStorage);
        return autoSavingTradingStorage;
    }
}
