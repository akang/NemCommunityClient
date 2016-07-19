package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import org.nem.ncc.controller.requests.*;
import org.nem.core.serialization.*;
import org.nem.ncc.model.*;
import java.util.*;

import org.nem.ncc.model.TradeHistoryTransaction;
import org.springframework.web.bind.annotation.*;
import com.sharedobjects.client.*;

@RestController
public class TradeHistoryController
{
    private final PrimaryBrokerConnector brokerConnector;
    
    public TradeHistoryController(final PrimaryBrokerConnector tmeConnector) {
        this.brokerConnector = tmeConnector;
    }
    
    @RequestMapping(value = { "/trading/history/transactions" }, method = { RequestMethod.POST })
    public SerializableList<TradeHistoryTransaction> getTradeHistory(@RequestBody final TradeHistoryTransactionsRequest request) {
        return (SerializableList<TradeHistoryTransaction>)new SerializableList((Collection)this.brokerConnector.getTradeHistoryTransactions(request.getTradePairCode(), 100, 0));
    }
    
    @RequestMapping(value = { "/trading/history/candlesticks" }, method = { RequestMethod.POST })
    public SerializableList<Candlestick> getCandlesticks(@RequestBody final CandlesticksRequest request) {
        return (SerializableList<Candlestick>)new SerializableList((Collection)this.brokerConnector.getCandlesticks(request.getTradePairCode(), request.getStep()));
    }
}
