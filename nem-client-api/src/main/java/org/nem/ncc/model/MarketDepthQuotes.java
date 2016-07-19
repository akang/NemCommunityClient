package org.nem.ncc.model;

import java.util.*;
import org.nem.core.serialization.*;

public class MarketDepthQuotes implements SerializableEntity
{
    private final TradePair tradePair;
    private final Collection<MarketDepthQuote> sellQuotes;
    private final Collection<MarketDepthQuote> buyQuotes;
    
    public MarketDepthQuotes(final TradePair tradePair, final Collection<MarketDepthQuote> sellQuotes, final Collection<MarketDepthQuote> buyQuotes) {
        this.tradePair = tradePair;
        this.sellQuotes = sellQuotes;
        this.buyQuotes = buyQuotes;
    }
    
    public TradePair getTradePair() {
        return this.tradePair;
    }
    
    public Collection<MarketDepthQuote> getSellQuotes() {
        return this.sellQuotes;
    }
    
    public Collection<MarketDepthQuote> getBuyQuotes() {
        return this.buyQuotes;
    }
    
    public void serialize(final Serializer serializer) {
        serializer.writeObject("tradePair", (SerializableEntity)this.tradePair);
        serializer.writeObjectArray("sellQuotes", (Collection)this.sellQuotes);
        serializer.writeObjectArray("buyQuotes", (Collection)this.buyQuotes);
    }
}
