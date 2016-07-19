package org.nem.ncc.services;

import org.nem.ncc.connector.*;
import java.util.stream.*;
import org.nem.ncc.trading.storage.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.model.*;
import java.util.function.*;
import org.nem.core.model.ncc.*;
import java.util.*;
import com.sharedobjects.*;
import com.sharedobjects.nis.*;
import org.nem.core.utils.*;
import org.nem.core.model.*;
import org.nem.ncc.escrow.*;

public class TradingAccountsServices
{
    private final PrimaryBrokerConnector brokerConnector;
    private final NemEscrowsLocator nemEscrowServices;
    private final BtcEscrowsLocator btcEscrowLocator;
    private final FiatEscrowsLocator fiatEscrowsLocator;
    private final SecureRequestMapper secureRequestMapper;
    private final PrimaryNisConnector nisConnector;
    private final TradingTransactionsServices tradingTransactionsServices;
    private final TradeInstrumentsProvider tradeInstrumentsProvider;
    
    public TradingAccountsServices(final PrimaryBrokerConnector brokerConnector, final NemEscrowsLocator nemEscrowServices, final BtcEscrowsLocator btcEscrowLocator, final FiatEscrowsLocator fiatEscrowsLocator, final SecureRequestMapper secureRequestMapper, final PrimaryNisConnector nisConnector, final TradingTransactionsServices tradingTransactionsServices, final TradeInstrumentsProvider tradeInstrumentsProvider) {
        this.brokerConnector = brokerConnector;
        this.nemEscrowServices = nemEscrowServices;
        this.btcEscrowLocator = btcEscrowLocator;
        this.fiatEscrowsLocator = fiatEscrowsLocator;
        this.secureRequestMapper = secureRequestMapper;
        this.nisConnector = nisConnector;
        this.tradingTransactionsServices = tradingTransactionsServices;
        this.tradeInstrumentsProvider = tradeInstrumentsProvider;
    }
    
    private Collection<TradeInstrument> getFiatInstruments() {
        return this.brokerConnector.getTradeInstruments().stream().filter(TradeInstrument::isFiat).collect((Collector<? super TradeInstrument, ?, Collection<TradeInstrument>>)Collectors.toList());
    }
    
    public Collection<TradingAccountsViewModel> getFiatAccounts(final TradingStorageName name) {
        final Account tradingAccount = this.secureRequestMapper.toTradingAccount(name);
        final Collection<EscrowAccount> fiatEscrows = ((DefaultEscrowsLocator<EscrowAccount, TDiscoveredEntity>)this.fiatEscrowsLocator).getEscrowBalances(name);
        final Collection<Object> collection;
        final Collection<EscrowAccountViewModel> escrowAccounts;
        final Account account;
        final WithdrawalAccount withdrawalAccount;
        final WithdrawalAccountViewModel viewModel;
        return this.getFiatInstruments().stream().map(instrument -> {
            escrowAccounts = EscrowMapper.toViewModelList((Collection<? extends EscrowAccount>)collection.stream().filter(escrow -> escrow.getTradeInstrument().getCode() == instrument.getCode()).collect((Collector<? super Object, ?, List<Object>>)Collectors.toList()));
            withdrawalAccount = this.brokerConnector.getFiatWithdrawalAccount(account, instrument.getCode());
            viewModel = new WithdrawalAccountViewModel(withdrawalAccount, WithdrawalAccountViewModel.Status.PRESENT);
            return new TradingAccountsViewModel(instrument, viewModel, escrowAccounts, this.getLatestEscrowAccount(escrowAccounts));
        }).collect((Collector<? super Object, ?, Collection<TradingAccountsViewModel>>)Collectors.toList());
    }
    
    public TradingAccountsViewModel getXemAccounts(final TradingStorageName name) {
        final Collection<EscrowAccountViewModel> escrows = EscrowMapper.toViewModelList(((DefaultEscrowsLocator<? extends EscrowAccount, TDiscoveredEntity>)this.nemEscrowServices).getEscrowBalances(name));
        final WithdrawalAccountViewModel withdrawalAccount = this.getXemWithdrawalAccount(name);
        return new TradingAccountsViewModel(this.tradeInstrumentsProvider.getXem(), withdrawalAccount, escrows, this.getLatestEscrowAccount(escrows));
    }
    
    private WithdrawalAccountViewModel getXemWithdrawalAccount(final TradingStorageName name) {
        return this.getWithdrawalAccount(name, this.brokerConnector::getXemWithdrawalAccount, this.tradingTransactionsServices::getXemWithdrawalAccountSetTxs);
    }
    
