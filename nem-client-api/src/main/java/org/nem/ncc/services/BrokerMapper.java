package org.nem.ncc.services;

import com.sharedobjects.client.Country;
import com.sharedobjects.client.KickstartReceiveAccount;
import com.sharedobjects.client.MarketDepthQuotes;
import com.sharedobjects.client.OperatorOptions;
import com.sharedobjects.client.UserDetails;
import com.sharedobjects.trading.Match;
import com.sharedobjects.trading.TradeInstrument;
import com.sharedobjects.trading.TradePair;
import org.nem.ncc.connector.*;
import java.time.*;
import java.time.temporal.*;
import java.sql.*;
import java.math.*;
import java.util.function.*;
import java.util.stream.*;
import com.sharedobjects.*;
import org.nem.core.crypto.*;
import com.sharedobjects.broker.*;
import com.sharedobjects.client.*;
import org.nem.ncc.model.*;
import com.sharedobjects.trading.*;
import org.nem.core.model.*;
import org.nem.ncc.model.MarketDepthQuote;
import org.nem.ncc.model.OrderUpdate;
import org.nem.ncc.model.TradeHistoryTransaction;

import java.util.*;

public class BrokerMapper
{
    private final TradeInstrumentsProvider instrumentsProvider;
    private final TradePairsProvider tradePairsProvider;
    private final PrimaryBrokerConnector brokerConnector;
    
    public BrokerMapper(final TradeInstrumentsProvider instrumentsProvider, final TradePairsProvider tradePairsProvider, final PrimaryBrokerConnector brokerConnector) {
        this.instrumentsProvider = instrumentsProvider;
        this.tradePairsProvider = tradePairsProvider;
        this.brokerConnector = brokerConnector;
    }
    
    public com.sharedobjects.client.UserDetails toBrokerModel(final UserDetails userDetails) {
        return new com.sharedobjects.client.UserDetails(userDetails.getId(), (short)0, userDetails.getFirstName(), userDetails.getLastName(), userDetails.getDateOfBirth(), this.toBrokerModel(userDetails.getCountry()), userDetails.getPassport(), userDetails.getAddress(), userDetails.getContactNumber(), userDetails.getEmail(), "", userDetails.getPublicKey().toString());
    }
    
    public com.sharedobjects.client.Country toBrokerModel(final Country country) {
        return new com.sharedobjects.client.Country(country.getId(), country.getName());
    }
    
    public com.sharedobjects.trading.TradeInstrument toBrokerModel(final TradeInstrument tradeInstrument) {
        return new com.sharedobjects.trading.TradeInstrument(tradeInstrument.getCode(), tradeInstrument.getName(), tradeInstrument.isFiat(), tradeInstrument.getMinStep(), tradeInstrument.getMinAmount());
    }
    
    public com.sharedobjects.trading.TradePair toBrokerModel(final TradePair tradePair) {
        return new com.sharedobjects.trading.TradePair(tradePair.getCode(), this.toBrokerModel(tradePair.getBaseInstrument()), this.toBrokerModel(tradePair.getQuoteInstrument()), tradePair.getCommission(), tradePair.getPegCommission(), tradePair.getName(), tradePair.getSymbol());
    }
    
    public SimpleOrder toBrokerModel(final Order order) {
        final long expirationTime = (order.getCancelInSeconds() == -1) ? -1L : Timestamp.from(Instant.now().plus((long)order.getCancelInSeconds(), (TemporalUnit)ChronoUnit.SECONDS)).getTime();
        return new SimpleOrder(order.getOrderId(), order.getWithdrawAccountId(), order.getTradePair().getCode(), order.getPrice(), order.getAmount(), order.getAmount(), (int)order.getStrategy().getCode(), expirationTime, 0, order.getType() == OrderType.BUY, BigDecimal.ZERO, order.getCreatedOn().getTime());
    }
    
    public final Order toClientModel(final SimpleOrder order) {
        return new Order(order.getOrderId(), this.tradePairsProvider.getTradePair(order.getTradePairId()), order.isBuy() ? OrderType.BUY : OrderType.SELL, -1, order.getVolume(), order.getPrice(), TimeHelper.toDate(order.getCreatedTimeMills()), null, order.getWithdrawAccountId(), Strategy.getValueByCode(order.getStrategyId()));
    }
    
    public final Collection<Order> toClientModels(final SimpleOrder[] orders) {
        if (orders == null) {
            return null;
        }
        return Arrays.stream(orders).map((Function<? super SimpleOrder, ?>)this::toClientModel).collect((Collector<? super Object, ?, Collection<Order>>)Collectors.toList());
    }
    
