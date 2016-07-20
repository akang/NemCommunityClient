package org.nem.ncc.services;

import com.sharedobjects.nis.*;
import org.nem.ncc.model.*;
import java.util.function.*;
import org.nem.ncc.trading.storage.*;
import org.nem.core.model.ncc.*;
import org.nem.core.model.primitive.*;
import java.util.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.wallet.*;
import org.nem.core.model.*;
import java.util.stream.*;

public class TradingOperationsServices
{
    private final PrimaryNisConnector nisConnector;
    private final ChainServices chainServices;
    private final TradingTransactionsServices tradingTransactionsServices;
    private final WalletServices walletServices;
    private Map<TradingOperationType, Function<TradingStorageName, List<TransactionMetaDataPair>>> tradingOperationSources;
    
    public TradingOperationsServices(final PrimaryNisConnector nisConnector, final ChainServices chainServices, final TradingTransactionsServices tradingTransactionsServices, final WalletServices walletServices) {
        this.tradingOperationSources = new HashMap<TradingOperationType, Function<TradingStorageName, List<TransactionMetaDataPair>>>();
        this.nisConnector = nisConnector;
        this.chainServices = chainServices;
        this.tradingTransactionsServices = tradingTransactionsServices;
        this.walletServices = walletServices;
        this.fillFuncs();
    }
    
    private void fillFuncs() {
        this.tradingOperationSources.put(TradingOperationType.BTC_ESCROW_REQUEST, this.tradingTransactionsServices::getBtcEscrowRequestTxs);
        this.tradingOperationSources.put(TradingOperationType.BTC_ESCROW_RESPONSE, this.tradingTransactionsServices::getBtcEscrowResponseTxs);
        this.tradingOperationSources.put(TradingOperationType.DEPOSIT, this.tradingTransactionsServices::getDepositTxs);
        this.tradingOperationSources.put(TradingOperationType.USER_DETAILS_SETUP, this.tradingTransactionsServices::getUserDetailsSetupTxs);
        this.tradingOperationSources.put(TradingOperationType.USER_DETAILS_UPDATE, this.tradingTransactionsServices::getUserDetailsUpdateTxs);
        this.tradingOperationSources.put(TradingOperationType.WITHDRAW, this.tradingTransactionsServices::getWithdrawTxs);
        this.tradingOperationSources.put(TradingOperationType.XEM_WITHDRAWAL_ACCOUNT, this.tradingTransactionsServices::getXemWithdrawalAccountSetTxs);
        this.tradingOperationSources.put(TradingOperationType.BTC_WITHDRAWAL_ACCOUNT, this.tradingTransactionsServices::getBtcWithdrawalAccountSetTxs);
    }
    
    private TradingOperation toTradingOperation(final TradingOperationType type, final TransactionMetaDataPair metaDataPair, final Address address) {
        final BlockHeight lastBlockHeight = (BlockHeight)this.nisConnector.forward(this.chainServices::getChainHeightAsync);
        return new TradingOperation(type, TransactionToViewModelMapper.map(metaDataPair, address, lastBlockHeight));
    }
    
    private TradingOperation fixDirection(final TradingOperation operation, final Collection<Address> myAddresses) {
        final TransferTransactionViewModel tx = (TransferTransactionViewModel)operation.getTransaction();
        if (myAddresses.contains(tx.getRecipient())) {
            tx.setDirection(1);
        }
        else {
            tx.setDirection(2);
        }
        return operation;
    }
    
    public List<TradingOperation> getAllOperations(final TradingStorageName name) {
        try {
            return this.tradingOperationSources.keySet().stream().map(type -> this.getOperations(name, type)).flatMap(coll -> coll.stream()).sorted((op1, op2) -> Long.compare(op2.getTransaction().getTimeStamp(), op1.getTransaction().getTimeStamp())).collect(Collectors.toList());
        }
        catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }
    
    public List<TradingOperation> getOperations(final TradingStorageName name, final TradingOperationType type) {
        final Wallet wallet = this.walletServices.get(new WalletName(name.toString()));
        final Collection<Address> accounts = wallet.getOtherAccounts().stream().map(WalletAccount::getAddress).collect(Collectors.toList());
        accounts.add(wallet.getPrimaryAccount().getAddress());
        return this.tradingOperationSources.get(type).apply(name).stream().map(tx -> this.toTradingOperation(type, tx, this.getRecipient((Transaction)tx.getEntity()))).map(tx -> this.fixDirection(tx, accounts)).collect(Collectors.toList());
    }
    
    private Address getRecipient(final Transaction tx) {
        if (!(tx instanceof TransferTransaction)) {
            throw new IllegalArgumentException("Can get recipient only if transaction is transfer");
        }
        return ((TransferTransaction)tx).getRecipient().getAddress();
    }
}
