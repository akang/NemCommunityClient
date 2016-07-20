package org.nem.ncc.controller;

import org.nem.ncc.services.*;
import org.nem.ncc.trading.storage.*;
import org.nem.ncc.controller.viewmodels.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.nem.core.serialization.*;
import java.util.*;

@RestController
public class TradingAccountsController
{
    private final TradingAccountsServices tradingAccountsServices;

    @Autowired
    public TradingAccountsController(final TradingAccountsServices tradingAccountsServices) {
        this.tradingAccountsServices = tradingAccountsServices;
    }
    
    @RequestMapping(value = { "/trading/accounts/btc" }, method = { RequestMethod.POST })
    public TradingAccountsViewModel getBtcAccounts(@RequestBody final TradingStorageName name) {
        return this.tradingAccountsServices.getBtcAccounts(name);
    }
    
    @RequestMapping(value = { "/trading/accounts/xem" }, method = { RequestMethod.POST })
    public TradingAccountsViewModel getXemAccounts(@RequestBody final TradingStorageName name) {
        return this.tradingAccountsServices.getXemAccounts(name);
    }
    
    @RequestMapping(value = { "/trading/accounts/fiat" }, method = { RequestMethod.POST })
    public SerializableList<TradingAccountsViewModel> getFiatAccounts(@RequestBody final TradingStorageName request) {
        return (SerializableList<TradingAccountsViewModel>)new SerializableList((Collection)this.tradingAccountsServices.getFiatAccounts(request));
    }
}
