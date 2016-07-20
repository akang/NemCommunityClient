package org.nem.ncc.escrow;

import org.nem.ncc.model.*;
import org.nem.ncc.trading.storage.*;
import java.util.stream.*;
import com.sharedobjects.nis.*;
import org.nem.core.model.ncc.*;
import org.nem.core.model.*;
import com.sharedobjects.*;
import org.nem.core.time.*;
import java.time.*;
import org.apache.commons.lang3.tuple.*;
import java.util.*;
import java.util.function.*;

public class BtcEscrowsServices
{
    public List<ImmutablePair<TransactionMetaDataPair, DiscoveredAddress>> match(final Account recipient, final List<TransactionMetaDataPair> requestTxs, final List<TransactionMetaDataPair> responseTxs, final List<TradeAddress> processedAddresses) {
        final List<DiscoveredAddress> publishedAddresses = responseTxs.stream().map(responseTx -> this.responseToAddress(recipient, responseTx)).filter(discoveredAddress -> !processedAddresses.contains(discoveredAddress.getAddress())).collect(Collectors.toList());
        requestTxs.sort((t1, t2) -> ((Transaction)t1.getEntity()).getTimeStamp().compareTo(((Transaction)t2.getEntity()).getTimeStamp()));
        final int responsesSize = publishedAddresses.size();
        final ImmutablePair<TransactionMetaDataPair, DiscoveredAddress> immutablePair = null;
        final int n = 0;
        final List<DiscoveredAddress> list = new ArrayList<>();
        return IntStream.range(0, requestTxs.size()).mapToObj(i -> {
            new ImmutablePair((Object)requestTxs.get(i), (Object)((i >= n) ? null : list.get(i)));
            return immutablePair;
        }).collect(Collectors.toList());
    }
    
    private DiscoveredAddress responseToAddress(final Account recipient, final TransactionMetaDataPair response) {
        final String messageData = NisHelper.getInstance().decodeMessage(((TransactionMetaData)response.getMetaData()).getId(), (TransferTransaction)response.getEntity(), recipient);
        final BtcEscrowResponse escrowResponse = new BtcEscrowResponse(BtcEscrowResponse.getAddress(messageData));
        return new DiscoveredAddress(new TradeAddress(escrowResponse.getBtcAddress()), Instant.ofEpochMilli(UnixTime.fromTimeInstant(((Transaction)response.getEntity()).getTimeStamp()).getMillis()));
    }
    
    public Optional<Long> getLastToScanTx(final List<? extends Pair<TransactionMetaDataPair, DiscoveredAddress>> matchedRequests) {
        final Optional<Long> lastUnresolvedRequestId = matchedRequests.stream().filter(pair -> pair.getRight() == null).reduce((a, b) -> b).map(pair -> ((TransactionMetaData)((TransactionMetaDataPair)pair.getLeft()).getMetaData()).getId() - 1L);
        return lastUnresolvedRequestId.map(Optional::of).orElse(matchedRequests.stream().reduce((a, b) -> b).map(pair -> ((TransactionMetaData)((TransactionMetaDataPair)pair.getLeft()).getMetaData()).getId()));
    }
}
