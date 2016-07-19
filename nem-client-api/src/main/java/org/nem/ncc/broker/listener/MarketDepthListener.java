package org.nem.ncc.broker.listener;

import org.springframework.beans.factory.*;
import org.nem.ncc.broker.manager.*;
import org.nem.ncc.services.*;
import org.springframework.messaging.simp.*;
import org.nem.ncc.model.*;

public class MarketDepthListener implements InitializingBean
{
    private final LevelsManager levelsManager;
    private final BrokerMapper brokerMapper;
    private final SimpMessagingTemplate messagingTemplate;
    private Thread managerThread;
    
    public MarketDepthListener(final LevelsManager levelsManager, final BrokerMapper brokerMapper, final SimpMessagingTemplate messagingTemplate) {
        this.levelsManager = levelsManager;
        this.brokerMapper = brokerMapper;
        this.messagingTemplate = messagingTemplate;
    }
    
    private void sendMessage(final String destination, final Object content) {
        this.messagingTemplate.convertAndSend((Object)destination, content);
    }
    
    public void afterPropertiesSet() throws Exception {
        final ExtendedTradePair extendedPair;
        this.levelsManager.subscribe(quotes -> {
            extendedPair = this.brokerMapper.extractExtendedTradePair(quotes);
            this.sendMessage("/topic/marketDepth", quotes);
            this.sendMessage("/topic/extendedPair", extendedPair);
            return;
        });
        (this.managerThread = new Thread((Runnable)this.levelsManager)).start();
    }
}
