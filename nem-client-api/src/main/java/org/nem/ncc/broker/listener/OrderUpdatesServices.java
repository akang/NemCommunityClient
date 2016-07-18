package org.nem.ncc.broker.listener;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import org.springframework.messaging.simp.*;
import org.nem.deploy.*;
import org.nem.ncc.trading.storage.*;
import org.nem.ncc.broker.manager.*;
import java.util.concurrent.*;
import java.util.function.*;
import org.nem.ncc.model.*;
import org.nem.core.model.*;
import java.util.*;

public class OrderUpdatesServices
{
    private final BrokerMapper brokerMapper;
    private final PrimaryBrokerConnector brokerConnector;
    private final SecureRequestMapper secureRequestMapper;
    private final SimpMessagingTemplate messagingTemplate;
    private final CommonConfiguration configuration;
    private final Map<TradingStorageName, OrderUpdatesEmitter> orderUpdatesEmitters;

    public OrderUpdatesServices(final BrokerMapper brokerMapper, final PrimaryBrokerConnector brokerConnector, final SecureRequestMapper secureRequestMapper, final SimpMessagingTemplate messagingTemplate, final CommonConfiguration configuration) {
        this.orderUpdatesEmitters = new ConcurrentHashMap<TradingStorageName, OrderUpdatesEmitter>();
        this.brokerMapper = brokerMapper;
        this.brokerConnector = brokerConnector;
        this.secureRequestMapper = secureRequestMapper;
        this.messagingTemplate = messagingTemplate;
        this.configuration = configuration;
    }

    public void subscribe(final TradingStorageName name) {
        if (this.orderUpdatesEmitters.containsKey(name)) {
            return;
        }
        final Account tradingAccount = this.secureRequestMapper.toTradingAccount(name);
        final UUID userId = this.secureRequestMapper.toUserId(name);
        if (!this.brokerConnector.hasUserDetails(userId)) {
            return;
        }
        final OrderUpdatesEmitter emitter = new OrderUpdatesEmitter(this.brokerConnector.getPersonalPort(tradingAccount, userId), this.brokerMapper, this.configuration, this.brokerConnector.requestBrokerAccount(), tradingAccount);
        this.orderUpdatesEmitters.put(name, emitter);
        emitter.subscribeToUpdates((Consumer<OrderUpdate>)(update -> this.notifyOrderUpdate(update, name)));
        emitter.subscribeToMatches((Consumer<Match>)(match -> this.notifyMatch(match, name)));
        final Thread emitterThread = new Thread((Runnable)emitter);
        emitterThread.start();
    }

    private void notifyOrderUpdate(final OrderUpdate update, final TradingStorageName tradingStorageName) {
        this.messagingTemplate.convertAndSend((Object)("/topic/" + tradingStorageName.toString() + "/orders"), (Object)update);
    }

    private void notifyMatch(final Match match, final TradingStorageName tradingStorageName) {
        this.messagingTemplate.convertAndSend((Object)("/topic/" + tradingStorageName.toString() + "/matches"), (Object)match);
    }
}
