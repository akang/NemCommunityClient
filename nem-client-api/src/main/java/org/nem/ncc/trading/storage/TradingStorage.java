package org.nem.ncc.trading.storage;

import org.nem.core.serialization.*;
import org.nem.core.model.*;
import java.util.*;
import org.nem.ncc.model.*;

public interface TradingStorage extends SerializableEntity
{
    TradingStorageName getName();
    
    String getPendingPublicKey();
    
    void setPendingPublicKey(final String p0);
    
    Long getChangedPublicKeyTxId();
    
    void setChangedPublicKeyTx(final Long p0);
    
    Collection<DiscoveredPublicKey> getXemEscrowPublicKeys();
    
    void addXemEscrowPublicKeys(final Collection<DiscoveredPublicKey> p0);
    
    Collection<DiscoveredAddress> getBtcEscrowAddresses();
    
    void addBtcEscrowAddresses(final Collection<DiscoveredAddress> p0);
    
    Long getLastScannedTxId(final int p0);
    
    Collection<InstrumentTransactionPair> getLastScannedTxIds();
    
    void setLastScannedTxId(final int p0, final long p1);
    
    Address getTradingAccountAddress();
    
    void setTradingAccountAddress(final Address p0);
    
    UUID getUserId();
    
    Collection<BankAccount> getFiatAccounts();
    
    BankAccount getFiatAccount(final TradeAddress p0);
    
    void addFiatAccount(final BankAccount p0);
    
    Collection<DiscoveredFiatAddress> getFiatEscrowAddresses();
    
    void addFiatEscrowAddresses(final Collection<DiscoveredFiatAddress> p0);
    
    void addFiatEscrowAddress(final DiscoveredFiatAddress p0);
}
