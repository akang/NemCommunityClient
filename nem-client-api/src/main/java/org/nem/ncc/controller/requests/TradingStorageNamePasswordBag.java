package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;
import org.nem.core.model.*;
import org.nem.ncc.model.*;

public class TradingStorageNamePasswordBag extends TradingStorageNamePasswordPair
{
    private final Deserializer deserializer;
    
    public TradingStorageNamePasswordBag(final Deserializer deserializer) {
        super(deserializer);
        this.deserializer = deserializer;
    }
    
    public Address getTradingAccount() {
        return Address.readFrom(this.deserializer, "tradingAccount");
    }
    
    public BankAccount getBankAccount() {
        return (BankAccount)this.deserializer.readObject("bankAccount", BankAccount::new);
    }
}
