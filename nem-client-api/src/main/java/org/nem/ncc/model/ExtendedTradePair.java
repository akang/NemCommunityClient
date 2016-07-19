package org.nem.ncc.model;

import java.math.*;
import org.nem.core.serialization.*;

public class ExtendedTradePair extends TradePair
{
    private final BigDecimal bid;
    private final BigDecimal ask;
    
    public ExtendedTradePair(final TradePair tradePair, final BigDecimal bid, final BigDecimal ask) {
        super(tradePair);
        this.bid = bid;
        this.ask = ask;
    }
    
    @Override
    public void serialize(final Serializer serializer) {
        super.serialize(serializer);
        serializer.writeString("bid", this.bid.toString());
        serializer.writeString("ask", this.ask.toString());
    }
    
    public BigDecimal getBid() {
        return this.bid;
    }
    
    public BigDecimal getAsk() {
        return this.ask;
    }
}
