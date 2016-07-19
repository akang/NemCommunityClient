package org.nem.ncc.connector;

import com.sharedobjects.broker.UserDetailsRequest;
import com.sharedobjects.client.InfoRequest;
import org.nem.ncc.broker.manager.*;
import org.nem.ncc.model.Country;
import org.nem.ncc.model.KickstartReceiveAccount;
import org.nem.ncc.model.TradeHistoryTransaction;
import org.nem.ncc.model.TradeInstrument;
import org.nem.ncc.model.TradePair;
import org.nem.ncc.model.UserDetails;
import org.nem.ncc.services.*;
import org.apache.log4j.*;
import org.nem.deploy.*;
import com.sharedobjects.*;
import org.nem.ncc.broker.*;
import org.nem.core.model.*;
import java.util.stream.*;
import org.nem.ncc.trading.storage.*;
import java.util.function.*;
import java.math.*;
import com.sharedobjects.broker.*;
import com.sharedobjects.client.*;
import com.sharedobjects.trading.*;
import org.nem.ncc.model.*;
import org.nem.core.model.primitive.*;
import java.util.*;
import org.nem.core.crypto.*;

public class DefaultBrokerConnector implements PrimaryBrokerConnector
{
    private final SocketsManager socketsManager;
    private BrokerMapper brokerMapper;
    private TradeInstrumentsProvider tradeInstrumentsProvider;
    private final Logger logger;
    
    public DefaultBrokerConnector(final CommonConfiguration config) {
        this.logger = Logger.getLogger((Class)DefaultBrokerConnector.class);
        this.socketsManager = new SocketsManager(config);
    }
    
    @Override
    public boolean isConnected() {
        try {
            this.socketsManager.request((IKryoSerializable)ResponseMessage.IS_CONNECTED, Port.ADDITIONAL_INFO_LISTENER, ResponseMessage.class);
        }
        catch (Exception e) {
            return false;
        }
        return true;
    }
    
    @Override
    public short getPersonalPort(final Account account, final UUID userId) {
        return this.getOriginalUserDetails(account, userId).getPort();
    }
    
