package org.nem.ncc.exceptions;

import java.util.*;

public class BankApiException extends NccException
{
    public BankApiException(final int value) {
        super(Code.lookup.get(value));
    }
    
    public BankApiException(final int value, final Throwable cause) {
        super(Code.lookup.get(value), cause);
    }
    
    public BankApiException(final Code code) {
        super(code);
    }
    
    public BankApiException(final ValueBasedEnum code) {
        super(code);
    }
    
    public BankApiException(final ValueBasedEnum code, final Throwable cause) {
        super(code, cause);
    }
    
    public enum Code implements ValueBasedEnum
    {
        UNKNOWN_INSTRUMENT(1801), 
        COULD_NOT_CONNECT_TO_API(1802), 
        COULD_NOT_AUTHENTICATE(1803), 
        INVALID_API_URL(1804), 
        ERROR_GETTING_ACCOUNT(1805), 
        TRANSFER_ERROR(1806), 
        ERROR_GETTING_TRANSFER_HISTORY(1807);
        
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
