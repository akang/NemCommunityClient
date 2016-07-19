package org.nem.ncc.connector;

import org.nem.core.model.*;
import java.math.*;
import com.sharedobjects.broker.*;
import org.nem.ncc.model.Country;
import org.nem.ncc.model.KickstartReceiveAccount;
import org.nem.ncc.model.TradeHistoryTransaction;
import org.nem.ncc.model.UserDetails;
import org.nem.ncc.trading.storage.*;
import com.sharedobjects.client.*;
import org.nem.ncc.model.*;
import org.nem.core.model.primitive.*;
import java.util.*;

public interface PrimaryBrokerConnector
{
    boolean isConnected();
    
    Collection<TradeInstrument> getAvailableFiatTradeInstruments(final Account p0);
    
    Collection<TradeInstrument> getAvailableTradeInstruments(final Account p0);
    
    Collection<TradeInstrument> getTradeInstruments();
    
    Collection<TradePair> getAvailablePairs(final Account p0);
    
    TradePair getAvailablePair(final Account p0, final int p1);
    
    Collection<TradePair> getTradePairs();
    
    Collection<TradeHistoryTransaction> getTradeHistoryTransactions(final int p0, final int p1, final int p2);
    
    Collection<Order> getPendingOrders(final Account p0, final int p1, final int p2);
    
    UserDetails getUserDetails(final Account p0, final UUID p1);
    
    boolean placeOrder(final Order p0, final Account p1);
    
    WithdrawalAccount getBtcWithdrawalAccount(final Account p0);
    
    WithdrawalAccount getXemWithdrawalAccount(final Account p0);
    
    WithdrawalAccount getFiatWithdrawalAccount(final Account p0, final int p1);
    
    boolean withdraw(final int p0, final UUID p1, final BigDecimal p2, final Account p3);
    
    EscrowAccountTransmittersResponse[] getXemEscrowAccountTransmitters();
    
    Collection<EscrowAccount> getXemEscrowBalances(final Account p0, final Collection<DiscoveredPublicKey> p1);
    
    Collection<BtcEscrowAccount> getBtcEscrowBalances(final Account p0, final Collection<TradeAddress> p1);
    
    Collection<EscrowAccount> getFiatEscrowBalances(final Account p0, final Collection<DiscoveredFiatAddress> p1);
    
    boolean hasUserDetails(final UUID p0);
    
    Collection<Country> getCountries();
    
    Collection<Candlestick> getCandlesticks(final int p0, final CandlestickStep p1);
    
    boolean removeOrder(final UUID p0, final Account p1);
    
    Account requestBrokerAccount();
    
    short getPersonalPort(final Account p0, final UUID p1);
    
    EscrowAccountTransmittersResponse[] getFiatEscrowTransmitters();
    
    Collection<KickstartReceiveAccount> getKickstartReceiveAccounts();
    
    Amount getUpdateUserDetailsResponseFee();
    
    Amount getSetWithdrawalAccountResponseFee();
    
    Amount getBtcNewAccountResponseFee();
    
    Optional<Order> getOrder(final Account p0, final UUID p1);
}
