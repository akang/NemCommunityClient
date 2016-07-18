package org.nem.ncc.broker;

import org.nem.ncc.exceptions.*;

public class BrokerException extends NccException
{
    private String message;
    private int customCode;

    public BrokerException() {
        this(Code.UNKNOWN_BROKER_ERROR);
    }

    public BrokerException(final int code, final String message) {
        super(Code.CUSTOM_CODE);
        this.customCode = code;
        this.message = message;
    }

    public BrokerException(final Code code) {
        super(code);
    }

    public BrokerException(final String message) {
        super(Code.UNKNOWN_BROKER_ERROR);
        this.message = message;
    }

    @Override
    public String getMessage() {
        return this.message;
    }

    public void setMessage(final String message) {
        this.message = message;
    }

    public int getCustomCode() {
        return this.customCode;
    }

    public void setCustomCode(final int customCode) {
        this.customCode = customCode;
    }

    public enum Code implements ValueBasedEnum
    {
        CUSTOM_CODE(2100),
        BROKER_NOT_AVAILABLE(2101),
        UNKNOWN_BROKER_ERROR(2102),
        CANT_SEND_REQUEST(2103);

        private final int value;

        private Code(final int value) {
            this.value = value;
        }

        @Override
        public int value() {
            return this.value;
        }
    }
}
