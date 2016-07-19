package org.nem.ncc.model;

import java.math.*;
import org.nem.core.serialization.*;

public class TradeInstrument implements SerializableEntity
{
    protected final int code;
    protected final String name;
    protected final boolean isFiat;
    protected final BigDecimal minStep;
    protected final BigDecimal minAmount;
    
    public TradeInstrument(final int code, final String name, final boolean isFiat, final BigDecimal minStep, final BigDecimal minAmount) {
        this.code = code;
        this.name = name;
        this.isFiat = isFiat;
        this.minStep = minStep;
        this.minAmount = minAmount;
    }
    
    public TradeInstrument(final int code, final String name, final BigDecimal minStep, final BigDecimal minAmount) {
        this(code, name, false, minStep, minAmount);
    }
    
    public TradeInstrument(final int code, final String name, final int isFiat, final BigDecimal minStep, final BigDecimal minAmount) {
        this(code, name, isFiat == 1, minStep, minAmount);
    }
    
    public boolean isFiat() {
        return this.isFiat;
    }
    
    public int getCode() {
        return this.code;
    }
    
    public TradeInstrument(final Deserializer deserializer) {
        this(deserializer.readOptionalInt("code"), deserializer.readOptionalString("name"), deserializer.readOptionalInt("isFiat") == 1, new BigDecimal(deserializer.readString("minStep")), new BigDecimal(deserializer.readString("minAmount")));
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeInt("code", this.code);
        serializer.writeString("name", this.name);
        serializer.writeInt("isFiat", (int)(this.isFiat ? 1 : 0));
        serializer.writeString("minStep", this.minStep.toString());
        serializer.writeString("minAmount", this.minAmount.toString());
    }
    
    @Override
    public boolean equals(final Object obj) {
        return ((TradeInstrument)obj).code == this.code;
    }
    
    @Override
    public int hashCode() {
        return Integer.hashCode(this.code);
    }
    
    public String getName() {
        return this.name;
    }
    
    public BigDecimal getMinStep() {
        return this.minStep;
    }
    
    public BigDecimal getMinAmount() {
        return this.minAmount;
    }
}
