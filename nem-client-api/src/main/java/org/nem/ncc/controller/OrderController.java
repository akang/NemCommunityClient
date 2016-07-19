package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import org.nem.ncc.broker.*;
import org.springframework.web.bind.annotation.*;
import org.nem.ncc.controller.requests.*;
import org.nem.core.serialization.*;
import org.nem.ncc.model.*;
import org.nem.ncc.trading.storage.*;
import java.util.*;
import org.nem.core.model.*;

@RestController
public class OrderController
{
    private final PrimaryBrokerConnector brokerConnector;
    private final SecureRequestMapper secureRequestMapper;
    
    public OrderController(final PrimaryBrokerConnector brokerConnector, final SecureRequestMapper secureRequestMapper) {
        this.brokerConnector = brokerConnector;
        this.secureRequestMapper = secureRequestMapper;
    }
    
    @RequestMapping(value = { "/trading/orders/place" }, method = { RequestMethod.POST })
    public void placeOrder(@RequestBody final OrderRequest request) {
        request.getOrder().setOrderId(UUID.randomUUID());
        final boolean success = this.brokerConnector.placeOrder(request.getOrder(), this.secureRequestMapper.toTradingAccount(request));
        if (!success) {
            throw new BrokerException();
        }
    }
    
    @RequestMapping(value = { "/trading/orders/remove" }, method = { RequestMethod.POST })
    public void removeOrder(@RequestBody final RemoveOrderRequest request) {
        final boolean success = this.brokerConnector.removeOrder(request.getOrderId(), this.secureRequestMapper.toTradingAccount(request));
        if (!success) {
            throw new BrokerException();
        }
    }
    
    @RequestMapping(value = { "/trading/orders/pending" }, method = { RequestMethod.POST })
    public SerializableList<Order> getPendingOrders(@RequestBody final SecurePageRequest request) {
        final Account tradingAccount = this.secureRequestMapper.toTradingAccount(request);
        final Collection<Order> pendingOrders = this.brokerConnector.getPendingOrders(tradingAccount, request.getSkip(), request.getLimit());
        return (SerializableList<Order>)new SerializableList((Collection)pendingOrders);
    }
}
