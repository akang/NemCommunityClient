package org.nem.ncc.controller;

import org.nem.ncc.services.*;
import org.nem.ncc.connector.*;
import org.springframework.web.bind.annotation.*;
import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;
import org.nem.ncc.controller.viewmodels.*;
import java.util.*;
import java.time.*;
import java.util.stream.*;
import org.nem.ncc.controller.requests.*;
import org.nem.ncc.model.*;

@RestController
public class BankAccountsController
{
    private final TradingStorageServices tradingStorageServices;
    private final BankApiConnector bankApiConnector;
    
    public BankAccountsController(final TradingStorageServices tradingStorageServices, final BankApiConnector bankApiConnector) {
        this.tradingStorageServices = tradingStorageServices;
        this.bankApiConnector = bankApiConnector;
    }
    
    @RequestMapping(value = { "/trading/bank_accounts/add" }, method = { RequestMethod.POST })
    public void addBankAccount(@RequestBody final TradingStorageNamePasswordBag bag) {
        this.tradingStorageServices.open(bag).addFiatAccount(bag.getBankAccount());
    }
    
    @RequestMapping(value = { "/trading/bank_accounts" }, method = { RequestMethod.POST })
    public SerializableList<BankAccountTransfersPair> getBankAccounts(@RequestBody final TradingStorageName name) {
        final Collection<BankAccount> bankAccounts = this.tradingStorageServices.get(name).getFiatAccounts();
        final Collection<BankAccountTransfersPair> pairs = bankAccounts.stream().map(bankAccount -> new BankAccountTransfersPair(this.bankApiConnector.getBankAccountInfo(bankAccount), this.bankApiConnector.getTransfers(bankAccount, Instant.EPOCH))).collect((Collector<? super Object, ?, Collection<BankAccountTransfersPair>>)Collectors.toList());
        return (SerializableList<BankAccountTransfersPair>)new SerializableList((Collection)pairs);
    }
    
    @RequestMapping(value = { "/trading/transfers/all" }, method = { RequestMethod.POST })
    public SerializableList<BankTransfer> getAllTransfers(@RequestBody final TransfersRequest request) {
        final BankAccount bankAccount = this.tradingStorageServices.tryFindAccount(request.getAddress());
        return (SerializableList<BankTransfer>)new SerializableList((Collection)this.bankApiConnector.getTransfers(bankAccount, request.getLastQueried()));
    }
}