    @Override
    public EscrowAccountTransmittersResponse[] getFiatEscrowTransmitters() {
        final EscrowAccountTransmittersRequest request = new EscrowAccountTransmittersRequest(EscrowAccountTransmittersRequest.Type.ALL_FIAT, this.tradeInstrumentsProvider.getXem().getCode());
        return this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, EscrowAccountTransmittersResponse[].class);
    }
    
    @Override
    public Collection<TradeInstrument> getAvailableFiatTradeInstruments(final Account account) {
        final UserRequest request = new UserRequest(UserRequest.Type.AvailableFiatTradeInstruments);
        return this.brokerMapper.toClientModel(this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.trading.TradeInstrument[].class));
    }
    
    @Override
    public Collection<TradeInstrument> getAvailableTradeInstruments(final Account account) {
        final UserRequest request = new UserRequest(UserRequest.Type.AvailableTradeInstruments);
        return this.brokerMapper.toClientModel(this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.trading.TradeInstrument[].class));
    }
    
    @Override
    public Collection<TradeInstrument> getTradeInstruments() {
        final TradeToolsGetRequest request = new TradeToolsGetRequest(TradeToolsGetRequest.Type.INSTRUMENTS);
        return this.brokerMapper.toClientModel(this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.trading.TradeInstrument[].class));
    }
    
    @Override
    public UserDetails getUserDetails(final Account account, final UUID userId) {
        return this.brokerMapper.toClientModel(this.getOriginalUserDetails(account, userId));
    }
    
    @Override
    public Collection<TradePair> getAvailablePairs(final Account account) {
        final UserRequest request = new UserRequest(UserRequest.Type.AvailablePairs);
        return this.brokerMapper.toClientModel(this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.trading.TradePair[].class));
    }
    
    @Override
    public Collection<TradePair> getTradePairs() {
        final TradeToolsGetRequest request = new TradeToolsGetRequest(TradeToolsGetRequest.Type.PAIRS);
        return this.brokerMapper.toClientModel(this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.trading.TradePair[].class));
    }
    
    @Override
    public Collection<TradeHistoryTransaction> getTradeHistoryTransactions(final int tradePairCode, final int count, final int skip) {
        final TradeHistoryRequest request = new TradeHistoryRequest(tradePairCode, count, skip);
        return this.brokerMapper.toClientModel(this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.client.TradeHistoryTransaction[].class));
    }
    
    @Override
    public Collection<Order> getPendingOrders(final Account account, final int skip, final int limit) {
        final PendingOrdersRequest request = new PendingOrdersRequest(limit, skip);
        final SimpleOrder[] orders = this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, SimpleOrder[].class);
        return new ArrayList<Order>(this.brokerMapper.toClientModels(orders));
    }
    
    @Override
    public boolean placeOrder(final Order order, final Account account) {
        final ResponseMessage response = this.socketsManager.signedRequest(account, (IKryoSerializable)this.brokerMapper.toBrokerModel(order), Port.ORDER_SERVER, ResponseMessage.class);
        if (!ResponseMessage.SUCCESS.equals((Object)response)) {
            throw new BrokerException(response.getCode(), response.getMessage());
        }
        return true;
    }
    
    @Override
    public WithdrawalAccount getXemWithdrawalAccount(final Account account) {
        final WithdrawalAccountGetRequest request = new WithdrawalAccountGetRequest(WithdrawalAccountGetRequest.Type.XEM, 0);
        final WithdrawAccount withdrawAccount = this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, WithdrawAccount.class);
        return (withdrawAccount == null) ? null : new WithdrawalAccount(new TradeAddress(withdrawAccount.getAccountData()), withdrawAccount.getId(), this.tradeInstrumentsProvider.getXem());
    }
    
    @Override
    public WithdrawalAccount getBtcWithdrawalAccount(final Account account) {
        final WithdrawalAccountGetRequest request = new WithdrawalAccountGetRequest(WithdrawalAccountGetRequest.Type.BTC, 0);
        final WithdrawAccount withdrawAccount = this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, WithdrawAccount.class);
        return (withdrawAccount == null) ? null : new WithdrawalAccount(new TradeAddress(withdrawAccount.getAccountData()), withdrawAccount.getId(), this.tradeInstrumentsProvider.getBtc());
    }
    
    @Override
    public WithdrawalAccount getFiatWithdrawalAccount(final Account account, final int tradeInstrumentCode) {
        final WithdrawalAccountGetRequest request = new WithdrawalAccountGetRequest(WithdrawalAccountGetRequest.Type.BY_CODE, tradeInstrumentCode);
        final WithdrawAccount withdrawAccount = this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, WithdrawAccount.class);
        if (withdrawAccount == null) {
            return null;
        }
        return this.brokerMapper.toClientModel(withdrawAccount, tradeInstrumentCode);
    }
    
    @Override
    public EscrowAccountTransmittersResponse[] getXemEscrowAccountTransmitters() {
        final EscrowAccountTransmittersRequest request = new EscrowAccountTransmittersRequest(EscrowAccountTransmittersRequest.Type.BY_CODE, this.tradeInstrumentsProvider.getXem().getCode());
        return new EscrowAccountTransmittersResponse[] { this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, EscrowAccountTransmittersResponse.class) };
    }
    
    @Override
    public Collection<EscrowAccount> getXemEscrowBalances(final Account account, final Collection<DiscoveredPublicKey> xemPubKeys) {
        final String[] xemEscrowPublicKeyStrings = xemPubKeys.stream().map(discovered -> discovered.getPublicKey().toString()).toArray(String[]::new);
        final XemEscrowBalanceRequest request = new XemEscrowBalanceRequest(xemEscrowPublicKeyStrings);
        final XemEscrowBalanceResponse[] balances = this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, XemEscrowBalanceResponse[].class);
        Arrays.stream(balances).forEach(balance -> balance.setCreationTimeMills(xemPubKeys.stream().filter(pk -> Address.fromPublicKey(pk.getPublicKey()).getEncoded().equals(balance.getAddress())).findFirst().get().getCreated().toEpochMilli()));
        return Arrays.stream(balances).map((Function<? super XemEscrowBalanceResponse, ?>)this.brokerMapper::toClientModel).collect((Collector<? super Object, ?, Collection<EscrowAccount>>)Collectors.toList());
    }
    
    @Override
    public Collection<BtcEscrowAccount> getBtcEscrowBalances(final Account account, final Collection<TradeAddress> btcAddresses) {
        if (btcAddresses == null || btcAddresses.size() == 0) {
            return new LinkedList<BtcEscrowAccount>();
        }
        final String[] addresses = btcAddresses.stream().map((Function<? super TradeAddress, ?>)TradeAddress::toString).toArray(String[]::new);
        final BtcEscrowBalanceRequest request = new BtcEscrowBalanceRequest(addresses);
        final BtcEscrowBalanceResponse[] responses = this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, BtcEscrowBalanceResponse[].class);
        return Arrays.stream(responses).map((Function<? super BtcEscrowBalanceResponse, ?>)this.brokerMapper::toClientModel).collect((Collector<? super Object, ?, Collection<BtcEscrowAccount>>)Collectors.toList());
    }
    
    @Override
    public Collection<EscrowAccount> getFiatEscrowBalances(final Account account, final Collection<DiscoveredFiatAddress> addresses) {
        final Map<String, Integer> addressesMap = addresses.stream().collect(Collectors.toMap(fiatAddress -> fiatAddress.getAddress().toString(), fiatAddress -> fiatAddress.getTradeInstrument().getCode()));
        final String[] accountNumbers = addressesMap.keySet().stream().toArray(String[]::new);
        final int[] instrumentCodes = addressesMap.values().stream().mapToInt(Integer::valueOf).toArray();
        final FiatEscrowBalanceRequest request = new FiatEscrowBalanceRequest(instrumentCodes, accountNumbers);
        final FiatEscrowBalanceResponse[] balances = this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, FiatEscrowBalanceResponse[].class);
        final Collection<EscrowAccount> accounts = Arrays.stream(balances).map((Function<? super FiatEscrowBalanceResponse, ?>)this.brokerMapper::toClientModel).collect((Collector<? super Object, ?, Collection<EscrowAccount>>)Collectors.toList());
        accounts.stream().forEach(balance -> balance.setCreated(addresses.stream().filter(discovered -> discovered.getAddress().equals(balance.getAddress())).findFirst().get().getCreated()));
        return accounts;
    }
    
    @Override
    public boolean withdraw(final int escrowAccountId, final UUID withdrawAccount, final BigDecimal amount, final Account account) {
        final WithdrawRequest request = new WithdrawRequest(escrowAccountId, amount, withdrawAccount);
        final ResponseMessage response = this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.WITHDRAW_DEPOSIT_LISTENER, ResponseMessage.class);
        if (ResponseMessage.SUCCESS.equals((Object)response)) {
            return true;
        }
        throw new BrokerException(response.getCode(), response.getMessage());
    }
    
    @Override
    public TradePair getAvailablePair(final Account account, final int tradePairCode) {
        return this.getAvailablePairs(account).stream().filter(pair -> pair.getCode() == tradePairCode).findFirst().orElse(null);
    }
    
    @Override
    public boolean hasUserDetails(final UUID userId) {
        final UserDetailsRequest request = new UserDetailsRequest(UserDetailsRequest.Type.EXIST, this.brokerMapper.getBlankUserDetails(userId));
        return this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, Boolean.class);
    }
    
    @Override
    public Collection<Country> getCountries() {
        final InfoRequest request = new InfoRequest(InfoRequest.Type.COUNTRIES);
        return this.brokerMapper.toClientModel(this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.client.Country[].class));
    }
    
    @Override
    public Collection<Candlestick> getCandlesticks(final int tradePairCode, final CandlestickStep step) {
        final CandlesticksRequest request = new CandlesticksRequest(step, tradePairCode);
        final Candlestick[] response = this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, Candlestick[].class);
        return Arrays.asList(response);
    }
    
    @Override
    public boolean removeOrder(final UUID orderId, final Account account) {
        final ResponseMessage response = this.socketsManager.signedRequest(account, (IKryoSerializable)new CancelOrderRequest(orderId), Port.ORDER_SERVER, ResponseMessage.class);
        if (!ResponseMessage.SUCCESS.equals((Object)response)) {
            throw new BrokerException(response.getCode(), response.getMessage());
        }
        return true;
    }
    
    private com.sharedobjects.client.UserDetails getOriginalUserDetails(final Account account, final UUID userId) {
        final UserDetailsRequest request = new UserDetailsRequest(UserDetailsRequest.Type.GET, this.brokerMapper.getBlankUserDetails(userId));
        return this.socketsManager.signedRequest(account, (IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.client.UserDetails.class);
    }
    
    @Override
    public Collection<KickstartReceiveAccount> getKickstartReceiveAccounts() {
        final InfoRequest infoRequest = new InfoRequest(InfoRequest.Type.KICKSTART_ACCOUNTS);
        final com.sharedobjects.client.KickstartReceiveAccount[] accounts = this.socketsManager.request((IKryoSerializable)infoRequest, Port.ADDITIONAL_INFO_LISTENER, com.sharedobjects.client.KickstartReceiveAccount[].class);
        return Arrays.stream(accounts).map((Function<? super com.sharedobjects.client.KickstartReceiveAccount, ?>)this.brokerMapper::toClientModel).collect((Collector<? super Object, ?, Collection<KickstartReceiveAccount>>)Collectors.toList());
    }
    
    private Amount getResponseFee(final InfoRequest request) {
        try {
            final Long fee = this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, Long.class);
            return Amount.fromNem((long)fee);
        }
        catch (Exception ex) {
            ex.printStackTrace();
            throw new IllegalStateException("Failed to get response fee", ex);
        }
    }
    
    @Override
    public Amount getUpdateUserDetailsResponseFee() {
        return this.getResponseFee(new InfoRequest(InfoRequest.Type.UPDATE_USER_DETAILS_FEE));
    }
    
    @Override
    public Amount getSetWithdrawalAccountResponseFee() {
        return this.getResponseFee(new InfoRequest(InfoRequest.Type.SET_WITHDRAW_ACCOUNT_FEE));
    }
    
    @Override
    public Amount getBtcNewAccountResponseFee() {
        return this.getResponseFee(new InfoRequest(InfoRequest.Type.BTC_KEY_RESPONSE_FEE));
    }
    
    @Override
    public Optional<Order> getOrder(final Account account, final UUID orderId) {
        return this.getPendingOrders(account, 0, 0).stream().filter(order -> order.getOrderId().equals(orderId)).findFirst();
    }
    
    @Override
    public Account requestBrokerAccount() {
        final InfoRequest request = new InfoRequest(InfoRequest.Type.BROKER_XEM_PUBLIC_KEY);
        final String publicKeyStr = this.socketsManager.request((IKryoSerializable)request, Port.ADDITIONAL_INFO_LISTENER, String.class);
        final PublicKey publicKey = PublicKey.fromHexString(publicKeyStr);
        final KeyPair keyPair = new KeyPair(publicKey);
        return new Account(keyPair);
    }
    
    public void setBrokerMapper(final BrokerMapper brokerMapper) {
        this.brokerMapper = brokerMapper;
    }
    
    public void setTradeInstrumentsProvider(final TradeInstrumentsProvider tradeInstrumentsProvider) {
        this.tradeInstrumentsProvider = tradeInstrumentsProvider;
    }
}