    public com.sharedobjects.client.OperatorOptions toBrokerModel(final OperatorOptions operatorOptions) {
        return new com.sharedobjects.client.OperatorOptions(operatorOptions.getEscrowsExpirySec());
    }
    
    public TradeInstrument toClientModel(final com.sharedobjects.trading.TradeInstrument tradeInstrument) {
        return new TradeInstrument(tradeInstrument.getCode(), tradeInstrument.getName(), tradeInstrument.isFiat(), tradeInstrument.getMinStep(), tradeInstrument.getMinAmount());
    }
    
    public Collection<TradeInstrument> toClientModel(final com.sharedobjects.trading.TradeInstrument[] tradeInstruments) {
        return Arrays.stream(tradeInstruments).map((Function<? super com.sharedobjects.trading.TradeInstrument, ?>)this::toClientModel).collect((Collector<? super Object, ?, Collection<TradeInstrument>>)Collectors.toList());
    }
    
    public TradePair toClientModel(final com.sharedobjects.trading.TradePair tradePair) {
        return new TradePair(tradePair.getCode(), tradePair.getCommission(), this.toClientModel(tradePair.getBaseInstrument()), this.toClientModel(tradePair.getQuoteInstrument()), tradePair.getPegCommission(), tradePair.getName(), tradePair.getSymbol());
    }
    
    public Collection<TradePair> toClientModel(final com.sharedobjects.trading.TradePair[] tradePairs) {
        return Arrays.stream(tradePairs).map((Function<? super com.sharedobjects.trading.TradePair, ?>)this::toClientModel).collect((Collector<? super Object, ?, Collection<TradePair>>)Collectors.toList());
    }
    
    public Country toClientModel(final com.sharedobjects.client.Country country) {
        return new Country(country);
    }
    
    public UserDetails toClientModel(final com.sharedobjects.client.UserDetails userDetails) {
        return new UserDetails(userDetails.getId(), userDetails.getFirstName(), userDetails.getLastName(), userDetails.getDateOfBirth(), this.toClientModel(userDetails.getCountry()), userDetails.getPassport(), userDetails.getAddress(), userDetails.getContactNumber(), userDetails.getEmail(), userDetails.getPublicKeyHex());
    }
    
    public org.nem.ncc.model.TradeHistoryTransaction toClientModel(final TradeHistoryTransaction transaction) {
        return new org.nem.ncc.model.TradeHistoryTransaction(transaction.getAmount(), transaction.getPrice(), transaction.getTime());
    }
    
    public Collection<org.nem.ncc.model.TradeHistoryTransaction> toClientModel(final TradeHistoryTransaction[] transactions) {
        return Arrays.stream(transactions).map((Function<? super TradeHistoryTransaction, ?>)this::toClientModel).collect((Collector<? super Object, ?, Collection<org.nem.ncc.model.TradeHistoryTransaction>>)Collectors.toList());
    }
    
    public OperatorOptions toClientModel(final com.sharedobjects.client.OperatorOptions operatorOptions) {
        return null;
    }
    
    public com.sharedobjects.client.UserDetails getBlankUserDetails(final UUID id) {
        return new com.sharedobjects.client.UserDetails(id);
    }
    
    public com.sharedobjects.trading.TradePair getBlankTradePair(final int tradePairCode) {
        return new com.sharedobjects.trading.TradePair(tradePairCode);
    }
    
    public com.sharedobjects.client.OperatorOptions getBlankOperatorOptions() {
        return new com.sharedobjects.client.OperatorOptions();
    }
    
    public org.nem.ncc.model.MarketDepthQuote toClientModel(final MarketDepthQuote quote) {
        return new org.nem.ncc.model.MarketDepthQuote(quote.getAmount(), quote.getPrice());
    }
    
    public Collection<org.nem.ncc.model.MarketDepthQuote> toClientModel(final MarketDepthQuote[] quotes) {
        return Arrays.stream(quotes).map((Function<? super MarketDepthQuote, ?>)this::toClientModel).collect((Collector<? super Object, ?, Collection<org.nem.ncc.model.MarketDepthQuote>>)Collectors.toList());
    }
    
    public org.nem.ncc.model.MarketDepthQuotes toClientModel(final MarketDepthQuotes marketQuotes) {
        return new org.nem.ncc.model.MarketDepthQuotes(this.toClientModel(marketQuotes.getTradePair()), this.toClientModel(marketQuotes.getSell()), this.toClientModel(marketQuotes.getBuy()));
    }
    
    public ExtendedTradePair extractExtendedTradePair(final org.nem.ncc.model.MarketDepthQuotes quotes) {
        final BigDecimal bidValue = this.getTradePairBid(quotes);
        final BigDecimal askValue = this.getTradePairAsk(quotes);
        return new ExtendedTradePair(quotes.getTradePair(), bidValue, askValue);
    }
    
