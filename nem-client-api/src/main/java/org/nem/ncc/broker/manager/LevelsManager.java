package org.nem.ncc.broker.manager;

import com.sharedobjects.network.*;
import org.nem.ncc.services.*;
import java.util.function.*;
import org.nem.ncc.model.*;
import java.time.*;
import org.nem.deploy.*;
import org.zeromq.*;
import com.sharedobjects.broker.*;
import java.util.*;
import com.sharedobjects.*;

public class LevelsManager extends ReceiveManager
{
    private final BrokerMapper brokerMapper;
    private final Collection<Consumer<MarketDepthQuotes>> consumers;
    private Instant lastTimeReceived;

    public LevelsManager(final BrokerMapper brokerMapper, final CommonConfiguration config) {
        super(ZMQ.context(1), config.getBrokerBindAddress(), (short)Port.INFO_PUBLISHER.getCode(), 7, false);
        this.consumers = new ArrayList<Consumer<MarketDepthQuotes>>();
        this.brokerMapper = brokerMapper;
    }

    private void handleResponse(final Object received) {
        if (received instanceof com.sharedobjects.client.MarketDepthQuotes) {
            final MarketDepthQuotes quotes = this.brokerMapper.toClientModel((com.sharedobjects.client.MarketDepthQuotes)received);
            this.notifyConsumers(quotes);
        }
        else if (received instanceof ResponseMessage) {
            this.log.info((Object)((ResponseMessage)received).getMessage());
        }
    }

    private void notifyConsumers(final MarketDepthQuotes marketDepth) {
        this.consumers.forEach(listener -> listener.accept((Object)marketDepth));
    }

    public void subscribe(final Consumer<MarketDepthQuotes> consumer) {
        this.consumers.add(consumer);
    }

    protected void manageReceivedData(final Object receivedData) throws Exception {
        this.lastTimeReceived = Instant.now();
        this.handleResponse(receivedData);
    }

    public Instant getLastTimeReceived() {
        return this.lastTimeReceived;
    }
}
