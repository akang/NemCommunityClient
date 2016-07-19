package org.nem.ncc.escrow;

import org.nem.ncc.model.*;
import com.sharedobjects.nis.*;
import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import java.util.function.*;
import java.time.*;
import com.sharedobjects.*;
import org.nem.core.crypto.*;
import org.nem.ncc.trading.storage.*;
import java.util.*;

public class NemEscrowsLocator extends DefaultEscrowsLocator<EscrowAccount, DiscoveredPublicKey>
{
    public NemEscrowsLocator(final PrimaryNisConnector nisConnector, final PrimaryBrokerConnector brokerConnector, final SecureRequestMapper secureRequestMapper, final TradingStorageServices tradingStorageServices) {
        super(nisConnector, secureRequestMapper, tradingStorageServices, brokerConnector::getXemEscrowAccountTransmitters, (tradingStorage, discoveredPublicKeys) -> tradingStorage.addXemEscrowPublicKeys(discoveredPublicKeys), TradingStorage::getXemEscrowPublicKeys, brokerConnector::getXemEscrowBalances);
    }
    
    @Override
    protected DiscoveredPublicKey extractEntity(final String messageData, final Instant txTime) {
        try {
            final XemEscrowResponse response = new XemEscrowResponse(XemEscrowResponse.getPublicKey(messageData));
            return new DiscoveredPublicKey(txTime, PublicKey.fromHexString(response.getPublicKey()));
        }
        catch (Exception ex) {
            return null;
        }
    }
}
