package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import org.nem.ncc.model.*;
import org.nem.core.serialization.*;
import java.util.*;
import java.util.stream.*;
import org.nem.ncc.trading.storage.*;
import org.springframework.web.bind.annotation.*;
import org.nem.core.model.*;

@RestController
public class TradeInstrumentController
{
    private final PrimaryBrokerConnector brokerConnector;
    private final SecureRequestMapper secureRequestMapper;
    private final TradeInstrumentsProvider instrumentsProvider;
    
    public TradeInstrumentController(final PrimaryBrokerConnector brokerConnector, final SecureRequestMapper secureRequestMapper, final TradeInstrumentsProvider instrumentsProvider) {
        this.brokerConnector = brokerConnector;
        this.secureRequestMapper = secureRequestMapper;
        this.instrumentsProvider = instrumentsProvider;
    }
    
    @RequestMapping(value = { "/trading/instruments/xem" }, method = { RequestMethod.GET })
    public TradeInstrument getXemInstrument() {
        return this.instrumentsProvider.getXem();
    }
    
    @RequestMapping(value = { "/trading/instruments/all" }, method = { RequestMethod.GET })
    public SerializableList<TradeInstrument> getAllTradeInstruments() {
        return (SerializableList<TradeInstrument>)new SerializableList((Collection)this.instrumentsProvider.getTradeInstruments());
    }
    
    @RequestMapping(value = { "/trading/instruments/fiat" }, method = { RequestMethod.GET })
    public SerializableList<TradeInstrument> getFiatTradeInstruments() {
        return (SerializableList<TradeInstrument>)new SerializableList((Collection)this.instrumentsProvider.getTradeInstruments().stream().filter(TradeInstrument::isFiat).collect((Collector<? super TradeInstrument, ?, List<? super TradeInstrument>>)Collectors.toList()));
    }
    
    @RequestMapping(value = { "/trading/instruments/available" }, method = { RequestMethod.POST })
    public SerializableList<TradeInstrument> getAvailableTradeInstruments(@RequestBody final TradingStorageName request) {
        final Account account = this.secureRequestMapper.toTradingAccount(request);
        return (SerializableList<TradeInstrument>)new SerializableList((Collection)this.brokerConnector.getAvailableFiatTradeInstruments(account));
    }
}
