package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;

public class BtcWithdrawalAccountRequest extends TradingStorageNamePasswordPair
{
    private final String encodedWithdrawalAddress;
    
    public BtcWithdrawalAccountRequest(final Deserializer deserializer) {
        super(deserializer);
        this.encodedWithdrawalAddress = deserializer.readString("encodedWithdrawalAddress");
    }
    
    public String getEncodedWithdrawalAddress() {
        return this.encodedWithdrawalAddress;
    }
}
