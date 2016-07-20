package org.nem.ncc.controller;

import net.minidev.json.JSONArray;
import net.minidev.json.JSONObject;
import org.bouncycastle.crypto.BufferedBlockCipher;
import org.bouncycastle.crypto.CipherParameters;
import org.bouncycastle.crypto.InvalidCipherTextException;
import org.bouncycastle.crypto.engines.AESEngine;
import org.bouncycastle.crypto.modes.CBCBlockCipher;
import org.bouncycastle.crypto.paddings.BlockCipherPadding;
import org.bouncycastle.crypto.paddings.PKCS7Padding;
import org.bouncycastle.crypto.paddings.PaddedBufferedBlockCipher;
import org.bouncycastle.crypto.params.KeyParameter;
import org.bouncycastle.crypto.params.ParametersWithIV;
import org.eclipse.jetty.util.UrlEncoded;
import org.nem.core.crypto.Hashes;
import org.nem.core.crypto.PublicKey;
import org.nem.core.model.Address;
import org.nem.core.serialization.JsonSerializer;
import org.nem.core.utils.ExceptionUtils;
import org.nem.core.utils.HexEncoder;
import org.nem.core.utils.StringEncoder;
import org.nem.ncc.addressbook.*;
import org.nem.ncc.controller.requests.WalletNamePasswordBag;
import org.nem.ncc.controller.viewmodels.WalletViewModel;
import org.nem.ncc.services.*;
import org.nem.ncc.storable.entity.StorableEntityNamePasswordPair;
import org.nem.ncc.trading.storage.TradingStorage;
import org.nem.ncc.trading.storage.TradingStorageName;
import org.nem.ncc.trading.storage.TradingStorageNamePasswordPair;
import org.nem.ncc.wallet.*;
import org.nem.specific.deploy.OctetStream;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.*;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.function.*;
import java.util.zip.*;

/**
 * Handles requests related to the REST resource "wallet".
 */
@RestController
public class WalletController {
	private final WalletServices walletServices;
	private final WalletMapper walletMapper;

	// TODO 20150228 J-B: doesn't really matter, but i probably would have done this as a WalletServices decorator
	// > if we ever consolidate the implementations of the two controllers, we would probably need to do it that way
	// TODO 20150228 J-B: actually, with these changes, i guess we can prune the AddressBookController?
	private final AddressBookServices addressBookServices;
    private final TradingStorageServices tradingStorageServices;
    private final TradingAccountsServices tradingAccountsServices;

	/**
	 * Creates a new wallet controller.
	 *
	 * @param walletServices The wallet services.
	 * @param walletMapper The wallet mapper.
	 * @param addressBookServices The address book services.
	 */
	@Autowired(required = true)
	public WalletController(
			final WalletServices walletServices,
			final WalletMapper walletMapper,
			final AddressBookServices addressBookServices, final TradingStorageServices tradingStorageServices, final TradingAccountsServices tradingAccountsServices) {
		this.walletServices = walletServices;
		this.walletMapper = walletMapper;
		this.addressBookServices = addressBookServices;
        this.tradingStorageServices = tradingStorageServices;
        this.tradingAccountsServices = tradingAccountsServices;
	}

	//region create / open / info / close

	/**
	 * Creates a new wallet with one account in it. The wallet is stored
	 * encrypted in the configured wallet directory. The name of the wallet file
	 * is the encoded (URL encoded) version of the wallet name. The provided
	 * password is used to encrypt the wallet.
	 * The request also creates the corresponding address book and adds the wallet's primary account to it.
	 *
	 * @param pair The wallet name and password pair.
	 * @return A view of the created wallet.
	 */
	@RequestMapping(value = "/wallet/create", method = RequestMethod.POST)
	public WalletViewModel create(@RequestBody final WalletNamePasswordPair pair) {
		final Wallet wallet = this.walletServices.create(pair);
		final AddressBook addressBook = this.createAddressBook(pair);
        this.createTradingStorage(pair);
		addressBook.addLabel(new AccountLabel(wallet.getPrimaryAccount().getAddress(), "", ""));
		return this.walletMapper.toViewModel(wallet);
	}

	/**
	 * Open a wallet. The wallet is defined by the wallet name. The wallet has
	 * to be located in the wallet storage location. The password must match the
	 * password of the given wallet. For opening a wallet at a different
	 * location the function importWallet has to be used.
	 *
	 * @param pair The wallet name and password pair.
	 * @return A view of the opened wallet.
	 */
	@RequestMapping(value = "/wallet/open", method = RequestMethod.POST)
	public WalletViewModel open(@RequestBody final WalletNamePasswordPair pair) {
		this.openAddressBook(pair);
		final Wallet wallet = this.walletServices.open(pair);
            this.openTradingStorage(pair);
		return this.walletMapper.toViewModel(wallet);
	}

