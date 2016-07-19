package org.nem.ncc.controller;

import org.nem.ncc.broker.listener.*;
import org.nem.ncc.trading.storage.*;
import org.springframework.web.bind.annotation.*;

@RestController
public class TradeInfoController
{
    private final OrderUpdatesServices orderUpdatesServices;
    
    public TradeInfoController(final OrderUpdatesServices services) {
        this.orderUpdatesServices = services;
    }
    
    @RequestMapping(value = { "/trading/info/orders/subscribe" }, method = { RequestMethod.POST })
    public void subscribeToOrderUpdates(@RequestBody final TradingStorageName name) {
        this.orderUpdatesServices.subscribe(name);
    }
}
