package org.nem.ncc.escrow;

import com.sharedobjects.broker.EscrowAccountTransmittersResponse;
import com.sharedobjects.nis.NisTransactionHistoryHelper;
import com.sharedobjects.nis.PrimaryNisConnector;
import org.nem.core.crypto.PublicKey;
import org.nem.core.model.Account;
import org.nem.core.model.Address;
import org.nem.core.model.Message;
import org.nem.core.model.TransferTransaction;
import org.nem.core.model.ncc.TransactionMetaDataPair;
import org.nem.core.time.UnixTime;
import org.nem.core.utils.StringEncoder;
import org.nem.ncc.model.EscrowAccount;
import org.nem.ncc.services.SecureRequestMapper;
import org.nem.ncc.services.TradingStorageServices;
import org.nem.ncc.trading.storage.DiscoveredEntity;
import org.nem.ncc.trading.storage.TradingStorage;
import org.nem.ncc.trading.storage.TradingStorageName;

import java.time.Instant;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.function.BiConsumer;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;
import java.util.stream.Collectors;

public abstract class DefaultEscrowsLocator<TEscrow extends EscrowAccount, TDiscoveredEntity extends DiscoveredEntity>
{
    private final PrimaryNisConnector nisConnector;
    private final Supplier<EscrowAccountTransmittersResponse[]> transmittersResponseSupplier;
    private final BiConsumer<TradingStorage, Collection<TDiscoveredEntity>> entitiesSaver;
    private final Function<TradingStorage, Collection<TDiscoveredEntity>> entitiesSupplier;
    private final BiFunction<Account, Collection<TDiscoveredEntity>, Collection<TEscrow>> balancesSupplier;
    private final SecureRequestMapper secureRequestMapper;
    private final TradingStorageServices tradingStorageServices;

    public DefaultEscrowsLocator(final PrimaryNisConnector nisConnector,
                                 final SecureRequestMapper secureRequestMapper,
                                 final TradingStorageServices tradingStorageServices,
                                 final Supplier<EscrowAccountTransmittersResponse[]> transmittersResponseSupplier,
                                 final BiConsumer<TradingStorage, Collection<TDiscoveredEntity>> entitiesSaver,
                                 final Function<TradingStorage, Collection<TDiscoveredEntity>> entitiesSupplier,
                                 final BiFunction<Account, Collection<TDiscoveredEntity>, Collection<TEscrow>> balancesSupplier) {
        this.secureRequestMapper = secureRequestMapper;
        this.tradingStorageServices = tradingStorageServices;
        this.nisConnector = nisConnector;
        this.transmittersResponseSupplier = transmittersResponseSupplier;
        this.entitiesSaver = entitiesSaver;
        this.entitiesSupplier = entitiesSupplier;
        this.balancesSupplier = balancesSupplier;
    }
    
    public Collection<TEscrow> getEscrowBalances(final TradingStorageName name) {
        final TradingStorage tradingStorage = this.tradingStorageServices.get(name);
        final Collection<TDiscoveredEntity> discoveredEntities = this.discoverEntities(tradingStorage);
        this.entitiesSaver.accept(tradingStorage, discoveredEntities);
        final Collection<TDiscoveredEntity> fullList = this.entitiesSupplier.apply(tradingStorage);
        return this.balancesSupplier.apply(this.secureRequestMapper.toTradingAccount(tradingStorage), fullList);
    }
    
    public Collection<TDiscoveredEntity> discoverEntities(final TradingStorage tradingStorage) {
        final EscrowAccountTransmittersResponse[] responses = this.transmittersResponseSupplier.get();
        return Arrays.stream(responses).map(response -> this.discoverEntities(response, tradingStorage)).flatMap(Collection::stream).collect(Collectors.toList());
    }
    
    private Collection<TDiscoveredEntity> discoverEntities(final EscrowAccountTransmittersResponse transmittersResponse, final TradingStorage tradingStorage) {
        final Address from = Address.fromPublicKey(PublicKey.fromHexString(transmittersResponse.getFromPubKey()));
        final Address to = Address.fromPublicKey(PublicKey.fromHexString(transmittersResponse.getToPubKey()));
        final int instrumentCode = transmittersResponse.getTradeInstumentCode();
        final Long stopAtTxId = tradingStorage.getLastScannedTxId(instrumentCode);
        final List<TransactionMetaDataPair> publishTxs = NisTransactionHistoryHelper.getAllOutgoingTransactions(this.nisConnector, from, null, txPair -> this.isEscrowPublishTx(txPair, to), txPair -> txPair.getMetaData().getId().equals(stopAtTxId));
        if (publishTxs.size() > 0) {
            final long lastScannedTxId = publishTxs.get(publishTxs.size() - 1).getMetaData().getId();
            tradingStorage.setLastScannedTxId(instrumentCode, lastScannedTxId);
        }
        return publishTxs.stream().map(txPair -> this.extractEntity(txPair, to)).collect(Collectors.toList());
    }
    
    private TDiscoveredEntity extractEntity(final TransactionMetaDataPair trPair, final Address recipient) {
        if (trPair.getEntity().getType() != 257) {
            return null;
        }
        final TransferTransaction tr = (TransferTransaction)trPair.getEntity();
        if (!recipient.equals(tr.getRecipient().getAddress())) {
            return null;
        }
        final Message message = tr.getMessage();
        if (message == null || message.getType() != 1) {
            return null;
        }
        final byte[] payload = message.getDecodedPayload();
        if (payload == null || payload.length <= 1 || payload[0] == -2) {
            return null;
        }
        final String messageData = StringEncoder.getString(payload);
        final Instant created = Instant.ofEpochMilli(UnixTime.fromTimeInstant(trPair.getEntity().getTimeStamp()).getMillis());
        return this.extractEntity(messageData, created);
    }
    
    protected abstract TDiscoveredEntity extractEntity(final String p0, final Instant p1);
    
    private boolean isEscrowPublishTx(final TransactionMetaDataPair trPair, final Address recipient) {
        return this.extractEntity(trPair, recipient) != null;
    }
}
