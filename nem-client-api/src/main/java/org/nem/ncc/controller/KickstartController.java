package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import org.nem.core.serialization.*;
import org.nem.ncc.model.*;
import java.util.*;
import org.nem.ncc.controller.requests.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class KickstartController
{
    private final PrimaryBrokerConnector brokerConnector;
    private final BankApiBrokerConnector bankApiBrokerConnector;

    @Autowired
    public KickstartController(final PrimaryBrokerConnector brokerConnector, final BankApiBrokerConnector bankApiBrokerConnector) {
        this.brokerConnector = brokerConnector;
        this.bankApiBrokerConnector = bankApiBrokerConnector;
    }
    
    @RequestMapping(value = { "/kickstart/receive_accounts" }, method = { RequestMethod.GET })
    public SerializableList<KickstartReceiveAccount> getKickstartReceiveAccounts() {
        return (SerializableList<KickstartReceiveAccount>)new SerializableList((Collection)this.brokerConnector.getKickstartReceiveAccounts());
    }
    
    @RequestMapping(value = { "/kickstart/transfer" }, method = { RequestMethod.POST })
    public void getXemUsingKickstart(@RequestBody final KickstartTransferRequest request) {
        this.bankApiBrokerConnector.kickstartTransfer(request.getSenderAddress(), request.getKickstartAccount().getAddress(), request.getAmount(), request.getTradeInstrument(), request.getRecipientPublicKey());
    }
}
