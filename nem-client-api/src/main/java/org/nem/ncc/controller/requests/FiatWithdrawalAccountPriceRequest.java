package org.nem.ncc.controller.requests;

import org.nem.core.serialization.*;

public class FiatWithdrawalAccountPriceRequest
{
    private final String accountNumber;
    
    public FiatWithdrawalAccountPriceRequest(final Deserializer deserializer) {
        this.accountNumber = deserializer.readString("accountNumber");
    }
    
    public String getAccountNumber() {
        return this.accountNumber;
    }
}
