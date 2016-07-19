package org.nem.ncc.controller.viewmodels;

import java.util.*;
import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class BankAccountTransfersPair implements SerializableEntity
{
    private final BankAccountInfo bankAccountInfo;
    private final Collection<BankTransfer> transfers;
    
    public BankAccountTransfersPair(final BankAccountInfo bankAccountInfo, final Collection<BankTransfer> transfers) {
        this.bankAccountInfo = bankAccountInfo;
        this.transfers = transfers;
    }
    
    public void serialize(final Serializer serializer) {
        this.bankAccountInfo.serialize(serializer);
        serializer.writeObjectArray("transfers", (Collection)this.transfers);
    }
    
    public BankAccountInfo getBankAccountInfo() {
        return this.bankAccountInfo;
    }
    
    public Collection<BankTransfer> getTransfers() {
        return this.transfers;
    }
}
