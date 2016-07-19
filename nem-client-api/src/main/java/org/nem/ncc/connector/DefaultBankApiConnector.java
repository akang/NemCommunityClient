package org.nem.ncc.connector;

import org.apache.log4j.*;
import org.nem.deploy.*;
import org.nem.ncc.services.*;
import java.time.*;
import java.util.*;
import org.nem.ncc.exceptions.*;
import java.util.stream.*;
import com.bim.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.model.*;
import java.math.*;
import java.util.function.*;
import com.bim.helper.*;
import java.util.concurrent.*;
import com.bim.models.*;
import com.bim.database.models.*;

public class DefaultBankApiConnector implements BankApiConnector
{
    private final Logger logger;
    private final CommonConfiguration commonConfiguration;
    private final CryptoAPIConnector cryptoAPIConnector;
    private final BankApiMapper bankApiMapper;
    
    public DefaultBankApiConnector(final CommonConfiguration commonConfiguration, final CryptoAPIConnector cryptoAPIConnector, final BankApiMapper bankApiMapper) {
        this.logger = Logger.getLogger((Class)DefaultBankApiConnector.class);
        this.commonConfiguration = commonConfiguration;
        this.cryptoAPIConnector = cryptoAPIConnector;
        this.bankApiMapper = bankApiMapper;
        this.logger.info((Object)"Connecting to Crypto API");
        try {
            this.cryptoAPIConnector.connect().await();
        }
        catch (InterruptedException e) {
            throw new BankApiException(BankApiException.Code.COULD_NOT_CONNECT_TO_API);
        }
        this.logger.info((Object)"Connected to Crypto API");
        CryptoAPIConnector.initDbConnection(commonConfiguration.getBimDbUrl(), commonConfiguration.getBimDbUser(), commonConfiguration.getBimDbPass());
    }
    
    @Override
    public Collection<BankTransfer> getTransfers(final BankAccount bankAccount, final Instant since) {
        this.logger.warn((Object)String.format("Transfers, thread: %d", Thread.currentThread().getId()));
        final CryptoAPIClient client = this.getOrInitClient(bankAccount);
        this.logger.warn((Object)String.format("Acquiring lock for client: %d", client.hashCode()));
        synchronized (client) {
            this.logger.warn((Object)String.format("Acquired lock for client: %d", client.hashCode()));
            if (!client.isSyncStarted()) {
                try {
                    client.startSync();
                }
                catch (Exception e) {
                    throw new BankApiException(BankApiException.Code.ERROR_GETTING_TRANSFER_HISTORY, e);
                }
            }
            this.logger.warn((Object)String.format("Releasing lock for client: %d", client.hashCode()));
        }
        return (Collection<BankTransfer>)client.getTransfers(since, 0).stream().map(transfer -> this.bankApiMapper.toClientModel(transfer, bankAccount)).sorted((a, b) -> b.getTime().compareTo(a.getTime())).collect(Collectors.toList());
    }
    
    @Override
    public BankAccountInfo getBankAccountInfo(final BankAccount bankAccount) {
        this.logger.warn((Object)String.format("Bank account info, thread: %d", Thread.currentThread().getId()));
        final AccountResponse response = this.wrapRequest(client -> client.getAccount(), bankAccount, BankApiException.Code.ERROR_GETTING_ACCOUNT);
        return this.bankApiMapper.toClientModel(response);
    }
    
    @Override
    public void transfer(final BankAccount bankAccount, final TradeAddress recipientAddress, final TradeInstrument receiveInstrument, final BigDecimal amount, final String narrative) {
        final ResponseData response = this.wrapRequest(client -> client.sendTransferRequest(recipientAddress.toString(), amount, receiveInstrument.getName(), narrative), bankAccount, BankApiException.Code.TRANSFER_ERROR);
        if (response.isError()) {
            this.logger.error((Object)response.getMessage());
            throw new BankApiException(BankApiException.Code.TRANSFER_ERROR);
        }
    }
    
    private <T> T wrapRequest(final Function<CryptoAPIClient, Future<T>> request, final BankAccount bankAccount, final BankApiException.Code code) {
        final CryptoAPIClient client = this.getOrInitClient(bankAccount);
        this.logger.warn((Object)String.format("Acquiring lock for client: %d", client.hashCode()));
        Future<T> responseFuture;
        boolean success;
        synchronized (client) {
            this.logger.warn((Object)String.format("Acquired lock for client: %d", client.hashCode()));
            try {
                responseFuture = request.apply(client);
                success = responseFuture.await((long)this.commonConfiguration.getCryptoApiWaitSeconds(), TimeUnit.SECONDS);
            }
            catch (Exception e) {
                throw new BankApiException(code, e);
            }
            this.logger.warn((Object)String.format("Releasing lock for client: %d", client.hashCode()));
        }
        final T response = (T)responseFuture.getResponse();
        if (!success) {
            this.logger.error((Object)"Unsuccessful request");
            throw new BankApiException(code);
        }
        if (response == null) {
            this.logger.error((Object)"Null response");
            throw new BankApiException(code);
        }
        return response;
    }
    
    private CryptoAPIClient getOrInitClient(final BankAccount bankAccount) {
        return this.cryptoAPIConnector.getOrInitClient(new CryptoAPICredentials(bankAccount.getAddress().toString(), bankAccount.getBtcPrivateKey(), bankAccount.getTradeInstrument().getCode()));
    }
}
