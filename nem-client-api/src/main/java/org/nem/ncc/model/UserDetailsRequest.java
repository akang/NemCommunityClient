package org.nem.ncc.model;

import org.nem.ncc.trading.storage.*;
import org.nem.core.serialization.*;

public class UserDetailsRequest extends TradingStorageNamePasswordPair
{
    private final UserDetails userDetails;
    
    public UserDetailsRequest(final Deserializer deserializer) {
        super(deserializer);
        this.userDetails = (UserDetails)deserializer.readObject("userDetails", UserDetails::new);
    }
    
    public UserDetails getUserDetails() {
        return this.userDetails;
    }
}
