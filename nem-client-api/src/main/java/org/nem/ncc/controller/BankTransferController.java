package org.nem.ncc.controller;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import org.nem.ncc.controller.requests.*;
import org.nem.ncc.trading.storage.*;
import org.nem.ncc.model.*;
import org.springframework.web.bind.annotation.*;

@RestController
public class BankTransferController
{
    private final BankApiConnector bankApiConnector;
    private final TradingStorageServices tradingStorageServices;
    private final BankApiBrokerConnector bankApiBrokerConnector;
    
    public BankTransferController(final BankApiConnector bankApiConnector, final TradingStorageServices tradingStorageServices, final BankApiBrokerConnector bankApiBrokerConnector) {
        this.bankApiConnector = bankApiConnector;
        this.tradingStorageServices = tradingStorageServices;
        this.bankApiBrokerConnector = bankApiBrokerConnector;
    }
    
    @RequestMapping(value = { "/bank_transfer" }, method = { RequestMethod.POST })
    public void transfer(@RequestBody final TransferRequest request) {
        final TradingStorage tradingStorage = this.tradingStorageServices.open(request);
        final BankAccount bankAccount = tradingStorage.getFiatAccount(request.getSenderAddress());
        this.bankApiConnector.transfer(bankAccount, request.getRecipientAddress(), request.getReceiveInstrument(), request.getAmount(), request.getNarrative());
    }
    
    @RequestMapping(value = { "/bank_deposit" }, method = { RequestMethod.POST })
    public void depostFiat(@RequestBody final TransferRequest request) {
        final TradingStorage tradingStorage = this.tradingStorageServices.open(request);
        this.bankApiBrokerConnector.depositTransfer(request.getSenderAddress(), request.getRecipientAddress(), request.getAmount(), request.getReceiveInstrument(), tradingStorage.getUserId());
    }
}
