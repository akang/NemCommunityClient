package org.nem.ncc.controller.requests;

import org.nem.ncc.trading.storage.*;
import java.util.*;
import java.math.*;
import org.nem.core.serialization.*;

public class WithdrawRequest extends TradingStorageNamePasswordPair
{
    private final int escrowAccountId;
    private final UUID withdrawAccountId;
    private final BigDecimal amount;
    
    public WithdrawRequest(final Deserializer deserializer) {
        super(deserializer);
        this.escrowAccountId = deserializer.readInt("escrowAccountId");
        this.withdrawAccountId = UUID.fromString(deserializer.readString("withdrawAccountId"));
        this.amount = new BigDecimal(deserializer.readString("amount"));
    }
    
    public int getEscrowAccountId() {
        return this.escrowAccountId;
    }
    
    public UUID getWithdrawAccountId() {
        return this.withdrawAccountId;
    }
    
    public BigDecimal getAmount() {
        return this.amount;
    }
}
