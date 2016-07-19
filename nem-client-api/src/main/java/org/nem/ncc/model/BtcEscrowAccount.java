package org.nem.ncc.model;

import com.sharedobjects.client.*;
import org.nem.core.model.*;
import java.math.*;
import java.time.*;
import org.nem.core.serialization.*;

public class BtcEscrowAccount extends EscrowAccount
{
    private final BtcEscrowStatus requestStatus;
    private final Address requestor;
    
    public BtcEscrowAccount(final int id, final TradeAddress address, final BigDecimal balance, final BigDecimal reserved, final TradeInstrument tradeInstrument, final BtcEscrowStatus requestStatus, final Address requestor, final Instant paymentsExpire, final Instant created) {
        super(id, address, balance, reserved, tradeInstrument, paymentsExpire, created);
        this.requestStatus = requestStatus;
        this.requestor = requestor;
    }
    
    @Override
    public void serialize(final Serializer serializer) {
        super.serialize(serializer);
        serializer.writeString("requestStatus", this.requestStatus.toString());
        if (this.requestor != null) {
            Address.writeTo(serializer, "requestor", this.requestor);
        }
    }
    
    public BtcEscrowStatus getRequestStatus() {
        return this.requestStatus;
    }
    
    public Address getRequestor() {
        return this.requestor;
    }
}
