package org.nem.ncc.controller.viewmodels;

import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class EscrowAccountViewModel implements SerializableEntity
{
    private final EscrowAccount escrowAccount;
    private final boolean isCurrent;
    
    public EscrowAccountViewModel(final EscrowAccount escrowAccount, final boolean isCurrent) {
        this.escrowAccount = escrowAccount;
        this.isCurrent = isCurrent;
    }
    
    public EscrowAccount getEscrowAccount() {
        return this.escrowAccount;
    }
    
    public boolean isCurrent() {
        return this.isCurrent;
    }
    
    public void serialize(final Serializer serializer) {
        this.escrowAccount.serialize(serializer);
        serializer.writeInt("isCurrent", (int)(this.isCurrent ? 1 : 0));
    }
}
