package org.nem.ncc.escrow;

import org.nem.ncc.model.*;
import com.sharedobjects.broker.*;
import com.google.common.base.*;
import java.util.function.*;
import org.nem.ncc.services.*;
import org.nem.ncc.trading.storage.*;
import java.util.stream.*;
import org.nem.core.crypto.*;
import com.sharedobjects.nis.*;
import org.nem.core.model.ncc.*;
import java.util.*;
import org.nem.core.utils.*;
import org.nem.core.time.*;
import java.time.*;
import org.nem.core.model.*;

public abstract class DefaultEscrowsLocator<TEscrow extends EscrowAccount, TDiscoveredEntity extends DiscoveredEntity>
{
    private final PrimaryNisConnector nisConnector;
    private final Supplier<EscrowAccountTransmittersResponse[]> transmittersResponseSupplier;
    private final BiConsumer<TradingStorage, Collection<TDiscoveredEntity>> entitiesSaver;
    private final Function<TradingStorage, Collection<TDiscoveredEntity>> entitiesSupplier;
    private final BiFunction<Account, Collection<TDiscoveredEntity>, Collection<TEscrow>> balancesSupplier;
    private final SecureRequestMapper secureRequestMapper;
    private final TradingStorageServices tradingStorageServices;
    
    public DefaultEscrowsLocator(final PrimaryNisConnector nisConnector, final SecureRequestMapper secureRequestMapper, final TradingStorageServices tradingStorageServices, final Supplier<EscrowAccountTransmittersResponse[]> transmittersResponseSupplier, final BiConsumer<TradingStorage, Collection<TDiscoveredEntity>> entitiesSaver, final Function<TradingStorage, Collection<TDiscoveredEntity>> entitiesSupplier, final BiFunction<Account, Collection<TDiscoveredEntity>, Collection<TEscrow>> balancesSupplier) {
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
        final Collection<TDiscoveredEntity> fullList = (Collection<TDiscoveredEntity>)this.entitiesSupplier.apply((Object)tradingStorage);
        return this.balancesSupplier.apply(this.secureRequestMapper.toTradingAccount(tradingStorage), fullList);
    }
    
    public Collection<TDiscoveredEntity> discoverEntities(final TradingStorage tradingStorage) {
        final EscrowAccountTransmittersResponse[] responses = this.transmittersResponseSupplier.get();
        return Arrays.stream(responses).map(response -> this.discoverEntities(response, tradingStorage)).flatMap((java.util.function.Function<? super Object, ? extends Stream<?>>)Collection::stream).collect((Collector<? super Object, ?, Collection<TDiscoveredEntity>>)Collectors.toList());
    }
    
    private Collection<TDiscoveredEntity> discoverEntities(final EscrowAccountTransmittersResponse transmittersResponse, final TradingStorage tradingStorage) {
        final Address from = Address.fromPublicKey(PublicKey.fromHexString(transmittersResponse.getFromPubKey()));
        final Address to = Address.fromPublicKey(PublicKey.fromHexString(transmittersResponse.getToPubKey()));
        final int instrumentCode = transmittersResponse.getTradeInstumentCode();
        final Long stopAtTxId = tradingStorage.getLastScannedTxId(instrumentCode);
        final List<TransactionMetaDataPair> publishTxs = (List<TransactionMetaDataPair>)NisTransactionHistoryHelper.getAllOutgoingTransactions(this.nisConnector, from, (Long)null, txPair -> this.isEscrowPublishTx(txPair, to), txPair -> ((TransactionMetaData)txPair.getMetaData()).getId().equals(stopAtTxId));
        if (publishTxs.size() > 0) {
            final long lastScannedTxId = ((TransactionMetaData)publishTxs.get(publishTxs.size() - 1).getMetaData()).getId();
            tradingStorage.setLastScannedTxId(instrumentCode, lastScannedTxId);
        }
        return publishTxs.stream().map(txPair -> this.extractEntity(txPair, to)).collect((Collector<? super Object, ?, Collection<TDiscoveredEntity>>)Collectors.toList());
    }
    
    private TDiscoveredEntity extractEntity(final TransactionMetaDataPair trPair, final Address recipient) {
        if (((Transaction)trPair.getEntity()).getType() != 257) {
            return null;
        }
        final TransferTransaction tr = (TransferTransaction)trPair.getEntity();
        if (!recipient.equals((Object)tr.getRecipient().getAddress())) {
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
        final Instant created = Instant.ofEpochMilli(UnixTime.fromTimeInstant(((Transaction)trPair.getEntity()).getTimeStamp()).getMillis());
        return this.extractEntity(messageData, created);
    }
    
    protected abstract TDiscoveredEntity extractEntity(final String p0, final Instant p1);
    
    private boolean isEscrowPublishTx(final TransactionMetaDataPair trPair, final Address recipient) {
        return this.extractEntity(trPair, recipient) != null;
    }
}
