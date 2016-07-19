package org.nem.ncc.connector;

import java.time.*;
import java.util.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.model.*;
import java.math.*;

public interface BankApiConnector
{
    Collection<BankTransfer> getTransfers(final BankAccount p0, final Instant p1);
    
    BankAccountInfo getBankAccountInfo(final BankAccount p0);
    
    void transfer(final BankAccount p0, final TradeAddress p1, final TradeInstrument p2, final BigDecimal p3, final String p4);
}
