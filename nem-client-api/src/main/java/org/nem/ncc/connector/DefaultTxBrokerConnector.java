package org.nem.ncc.connector;

import org.nem.ncc.controller.*;
import org.nem.ncc.services.*;
import com.sharedobjects.nis.*;
import org.nem.core.model.*;
import org.nem.ncc.wallet.*;
import org.nem.core.model.primitive.*;
import org.nem.core.model.ncc.*;
import java.util.*;
import org.nem.core.crypto.*;
import org.nem.ncc.model.*;
import com.sharedobjects.*;
import org.nem.ncc.controller.requests.*;

public class DefaultTxBrokerConnector implements TxBrokerConnector
{
    private final PrimaryBrokerConnector brokerConnector;
    private final TransactionController transactionController;
    private final BrokerMapper brokerMapper;
    private final TradeInstrumentsProvider instrumentsProvider;
    
    public DefaultTxBrokerConnector(final PrimaryBrokerConnector brokerConnector, final TransactionController transactionController, final BrokerMapper brokerMapper, final TradeInstrumentsProvider instrumentsProvider) {
        this.brokerConnector = brokerConnector;
        this.transactionController = transactionController;
        this.brokerMapper = brokerMapper;
        this.instrumentsProvider = instrumentsProvider;
    }
    
    @Override
    public long setFiatWithdrawalAccountPrice(final String accountNumber) {
        long amount = 0L;
        amount += this.brokerConnector.getSetWithdrawalAccountResponseFee().getNumMicroNem();
        amount += NisHelper.getTransactionFee(this.brokerConnector.getSetWithdrawalAccountResponseFee(), new FiatWithdrawalAccountNccRequest(accountNumber, 1).serialize(), true).getNumMicroNem();
        return amount;
    }
    
    @Override
    public boolean setupUserDetails(final WalletName walletName, final Address senderAddress, final WalletPassword password, final UserDetails userDetails) {
        final Address recipientAddress = this.brokerConnector.requestBrokerAccount().getAddress();
        final Amount amount = Amount.ZERO;
        final int hoursDue = 1;
        final Amount multisigFee = Amount.ZERO;
        NemAnnounceResult result = null;
        final UserDetailsRequest userDetailsRequest = new UserDetailsRequest(this.brokerMapper.toBrokerModel(userDetails));
        final List<String> messages = (List<String>)userDetailsRequest.serializeToArray();
        for (int i = 0; i < messages.size(); ++i) {
            result = this.transfer(walletName, null, senderAddress, recipientAddress, amount, messages.get(i), false, true, 1, password, this.getFreeSecureRequestFee(messages.get(i)), multisigFee, 257);
        }
        return !result.isError();
    }
    
    @Override
    public boolean updateUserDetails(final WalletName walletName, final Address senderAddress, final WalletPassword password, final UserDetails userDetails) {
        final Address recipientAddress = this.brokerConnector.requestBrokerAccount().getAddress();
        Amount amount = Amount.ZERO;
        final UpdateUserDetailsRequest userDetailsRequest = new UpdateUserDetailsRequest(this.brokerMapper.toBrokerModel(userDetails));
        final List<String> messages = (List<String>)userDetailsRequest.serializeToArray();
        final int hoursDue = 1;
        final Amount multisigFee = Amount.ZERO;
        int i;
        for (i = 0; i < messages.size() - 1; ++i) {
            final NemAnnounceResult result = this.transfer(walletName, null, senderAddress, recipientAddress, amount, messages.get(i), false, true, 1, password, this.getFreeSecureRequestFee(messages.get(i)), multisigFee, 257);
        }
        amount = this.brokerConnector.getUpdateUserDetailsResponseFee();
        final NemAnnounceResult result = this.transfer(walletName, null, senderAddress, recipientAddress, amount, messages.get(i), false, true, 1, password, NisHelper.getTransactionFee(amount, (String)messages.get(i), true), multisigFee, 257);
        return !result.isError();
    }
    
    @Override
    public boolean updateTradingAccount(final WalletName walletName, final Address senderAddress, final WalletPassword password, final PublicKey publicKey) {
        final Address recipientAddress = this.brokerConnector.requestBrokerAccount().getAddress();
        final int hoursDue = 1;
        final Amount multisigFee = Amount.ZERO;
        final String message = new UpdateTradingAccountRequest(publicKey.toString()).serialize();
        final Amount amount = this.brokerConnector.getUpdateUserDetailsResponseFee();
        final NemAnnounceResult result = this.transfer(walletName, null, senderAddress, recipientAddress, amount, message, false, true, 1, password, NisHelper.getTransactionFee(amount, message, true), multisigFee, 257);
        return !result.isError();
    }
    
    @Override
    public long updateUserDetailsPrice(final UserDetails userDetails) {
        long amount = 0L;
        final UpdateUserDetailsRequest userDetailsRequest = new UpdateUserDetailsRequest(this.brokerMapper.toBrokerModel(userDetails));
        final List<String> userDetailsParts = (List<String>)userDetailsRequest.serializeToArray();
        for (int i = 0; i < userDetailsParts.size(); ++i) {
            amount += this.getFreeSecureRequestFee(userDetailsParts.get(i)).getNumMicroNem();
        }
        amount += this.brokerConnector.getUpdateUserDetailsResponseFee().getNumMicroNem();
        return amount;
    }
    
