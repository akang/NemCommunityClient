package org.nem.ncc.controller;

import org.nem.ncc.services.*;
import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;
import org.nem.ncc.controller.viewmodels.*;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.nem.ncc.controller.requests.*;

@RestController
public class TradingOperationsController
{
    private final TradingOperationsServices operationsServices;

    @Autowired
    public TradingOperationsController(final TradingOperationsServices operationsServices) {
        this.operationsServices = operationsServices;
    }
    
    @RequestMapping({ "/trading/operations/all" })
    public SerializableList<TradingOperation> getAllOperations(@RequestBody final TradingStorageName name) {
        return (SerializableList<TradingOperation>)new SerializableList((Collection)this.operationsServices.getAllOperations(name));
    }
    
    @RequestMapping({ "/trading/operations" })
    public SerializableList<TradingOperation> getOperations(@RequestBody final TradingOperationsRequest request) {
        return (SerializableList<TradingOperation>)new SerializableList((Collection)this.operationsServices.getOperations(request.getTradingStorageName(), request.getType()));
    }
}
