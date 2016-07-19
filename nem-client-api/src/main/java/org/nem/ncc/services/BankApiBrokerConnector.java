package org.nem.ncc.services;

import org.nem.ncc.connector.*;
import java.math.*;
import org.nem.core.crypto.*;
import org.nem.ncc.model.*;
import java.util.*;

public class BankApiBrokerConnector
{
    private final BankApiConnector bankApiConnector;
    private final TradingStorageServices tradingStorageServices;
    private static final String KICKSTART_NARRATIVE_PREFIX = "KICK";
    private static final String DEPOSIT_NARRATIVE_PREFIX = "DEPOSIT";
    
    public BankApiBrokerConnector(final BankApiConnector bankApiConnector, final TradingStorageServices tradingStorageServices) {
        this.bankApiConnector = bankApiConnector;
        this.tradingStorageServices = tradingStorageServices;
    }
    
    public void kickstartTransfer(final TradeAddress fromAddress, final TradeAddress toAddress, final BigDecimal amount, final TradeInstrument tradeInstrument, final PublicKey recipientPublicKey) {
        final BankAccount sendAccount = this.tradingStorageServices.tryFindAccount(fromAddress);
        this.bankApiConnector.transfer(sendAccount, toAddress, tradeInstrument, amount, "KICK" + recipientPublicKey.toString());
    }
    
    public void depositTransfer(final TradeAddress fromAddress, final TradeAddress toAddress, final BigDecimal amount, final TradeInstrument tradeInstrument, final UUID userId) {
        final BankAccount sendAccount = this.tradingStorageServices.tryFindAccount(fromAddress);
        this.bankApiConnector.transfer(sendAccount, toAddress, tradeInstrument, amount, "DEPOSIT" + userId.toString().replaceAll("-", ""));
    }
}
