package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import org.nem.ncc.model.*;
import java.math.*;
import org.nem.core.serialization.*;

public class TransferRequest extends TradingStorageNamePasswordPair
{
    private final TradeAddress senderAddress;
    private final TradeAddress recipientAddress;
    private final TradeInstrument receiveInstrument;
    private final BigDecimal amount;
    private final String narrative;
    
    public TransferRequest(final Deserializer deserializer) {
        super(deserializer);
        this.senderAddress = TradeAddress.readFrom(deserializer, "sender");
        this.recipientAddress = TradeAddress.readFrom(deserializer, "recipient");
        this.receiveInstrument = (TradeInstrument)deserializer.readObject("receiveInstrument", TradeInstrument::new);
        this.amount = new BigDecimal(deserializer.readString("amount"));
        this.narrative = deserializer.readOptionalString("narrative");
    }
    
    public TradeAddress getSenderAddress() {
        return this.senderAddress;
    }
    
    public TradeAddress getRecipientAddress() {
        return this.recipientAddress;
    }
    
    public TradeInstrument getReceiveInstrument() {
        return this.receiveInstrument;
    }
    
    public BigDecimal getAmount() {
        return this.amount;
    }
    
    public String getNarrative() {
        return this.narrative;
    }
}
