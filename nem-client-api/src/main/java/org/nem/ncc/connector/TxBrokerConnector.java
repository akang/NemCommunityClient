package org.nem.ncc.connector;

import org.nem.core.model.*;
import org.nem.ncc.wallet.*;
import org.nem.ncc.model.*;
import org.nem.core.crypto.*;

public interface TxBrokerConnector
{
    long setupUserDetailsPrice(final UserDetails p0);
    
    boolean setBtcWithdrawalAccount(final String p0, final WalletName p1, final Address p2, final WalletPassword p3);
    
    long setBtcWithdrawalAccountPrice(final String p0);
    
    boolean setFiatWithdrawalAccount(final TradeAddress p0, final TradeInstrument p1, final Address p2, final WalletName p3, final WalletPassword p4);
    
    boolean setXemWithdrawalAccount(final PublicKey p0, final WalletName p1, final Address p2, final WalletPassword p3);
    
    long getXemWithdrawalAccountSettingPrice(final PublicKey p0);
    
    boolean setupUserDetails(final WalletName p0, final Address p1, final WalletPassword p2, final UserDetails p3);
    
    boolean updateUserDetails(final WalletName p0, final Address p1, final WalletPassword p2, final UserDetails p3);
    
    boolean updateTradingAccount(final WalletName p0, final Address p1, final WalletPassword p2, final PublicKey p3);
    
    long updateUserDetailsPrice(final UserDetails p0);
    
    long setFiatWithdrawalAccountPrice(final String p0);
    
    boolean requestNewBtcEscrowAccount(final WalletName p0, final Address p1, final WalletPassword p2);
}
