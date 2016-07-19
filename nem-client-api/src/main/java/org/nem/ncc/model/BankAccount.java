package org.nem.ncc.model;

import org.bitcoinj.params.*;
import org.nem.ncc.exceptions.*;
import org.bitcoinj.core.*;
import org.nem.core.serialization.*;

public class BankAccount implements SerializableEntity
{
    private final TradeInstrument tradeInstrument;
    private final String btcPrivateKey;
    private final DumpedPrivateKey dumpedBtcPrivateKey;
    private final TradeAddress address;
    private final String bitIdAddress;
    
    public BankAccount(final TradeInstrument tradeInstrument, final String btcPrivateKey, final TradeAddress address) {
        this.tradeInstrument = tradeInstrument;
        this.btcPrivateKey = btcPrivateKey;
        try {
            this.dumpedBtcPrivateKey = new DumpedPrivateKey((NetworkParameters)MainNetParams.get(), this.btcPrivateKey);
        }
        catch (AddressFormatException e) {
            throw new BankAccountException(BankAccountException.Code.INVALID_BTC_PRIVATE_KEY);
        }
        this.address = address;
        this.bitIdAddress = new Address((NetworkParameters)MainNetParams.get(), this.dumpedBtcPrivateKey.getKey().getPubKeyHash()).toString();
    }
    
    public BankAccount(final Deserializer deserializer) {
        this((TradeInstrument)deserializer.readObject("tradeInstrument", TradeInstrument::new), deserializer.readString("btcPrivateKey"), TradeAddress.readFrom(deserializer, "address"));
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeObject("tradeInstrument", (SerializableEntity)this.tradeInstrument);
        serializer.writeString("btcPrivateKey", this.btcPrivateKey);
        TradeAddress.writeTo(serializer, "address", this.address);
    }
    
    public String getBtcPrivateKey() {
        return this.btcPrivateKey;
    }
    
    public TradeAddress getAddress() {
        return this.address;
    }
    
    public DumpedPrivateKey getDumpedBtcPrivateKey() {
        return this.dumpedBtcPrivateKey;
    }
    
    public TradeInstrument getTradeInstrument() {
        return this.tradeInstrument;
    }
    
    @Override
    public int hashCode() {
        return this.address.hashCode() + this.btcPrivateKey.hashCode() + this.tradeInstrument.hashCode();
    }
    
    @Override
    public boolean equals(final Object obj) {
        if (!(obj instanceof BankAccount)) {
            return false;
        }
        final BankAccount other = (BankAccount)obj;
        return this.tradeInstrument.equals(other.getTradeInstrument()) && this.address.equals(other.getAddress()) && this.btcPrivateKey.equals(other.getBtcPrivateKey());
    }
    
    public String getBitIdAddress() {
        return this.bitIdAddress;
    }
}
