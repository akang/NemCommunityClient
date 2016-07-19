package org.nem.ncc.controller.viewmodels;

import org.nem.ncc.model.*;
import java.util.*;
import org.nem.core.serialization.*;

public class TradingAccountsViewModel implements SerializableEntity
{
    private final TradeInstrument tradeInstrument;
    private final WithdrawalAccountViewModel withdrawalAccount;
    private final EscrowAccountViewModel currentEscrowAccount;
    private final Collection<EscrowAccountViewModel> escrowAccounts;
    
    public TradingAccountsViewModel(final TradeInstrument tradeInstrument, final WithdrawalAccountViewModel withdrawalAccount, final Collection<EscrowAccountViewModel> escrowAccounts, final EscrowAccountViewModel currentEscrowAccount) {
        this.tradeInstrument = tradeInstrument;
        this.withdrawalAccount = withdrawalAccount;
        this.currentEscrowAccount = currentEscrowAccount;
        this.escrowAccounts = escrowAccounts;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeObjectArray("escrowAccounts", (Collection)this.escrowAccounts);
        serializer.writeObject("withdrawalAccount", (SerializableEntity)this.withdrawalAccount);
        serializer.writeObject("currentEscrowAccount", (SerializableEntity)this.currentEscrowAccount);
        serializer.writeObject("tradeInstrument", (SerializableEntity)this.tradeInstrument);
    }
    
    public WithdrawalAccountViewModel getWithdrawalAccount() {
        return this.withdrawalAccount;
    }
    
    public Collection<EscrowAccountViewModel> getEscrowAccounts() {
        return this.escrowAccounts;
    }
    
    public EscrowAccountViewModel getCurrentEscrowAccount() {
        return this.currentEscrowAccount;
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
}
