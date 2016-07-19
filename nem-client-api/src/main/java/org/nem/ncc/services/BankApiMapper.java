package org.nem.ncc.services;

import com.bim.database.models.*;
import org.nem.ncc.model.*;
import org.nem.ncc.exceptions.*;
import com.bim.models.*;
import org.nem.ncc.controller.viewmodels.*;

public class BankApiMapper
{
    private final TradeInstrumentsProvider tradeInstrumentsProvider;
    
    public BankApiMapper(final TradeInstrumentsProvider tradeInstrumentsProvider) {
        this.tradeInstrumentsProvider = tradeInstrumentsProvider;
    }
    
    public BankTransfer toClientModel(final Transfer transfer, final BankAccount myAccount) {
        return new BankTransfer(transfer.getId(), transfer.getReceiveAccount().equals(myAccount.getAddress().getEncoded()) ? 0 : 1, this.toClientModel(transfer.getSendCurrency()), this.toClientModel(transfer.getReceiveCurrency()), transfer.getSendAmount(), transfer.getReceiveAmount(), transfer.getDate().toInstant(), new TradeAddress(transfer.getSendAccount()), new TradeAddress(transfer.getReceiveAccount()), transfer.getNarrative());
    }
    
    public TradeInstrument toClientModel(final String currency) {
        return this.tradeInstrumentsProvider.getTradeInstrumentMap().values().stream().filter(tradeInstrument -> tradeInstrument.getName().equals(currency)).findFirst().orElseThrow(() -> new BankApiException(BankApiException.Code.UNKNOWN_INSTRUMENT));
    }
    
    public BankAccountInfo toClientModel(final AccountResponse accountResponse) {
        return new BankAccountInfo(new TradeAddress(accountResponse.getParams().getAccountNumber()), accountResponse.getParams().getBalance(), accountResponse.getParams().getAvailable(), this.toClientModel(accountResponse.getParams().getCurrency()));
    }
}
