package org.nem.ncc.services;

import org.nem.ncc.trading.storage.*;
import java.util.*;
import org.nem.core.model.ncc.*;

public interface TradingTransactionsServices
{
    List<TransactionMetaDataPair> getDepositTxs(final TradingStorageName p0);
    
    List<TransactionMetaDataPair> getWithdrawTxs(final TradingStorageName p0);
    
    List<TransactionMetaDataPair> getBtcEscrowRequestTxs(final TradingStorageName p0);
    
    List<TransactionMetaDataPair> getBtcEscrowResponseTxs(final TradingStorageName p0);
    
    List<TransactionMetaDataPair> getUserDetailsSetupTxs(final TradingStorageName p0);
    
    List<TransactionMetaDataPair> getUserDetailsUpdateTxs(final TradingStorageName p0);
    
    List<TransactionMetaDataPair> getXemWithdrawalAccountSetTxs(final TradingStorageName p0);
    
    List<TransactionMetaDataPair> getBtcWithdrawalAccountSetTxs(final TradingStorageName p0);
}
