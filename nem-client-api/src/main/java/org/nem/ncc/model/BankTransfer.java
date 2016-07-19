package org.nem.ncc.model;

import java.util.*;
import java.math.*;
import java.time.*;
import org.nem.core.serialization.*;

public class BankTransfer implements SerializableEntity
{
    public static final int DIRECTION_INCOMING = 0;
    public static final int DIRECTION_OUTGOING = 1;
    private final UUID id;
    private final int direction;
    private final TradeInstrument sendInstrument;
    private final TradeInstrument receiveInstrument;
    private final BigDecimal sendAmount;
    private final BigDecimal receiveAmount;
    private final Instant time;
    private final TradeAddress senderAddress;
    private final TradeAddress recipientAddress;
    private final String narrative;
    
    public BankTransfer(final UUID id, final int direction, final TradeInstrument sendInstrument, final TradeInstrument receiveInstrument, final BigDecimal sendAmount, final BigDecimal receiveAmount, final Instant time, final TradeAddress senderAddress, final TradeAddress recipientAddress, final String narrative) {
        this.id = id;
        this.direction = direction;
        this.sendInstrument = sendInstrument;
        this.receiveInstrument = receiveInstrument;
        this.sendAmount = sendAmount;
        this.receiveAmount = receiveAmount;
        this.time = time;
        this.senderAddress = senderAddress;
        this.recipientAddress = recipientAddress;
        this.narrative = narrative;
    }
    
    public BankTransfer(final Deserializer deserializer) {
        this.id = UUID.fromString(deserializer.readString("id"));
        this.direction = deserializer.readInt("direction");
        this.recipientAddress = TradeAddress.readFrom(deserializer, "recipientAddress");
        this.senderAddress = TradeAddress.readFrom(deserializer, "senderAddress");
        this.time = Instant.ofEpochMilli(deserializer.readLong("time"));
        this.receiveAmount = new BigDecimal(deserializer.readString("receiveAmount"));
        this.sendAmount = new BigDecimal(deserializer.readString("sendAmount"));
        this.receiveInstrument = (TradeInstrument)deserializer.readObject("receiveInstrument", TradeInstrument::new);
        this.sendInstrument = (TradeInstrument)deserializer.readObject("sendInstrument", TradeInstrument::new);
        this.narrative = deserializer.readString("narrative");
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeString("id", this.id.toString());
        serializer.writeInt("direction", this.direction);
        serializer.writeObject("sendInstrument", (SerializableEntity)this.sendInstrument);
        serializer.writeObject("receiveInstrument", (SerializableEntity)this.receiveInstrument);
        serializer.writeString("sendAmount", this.sendAmount.toString());
        serializer.writeString("receiveAmount", this.receiveAmount.toString());
        serializer.writeLong("time", this.time.toEpochMilli());
        serializer.writeString("narrative", this.narrative);
        TradeAddress.writeTo(serializer, "senderAddress", this.senderAddress);
        TradeAddress.writeTo(serializer, "recipientAddress", this.recipientAddress);
    }
    
    public UUID getId() {
        return this.id;
    }
    
    public TradeInstrument getSendInstrument() {
        return this.sendInstrument;
    }
    
    public TradeInstrument getReceiveInstrument() {
        return this.receiveInstrument;
    }
    
    public BigDecimal getSendAmount() {
        return this.sendAmount;
    }
    
    public BigDecimal getReceiveAmount() {
        return this.receiveAmount;
    }
    
    public Instant getTime() {
        return this.time;
    }
    
    public TradeAddress getSenderAddress() {
        return this.senderAddress;
    }
    
    public TradeAddress getRecipientAddress() {
        return this.recipientAddress;
    }
    
    public String getNarrative() {
        return this.narrative;
    }
}