    private WithdrawalAccountViewModel getBtcWithdrawalAccount(final TradingStorageName name) {
        return this.getWithdrawalAccount(name, this.brokerConnector::getBtcWithdrawalAccount, this.tradingTransactionsServices::getBtcWithdrawalAccountSetTxs);
    }
    
    private WithdrawalAccountViewModel getWithdrawalAccount(final TradingStorageName name, final Function<Account, WithdrawalAccount> getWithdrawalFunc, final Function<TradingStorageName, List<TransactionMetaDataPair>> getWithdrawalSetTxsFunc) {
        final Account tradingAccount = this.secureRequestMapper.toTradingAccount(name);
        final WithdrawalAccount withdrawalAccount = getWithdrawalFunc.apply(tradingAccount);
        if (withdrawalAccount != null) {
            return new WithdrawalAccountViewModel(withdrawalAccount);
        }
        final List<TransactionMetaDataPair> setWithdrawalAccountTxs = getWithdrawalSetTxsFunc.apply(name);
        final Optional<TransactionMetaDataPair> lastTx = setWithdrawalAccountTxs.stream().findFirst();
        if (setWithdrawalAccountTxs.size() > 0 && !this.isErrorResponse(lastTx.get(), tradingAccount)) {
            return new WithdrawalAccountViewModel(WithdrawalAccountViewModel.Status.PROCESSING);
        }
        return new WithdrawalAccountViewModel(WithdrawalAccountViewModel.Status.EMPTY);
    }
    
    private boolean isErrorResponse(final TransactionMetaDataPair tx, final Account tradingAccount) {
        final TransferTransaction transferTx = (TransferTransaction)tx.getEntity();
        final String message = this.decodeMessage(transferTx, tradingAccount);
        return !((Transaction)tx.getEntity()).getSigner().equals((Object)tradingAccount) && message != null && !message.split("--")[1].equals("SUCCESS");
    }
    
    public TradingAccountsViewModel getBtcAccounts(final TradingStorageName name) {
        final Collection<EscrowAccountViewModel> escrows = EscrowMapper.toViewModelList(this.btcEscrowLocator.getEscrowBalances(name));
        final WithdrawalAccountViewModel withdrawalAccount = this.getBtcWithdrawalAccount(name);
        return new TradingAccountsViewModel(this.tradeInstrumentsProvider.getBtc(), withdrawalAccount, escrows, this.getLatestEscrowAccount(escrows));
    }
    
    private EscrowAccountViewModel getLatestEscrowAccount(final Collection<EscrowAccountViewModel> escrowAccounts) {
        return escrowAccounts.stream().filter(EscrowAccountViewModel::isCurrent).findFirst().orElse(null);
    }
    
    public boolean getChangeTradingAccountResponse(final Address tradingAddress, final TradingStorageName tradingStorageName, final Long lastChangeTradingAccountTxId) {
        final List<TransactionMetaDataPair> txPairs = (List<TransactionMetaDataPair>)NisTransactionHistoryHelper.getAllIncomingTransactions(this.nisConnector, lastChangeTradingAccountTxId, (Long)null, tradingAddress);
        final Account tradingAccount = this.secureRequestMapper.toTradingAccount(tradingStorageName);
        for (final TransactionMetaDataPair pair : txPairs) {
            if (this.isChangeTradingAccountResponse(pair, tradingAccount)) {
                final TransferTransaction tx = (TransferTransaction)pair.getEntity();
                return this.decodeMessage(tx, tradingAccount).split("--")[1].equals("SUCCESS");
            }
        }
        return false;
    }
    
    private boolean isChangeTradingAccountResponse(final TransactionMetaDataPair tr, final Account recipientAccount) {
        final Transaction tx = (Transaction)tr.getEntity();
        if (tx.getType() != 257) {
            return false;
        }
        final TransferTransaction trTx = (TransferTransaction)tx;
        return UpdateTradingAccountRequest.validate(this.decodeMessage(trTx, recipientAccount));
    }
    
    public String decodeMessage(final TransferTransaction transfer, final Account recipientAccount) {
        final Message message = transfer.getMessage();
        if (message == null) {
            return null;
        }
        if (message.getType() != 2) {
            return null;
        }
        final byte[] payload = NisHelper.getDecodedPayload(message, transfer.getSigner(), recipientAccount);
        if (payload == null) {
            return null;
        }
        if (payload.length > 1 && payload[0] == -2) {
            return null;
        }
        final String messageData = StringEncoder.getString(payload);
        return messageData;
    }
}