    @Override
    public long setupUserDetailsPrice(final UserDetails userDetails) {
        long amount = 0L;
        final UpdateUserDetailsRequest userDetailsRequest = new UpdateUserDetailsRequest(this.brokerMapper.toBrokerModel(userDetails));
        final List<String> userDetailsParts = (List<String>)userDetailsRequest.serializeToArray();
        for (int i = 0; i < userDetailsParts.size(); ++i) {
            amount += this.getFreeSecureRequestFee(userDetailsParts.get(i)).getNumMicroNem();
        }
        return amount;
    }
    
    @Override
    public boolean setBtcWithdrawalAccount(final String withdrawalAddress, final WalletName walletName, final Address senderAddress, final WalletPassword password) {
        final Address recipientAddress = this.brokerConnector.requestBrokerAccount().getAddress();
        final Amount amount = this.brokerConnector.getSetWithdrawalAccountResponseFee();
        final String message = new BtcWithdrawalAccountNccRequest(withdrawalAddress).serialize();
        final int hoursDue = 1;
        final Amount fee = NisHelper.getTransactionFee(amount, message, true);
        final Amount multisigFee = Amount.ZERO;
        final NemAnnounceResult result = this.transfer(walletName, null, senderAddress, recipientAddress, amount, message, false, true, 1, password, fee, multisigFee, 257);
        return !result.isError();
    }
    
    @Override
    public long setBtcWithdrawalAccountPrice(final String withdrawalAddress) {
        long amount = 0L;
        amount += this.brokerConnector.getSetWithdrawalAccountResponseFee().getNumMicroNem();
        amount += NisHelper.getTransactionFee(this.brokerConnector.getSetWithdrawalAccountResponseFee(), new BtcWithdrawalAccountNccRequest(withdrawalAddress).serialize(), true).getNumMicroNem();
        return amount;
    }
    
    @Override
    public boolean setXemWithdrawalAccount(final PublicKey withdrawPublicKey, final WalletName walletName, final Address senderAddress, final WalletPassword password) {
        final Address recipientAddress = this.brokerConnector.requestBrokerAccount().getAddress();
        final Amount amount = this.brokerConnector.getSetWithdrawalAccountResponseFee();
        final String message = new XemWithdrawalAccountNccRequest(withdrawPublicKey.toString()).serialize();
        final int hoursDue = 1;
        final Amount fee = NisHelper.getTransactionFee(amount, message, true);
        final Amount multisigFee = Amount.ZERO;
        final NemAnnounceResult result = this.transfer(walletName, null, senderAddress, recipientAddress, amount, message, false, true, 1, password, fee, multisigFee, 257);
        return !result.isError();
    }
    
    @Override
    public long getXemWithdrawalAccountSettingPrice(final PublicKey withdrawalPublicKey) {
        long amount = 0L;
        amount += this.brokerConnector.getSetWithdrawalAccountResponseFee().getNumMicroNem();
        amount += NisHelper.getTransactionFee(this.brokerConnector.getSetWithdrawalAccountResponseFee(), new BtcWithdrawalAccountNccRequest(withdrawalPublicKey.toString()).serialize(), true).getNumMicroNem();
        return amount;
    }
    
    @Override
    public boolean setFiatWithdrawalAccount(final TradeAddress fiatWithdrawalAccount, final TradeInstrument tradeInstrument, final Address senderAddress, final WalletName walletName, final WalletPassword password) {
        final Address recipientAddress = this.brokerConnector.requestBrokerAccount().getAddress();
        final Amount amount = this.brokerConnector.getSetWithdrawalAccountResponseFee();
        final String message = new FiatWithdrawalAccountNccRequest(fiatWithdrawalAccount.getEncoded(), tradeInstrument.getCode()).serialize();
        final int hoursDue = 1;
        final Amount fee = NisHelper.getTransactionFee(amount, message, true);
        final Amount multisigFee = Amount.ZERO;
        final NemAnnounceResult result = this.transfer(walletName, null, senderAddress, recipientAddress, amount, message, false, true, 1, password, fee, multisigFee, 257);
        return !result.isError();
    }
    
    Amount getFreeSecureRequestFee(final String message) {
        return NisHelper.getTransactionFee(Amount.ZERO, message, true);
    }
    
    @Override
    public boolean requestNewBtcEscrowAccount(final WalletName walletName, final Address senderAddress, final WalletPassword password) {
        final Address recipientAddress = this.brokerConnector.requestBrokerAccount().getAddress();
        final Amount amount = this.brokerConnector.getBtcNewAccountResponseFee();
        final String message = new BtcEscrowRequest().serialize();
        final int hoursDue = 1;
        final Amount fee = getBTCKeyRequestFee(amount, message);
        final Amount multisigFee = Amount.ZERO;
        final NemAnnounceResult result = this.transfer(walletName, null, senderAddress, recipientAddress, amount, message, false, true, 1, password, fee, multisigFee, 257);
        return !result.isError();
    }
    
    protected static Amount getBTCKeyRequestFee(final Amount amount, final String message) {
        return NisHelper.getTransactionFee(amount, message, true);
    }
    
    private NemAnnounceResult transfer(final WalletName walletName, final Address multisigAddress, final Address senderAddress, final Address recipientAddress, final Amount amount, final String message, final boolean hexMessage, final boolean shouldEncrypt, final int hoursDue, final WalletPassword password, final Amount fee, final Amount multisigFee, final int type) {
        final TransferSendRequest request = new TransferSendRequest(walletName, multisigAddress, senderAddress, recipientAddress, amount, message, hexMessage, shouldEncrypt, hoursDue, password, fee, multisigFee, type, 1);
        final NemAnnounceResult result = this.transactionController.sendTransaction(request);
        return result;
    }
}
