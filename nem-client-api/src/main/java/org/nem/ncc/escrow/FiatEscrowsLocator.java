package org.nem.ncc.escrow;

import org.nem.ncc.connector.*;
import org.nem.ncc.services.*;
import com.sharedobjects.nis.*;
import java.util.function.*;
import java.time.*;
import com.sharedobjects.*;
import org.nem.ncc.model.*;
import org.nem.ncc.trading.storage.*;
import java.util.*;

public class FiatEscrowsLocator extends DefaultEscrowsLocator<EscrowAccount, DiscoveredFiatAddress>
{
    private final PrimaryBrokerConnector brokerConnector;
    
    public FiatEscrowsLocator(final SecureRequestMapper secureRequestMapper, final TradingStorageServices tradingStorageServices, final PrimaryBrokerConnector brokerConnector, final PrimaryNisConnector nisConnector) {
        super(nisConnector, secureRequestMapper, tradingStorageServices, brokerConnector::getFiatEscrowTransmitters, (tradingStorage, fiatAddresses) -> tradingStorage.addFiatEscrowAddresses(fiatAddresses), TradingStorage::getFiatEscrowAddresses, brokerConnector::getFiatEscrowBalances);
        this.brokerConnector = brokerConnector;
    }
    
    @Override
    protected DiscoveredFiatAddress extractEntity(final String messageData, final Instant created) {
        final FiatEscrowResponse response = new FiatEscrowResponse();
        response.init(messageData);
        if (response.getInstrumentName() == null) {
            return null;
        }
        return new DiscoveredFiatAddress(new TradeAddress(response.getAccountNumber()), created, this.getTradeInstrument(response.getInstrumentName()));
    }
    
    private TradeInstrument getTradeInstrument(final String name) {
        return this.brokerConnector.getTradeInstruments().stream().filter(tradeInstrument -> tradeInstrument.getName().equals(name)).findFirst().get();
    }
}