	/**
	 * Returns information about a wallet that is already open.
	 *
	 * @param name The wallet name.
	 * @return A view of the wallet.
	 */
	@RequestMapping(value = "/wallet/info", method = RequestMethod.POST)
	public WalletViewModel info(@RequestBody final WalletName name) {
		final Wallet wallet = this.walletServices.get(name);
		return this.walletMapper.toViewModel(wallet);
	}
@RequestMapping(value = { "/wallet/export" }, method = { RequestMethod.POST })
    public OctetStream exportWallet(@RequestBody final WalletName name) {
        //final ByteArrayOutputStream byteArrayOutputStream;
        //final ZipOutputStream zipOutputStream;

        return (OctetStream)ExceptionUtils.propagate(() -> {
			final ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
			final ZipOutputStream zipOutputStream = new ZipOutputStream(byteArrayOutputStream);
			final Throwable t2 = null;
            try {
                this.addToZip(zipOutputStream, name.toString(), ".wlt", this.walletServices::copyTo, n -> new WalletNamePasswordPair(n, "???"));
                this.addToZip(zipOutputStream, name.toString(), ".adb", this.addressBookServices::copyTo, n -> new AddressBookNamePasswordPair(n, "???"));
                this.addToZip(zipOutputStream, name.toString(), ".tst", this.tradingStorageServices::copyTo, n -> new TradingStorageNamePasswordPair(n, "???"));
            }
            catch (Throwable t) {
                throw t;
            }
            finally {
                if (zipOutputStream != null) {
                    if (t2 != null) {
                        try {
                            zipOutputStream.close();
                        }
                        catch (Throwable t3) {
                            t2.addSuppressed(t3);
                        }
                    }
                    else {
                        zipOutputStream.close();
                    }
                }
            }
            return new OctetStream(byteArrayOutputStream.toByteArray());
        });
    }
	private BufferedBlockCipher setupBlockCipher(final byte[] sharedKey, final byte[] ivData, final boolean forEncryption) {
		// Setup cipher parameters with key and IV.
		final KeyParameter keyParam = new KeyParameter(sharedKey);
		final CipherParameters params = new ParametersWithIV(keyParam, ivData);

		// Setup AES cipher in CBC mode with PKCS7 padding.
		final BlockCipherPadding padding = new PKCS7Padding();
		final BufferedBlockCipher cipher = new PaddedBufferedBlockCipher(new CBCBlockCipher(new AESEngine()), padding);
		cipher.reset();
		cipher.init(forEncryption, params);
		return cipher;
	}

	private String encryptPrivKey(final byte[] iv, final byte[] password, final byte[] data) {
		byte[] derivedPassword = password;
		for (int i = 0; i < 20; ++i) {
			derivedPassword = Hashes.sha3_256(derivedPassword);
		}
		final BufferedBlockCipher cipher = setupBlockCipher(derivedPassword, iv, true);

		final byte[] buf = new byte[cipher.getOutputSize(data.length)];
		int length = cipher.processBytes(data, 0, data.length, buf, 0);
		try {
			length += cipher.doFinal(buf, length);
		} catch (final InvalidCipherTextException e) {
			return null;
		}

		final String encodedX = HexEncoder.getString(Arrays.copyOf(buf, length));
		return encodedX;
	}


	private JSONObject encodeAccountToJsonAccount(
			final WalletNamePasswordBag nameAndPassword,
			final SecureRandom random,
			final WalletAccount account) {
		final JSONObject jsonAccountDescriptor = new JSONObject();
		jsonAccountDescriptor.put("address", account.getAddress().getEncoded());
		jsonAccountDescriptor.put("brain", true);
		jsonAccountDescriptor.put("network", account.getAddress().getVersion());
		jsonAccountDescriptor.put("algo", "pass:enc");

		// store encrypted private key
		{
			final byte[] iv = new byte[16];
			random.nextBytes(iv);
			jsonAccountDescriptor.put("iv", HexEncoder.getString(iv));

			final byte[] password = StringEncoder.getBytes(nameAndPassword.getPassword().toString());
			final byte[] data = account.getPrivateKey().getRaw().toByteArray();
			jsonAccountDescriptor.put("encrypted", encryptPrivKey(iv, password, data));
		}
		return jsonAccountDescriptor;
	}

