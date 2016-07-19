package org.nem.ncc.controller.viewmodels;

import org.nem.ncc.model.*;
import org.nem.core.serialization.*;

public class WithdrawalAccountViewModel implements SerializableEntity
{
    private final WithdrawalAccount withdrawalAccount;
    private final Status status;
    
    public WithdrawalAccountViewModel(final Status status) {
        this(null, status);
    }
    
    public WithdrawalAccountViewModel(final WithdrawalAccount withdrawalAccount) {
        this(withdrawalAccount, Status.PRESENT);
    }
    
    public WithdrawalAccountViewModel(final WithdrawalAccount withdrawalAccount, final Status status) {
        this.withdrawalAccount = withdrawalAccount;
        this.status = status;
    }
    
    public void serialize(final Serializer serializer) {
        if (this.withdrawalAccount != null) {
            this.withdrawalAccount.serialize(serializer);
        }
        serializer.writeInt("status", this.status.getCode());
    }
    
    public WithdrawalAccount getWithdrawalAccount() {
        return this.withdrawalAccount;
    }
    
    public Status getStatus() {
        return this.status;
    }
    
    public enum Status
    {
        PRESENT(0), 
        PROCESSING(1), 
        EMPTY(2);
        
        private final int code;
        
        private Status(final int code) {
            this.code = code;
        }
        
        public int getCode() {
            return this.code;
        }
    }
}
