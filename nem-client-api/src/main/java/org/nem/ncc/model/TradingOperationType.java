package org.nem.ncc.model;

import java.util.*;

public enum TradingOperationType
{
    DEPOSIT(1), 
    WITHDRAW(2), 
    BTC_ESCROW_REQUEST(3), 
    BTC_ESCROW_RESPONSE(4), 
    USER_DETAILS_SETUP(5), 
    USER_DETAILS_UPDATE(6), 
    XEM_WITHDRAWAL_ACCOUNT(7), 
    BTC_WITHDRAWAL_ACCOUNT(8);
    
    private int code;
    
    public int getCode() {
        return this.code;
    }
    
    private TradingOperationType(final int code) {
        this.code = code;
    }
    
    public static TradingOperationType getByCode(final int code) {
        return Arrays.stream(values()).filter(value -> value.getCode() == code).findFirst().get();
    }
}