	private JSONObject encodeAddressBookToJsonAddressBook(
			final WalletNamePasswordBag nameAndPassword,
			final SecureRandom random,
			final AddressBook addressBook) {
		final JsonSerializer jsonSerializer = new JsonSerializer();
		final JSONObject jsonAddressBook = jsonSerializer.serializeToJson(addressBook);
		final JSONArray accountLabels = (JSONArray)jsonAddressBook.get("accountLabels");
		{
			final byte[] iv = new byte[16];
			random.nextBytes(iv);
			jsonAddressBook.put("iv", HexEncoder.getString(iv));

			final byte[] password = StringEncoder.getBytes(nameAndPassword.getPassword().toString());
			final byte[] data = StringEncoder.getBytes( accountLabels.toJSONString() );
			jsonAddressBook.put("accountLabels", encryptPrivKey(iv, password, data));
		}
		return jsonAddressBook;
	}

	/**
	 * Export a wallet in a format suitable for lightwallet import
	 * @param formdata The wallet name and password.
	 * @return The raw bytes
	 */
	@RequestMapping(value = "/wallet/export/light", method = RequestMethod.POST)
	public OctetStream exportWalletLight(@RequestBody final WalletNamePasswordBag formdata) {
		return ExceptionUtils.propagate(() -> {
			final ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();

			final Wallet wallet = this.walletServices.open(new WalletNamePasswordPair(formdata.getName().toString(), formdata.getPassword().toString()));
			final SecureRandom random = new SecureRandom();

			final JSONObject jsonWallet = new JSONObject();
			jsonWallet.put("name", formdata.getName().toString());
			final JSONObject jsonAccounts = new JSONObject();

			final WalletAccount account = wallet.getPrimaryAccount();
			jsonAccounts.put("0", encodeAccountToJsonAccount(formdata, random, account));
			Integer index = 1;
			for (final WalletAccount otherAccount : wallet.getOtherAccounts()) {
				jsonAccounts.put(index.toString(), encodeAccountToJsonAccount(formdata, random, otherAccount));
				index++;
			}

			jsonWallet.put("accounts", jsonAccounts);

			final AddressBook addressBook = this.addressBookServices.open(new AddressBookNamePasswordPair(formdata.getName().toString(), formdata.getPassword().toString()));
			jsonWallet.put("addressBook", encodeAddressBookToJsonAddressBook(formdata, random, addressBook));

			byteArrayOutputStream.write( StringEncoder.getBytes( jsonWallet.toJSONString() ) );
			return new OctetStream(byteArrayOutputStream.toByteArray());
		});
	}

	/**
	 * Exports a wallet as a zip file.
	 *
	 * @param name The wallet name.
	 * @return The raw bytes.
	 */
	@RequestMapping(value = "/wallet/export/zip", method = RequestMethod.POST)
	public OctetStream exportWalletZip(@RequestBody final WalletName name) {
		return ExceptionUtils.propagate(() -> {
			final ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
			try (final ZipOutputStream zipOutputStream = new ZipOutputStream(byteArrayOutputStream)) {
				this.addToZip(
						zipOutputStream,
						name.toString(),
						WalletFileExtension.DEFAULT_FILE_EXTENSION,
						this.walletServices::copyTo,
						n -> new WalletNamePasswordPair(n, "???"));

				this.addToZip(
						zipOutputStream,
						name.toString(),
						AddressBookFileExtension.DEFAULT_FILE_EXTENSION,
						this.addressBookServices::copyTo,
						n -> new AddressBookNamePasswordPair(n, "???"));
			}

			return new OctetStream(byteArrayOutputStream.toByteArray());
		});
	}

	private <TEntityNamePasswordPair> void addToZip(
			final ZipOutputStream zipOutputStream,
			final String name,
			final String extension,
			final BiConsumer<TEntityNamePasswordPair, OutputStream> copyTo,
			final Function<String, TEntityNamePasswordPair> nameToPair) throws IOException {
		final ZipEntry zipEntry = new ZipEntry(UrlEncoded.encodeString(name) + extension);
		zipOutputStream.putNextEntry(zipEntry);
		copyTo.accept(nameToPair.apply(name), zipOutputStream);
		zipOutputStream.closeEntry();
	}

