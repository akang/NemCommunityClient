package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import org.nem.ncc.model.*;
import java.util.*;
import org.nem.ncc.trading.storage.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.nem.core.model.*;
import org.nem.core.serialization.*;

@RestController
public class TradePairController
{
    private final PrimaryBrokerConnector brokerConnector;
    private final SecureRequestMapper secureRequestMapper;
    private final TradePairsProvider tradePairsProvider;

    @Autowired
    public TradePairController(final PrimaryBrokerConnector brokerConnector, final SecureRequestMapper secureRequestMapper, final TradePairsProvider tradePairsProvider) {
        this.brokerConnector = brokerConnector;
        this.secureRequestMapper = secureRequestMapper;
        this.tradePairsProvider = tradePairsProvider;
    }
    
    @RequestMapping(value = { "/trading/pairs/all" }, method = { RequestMethod.GET })
    public SerializableList<TradePair> getAllTradePairs() {
        return (SerializableList<TradePair>)new SerializableList((Collection)this.tradePairsProvider.getTradePairs());
    }
    
    @RequestMapping(value = { "/trading/pairs/{code}" }, method = { RequestMethod.GET })
    public TradePair getTradePair(@PathVariable("code") final int tradePairCode) {
        return this.tradePairsProvider.getTradePair(tradePairCode);
    }
    
    @RequestMapping(value = { "/trading/pairs/available" }, method = { RequestMethod.POST })
    public SerializableList<TradePair> getAvailableTradePairs(@RequestBody final TradingStorageName request) {
        final Account account = this.secureRequestMapper.toTradingAccount(request);
        final Collection<TradePair> tradePairs = this.brokerConnector.getAvailablePairs(account);
        return (SerializableList<TradePair>)new SerializableList((Collection)tradePairs);
    }
    
    @RequestMapping(value = { "/trading/pairs/available/{code}" }, method = { RequestMethod.POST })
    public SerializableEntity getAvailableTradePair(@PathVariable("code") final int tradePairCode, @RequestBody final TradingStorageName request) {
        final Account account = this.secureRequestMapper.toTradingAccount(request);
        return (SerializableEntity)this.brokerConnector.getAvailablePair(account, tradePairCode);
    }
}
