package org.nem.ncc.controller.requests;

import org.nem.ncc.wallet.*;
import org.nem.ncc.model.*;
import org.nem.core.model.*;
import org.nem.core.crypto.*;
import org.nem.core.serialization.*;

public class PublishEscrowAccountRequest extends WalletNamePasswordPair
{
    private final TradeInstrument tradeInstrument;
    private final Address fromAddress;
    private final PublicKey toPublicKey;
    private final PublicKey escrowPublicKey;
    
    public PublishEscrowAccountRequest(final Deserializer deserializer) {
        super(deserializer);
        this.tradeInstrument = (TradeInstrument)deserializer.readObject("tradeInstrument", TradeInstrument::new);
        this.fromAddress = Address.readFrom(deserializer, "fromAddress");
        this.toPublicKey = PublicKey.fromHexString(deserializer.readString("toPublicKey"));
        this.escrowPublicKey = PublicKey.fromHexString(deserializer.readString("escrowPublicKey"));
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
    
    public Address getFromAddress() {
        return this.fromAddress;
    }
    
    public PublicKey getToPublicKey() {
        return this.toPublicKey;
    }
    
    public PublicKey getEscrowPublicKey() {
        return this.escrowPublicKey;
    }
}