	/**
	 * Closes a wallet by removing it from the list of opened wallets.
	 *
	 * @param name The wallet name.
	 */
	@RequestMapping(value = "/wallet/close", method = RequestMethod.POST)
	public void close(@RequestBody final WalletName name) {
		this.closeAddressBook(name);
this.closeTradingStorage(name);
		this.walletServices.close(name);
	}

	//endregion

	//region changePassword / changeName

	/**
	 * Changes the password of a wallet.
	 *
	 * @param bag The request parameters.
	 */
	@RequestMapping(value = "/wallet/password/change", method = RequestMethod.POST)
	public void changePassword(@RequestBody final WalletNamePasswordBag bag) {
		this.changeAddressBookPassword(bag);
		this.walletServices.move(bag, new WalletNamePasswordPair(bag.getName(), bag.getNewPassword()));
	}

	/**
	 * Changes the password of a wallet.
	 *
	 * @param bag The request parameters.
	 */
	@RequestMapping(value = "/wallet/name/change", method = RequestMethod.POST)
	public void changeName(@RequestBody final WalletNamePasswordBag bag) {
		this.changeAddressBookName(bag);
this.changeTradingStorageName(bag);
		this.walletServices.move(bag, new WalletNamePasswordPair(bag.getNewName(), bag.getPassword()));
	}

	//endregion

	private AddressBook createAddressBook(final WalletNamePasswordPair pair) {
		return this.addressBookServices.create(this.createAddressNamePasswordPair(pair));
	}

	private AddressBook openAddressBook(final WalletNamePasswordPair pair) {
		return this.addressBookServices.open(this.createAddressNamePasswordPair(pair));
	}

	private void closeAddressBook(final WalletName name) {
		this.addressBookServices.close(new AddressBookName(name.toString()));
	}

	private void changeAddressBookName(final WalletNamePasswordBag bag) {
		this.addressBookServices.move(
				this.createAddressNamePasswordPair(bag),
				new AddressBookNamePasswordPair(bag.getNewName().toString(), bag.getPassword().toString()));
	}

	private void changeAddressBookPassword(final WalletNamePasswordBag bag) {
		this.addressBookServices.move(
				this.createAddressNamePasswordPair(bag),
				new AddressBookNamePasswordPair(bag.getName().toString(), bag.getNewPassword().toString()));
	}

	private AddressBookNamePasswordPair createAddressNamePasswordPair(final WalletNamePasswordPair pair) {
		return new AddressBookNamePasswordPair(pair.getName().toString(), pair.getPassword().toString());
	}
private TradingStorage createTradingStorage(final WalletNamePasswordPair pair) {
        return this.tradingStorageServices.create(this.createTradingStorageNamePasswordPair(pair));
    }
    
    private TradingStorage openTradingStorage(final WalletNamePasswordPair pair) {
        final TradingStorage tradingStorage = this.tradingStorageServices.openOrCreate(this.createTradingStorageNamePasswordPair(pair));
        if (tradingStorage.getPendingPublicKey() != null) {
            final Address tradingAddress = tradingStorage.getTradingAccountAddress();
            if (this.tradingAccountsServices.getChangeTradingAccountResponse(tradingAddress, tradingStorage.getName(), tradingStorage.getChangedPublicKeyTxId())) {
                tradingStorage.setTradingAccountAddress(Address.fromPublicKey(PublicKey.fromHexString(tradingStorage.getPendingPublicKey())));
                tradingStorage.setPendingPublicKey(null);
            }
        }
        return tradingStorage;
    }
    
    private void closeTradingStorage(final WalletName name) {
        this.tradingStorageServices.close(new TradingStorageName(name.toString()));
    }
    
    private TradingStorageNamePasswordPair createTradingStorageNamePasswordPair(final WalletNamePasswordPair pair) {
        return new TradingStorageNamePasswordPair(((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)pair).getName().toString(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)pair).getPassword().toString());
    }
    
    private void changeTradingStorageName(final WalletNamePasswordBag bag) {
        this.tradingStorageServices.move(this.createTradingStorageNamePasswordPair(bag), new TradingStorageNamePasswordPair(bag.getNewName().toString(), ((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)bag).getPassword().toString()));
    }
    
    private void changeTradingStoragePassword(final WalletNamePasswordBag bag) {
        this.tradingStorageServices.move(this.createTradingStorageNamePasswordPair(bag), new TradingStorageNamePasswordPair(((StorableEntityNamePasswordPair<WalletName, WalletPassword, WalletNamePasswordPair>)bag).getName().toString(), bag.getNewPassword().toString()));
    }
}
