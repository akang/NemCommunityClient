package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import java.math.*;
import org.nem.ncc.model.*;
import org.nem.core.crypto.*;
import org.nem.core.serialization.*;

public class KickstartTransferRequest extends TradingStorageNamePasswordPair
{
    private final TradeAddress senderAddress;
    private final TradeInstrument tradeInstrument;
    private final BigDecimal amount;
    private final KickstartReceiveAccount kickstartAccount;
    private final PublicKey recipientPublicKey;
    
    public KickstartTransferRequest(final Deserializer deserializer) {
        super(deserializer);
        this.senderAddress = TradeAddress.readFrom(deserializer, "senderAddress");
        this.tradeInstrument = (TradeInstrument)deserializer.readObject("tradeInstrument", TradeInstrument::new);
        this.amount = new BigDecimal(deserializer.readString("amount"));
        this.kickstartAccount = (KickstartReceiveAccount)deserializer.readObject("kickstartAccount", KickstartReceiveAccount::new);
        this.recipientPublicKey = PublicKey.fromHexString(deserializer.readString("recipientPublicKey"));
    }
    
    public KickstartReceiveAccount getKickstartAccount() {
        return this.kickstartAccount;
    }
    
    public TradeAddress getSenderAddress() {
        return this.senderAddress;
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
    
    public BigDecimal getAmount() {
        return this.amount;
    }
    
    public PublicKey getRecipientPublicKey() {
        return this.recipientPublicKey;
    }
}
