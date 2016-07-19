package org.nem.ncc.model;

import java.math.*;
import org.nem.core.serialization.*;

public class TradePair implements SerializableEntity
{
    private final int code;
    private final BigDecimal commission;
    private final TradeInstrument baseInstrument;
    private final TradeInstrument quoteInstrument;
    private BigDecimal pegCommission;
    private String name;
    private String symbol;
    
    @Override
    public String toString() {
        return "TradePair [code=" + this.code + ", commission=" + this.commission + ", baseInstrument=" + this.baseInstrument + ", quoteInstrument=" + this.quoteInstrument + ", pegCommission=" + this.pegCommission + ", name=" + this.name + ", symbol=" + this.symbol + "]";
    }
    
    public TradePair(final int code, final BigDecimal commission, final TradeInstrument baseInstrument, final TradeInstrument quoteInstrument, final BigDecimal pegCommission, final String name, final String symbol) {
        this.code = code;
        this.commission = commission;
        this.baseInstrument = baseInstrument;
        this.quoteInstrument = quoteInstrument;
        this.pegCommission = pegCommission;
        this.name = name;
        this.symbol = symbol;
    }
    
    public TradePair(final Deserializer deserializer) {
        final Integer code = deserializer.readOptionalInt("code");
        this.code = ((code == null) ? 0 : code);
        this.commission = new BigDecimal(deserializer.readString("commission"));
        this.baseInstrument = (TradeInstrument)deserializer.readObject("baseInstrument", TradeInstrument::new);
        this.quoteInstrument = (TradeInstrument)deserializer.readObject("quoteInstrument", TradeInstrument::new);
        this.pegCommission = new BigDecimal(deserializer.readString("pegCommission"));
        this.name = deserializer.readString("name");
        this.symbol = deserializer.readString("symbol");
    }
    
    public TradePair(final TradePair other) {
        this.code = other.code;
        this.commission = other.commission;
        this.baseInstrument = other.baseInstrument;
        this.quoteInstrument = other.quoteInstrument;
        this.name = other.name;
        this.pegCommission = other.pegCommission;
        this.symbol = other.symbol;
    }
    
    public int getCode() {
        return this.code;
    }
    
    public TradeInstrument getBaseInstrument() {
        return this.baseInstrument;
    }
    
    public TradeInstrument getQuoteInstrument() {
        return this.quoteInstrument;
    }
    
    public BigDecimal getPegCommission() {
        return this.pegCommission;
    }
    
    public void setPegCommission(final BigDecimal pegCommission) {
        this.pegCommission = pegCommission;
    }
    
    public String getName() {
        return this.name;
    }
    
    public void setName(final String name) {
        this.name = name;
    }
    
    public String getSymbol() {
        return this.symbol;
    }
    
    public void setSymbol(final String symbol) {
        this.symbol = symbol;
    }
    
    public BigDecimal getCommission() {
        return this.commission;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeInt("code", this.code);
        serializer.writeString("commission", this.commission.toString());
        serializer.writeObject("baseInstrument", (SerializableEntity)this.baseInstrument);
        serializer.writeObject("quoteInstrument", (SerializableEntity)this.quoteInstrument);
        serializer.writeString("pegCommission", this.pegCommission.toString());
        serializer.writeString("name", this.name);
        serializer.writeString("symbol", this.symbol);
    }
    
    @Override
    public boolean equals(final Object obj) {
        if (obj instanceof TradePair) {
            return ((TradePair)obj).getCode() == this.code;
        }
        return super.equals(obj);
    }
}
