package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import org.nem.core.crypto.*;
import org.nem.core.serialization.*;

public class XemWithdrawalAccountRequest extends TradingStorageNamePasswordPair
{
    private final PublicKey accountPublicKey;
    
    public XemWithdrawalAccountRequest(final Deserializer deserializer) {
        super(deserializer);
        this.accountPublicKey = PublicKey.fromHexString(deserializer.readString("accountPublicKey"));
    }
    
    public PublicKey getAccountPublicKey() {
        return this.accountPublicKey;
    }
}
