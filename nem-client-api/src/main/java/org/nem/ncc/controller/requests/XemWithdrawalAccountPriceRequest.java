package org.nem.ncc.controller.requests;

import org.nem.core.crypto.*;
import org.nem.core.serialization.*;

public class XemWithdrawalAccountPriceRequest
{
    private final PublicKey accountPublicKey;
    
    public XemWithdrawalAccountPriceRequest(final Deserializer deserializer) {
        this.accountPublicKey = PublicKey.fromHexString(deserializer.readString("accountPublicKey"));
    }
    
    public PublicKey getAccountPublicKey() {
        return this.accountPublicKey;
    }
}