    private BigDecimal getTradePairBid(final org.nem.ncc.model.MarketDepthQuotes quotes) {
        return quotes.getSellQuotes().stream().map((Function<? super org.nem.ncc.model.MarketDepthQuote, ? extends BigDecimal>)org.nem.ncc.model.MarketDepthQuote::getPrice).filter(price -> price.compareTo(BigDecimal.ZERO) > 0).min(BigDecimal::compareTo).orElse(BigDecimal.ZERO);
    }
    
    private BigDecimal getTradePairAsk(final org.nem.ncc.model.MarketDepthQuotes quotes) {
        return quotes.getBuyQuotes().stream().map((Function<? super org.nem.ncc.model.MarketDepthQuote, ? extends BigDecimal>)org.nem.ncc.model.MarketDepthQuote::getPrice).max(BigDecimal::compareTo).get();
    }
    
    public Collection<Country> toClientModel(final com.sharedobjects.client.Country[] countries) {
        return Arrays.stream(countries).map((Function<? super com.sharedobjects.client.Country, ?>)this::toClientModel).collect((Collector<? super Object, ?, Collection<Country>>)Collectors.toList());
    }
    
    public org.nem.ncc.model.OrderUpdate toClientModel(final OrderUpdate response) {
        return new org.nem.ncc.model.OrderUpdate(this.toClientModel(response.getOrder()), response.getMessage(), response.getReservedAmount());
    }
    
    public EscrowAccount toClientModel(final XemEscrowBalanceResponse balanceResponse) {
        return new EscrowAccount(balanceResponse.getId(), new TradeAddress(balanceResponse.getAddress()), balanceResponse.getBalance(), balanceResponse.getReserved(), this.instrumentsProvider.getXem(), Instant.ofEpochMilli(balanceResponse.getPaymentsExpirationMills()), Instant.ofEpochMilli(balanceResponse.getCreationTimeMills()));
    }
    
    public BtcEscrowAccount toClientModel(final BtcEscrowBalanceResponse response) {
        final BtcEscrowStatus status = response.getResponse().equals((Object)ResponseMessage.SUCCESS) ? BtcEscrowStatus.ESTABLISHED : BtcEscrowStatus.INVALID;
        Address requesterAddress = null;
        if (response.getNemPublicKey() != null) {
            final PublicKey requesterPK = PublicKey.fromHexString(response.getNemPublicKey());
            requesterAddress = Address.fromPublicKey(requesterPK);
        }
        return new BtcEscrowAccount(response.getId(), new TradeAddress(response.getAccountNumber()), response.getBalance(), response.getReserved(), this.instrumentsProvider.getBtc(), status, requesterAddress, Instant.ofEpochMilli(response.getCreationTimeMills()), Instant.ofEpochMilli(response.getPaymentsExpirationMills()));
    }
    
    public EscrowAccount toClientModel(final FiatEscrowBalanceResponse balance) {
        return new EscrowAccount(balance.getId(), new TradeAddress(balance.getAccountNumber()), balance.getBalance(), balance.getReserved(), this.instrumentsProvider.getTradeInstrument(balance.getInstrumentCode()), Instant.ofEpochMilli(balance.getPaymentsExpirationMills()), Instant.ofEpochMilli(0L));
    }
    
    public org.nem.ncc.model.KickstartReceiveAccount toClientModel(final KickstartReceiveAccount account) {
        return new org.nem.ncc.model.KickstartReceiveAccount(new TradeAddress(account.getAccountNumber()), account.getRate(), this.instrumentsProvider.getTradeInstrument(account.getTradeInstrumentCode()));
    }
    
    public WithdrawalAccount toClientModel(final WithdrawAccount withdrawAccount, final int tradeInstrumentCode) {
        return new WithdrawalAccount(new TradeAddress(withdrawAccount.getAccountData()), withdrawAccount.getId(), this.instrumentsProvider.getTradeInstrument(tradeInstrumentCode));
    }
    
    public org.nem.ncc.model.Match toClientModel(final Match match, final Account traderAccount) {
        final Optional<Order> sellOrder = this.brokerConnector.getOrder(traderAccount, match.getSellingOrderId());
        final Optional<Order> buyOrder = this.brokerConnector.getOrder(traderAccount, match.getBuyingOrderId());
        final Order tradersOrder = sellOrder.map((Function<? super Order, ? extends Optional<Order>>)Optional::of).orElse(buyOrder).get();
        return new org.nem.ncc.model.Match(tradersOrder, match.getVolume(), match.getPrice());
    }
}
