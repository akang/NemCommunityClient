package org.nem.ncc.broker.manager;

import com.sharedobjects.network.*;
import org.nem.core.model.*;
import org.nem.ncc.services.*;
import java.util.function.*;
import org.nem.ncc.model.*;
import org.nem.deploy.*;
import org.zeromq.*;
import java.util.*;
import com.sharedobjects.broker.*;

public class OrderUpdatesEmitter extends ReceiveManager
{
    private final Account brokerAccount;
    private final BrokerMapper brokerMapper;
    private final Account traderAccount;
    private final Collection<Consumer<OrderUpdate>> updatesConsumers;
    private final Collection<Consumer<Match>> matchConsumers;
    
    public OrderUpdatesEmitter(final short personalPort, final BrokerMapper brokerMapper, final CommonConfiguration config, final Account brokerAccount, final Account traderAccount) {
        super(ZMQ.context(1), config.getBrokerBindAddress(), personalPort, 7, false);
        this.updatesConsumers = new ArrayList<Consumer<OrderUpdate>>();
        this.matchConsumers = new ArrayList<Consumer<Match>>();
        this.brokerMapper = brokerMapper;
        this.brokerAccount = brokerAccount;
        this.traderAccount = traderAccount;
    }
    
    public void subscribeToUpdates(final Consumer<OrderUpdate> consumer) {
        this.updatesConsumers.add(consumer);
    }
    
    public void subscribeToMatches(final Consumer<Match> consumer) {
        this.matchConsumers.add(consumer);
    }
    
    private void notifyConsumers(final OrderUpdate notification) {
        this.updatesConsumers.stream().forEach(consumer -> consumer.accept(notification));
    }
    
    private void notifyConsumers(final Match match) {
        this.matchConsumers.stream().forEach(matchConsumer -> matchConsumer.accept(match));
    }
    
    protected void manageReceivedData(final Object receivedData) throws Exception {
        final SecureRequest request = (SecureRequest)receivedData;
        if (!request.isValid(this.brokerAccount)) {
            throw new IllegalStateException("Invalid secure message");
        }
        final Object requestBody = this.readData(request.getRequestBody());
        if (requestBody instanceof com.sharedobjects.client.OrderUpdate) {
            this.notifyConsumers(this.brokerMapper.toClientModel((com.sharedobjects.client.OrderUpdate)requestBody));
        }
        if (requestBody instanceof com.sharedobjects.trading.Match) {
            this.notifyConsumers(this.brokerMapper.toClientModel((com.sharedobjects.trading.Match)requestBody, this.traderAccount));
        }
    }
}
