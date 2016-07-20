package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.broker.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class BrokerController
{
    private final PrimaryBrokerConnector brokerConnector;

    @Autowired
    public BrokerController(final PrimaryBrokerConnector brokerConnector) {
        this.brokerConnector = brokerConnector;
    }
    
    @RequestMapping(value = { "/broker/info" }, method = { RequestMethod.GET })
    public BrokerInfoViewModel getBrokerInfo() {
        final boolean connected = this.brokerConnector.isConnected();
        if (!connected) {
            throw new BrokerException(BrokerException.Code.BROKER_NOT_AVAILABLE);
        }
        return new BrokerInfoViewModel(this.brokerConnector.isConnected());
    }
}
