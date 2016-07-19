package org.nem.ncc.exceptions;

public class BankAccountException extends NccException
{
    public BankAccountException(final Code code) {
        super(code);
    }
    
    protected BankAccountException(final ValueBasedEnum code) {
        super(code);
    }
    
    public BankAccountException(final ValueBasedEnum code, final Throwable cause) {
        super(code, cause);
    }
    
    public enum Code implements ValueBasedEnum
    {
        INVALID_BTC_PRIVATE_KEY(2851);
        
        private int value;
        
        private Code(final int value) {
            this.value = value;
        }
        
        @Override
        public int value() {
            return this.value;
        }
    }
}
