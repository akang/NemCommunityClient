define({
	id: 'CZ',
	name: 'Česky',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Soubor se nenašel.',
			102: 'Peňeženka nebyla vytvořená',
			103: 'Soubor peněženky je poškozen. Prosím obnovte soubor ze zálohy, kterou jste měli udělat při jejím vytváření nebo při přidání účtu.',
			104: 'Poskytnuté heslo není správné. Doufáme, že správné heslo máte. Ztracené heslo se totiž nedá obnovit',
			105: 'No password was provided for the wallet.',
			106: 'Před použitím peněženky, ji musíte odemknout. Na ujištění, že jste oprávněn používat peněženku, je třeba poskytnout heslo.',
			107: 'Peněženka neobsahuje daný účet',
			108: 'Účet není možné odstranit. Pravděpodobně obsahuje zůstatek větší než 0 Nemů, nebo je účet, který chcete odstranit hlavní.',
			109: 'Jiná peněženka se stejným názvem již existuje. Prosím, vyberte jiný název.',
			110: 'Peněženka již daný účet obsahuje.',
			111: 'The wallet name is a directory.',
			112: 'The extension of the wallet file is incorrect.',
			113: 'The wallet could not be deleted.',
			121: 'The address book file does not exist.',
			122: 'Address book has not been created.',
			123: 'Address book file is corrupt. Please recover your address book from a backup.',
			124: 'The provided password for the address book is not correct.',
			125: 'No password was provided for the address book.',
			127: 'Address book does not contain this address.',
			128: 'The address provided is not valid.',
			129: 'Another address book with the same name exists already. Please choose an other address book name.',
			130: 'Address book already contains this address.',
			131: 'The address book name is a directory.',
			132: 'The extension of the address book file is incorrect.',
			133: 'The address book could not be deleted.',
			141: 'The trading storage file does not exist.',
			142: 'Trading storage has not been created.',
			143: 'Trading storage file is corrupt. Please recover your trading storage from a backup.',
			144: 'The provided password for the trading storage is not correct.',
			145: 'No password was provided for the trading storage.',
			149: 'Another trading storage with the same name exists already. Please choose an other trading storage name.',
			151: 'The trading storage name is a directory.',
			152: 'The extension of the trading storage file is incorrect.',
			153: 'The trading storage could not be deleted.',
			154: 'Can\'t add BTC escrow address.',
			155: 'Can\'t add XEM escrow public key.',
			156: 'Trading storage already contains this bank account.',
			157: 'Trading storage does not contain any Fiat account with this address',
			161: 'The broker storage file does not exist.',
			162: 'Broker storage has not been created.',
			163: 'Broker storage file is corrupt. Please recover your trading storage from a backup.',
			164: 'The provided password for the broker storage is not correct.',
			165: 'No password was provided for the broker storage.',
			169: 'Another broker storage with the same name exists already. Please choose an other broker storage name.',
			171: 'The broker storage name is a directory.',
			172: 'The extension of the broker storage file is incorrect.',
			173: 'The broker storage could not be deleted.',
			202: 'Šifrovanou zprávu nelze doručit, protože příjemce ještě neuskutečnil žádný převod',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'Došlo k neočekávané chybě. Litujeme, opětovný pokus by mohl pomoci. V případě, že se problém nevyřešil, obratte se s ním na NEM NIS / NCC komunitu.',
			400: 'Některá hodnota chybí, nebo je neplatná.',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'Požadovaný zdroj nebyl nalezen.',
			500: 'Uložení konfiguračního souboru selhalo.',
			600: 'Pro posílání a přijímání převodů, potřebuje NCC, server NIS. Ten se musí nabútovat z cloudu NEM. Prosím použijte vstupní menu NCC na bútování lokálního uzlu.',
			601: 'Tento uzel je již nabútován. Další pokus bútovat NIS není možný.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: 'Daný účet nesplňuje základní kritéria pro zahájení sklizně. Většinou se tento problém týká nedostatečního množství Nemů na účtu. Sklizeň začíná s minimální hodnotou 10000 vested NEM.',
			901: 'Při nastavování offline módu se vyskytla chyba.',
			1000: 'The private key and the public key you have provided mismatch.',
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Zadaný termín se nachází v minulosti. Termín musí být zadán do období 1 den.',
			1204: 'Zadaný termín se nachází v příliš daleké budoucnosti. Termín musí být zadán do období 1 den.',
			1205: 'Your account does not have the right balance to make this transaction.',
			1206: 'Množství textu vaší zprávy převyšuje limit zpráv posílaných přes NEM. Prosím, pokuste se snížit množství textu ve zprávě, kterou chcete odeslat.',
			1207: 'Hash převodu již existuje v databáze, alebo v zozname nepotvrzených převodů.',
			1208: 'Podpis převodu nemůže být ověřen.',
			1209: 'Časový údaj převodu se nachází v příliš daleké minulosti.',
			1210: 'Časový údaj převodu se nachází v příliš daleké budoucnosti.',
			1219: 'The transaction was rejected because the transaction cache is too full. A higher fee improves the chance that the transaction gets accepted.',
			1262: 'Delegated harvesting account has non zero balance and cannot be used.',
			1263: 'Importance transfer rejected. There is already pending importance transfer operation.',
			1264: 'Delegated harvesting is already active.',
			1265: 'Delegated harvesting is NOT active. Cannot deactivate.',
			1266: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			1271: 'Multisig signature transaction rejected. Current account is not a cosignatory of a multisig account.',
			1273: 'Multisig signature transaction rejected. Associated multisig transaction is not known to NEM network',
			1274: 'Transaction is not allowed for multisig account.',
			1275: 'Multisig account modification rejected. One of added accounts is already a cosignatory.',
			1321: 'Účet je neznámý. Účet musí být součástí alespoň jednoho převodu (odesílatel nebo příjemce), aby mohl být rozpoznán síťov.',
			2101: 'Broker is not available.',
			2102: 'Unknown broker error. ',
			2103: 'Can\'t send request to broker.',
			2200: "SUCCESS",
			2201: "Processing",
			2202: "Internal error.",
			2203: "Is broker connected?",
			2204: "Broker is connected",
			2303: "Not enough coins..",
			2304: "Not enough coins to pay fee.",
			2305: "Failed to find lockbox.",
			2306: "Escrow account does not exist.",
			2307: "Withdraw account does not exist.",
			2308: "Failed to create withdraw request.",
			2309: "Escrow account is invalid for this order!",
			2310: "Withdraw account is invalid for this order!",
			2311: "Invalid trade pair!",
			2312: "Invalid field: ",
			2313: "Canceling order.",
			2314: "Order volume is too small!",
			2315: "Matching engine is not available",
			2316: "Such withdraw account already exist.",
			2401: "INSUFFICIENT BALANCE",
			2402: "INVALID PEG ORDER",
			2403: "INVALID CANCEL ORDER",
			2404: "ORDER CANCELLED",
			2405: "NO SUCH ORDER TO UPDATE",
			2406: "INVALID MARKET ORDER",
			2407: "INVALID ORDER",
			2408: "Order does not exist!",
			2409: "Order does not belong to your broker!",
			2411: "Invalid response from matching engine!",
			2412: "Order with such id already exists!",
			2413: "Instrument is not suported",
			2500: "Request is invalid.",
			2501: "Escrow account in not set up.",
			2502: "Request must be signed!",
			2511: "Signer is invalid.",
			2512: "Signature format is invalid.",
			2513: "Invalid request body.",
			2514: "Bad signature",
			2600: "Type of operator options request is invalid.",
			2601: "Failed to get operator's options.",
			2602: "Failed to update operator's options.",
			2603: "User does not own this account.",
			2604: "Trade instument does not exist.",
			2610: "Type of trade pair request is invalid.",
			2611: "Trade pair does not exist",
			2612: "Failed to delete trade pair.",
			2613: "Trade pair with such products already exists",
			2614: "Failed to save trade pair",
			2615: "Failed to update trade pair",
			2616: "Failed to get trade pair.",
			2617: "Failed to get trade pairs.",
			2650: "Port is already occupied.",
			2660: "User does not exist.",
			2661: "User does not exist.",
			2662: "Broker does not exist.",
			2670: "Failed to get trade instruments.",
			2675: "Failed to get trading history.",
			2680: "Failed to get pending orders.",
			2685: "Failed to save userDetails.",
			2686: "Failed to get userDetails.",
			2687: "Failed to update userDetails.",
			2700: "Failed to get account.",
			2709: "Too small withdraw amount",
			2801: 'Unknown instrument came from the Bank API.',
			2802: 'Could not connect to the Bank API.',
			2803: 'Could not authenticate to the Bank API.',
			2804: 'Invalid Bank API URL.',
			2805: 'Error getting bank account details.',
			2806: 'Transfer error.',
			2851: 'Invalid BTC private key.'
		},
		common: {
			success: 'Úspěch',
			unknown: 'Neznámý status',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'NCC is not available',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'NIS is not available',
				nisStarting: 'NIS is starting...',
				notBooted: 'NIS needs to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Booting NIS...',
				nisInfoNotAvailable: 'NIS info is not available yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS is synchronizing. At block {{1}}, est. {{2}} behind.',
				daysBehind: {
					0: 'less than 1 day',
					1: '1 day',
					many: '{{1}} days'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS is synchronized!',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'Password',
			passwordValidation: 'Password must not be blank',
			address: 'Address',
			privateLabel: 'Private label',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			fee: 'Poplatek',
			multisigFee: 'Multisig fee',
			useMinimumFee: 'Use minimum fee',
			feeValidation: 'Fee must not be less than the minimum fee',
			justUse: 'Just use',
			dueBy: 'Due by',
			minutes: 'minute(s)',
			hours: 'hour(s)',
			hoursDue: 'Due by (hours)',
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			amount: 'Množství',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Close',
			saveButton: 'Save',
			cancelButton: 'Cancel',
			sendButton: 'Odeslat',
			account: 'Account',
			thisAccount: 'This account',
			warning: 'Warning',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'TRANSFER TRANSACTION',
			21: 'IMPORTANCE TRANSFER',
			22: 'MODIFICATION OF MULTISIG ACCOUNT',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'MULTISIG TRANSACTION',
			51: 'MULTISIG TRANSACTION',
			52: 'MULTISIG TRANSACTION',
			53: 'MULTISIG TRANSACTION',
			54: 'MULTISIG TRANSACTION',
			55: 'MULTISIG TRANSACTION',

		},
		Validity: {
			GOOD_TILL_CANCELLED: 'Good till cancelled',
			HOURS: 'Due by (hours)'
		},
		TradeOperationType: {
			1: 'Buy',
			2: 'Sell'
		},
		PriceVariant: {
			1: 'Market',
			2: 'Custom'
		},
		Strategy: {
			1: 'Limit',
			2: 'Market',
			3: 'Stop',
			4: 'Peg'
		},
		transactionDirections: {
			pending: 'Pending transaction',
			outgoing: 'Outgoing transaction',
			incoming: 'Incoming transaction',
			self: 'Self transaction',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'CHYBA {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Ano',
				no: 'Ne'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'Settings',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Remote Server',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Node name',
					primaryAccount: 'Primary account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: 'Cosignatories\' addresses',
				labelDesc: 'This account is labeled as {{1}}',
				nullLabelDesc: 'This account doesn\'t have a label',
				addCosignatory: '+ Add Cosignatory',
				convert: 'Convert',
				txConfirm: {
					title: 'Confirm Conversion to Multisig Account',
					total: 'Total'
				},
				warning: 'Multisig account is on the list of cosignatories. This will result in locking down the account cutting off access to the fund. Most likely you <b>DO NOT</b> want to do that.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig account',
					to: 'Recipient',
					amount: 'Amount',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				passwordValidation: 'Password must not be blank',
				sending: 'Sending...',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',

				}
			},
			sendNem: {
				title: 'Odeslat NEM',
				sender: 'Sender',
				thisAccount: 'This account',
				labelDesc: 'Název tohto účtu je <strong>{{1}}</strong>',
				nullLabelDesc: 'Tento účet nemá název',
				amount: 'Množství',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Účet příjemce',
				recipientValidation: 'Account addresses must be 40 characters long excluding dashes',
				message: 'Zpráva',
				encrypt: 'Šifrována zpráva',
				sending: 'Odesílání...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Confirm Transaction',
					amount: 'Amount',
					to: 'To',
					total: 'Total',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',
					confirm: 'Confirm',
					sending: 'Sending...'
				},
				notBootedWarning: {
					title: 'Node has not been booted!',
					message: 'A local node needs to be booted before you can send NEM!'
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				},
				loadingWarning: {
					title: 'Loading db'
				},

			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signatár',
				remoteServer: 'Vzdálený server',
				local: 'Lokální',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synchronizovaný',
				notSync: 'Nesynchronizovaný',
				notConnected: 'Nepřipojený ku Cloudu NEM',
				loading: 'Načítá se...'
			},
			transactionDetails: {
				title: 'Detaily převodu',
				id: 'ID',
				hash: 'Hash',
				type: 'Typ převodu',
				direction: 'Transaction Direction',
				pending: 'Probíhá',
				outgoing: 'Odchází',
				incoming: 'Přichází',
				self: 'Ja',
				sender: 'Odesílatel',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Příjemce',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Zpráva',
				noMessage: 'Žádný zprávy',
				encrypted: 'Zpráva je šifrována',
				time: 'Časový údaj',
				confirmations: 'Potvrzení',
				confirmationsUnknown: 'Unknown',
				amount: 'Množství',
				multiplier: 'Multiplier',
				innerFee: 'Inner Fee',
				multisigFees: 'Multisig Fees',
				cosignatory: 'Cosignatory',
				namespace: 'Namespace',
				rentalFee: 'Rental fee',
				mosaicName: 'Mosaic Name',
				mosaicQuantity: 'Mosaic quantity',
				mosaicLevy: 'Mosaic levy',
				description: 'Description',
				propertiesLabel: 'Properties',
				properties: {
					divisibility: 'Divisibility',
					initialSupply: 'Initial supply',
					supplyMutable: 'Is supply mutable',
					transferable: 'Is transferable'
				},
				supplyType: 'Supply type',
				supplyAmount: 'Supply amount',

			},
			accountDetails: {
				title: 'Account details',
				label: 'Label',
				noLabel: 'No label',
				add: 'Add to address book',
				remove: 'Remove from address book',
				balance: 'Balance',
				vested: 'vested',
				importance: 'Importance',
				publicKey: 'Public key',
				noPublicKey: 'No public key',
				harvestedBlocks: 'Harvested blocks'
			},
			bootLocalNode: {
				title: 'Bútovat lokální uzel',
				account: 'Účet na bútování lokálního uzla',
				noLabel: '<span class=\'null\'>&lt;Žádný název&gt;</span>',
				wallet: 'Peněženka',
				node: 'Název uzla',
				boot: 'Bútovat',
				booting: 'Bútování...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Zavřít peněženku',
				message: 'Opravdu chcete zavřít peněženku a vrátit se na úvodní stranu?'
			},
			createAccount: {
				title: 'Vytvořit nový účet',
				label: 'Soukromý název',
				wallet: 'Peněženka',
				successMessage: 'Účet {{1}} {{#2}}({{2}}){{/2}} byl vytvořen!',
				create: 'Vytvořit'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Public key',
				privateKey: 'Private key',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Přidat již existujíci účet',
				privateKey: 'Soukromý klíč k účtu',
				wallet: 'Peněženka',
				successMessage: 'Účet {{1}} {{#2}}({{2}}){{/2}} byl přidán!',
				add: 'Přidať',
				label: 'Název'
			},
			setPrimary: {
				title: 'Vybrat hlavní účet',
				account: 'Vybrat účet jako hlavní',
				noLabel: '<span class=\'null\'>&lt;Žiadny název&gt;</span>',
				wallet: 'Peněženka',
				successMessage: 'Účet {{1}} {{#2}}({{2}}){{/2}} byl nastaven jako hlavní!',
				set: 'Nastavit jako hlavní'
			},
			changeWalletName: {
				title: 'Změna názvu peněženky',
				wallet: 'Současný název peněženky',
				newName: 'Nový název peněženky',
				successMessage: 'Název peněženky byl úspěšně změněn z <em>{{1}}</em> na <em>{{2}}</em>',
				change: 'Změniť'
			},
			changeWalletPassword: {
				title: 'Změna hesla peněženky',
				wallet: 'Peněženka',
				password: 'Současné heslo',
				newPassword: 'Nové heslo',
				confirmPassword: 'Potvrdit nové heslo',
				successMessage: 'Heslo peněženky bylo úspěšně změněno',
				change: 'Změniť',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Zadané heslo a heslo potvrzení se neshodují. Prosím, ujistěte se, že jste nové heslo napsali správně.'
			},
			changeAccountLabel: {
				title: 'Změnit název účtu ',
				label: 'Název účtu',
				wallet: 'Peněženka',
				successMessage: 'Účet {{1}} se nyní jmenuje {{2}}',
				change: 'Změnit'
			},
			removeAccount: {
				title: 'Odstranit účet',
				label: 'Název účtu',
				wallet: 'Peněženka',
				warning: 'Prosím ujistěte se, že na vašem účtu již nejsou žádné NEMů, jinak budou ztraceny navždy.',
				successMessage: 'Účet {{1}} {{#2}}({{2}}){{/2}} byl odstranen!',
				remove: 'Odstranit'
			},
			nisUnavailable: {
				title: 'NIS nedostupný',
				message: 'Odpojen z NIS, čeká na spojení'
			},
			shutdown: {
				title: 'Zavřít program',
				message: 'Opravdu chcete zavřít NEM Community Client?'
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Wallet',
				activate: 'Activate',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Wallet',
				deactivate: 'Deactivate',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Wallet',
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Wallet',
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Add contact',
				add: 'Add'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Save changes'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Remove'
			},
			placeOrder: {
				title: 'Place order',
				cancel: 'Cancel',
				sell: 'Sell',
				buy: 'Buy',
				place: 'Place order',
				placing: 'Placing',
				hours: 'Hours',
				youWillSpend: 'You will spend',
				youWillGet: 'You will get',
				brokersCommission: "broker's commission",
				validity: 'Validity',
				strategy: 'Strategy',
				buying: 'buying',
				selling: 'selling',
				upTo: 'up to',
				validities: {
					GTC: 'Good Till Cancelled',

				},
				priceVariants: {
					market: 'Market price',
					custom: 'Custom price'
				},
				placeSuccess: 'Order successfully placed',
				strategies: {
					limit: 'Limit',
					market: 'Market',
					stop: 'Stop',
					peg: 'Peg'
				},
				blankMarketPrice: 'Can\'t find a suitable market price',
				minStep: 'Minimal step'
			},
			removeOrder: {
				title: 'Remove order',
				message: 'Are you sure you want to remove this order?',
				removeSuccess: 'Order successfully removed'
			},
			transferFiat: {
				transferFiat: 'Transfer Fiat',
				depositFiat: 'Deposit Fiat',
				tradeInstrument: 'Trade instrument',
				cancel: 'Cancel',
				transfer: 'Transfer',
				transferring: 'Transferring',
				deposit: 'Deposit',
				depositing: 'Depositing',
				escrow: 'Escrow',
				other: 'Other',
				transferSuccess: 'Money transferred successfully!',
				depositSuccess: 'Money deposited successfully!',
				noInstruments: 'No instruments available',
				noEscrow: 'No escrow account',
				noAccounts: 'No bank accounts found',
				senderAccount: 'Sender account',
				recipientAccount: 'Recipient account',
				receiveInstrument: 'Receive instrument',
				balance: 'balance',
				narrative: 'Narrative'
			},
			viewUserDetails: {
				title: 'User Details',
				message: 'Your personal details',
				cancel: 'Cancel',
				editDetails: 'Edit details',
				confirm: 'Confirm'
			},
			setUserDetails: {
				setup: {
					title: 'Setup User Details',
					success: 'User details setup successfully'
				},
				edit: {
					title: 'Edit User Details',
					success: 'User details updated successfully'
				},
				id: 'User id',
				next: 'Next',
				cancel: 'Cancel',
				back: 'Back',
				finish: 'Finish',
				submitting: 'Submitting',
				processing: 'Processing',
				update: 'Update',
				updating: 'Updating',
				firstName: 'First name',
				lastName: 'Last name',
				dateOfBirth: 'Date of birth',
				country: 'Country',
				selectCountry: 'Select country',
				passport: 'Passport',
				address: 'Address',
				contactNumber: 'Contact number',
				email: 'Email address',
				steps: {
					1: {
						prompt: 'Please enter your personal data'
					},
					3: {
						prompt: 'You will not be able to change these fields later',
						agreePrompt: 'I agree with ',
						agreeLink: 'terms of usage'
					},
					4: {
						prompt: 'Please check all the details and return if you want to change them'
					}
				}
			},
			noDetails: {
				title: 'setup user details',
				message: 'You need to first setup user details, would you like to do it right now?',
				setup: 'Setup'
			},
			setFiatWithdrawalAccount: {
				selectTradeInstrument: 'Select currency',
				title: 'Set Fiat Withdrawal Account',
				detailsMessage: 'The new Fiat withdrawal account will be associated with your current user details, you can update them before establishing the new withdrawal account.',
				message: 'You are almost there, now you should type in the address of the Fiat account that will be used as a withdrawal account and attach it to a currency.',
				createSuccess: 'Fiat Withdrawal account created successfully',
				tradeInstrument: 'Trade instrument',
				cancel: 'Cancel',
				finish: 'Finish',
				finishing: 'Finishing',

			},
			setXemWithdrawalAccount: {
				title: 'Create XEM Withdrawal Account',
				detailsMessage: 'The new XEM withdrawal account will be associated with your current user details, you can update them before establishing the new withdrawal account.',
				message: 'You are almost there, now you should type in the address of the account that will be used as a withdraw account.',
				createSuccess: 'XEM Withdrawal account created successfully',
				cancel: 'Cancel',
				finish: 'Finish',
				finishing: 'Finishing',

			},
			setBtcWithdrawalAccount: {
				title: 'Setup BTC Withdrawal Account',
				message: 'Type in the address of your Bitcoin account to be used as the withdrawal account',
				detailsMessage: 'The new BTC withdrawal account will be associated with your current user details, you can update them before establishing the new withdrawal account.',
				address: 'Bitcoin address',
				setup: 'Setup',
				settingUp: 'Setting up',
				setupSuccess: 'BTC withdrawal account setup successfully'
			},
			requestBtcEscrowAccount: {
				title: "Request BTC escrow",
				message: "Do you want to request a BTC escrow account from the broker?",
				requestSuccess: 'Your BTC escrow request was sent to your broker'
			},
			confirmWithPassword: {
				title: 'Confirm action',
				confirm: 'Confirm',
				message: 'In order to complete this action you should confirm your password.',
				password: 'Heslo',
				wallet: 'Wallet'
			},
			tradePairNotAvailable: {
				title: 'Not available',
				message: 'This trade pair is not available, please go and setup the trade instruments that it is compound of. Do you want to do it ?'
			},
			selectTradingAccount: {
				title: 'Select trading account',
				message: 'Please select the account that will be used as the main account in trading operations',
				tradingAccount: 'Trading account',
				submit: 'Submit',
				submitting: 'Submitting',
				selectAccount: 'Select account'
			},
			brokerNotBooted: {
				title: 'Broker not booted',
				message: 'Broker is not available. Please boot it prior to continuing.'
			},
			withdraw: {
				xem: {
					title: 'Withdraw XEM'
				},
				btc: {
					title: 'Withdraw BTC'
				},
				fiat: {
					title: 'Withdraw Fiat'
				},
				escrowBalance: 'balance in escrow',
				withdraw: 'Withdraw',
				processing: 'Processing',
				withdrawSuccess: 'Money withdrawn sucessfully!',
				cancel: 'Cancel',
				setupWithdraw: 'setup',
				noWithdraw: 'not set yet:'
			},
			orderUpdate: {
				title: 'Order Update',
				buying: 'Buying',
				selling: 'Selling',
				eachFor: 'Each for',
				fee: 'Poplatek',
				strategy: 'Strategy',
				total: 'Total',
				ok: 'OK',
				orderDetails: 'Order details',
				price: 'Price',
				amount: 'Množství',
				matchOccurred: 'New match occurred!',
				orderInfo: 'Order info',
				matchInfo: 'Match info',
				reservedAmount: 'Reserved amount'
			},
			publishTx: {
				message: 'In order to complete the operation, you will need to send a transaction. It will cost you:',
				insufficientBalance: 'Insufficient balance',
				insufficientBalanceMessage: 'You don\'t have enough XEM on your active account to perform the operation. You need to have at least:',
				kickstartOptionMessage: "You can make a transfer to a broker's kickstart account and get XEM coins in exchange for the Fiat money.",
				exchangeFiatForXem: 'Exchange Fiat for XEM'
			},
			withdrawalAccountTx: {
				title: 'Withdrawal account transaction',
				ok: 'OK',
				cancel: 'Cancel'
			},
			addFiatAccount: {
				title: 'Add Fiat account',
				message: 'Enter the data about the new Fiat account',
				tradeInstrument: 'Trade instrument',
				accountNumber: 'Account number',
				btcPrivateKey: 'BTC private key',
				correspondingKey: 'corresponding BitId key',
				add: 'Add',
				successMessage: 'Fiat account added successfully',
				detailsMessage: 'The new Fiat account will be associated with your current user details, you can update them before establishing the new withdrawal account.'
			},
			kickstart: {
				title: 'Kickstart',
				message: "You can get XEMs in exchange for the Fiat money. Broker will transfer your XEM coins to the selected recipient account. The transfer commission will be payed with the XEMs taken from exchange.",
				senderAccount: 'Sender account',
				noAccounts: 'No accounts available',
				recipientAccount: 'Recipient account',
				kickstartAccount: "Broker's kickstart account",
				noAccountsFound: 'No accounts found',
				noAccountsForInstrument: 'No kickstart receive accounts were registered for this instrument',
				balance: 'Balance',
				transfer: 'Transfer',
				transferring: 'Transferring',
				cancel: 'Cancel',
				willGet: 'You will get',
				rate: 'Rate',
				selectSender: 'Select sender',
				transferSuccess: 'Money transferred successfully'
			},
			noBankAccounts: {
				title: 'No Bank accounts',
				message: 'Please setup at least one Fiat account first.'
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Peněženka byla úspěšně importována!',
			nav: {
				start: 'První<strong>kroky</strong>',
				about: 'Info o <strong>NEM</strong>',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'Nový v <em>NEM</em>?',
				leftButton: 'Vytvořit novou peněženku',
				walletNamePlh: 'Název vaší peněženky',
				passwordPlh: 'Heslo',
				confirmPasswordPlh: 'Confirm password',
				create: 'Vytvořit',
				creating: 'Creating...',
				rightTitle: 'Již jste <em>NEM</em>ber?',
				rightButton: 'Otevřít vaší peněženku',
				openButton: 'Otevřít',
				walletsFound: 'Nalezené<strong>{{1}}</strong> <em>peněženky</em>',
				copyright: 'Photography by <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC šifruje vaši peněženku',
					description: '<em>Bezpečnost</em> je velmi důležitá, vyhnete se tak krádeži vašich NEMů &amp; aktiv.'
				}, {
					title: 'Remote NEM Infrastructure Server',
					description: 'By using a remote NIS you don\'t have to synchronise the blockchain at start-up.',

				}, {
					title: 'Delegated harvesting',
					description: 'With delegated harvesting you can harvest on remote NIS nodes!',

				}, {
					title: 'Multisignature transactions',
					description: 'Secure your XEM and assets via in-blockchain multi-signature transactions.',

				}, {
					title: 'Native language support',
					description: 'NEM user interface supports multiple languages. See "Settings".'
				}, {
					title: 'Got any questions or feedback ?',
					description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

				}]
			},
			about: {
				sections: [{
					title: 'Jak NCC funguje?',
					paragraphs: [
						'<strong>NCC</strong> poskytuje přístup k vašim aktivům a NEMúm tak jako klasická peněženka. Můžete',
						'<strong>NCC</strong> potřebuje prítsup k serveru<strong>NIS</strong>. Za normálních okolností máte aktivní lokální server (je nainstalován spolu s <strong>NCC</strong>)',
						'Můžete nakonfigurovat také přístup ke vzdálenému serveru <strong>NIS</strong>.'
					],
					listItems: [
						'Mít několik peněženek',
						'Nastavit peněženku tak, aby obsahovala více účtů'
					]
				}, {
					title: 'Co je &#42;NIS?',
					paragraphs: [
						'Tato součást je zodpovědná za udržování cloudu <strong> NEM </ strong> živého.',
						'The more <strong>NIS</strong> there are in the network, the better the security.,',
						'<strong>NIS</strong> je přístupová brána do <strong>NEM</strong> cloudu.'
					],
					legend: '<strong>&#42;NIS</strong> je skratka <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Asi před {{1}} dny',
			lastAccessJustNow: 'Právě teď',
			lastAccessTooltip: 'Poslední přihlášení {{1}}',
			primary: 'Hlavní',
			primaryShort: 'H',
			noLabel: '<Žádný název>',
			copiedToClipboard: 'Adresa byla zkopírována!',
			actions: {
				refreshInfo: 'Obnovit Info',
				bootLocalNode: 'Bútovat lokální uzel',
				changeWalletName: 'Změnit název peněženky',
				changeWalletPassword: 'Změnit heslo peněženky',
				mergeWallets: 'Sloučit peněženky',
				exportWallet: 'Exportovat peněženku',
				createAccount: 'Vytvořit nový účet',
				createRealAccountData: 'Create Real Account Data',
				verifyRealAccountData: 'Verify Real Account Data',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'View Account Details',
				addAccount: 'Přidat již existujíci účet',
				changeAccountLabel: 'Změnit název účtu',
				setPrimary: 'Nastavit jako hlavní účet',
				removeAccount: 'Odstranit účet',
				clientInfo: 'Client Info',
				closeWallet: 'Zavřít peněženku',
				closeProgram: 'Zavřít program',
				copyClipboard: 'Copy Address to Clipboard',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Nástěnka',
				'Zprávy',
				'Kontakty',
				'Převody',
				'Sklizené bloky',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Asset Exchange',
				'News',
				'Accounts',
				'Settings',
				'Zavřít program',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'Pokud chcete plně využívat možnosti NCC, musíte nejprve nabútovat lokální uzel.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Významové skóre',
				unknown: 'Neznámý status',
				start: 'Začít sklizeň',
				harvesting: 'Sklizeň',
				stop: 'Zastavit žatvu',
				description: 'Význam účtu pro cloud NEMu',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Nedávné převody',
				sendNem: 'Odeslat NEM',
				signMultisig: 'SIGN',
				balance: 'Současný zostatek',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(Blok {{1}}{{#2}} : asi {{3}} dny pozadu{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'Neznámy',
				columns: [
					'',
					'Čas',
					'Odesílatel/Příjemce',
					'Zpráva',
					'',
					'Detaily',
					'Potvrzení',
					'Poplatek',
					'Množství'
				],
				noMessage: 'Žádná zpráva',
				encrypted: 'Zpráva je šifrována',
				view: 'Zobrazit',
				confirmationsUnknown: 'Unknown',
				pending: 'Probíhá',
				seeAll: 'Zobrazit všechny převody',
				noTransactions: 'Zatím nebyly provedený žádný převody'
			},
			nemValue: {
				title: 'Štatistiky hodnoty NEM'
			},
			messages: {
				titleTooltip: 'Zprávy'
			},
			news: {
				titleTooltip: 'Novinky'
			},
			notAvailable: 'V alfa verzi není dostupné'
		},
		transactions: {
			title: 'Převody',
			sendNem: 'Odeslat NEM',
			balance: 'Současný zostatek',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: 'Přichází',
				outgoing: 'Odchází'
			},
			table: {
				columns: [
					'',
					'Čas',
					'Odesílatel/Příjemce',
					'Zpráva',
					'',
					'Detaily',
					'Potvrzení',
					'Poplatek',
					'Množství'
				],
				noMessage: 'Žádná zpráva',
				encrypted: 'Zpráva je šifrována',
				view: 'Zobrazit',
				confirmationsUnknown: 'Unknown',
				pending: 'Probíhá',
				noTransactions: 'Zatím nebyly provedený žádné převody',
				loading: 'Načítání dalších převodů...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Současný zostatek',
			filters: {
				displayAll: 'Display all',
				displayMineonly: 'Display mine only',
				filterNamespace: 'Filter Namespace:',
				filterMosaic: 'Filter Mosaic:'
			},
			table: {
				columns: [
					'',
					'Namespace & Mosaic',
					'Creation',
					'Expiration (est.)'
				],
				loading: 'Loading Namespaces & Mosaics...',
				subNamespace: 'sub-namespace'
			}
		},
		harvestedBlocks: {
			title: 'Sklizené bloky',
			feeEarned: 'Poplatky sklizené z posledních 25 bloků',
			unknown: 'Unknown',
			table: {
				columns: [
					'Blok',
					'Čas',
					'Block difficulty',
					'Poplatek'
				],
				noBlocks: 'Žádné sklizené bloky ',
				loading: 'Loading more harvested blocks'
			},
			harvesting: {
				unknown: 'Neznámý status',
				start: 'Začít sklizeň',
				harvesting: 'Sklizeň',
				stop: 'Zastavit sklizeň',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'Address book',
			addContact: 'Add contact',
			table: {
				columns: [
					'Account address',
					'Private Label',
					'Public Label'
				],
				noContacts: 'There is no contacts in your address book'
			},
			noLabel: 'No label',
			sendNem: 'Send NEM',
			edit: 'Edit',
			remove: 'Remove'
		},
		trading: {
			buy: 'Buy',
			sell: 'Sell',
			trading: {
				title: 'Trading',
				placeOrder: 'Place order',
				baseInstrument: 'Base currency',
				quoteInstrument: 'Quote currency'
			},
			allTradePairs: {
				title: 'Market trade pairs',
				base: 'Base',
				quote: 'Quote',
				bid: 'Bid',
				ask: 'Ask',
				noPairs: 'No trade pairs available'
			},
			depthQuotes: {
				title: 'Market Depth Quotes',
				buy: 'Buy',
				sell: 'Sell',
				price: 'Price',
				noQuotes: 'No quotes available'
			},
			tradeOptions: {
				title: 'Options',
				showPanel: 'Show panel',
				panelDropdown: {
					tradeHistory: 'Trade History',
					escrowBalances: 'Escrow Balances',
					pendingOrders: 'Pending Orders'
				}
			},
			tradeHistory: {
				title: 'Trade History',
				amount: 'Množství',
				price: 'Price',
				time: 'Čas',
				noHistory: 'No transaction using this trade pair yet'
			},
			escrowBalances: {
				title: 'Escrow Balances',
				tradeInstrument: 'Currency',
				balance: 'Balance',
				noBalances: 'You haven\'t established any escrow balances yet.',
				reserve: 'Reserve'
			},
			pendingOrders: {
				title: 'Pending Orders',
				base: 'Base',
				quote: 'Quote',
				amount: 'Množství',
				price: 'Price',
				perOne: 'per 1',
				createdOn: 'Created on',
				type: 'Type',
				noOrders: 'You haven\'t placed any orders yet.',
				strategy: 'Strategy',
				remove: 'Remove'
			},
			graphChart: {
				title: 'Graph Chart',
				step: 'Step',
				steps: {
					fifteenMinutes: '15 minutes',
					oneHour: '1 hour',
					oneDay: '1 day'
				},
				OHLC: 'OHLC',
				volume: 'Volume'
			}
		},
		financialTransactions: {
			deposit: 'Deposit',
			depositXem: 'Deposit XEM',
			depositFiat: 'Deposit Fiat',
			withdraw: 'Withdraw',
			escrowAddress: 'Escrow address',
			escrows: {
				title: 'Escrow accounts',
				filters: {
					all: 'All',
					xem: 'XEM',
					fiat: 'Fiat',
					btc: 'BTC'
				},
				statuses: {
					requested: 'Requested',
					confirmed: 'Confirmed',
					established: 'Established',
					invalid: 'Invalid'
				},
				noEscrows: 'No escrow accounts yet',
				tradeInstrument: 'Currency',
				balance: 'Balance',
				reserve: 'Reserve',
				expiry: 'Payments expire',
				current: 'Current for this currency'
			},
			settings: {
				title: 'Nastavení',
				status: 'Status',
				userDetails: 'User details',
				xem: 'XEM',
				fiat: 'Fiat',
				btc: 'BTC',
				notSetup: 'Not set yet',
				notAvailableYet: 'Not available yet',
				withdrawalAccount: 'Withdrawal account number',
				requestWithdrawalAccount: 'Request account',
				setupEscrowWarning: 'Please request an escrow',
				setWithdrawalWarning: 'Please set withdrawal account',
				processing: 'Processing',
				accountNumber: 'Account number',
				userDetailsSettings: {
					header: 'Your profile details',
					showMoreDetails: 'Show more details',
					editDetails: 'Edit user details',
					firstName: 'First name',
					lastName: 'Last name',
					dateOfBirth: 'Date of birth',
					noUserDetails: 'You haven\'t setup user details yet!',
					pendingUserDetails: 'Your submitted user details are being processed',
					setupUserDetails: 'Setup user details'
				},
				xemSettings: {
					accountHeader: 'XEM account numbers',
					requestNewEscrow: 'Request new XEM escrow account',
					setWithdrawal: 'Set new XEM withdrawal account',
					selectTradingAccount: 'Change trading account'
				},
				fiatSettings: {
					tradeInstrument: 'Trade instrument',
					accountHeader: 'Fiat account numbers',
					requestNewEscrow: 'Request new Fiat escrow account',
					setWithdrawal: 'Set withdrawal account',
					noInstruments: 'No instruments available',
					bankAccount: 'Bank account'
				},
				btcSettings: {
					accountHeader: 'BTC account numbers',
					requestNewEscrow: 'Request new BTC escrow account',
					setupWithdrawal: 'Setup new BTC withdrawal account',
					generateAuthKey: 'Generate a BTC key for auth.',
					withdrawBtc: 'Withdraw BTC'
				}
			},
			tradingOperations: {
				title: 'Trading operations',
				type: 'Type',
				operation: 'Operation',
				date: 'Date',
				senderOrRecipient: 'Odesílatel/Příjemce',
				message: 'Zpráva',
				confirmations: 'Potvrzení',
				fee: 'Poplatek',
				amount: 'Množství',
				filters: {
					0: 'All',
					1: 'Deposit',
					2: 'Withdraw',
					3: 'BTC escrow request',
					4: 'BTC escrow response',
					5: 'User details setup',
					6: 'User details update',
					7: 'XEM Withdrawal account setup',
					8: 'BTC Withdrawal account setup'
				},
				noOperations: 'No operations performed yet!'
			}
		},
		fiatPanel: {
			instrument: {
				title: 'Instrument',
				tradeInstrument: 'Choose trade instrument',
				noInstruments: 'No instruments available'
			},
			account: {
				title: 'Fiat account',
				addAccount: 'Add account',
				chooseAccount: 'Choose account',
				noAccounts: 'No accounts for this trade instrument added yet'
			},
			transactions: {
				title: 'Account transactions',
				balance: 'Balance',
				availableBalance: 'Available Balance',
				columns: {
					time: 'Čas',
					sender: 'Odesílatel',
					sendAmount: 'Sent',
					recipient: 'Příjemce',
					receiveAmount: 'Received',
					narrative: 'Narrative'
				},
				sendFiat: 'Send Fiat',
				noTransfers: 'No transfers performed yet.',
				noAccount: 'No account selected',
				noNarrative: 'No narrative'
			}
		},
		settings: {
			title: 'Nastavení',
			settings: [{
				name: 'Jazyk'
			}],
			save: 'Uložit změny',
			saveSuccess: 'Nastavení byly úspěšně uloženy'
		}
	}
});