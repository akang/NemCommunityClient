package org.nem.ncc.trading.storage;

import org.nem.ncc.storable.entity.storage.*;
import org.nem.ncc.exceptions.*;
import java.util.*;

public class TradingStorageException extends StorableEntityStorageException
{
    public static final int OFFSET = 40;
    
    public TradingStorageException(final ValueBasedEnum code) {
        super(code);
    }
    
    public TradingStorageException(final ValueBasedEnum code, final Throwable cause) {
        super(code, cause);
    }
    
    public TradingStorageException(final int value) {
        super(Code.lookup.get(value));
    }
    
    public TradingStorageException(final int value, final Throwable cause) {
        super(Code.lookup.get(value), cause);
    }
    
    public enum Code implements ValueBasedEnum
    {
        TRADING_STORAGE_DOES_NOT_EXIST(141), 
        TRADING_STORAGE_COULD_NOT_BE_SAVED(142), 
        TRADING_STORAGE_COULD_NOT_BE_READ(143), 
        TRADING_STORAGE_PASSWORD_INCORRECT(144), 
        TRADING_STORAGE_PASSWORD_CANNOT_BE_NULL(145), 
        TRADING_STORAGE_ALREADY_EXISTS(149), 
        TRADING_STORAGE_CANNOT_BE_DIRECTORY(151), 
        TRADING_STORAGE_HAS_INVALID_EXTENSION(152), 
        TRADING_STORAGE_COULD_NOT_BE_DELETED(153), 
        CANT_ADD_BTC_ESCROW_ADDRESS(154), 
        CANT_ADD_XEM_ESCROW_KEY(155), 
        TRADING_STORAGE_ALREADY_CONTAINS_THIS_BANK_ACCOUNT(156), 
        NO_FIAT_ACCOUNT_WITH_ADDRESS(157), 
        TRADING_STORAGE_ALREADY_CONTAINS_THIS_FIAT_ESCROW_ACCOUNT(158);
        
        private static final HashMap<Integer, Code> lookup;
        private final int value;
        
        private Code(final int value) {
            this.value = value;
        }
        
        @Override
        public int value() {
            return this.value;
        }
        
        static {
            lookup = new HashMap<Integer, Code>();
            for (final Code c : values()) {
                Code.lookup.put(c.value(), c);
            }
        }
    }
}
