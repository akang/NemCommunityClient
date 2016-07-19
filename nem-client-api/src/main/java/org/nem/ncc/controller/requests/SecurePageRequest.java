package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;

public class SecurePageRequest extends TradingStorageName
{
    private final int skip;
    private final int limit;
    
    public SecurePageRequest(final Deserializer deserializer) {
        super(deserializer);
        final Integer skip = deserializer.readOptionalInt("skip");
        final Integer limit = deserializer.readOptionalInt("limit");
        this.skip = ((skip == null) ? 0 : skip);
        this.limit = ((limit == null) ? 0 : limit);
    }
    
    public int getSkip() {
        return this.skip;
    }
    
    public int getLimit() {
        return this.limit;
    }
}
