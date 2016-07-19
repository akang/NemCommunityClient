package org.nem.ncc.services;

import org.nem.ncc.model.*;
import org.nem.ncc.connector.*;
import java.util.function.*;
import java.util.stream.*;
import java.util.*;

public class TradeInstrumentsProvider extends UpdatableDataProvider<Map<Integer, TradeInstrument>>
{
    private final PrimaryBrokerConnector connector;
    private TradeInstrument btc;
    private TradeInstrument xem;
    
    public TradeInstrumentsProvider(final PrimaryBrokerConnector connector) {
        super(60L);
        this.connector = connector;
    }
    
    public synchronized Map<Integer, TradeInstrument> getTradeInstrumentMap() {
        return this.getData();
    }
    
    public synchronized TradeInstrument getTradeInstrument(final Integer code) {
        return this.getTradeInstrumentMap().get(code);
    }
    
    @Override
    protected Map<Integer, TradeInstrument> fetchDataFromRemote() {
        final Collection<TradeInstrument> instruments = this.connector.getTradeInstruments();
        if (instruments == null) {
            return null;
        }
        return instruments.stream().collect(Collectors.toMap((Function<? super TradeInstrument, ? extends Integer>)TradeInstrument::getCode, (Function<? super TradeInstrument, ? extends TradeInstrument>)Function.identity()));
    }
    
    public TradeInstrument getBtc() {
        if (this.btc == null) {
            final Map<Integer, TradeInstrument> instruemnts = this.getTradeInstrumentMap();
            if (instruemnts == null) {
                return null;
            }
            this.btc = instruemnts.values().stream().filter(x -> "BTC".equals(x.getName())).findFirst().get();
        }
        return this.btc;
    }
    
    public TradeInstrument getXem() {
        if (this.xem == null) {
            final Map<Integer, TradeInstrument> instruemnts = this.getTradeInstrumentMap();
            if (instruemnts == null) {
                return null;
            }
            this.xem = instruemnts.values().stream().filter(x -> "XEM".equals(x.getName())).findFirst().get();
        }
        return this.xem;
    }
    
    public Collection<TradeInstrument> getTradeInstruments() {
        return this.getTradeInstrumentMap().values();
    }
}
