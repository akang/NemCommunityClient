package org.nem.ncc.controller.requests;

import org.nem.core.serialization.*;

public class BtcWithdrawalAccountPriceRequest
{
    private final String encodedWithdrawalAddress;
    
    public BtcWithdrawalAccountPriceRequest(final Deserializer deserializer) {
        this.encodedWithdrawalAddress = deserializer.readString("encodedWithdrawalAddress");
    }
    
    public String getEncodedWithdrawalAddress() {
        return this.encodedWithdrawalAddress;
    }
}
