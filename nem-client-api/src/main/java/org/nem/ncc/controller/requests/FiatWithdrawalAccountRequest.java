package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class FiatWithdrawalAccountRequest extends TradingStorageNamePasswordPair
{
    private final TradeAddress accountNumber;
    private final TradeInstrument tradeInstrument;
    
    public FiatWithdrawalAccountRequest(final Deserializer deserializer) {
        super(deserializer);
        this.accountNumber = new TradeAddress(deserializer.readString("accountNumber"));
        this.tradeInstrument = (TradeInstrument)deserializer.readObject("tradeInstrument", TradeInstrument::new);
    }
    
    public TradeAddress getAccountNumber() {
        return this.accountNumber;
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
}
