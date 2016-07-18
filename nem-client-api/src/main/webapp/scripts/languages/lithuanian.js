define({
	id: 'lt',
	name: 'Lietuviškai',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Piniginės byla neegzistuoja.',
			102: 'Piniginė nesukurta.',
			103: 'Piniginės byla yra sugadinta. Prašome atstatyti Jūsų piniginę iš atsarginės kopijos, kurią Jūs turėjote susikurti, kai kūrėte naują piniginę arba pridėjote naują sąskaitą į ją.',
			104: 'Pateiktas slaptažodis netinka. Tikėkimes Jūs galite atsiminti teisingą slaptažodį. Jei jį praradote, jis negali būti atkurtas!',
			105: 'Piniginės slaptažodis nepateiktas.',
			106: 'Prieš pradedant darbą su pinigine, ji turi būti atidaryta. Norint atidaryti piniginę, Jūs turite įvesti piniginės slaptažodį.',
			107: 'Piniginėje nėra šios sąskaitos',
			108: 'Sąskaita negali būti pašalinta. Panašu, kad sąskaitoje yra daugiau kaip 0 XEM arba ši sąskaita yra Jūsų pagrindinė sąskaita.',
			109: 'Jau egzistuoja piniginė su tokiu pavadinimu. Prašome pasirinkti kitą piniginės pavadinimą.',
			110: 'Piniginėje jau yra ši sąskaita.',
			111: 'Piniginės pavadinimas yra direktorija.',
			112: 'Piniginės bylos plėtinys yra neteisingas.',
			113: 'Piniginė negali būti pašalinta.',
			121: 'Adresų knygos byla neegzistuoja.',
			122: 'Adresų knyga nesukurta/',
			123: 'Adresų knygos byla yra sugadinta. Prašome atstatyti ją iš atsarginės kopijos.',
			124: 'Įvestas adresų knygos slaptažodis neteisingas.',
			125: 'Neįvestas adresų knygos slaptažodis.',
			127: 'Adresų knygoje nėrą šio adreso.',
			128: 'Pateiktas adresas yra neteisingas.',
			129: 'Kita adresų knyga su tokiu pavadinimu jau egzistuoja. Prašome pasirinkti kitą adresų knygos pavadinimą.',
			130: 'Adresų knygoje jau yra šis adresas.',
			131: 'Adresų knygos pavadinimas yra direktorija.',
			132: 'Adresų knygos bylos plėtinys yra neteisingas.',
			133: 'Adresų knyga negali būti ištrinta.',
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
			202: 'Nėra viešojo rakto',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'NEM Infrastruktūros serveris (NIS) nepaleistas.\n\nBandykite paleisti iš naujo NEM programą.\n\nJei Jūs naudojate nuotolinį NIS, pasitikrinkite ar nepadarėte rašybos klaidų arba naudokite kitą nuotolinį NIS.',
			306: 'Įvyko klaida, kurios kūrėjai nenumatė. Atsiprašome, bet gal paleidimas iš naujo padės. Kitu atveju, praneškite apie tai NEM NIS/NCC bendruomenei',
			400: 'Trūksta kai kurių parametrų',
			401: 'Ši operacija negali būti atlikta, nes jos metu, Jūsų privatus raktas gali būti atskleistas, siunčian jį į NIS',
			404: 'Užklausos duomenys nerasti.',
			500: 'Nepavyko užsaugoti konfigūracijos bylos',
			600: 'NCC reikia, kad NIS serveris būtų paleistas, norint atlikti siuntimo ir gavimo transakcijas. Prašome naudoti NCC meniu ir paleisti vietinį prieigos tašką.',
			601: 'NIS prieigos taškas jau paleistas. Antrą kartą jį paleisti neįmanoma.',
			602: 'Beceik pasiruošta. NEM Infrastruktūros serveris šiuo metu apdoroja blokus. Piniginė pilnai funkcionuos, kai duomenų bazė bus pilnai užkrauta.',
			699: 'Pasiektas maksimalus galimų \'kasėjų\' kiekis serveryje.',
			700: 'Pateikta sąskaita neatitinka pagrindinių kriterijų, norint \'kasti\'. Pagrinde, tai susiję su XEM kiekiu Jūsų sąskaitoje. \'Kasimas\' prasideda tik turint ne mažiau 10,000 efektyvus XEM.',
			901: 'Įvyko klaida nustatant offline režimą.',
			1000: 'Jūsų pateikti privatus ir viešas raktai neatitinka.',
			1001: 'Jūsų pateiktas viešas raktas ir adresas neatitinka.',
			1002: 'Šis adresas neegzistuoja tinkle.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Pateiktas galutinis terminas yra praeityje. Galutinis terminas turi būti 1 dienos bėgyje.',
			1204: 'Pateiktas galutinis terminas yra per toli ateityje. Galutinis terminas turi būti ne daugiau kaip viena diena.',
			1205: 'Your account does not have the right balance to make this transaction.',
			1206: 'Pateikta žinutė yra per didelė, kad ją išsiųsti. Prašome sutrumpinti žinutę, kurią Jūs norite išsiųsti.',
			1207: 'Transakcijos \'hash\' jau yra duomenų bazėje arba nepatvirtintų transakcijų sąraše.',
			1208: 'Transakcijos parašas negali būti patikrintas.',
			1209: 'Transakcijos laiko žymė yra per toli praeityje.',
			1210: 'Transakcijos laiko žymė yra per toli ateityje.',
			1219: 'Transakcija buvo atmesta, nes transakcijų kiekis bloke viršijo leistiną kiekį. Didesnis transakcijos mokestis padidina šansus, kad transakcija būtų priimta.',
			1262: 'Delegated harvesting account has non zero balance and cannot be used.',
			1263: '\'Svarbumo\' perkėlimas atmestas. Jau yra atliekama \'svarbumo\' perkėlimo operacija.',
			1264: 'Delegated harvesting is already active.',
			1265: 'Delegated harvesting is NOT active. Cannot deactivate.',
			1266: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			1271: 'Multisig parašo transakcija atmesta. Esama sąskaita neturi parašo teisės multisig sąskaitai. ',
			1273: 'Multisig parašo transakcija atmesta. Susijusi multisig transakcija yra nežinoma NEM tinklui.',
			1274: 'Transakcija neleidžiama multisig sąskaitai.',
			1275: 'Multisig sąskaitos modifikacija atmesta. Viena iš pridėtų sąskaitų jau turi parašo teisę.',
			1321: 'Sąskaita nežinoma. Sąskaita turi turėti bent vieną transakciją (siuntimo ar gavimo), kad būtų žinoma tinkle.',
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
			success: 'Pavyko',
			unknown: 'Statusas nežinomas',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC statusas nežinomas',
				nccUnavailable: 'NCC nėra paleistas',
				nccStarting: 'NCC startuoja...',
				nisUnknown: 'NIS statusas nežinomas',
				nisUnavailable: 'NIS nėra paleistas',
				nisStarting: 'NIS startuoja...',
				notBooted: 'NIS turi būti užkrautas. Prašome atsidaryti Jūsų piniginę ir paleisti vietinį prieigos tašką atsidariusiame dialogo lange arba sukonfigūruokite automatinį paleidimą nustatymuose.',
				loading: 'Apdorojami blokai iš duomenų bazės, esama bloke:',
				booting: 'NIS kraunasi...',
				nisInfoNotAvailable: 'NIS informacijos kolkas nėra. Bandoma išgauti informaciją apie NIS...',
				synchronizing: 'NIS sinchronizuojasi. Dabartinis blokas yra {{1}}, liko dar {{2}} .',
				daysBehind: {
					0: 'mažiau kaip 1 diena',
					1: '1 diena',
					many: '{{1}} dienos'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS susisinchronizavęs!',
				noRemoteNisAvailable: 'Nuotolinis NIS nerastas tinkle, atsijungti nuo interneto?'
			},
			addressBook: 'Adresų knyga.',
			password: 'Slaptažodis',
			passwordValidation: 'Slaptažodis negali būti tuščias.',
			address: 'Adresas',
			privateLabel: 'Privati žymė',
			publicLabel: 'Vieša žymė',
			noCharge: 'Šiai sąskaitai <b>NEBUS</b> taikomi jokie mokesčiai, juos padengs multisig sąskaita',
			fee: 'Mokestis',
			multisigFee: 'Multisig fee',
			useMinimumFee: 'Naudoti minimalų mokestį.',
			feeValidation: 'Mokestis turi būti ne mažesnis kaip minimalus.',
			justUse: 'Tik naudokite.',
			dueBy: 'Galioja',
			minutes: 'minute(s)',
			hours: 'valandų',
			hoursDue: 'Liko valandų',
			hoursDueExplanation: 'If the transaction isn\'t included by the deadline, it is rejected.',
			amount: 'Amount',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Close',
			saveButton: 'Save',
			cancelButton: 'Nutraukti',
			sendButton: 'Siųsti',
			account: 'Sąskaita',
			thisAccount: 'Ši sąskaita',
			warning: 'Warning',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'PERVEDIMO TRANSAKCIJA',
			21: '\'SVARBUMO\' PERKĖLIMAS',
			22: 'MULTISIG SĄSKAITOS MODIFIKACIJA',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'MULTISIG TRANSAKCIJA',
			51: 'MULTISIG TRANSAKCIJA',
			52: 'MULTISIG TRANSAKCIJA',
			53: 'MULTISIG TRANSAKCIJA',
			54: 'MULTISIG TRANSAKCIJA',
			55: 'MULTISIG TRANSAKCIJA',

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
			pending: 'Atliekama transakcija',
			outgoing: 'Išeinanti transakcija',
			incoming: 'Įeinanti transakcija',
			self: 'Transakcija sau',
			importance: '\'Svarbumo\' perkėlimas',
			modification: 'Multisig modifikacija',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'KLAIDA {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Taip',
				no: 'Ne'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'Nustatymai',
				language: {
					label: 'Kalba'
				},
				remoteServer: {
					tabTitle: 'Nuotolinis serveris',
					protocol: 'Protokolas',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Portas',
					defaultPort: 'Naudokite portą pagal nutylėjimą.'
				},
				autoBoot: {
					tabTitle: 'Automatinis užkrovimas',
					name: 'Prieigos taško pavadinimas',
					primaryAccount: 'Pagrindinė sąskaita',
					auto: 'Automatiškai užkrauti, kai piniginė atidaryta'
				},
				save: 'Išsaugoti',
				saveSuccess: 'Nustatymai sėkmingai išsaugoti'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'Paversti sąskaitą į multisig',
				multisigAccount: 'Multisig saskaita',
				cosignatories: 'Parašų turėtojų adresai',
				labelDesc: 'Ši sąskaita pavadinta kaip {{1}}',
				nullLabelDesc: 'Ši sąskaita neturi pavadinimo',
				addCosignatory: '+ Pridėti parašo teisų turėtoją',
				convert: 'Paversti',
				txConfirm: {
					title: 'Patvirtinkita pavertimą į mulstisig sąskaitą',
					total: 'Viso'
				},
				warning: 'Multisig sąskaita yra parašo teisės turėtojų sąraše. Tai \'užrakins\' Jūsų pinigus joje. Tikriausia Jūs <b>NENORITE</b> to daryti.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Pasirašyti multisig transakciją',
				original: {
					from: 'Multisig sąskaita.',
					to: 'Gavėjas',
					amount: 'Suma',
					fee: 'Vidinis mokestis',
					deadline: 'Termino pabaiga'
				},
				multisigFees: 'Multisig mokesčiai',
				multisigTotal: 'Iš viso',
				sender: 'Parašo teisės turėtojas',
				passwordValidation: 'Slaptažodis negali būti tuščias',
				sending: 'Siunčiama...',
				txConfirm: {
					title: 'Patvirtinti multisig transakciją',
					message: 'Žinutė',
					encrypted: 'Žinutė šifruota',
					noMessage: 'Žinutes nėra',

				}
			},
			sendNem: {
				title: 'Siųsti XEM',
				sender: 'Siuntėjas',
				thisAccount: 'Ši sąskaita',
				labelDesc: 'Ši sąskaita pavadinta kaip {{1}}',
				nullLabelDesc: 'Ši sąskaita neturi pavadinimo',
				amount: 'Suma',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Gavėjo sąskaita',
				recipientValidation: 'Sąskaitos adresas be brūkšnių turi būti iš 40 simbolių.',
				message: 'Žinutė',
				encrypt: 'Užšifruoti žinutę',
				sending: 'Siunčiama...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Patvirtinti transakciją',
					amount: 'Suma',
					to: 'Į',
					total: 'Viso',
					message: 'Žinutė',
					encrypted: 'Žinutė šifruota',
					noMessage: 'Žinutės nėra',
					confirm: 'Patvirtinti',
					sending: 'Siunčiama...'
				},
				notBootedWarning: {
					title: 'Vietinis prieigos taškas neužkrautas',
					message: 'Norint siųsti XEM, vietinis prieigos taškas turi būti paleistas!'
				},
				bootingWarning: {
					title: 'Vietinis prieigos taškas užkrautas',
					message: 'Norint atlikti transakciją palaukite kol tinklo taškas bus pilnai paleistas.'
				},
				loadingWarning: {
					title: 'Apdorojama duomenų bazė'
				},

			},
			clientInfo: {
				title: 'Kliento informacija',
				ncc: 'NEM Community Client - NCC',
				signer: 'Parašo turėtojas',
				remoteServer: 'Nuotolinis serveris',
				local: 'Vietinis',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Susisinchronizavęs',
				notSync: 'Nesusisinchronizavęs',
				notConnected: 'Neprisijungta prie NEM Cloud',
				loading: 'Kraunasi...'
			},
			transactionDetails: {
				title: 'Transakcijos duomenys',
				id: 'ID',
				hash: 'Hash',
				type: 'Transakcijos tipas',
				direction: 'Transakcijos kryptis',
				pending: 'Kol kas vyksta',
				outgoing: 'Išeinanti',
				incoming: 'Įeinanti',
				self: 'Sau',
				sender: 'Siuntėjas',
				multisigAccount: 'Multisig sąskaita',
				issuer: 'Emitentas',
				recipient: 'Gavėjas',
				remote: 'Nuotolinis',
				multisigMessage: 'Parašai yra',
				message: 'Žinutė',
				noMessage: 'Nėra žinutės',
				encrypted: 'Žinutė yra užšifruota',
				time: 'Laiko žymė',
				confirmations: 'Patvirtinimai',
				confirmationsUnknown: 'Nežinoma',
				amount: 'Suma',
				multiplier: 'Multiplier',
				innerFee: 'Vidinis mokestis',
				multisigFees: 'Multisig mokesčiai',
				cosignatory: 'Parašo teisės turėtojas',
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
				title: 'Sąskaitos informacija',
				label: 'Pavadinimas',
				noLabel: 'Nėra pavadinimo',
				add: 'Pridėti į adresų knygą',
				remove: 'Išimti iš adresų knygos',
				balance: 'Balansas',
				vested: 'Efektyvus',
				importance: '\'Svarbumas\'',
				publicKey: 'Viešasis raktas',
				noPublicKey: 'Nėra viešojo rakto',
				harvestedBlocks: '\'Iškasti\' blokai'
			},
			bootLocalNode: {
				title: 'Užkrauti vietinį prieigos tašką',
				account: 'Vietinio prieigos taško sąskaita',
				noLabel: '<span class=\'null\'>&lt;Nėra pavadinimo&gt;</span>',
				wallet: 'Piniginė',
				node: 'Prieigos taško pavadinimas',
				boot: 'Užkrauti',
				booting: 'Kraunasi...',
				warning: 'Prieigos taško pranešimas',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Ar esate tikras, kad norite paleisti prieigos tašką <u>{{3}}</u> naudodami privatųjį raktą, priklausantį sąskaitai {{1}} ({{2}} XEM)?<br><br>Šiuo atveju, Jūs atskleisite sąskaitos <span class=\"sublabelWarning\">private key</span> prieigos taškui: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Uždaryti piniginę',
				message: 'Ar tikrai norite uždaryti piniginę ir grįžti į pagrindinį puslapį?'
			},
			createAccount: {
				title: 'Sukurti naują sąskaitą',
				label: 'Nuosavas pavadinimas',
				wallet: 'Piniginė',
				successMessage: 'Sąskaita {{1}} {{#2}}({{2}}){{/2}} sukurta!',
				create: 'Sukurti'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Viešasis raktas',
				privateKey: 'Privatus raktas',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Pridėti egzistuojančią sąskaitą',
				privateKey: 'Sąskaitos privatus raktas',
				wallet: 'Piniginė',
				successMessage: 'Sąskaita {{1}} {{#2}}({{2}}){{/2}} įtraukta į piniginę!',
				add: 'Pridėti',
				label: 'Pavadinimas'
			},
			setPrimary: {
				title: 'Nustatyti pagrindinę sąskaitą',
				account: 'Sąskaita, kuri turi būti nustatyta kaip pagrindinė',
				noLabel: '<span class=\'null\'>&lt;Nėra pavadinimo&gt;</span>',
				wallet: 'Piniginė',
				successMessage: 'Sąskaita {{1}} {{#2}}({{2}}){{/2}} nustatyta kaip pagrindinė!',
				set: 'Nustatyta kaip pagrindinė'
			},
			changeWalletName: {
				title: 'Pakeisti piniginės pavadinimą',
				wallet: 'Dabartinis piniginės pavadinimas',
				newName: 'Naujas piniginės pavadinimas',
				successMessage: 'Piniginės pavadinimas pakeistas sėkmingai iš <em>{{1}}</em> į <em>{{2}}</em>',
				change: 'Pakeisti'
			},
			changeWalletPassword: {
				title: 'Pakeisti piniginės slaptažodį',
				wallet: 'Piniginė',
				password: 'Dabartinis slaptažodis',
				newPassword: 'Naujas slaptažodis',
				confirmPassword: 'Patvirtinti naują slaptažodį',
				successMessage: 'Piniginės slaptažodis pakeistas sėkmingai',
				change: 'Pakeisti',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Jūsų įvestas naujas slaptažodis ir jo patvirtinimas neatitinka. Prašome įsitikinti, kad naują slaptažodį įvedėte teisingai.'
			},
			changeAccountLabel: {
				title: 'Pakeisti sąskaitos pavadinimą',
				label: 'Sąskaitos pavadinimas',
				wallet: 'Piniginė',
				successMessage: 'Sąskaita {{1}} dabar pavadinta kaip {{2}}',
				change: 'Pakeisti'
			},
			removeAccount: {
				title: 'Panaikinti sąskaitą',
				label: 'Sąskaitos pavadinimas',
				wallet: 'Piniginė',
				warning: 'Prašome įsitikinti, kad Jūsų sąskaitoje nėra NEM prieš ją panaikinant. Panaikinus sąskaitą, Jūs prarasite joje turėtus XEM visam laikui.',
				successMessage: 'Sąskaita {{1}} {{#2}}({{2}}){{/2}} panaikinta!',
				remove: 'Panaikinti'
			},
			nisUnavailable: {
				title: 'NIS nepaleistas',
				message: 'Atsijungta nuo NIS, laukiama prisijungimo'
			},
			shutdown: {
				title: 'Uždaryti programą',
				message: 'Ar tikrai norite uždaryti NEM Community Client?'
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Piniginė',
				activate: 'Aktyvuoti',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Piniginė',
				deactivate: 'Deaktyvuoti',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Piniginė',
				start: 'Pradėti'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Piniginė',
				stop: 'Stabdyti'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Pridėti kontaktą',
				add: 'Pridėti'
			},
			editContact: {
				title: 'Redaguoti kontaktą',
				saveChanges: 'Išsaugoti pakeitimus'
			},
			removeContact: {
				title: 'Pašalinti kontaktą',
				remove: 'Pašalinti'
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
				password: 'Password',
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
				fee: 'Fee',
				strategy: 'Strategy',
				total: 'Total',
				ok: 'OK',
				orderDetails: 'Order details',
				price: 'Price',
				amount: 'Amount',
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
			importSuccess: 'Piniginė importuota sėkmingai!',
			nav: {
				start: 'Pradžiamokslis',
				about: 'Apie NEM',
				settings: 'Nustatymai'
			},
			main: {
				leftTitle: 'Esate pirmą kartą <em>NEM</em>?',
				leftButton: 'Sukurti nauja piniginę',
				walletNamePlh: 'Sukurkite piniginės pavadinimą',
				passwordPlh: 'Slaptažodis',
				confirmPasswordPlh: 'Patvirtinti slaptažodį',
				create: 'Sukurti',
				creating: 'Kuriama...',
				rightTitle: 'Esate <em>NEM</em>eris?',
				rightButton: 'Atidaryti savo piniginę',
				openButton: 'Atidaryti',
				walletsFound: 'Rąstos <strong>{{1}}</strong> <em>piniginės</em>',
				copyright: 'Fotografas <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC šifruoja Jūsų piniginę',
					description: '<em>Saugumas</em> yra labai svarbus, tam kad išvengti XEM vagysčių &amp; assets.'
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
					title: 'Kaip veikia NCC?',
					paragraphs: [
						'<strong>NCC</strong> leidžia Jums prieiti prie savo XEM ir aktyvų. Jūs galite',
						'<strong>NCC</strong> reikia prieigos prie <strong>NIS</strong> serverio, kad veiktų. Paprastai reikia, kad vietinis serveris būtų aktyvus (jis instaliuojamas kartu su <strong>NCC</strong>)',
						'Jūs taip pat galite susikonfigūruoti prieigą prie nuotolinio <strong>NIS</strong> serverio.'
					],
					listItems: [
						'Turėti keletą piniginių',
						'Turėti keletą sąskaitų piniginėje'
					]
				}, {
					title: 'Kas yra &#42;NIS?',
					paragraphs: [
						'Šis komponentas reikalingas, kad veiktų <strong>NEM</strong> \'debesis\'.',
						'The more <strong>NIS</strong> there are in the network, the better the security.,',
						'<strong>NIS</strong> yra prieigos taškas į <strong>NEM</strong> \'debesi\'.'
					],
					legend: '<strong>&#42;NIS</strong> iššifruojamas kaip <strong>NEM Infrastruktūros Serveris</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '{{1}} dienos prieš tai',
			lastAccessJustNow: 'Dabar',
			lastAccessTooltip: 'Paskutinį kartą buvo prisijungta {{1}}',
			primary: 'Pagrindinė',
			primaryShort: 'P',
			noLabel: '<Nėra pavadinimo>',
			copiedToClipboard: 'Paspauskite, norėdami nukopijuoti adresą į atmintį',
			actions: {
				refreshInfo: 'Atnaujinti informaciją',
				bootLocalNode: 'Paleisti vietinį prieigos tašką',
				changeWalletName: 'Pakeisti piniginės pavadinimą',
				changeWalletPassword: 'Pakeisti piniginės slaptažodį',
				mergeWallets: 'Apjungti pinigines',
				exportWallet: 'Eksportuoti piniginę',
				createAccount: 'Sukurti naują sąskaitą',
				createRealAccountData: 'Sukurti realios sąskaitos duomenis',
				verifyRealAccountData: 'Tikrinti realios sąskaitos duomenis',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'View Account Details',
				addAccount: 'Pridėti egzistuojančią sąskaitą',
				changeAccountLabel: 'Pakeisti sąskaitos pavadinimą',
				setPrimary: 'Nustatyti kaip pagrindinę sąskaitą',
				removeAccount: 'Pašalinti sąskaita',
				clientInfo: 'Programos informacija',
				closeWallet: 'Uždaryti piniginę',
				closeProgram: 'Uždaryti programą',
				copyClipboard: 'Kopijuoti adresą į laikinąją atmintį',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Paversti kitą sąskaitą į multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Skydelis',
				'Žinutės',
				'Kontaktai',
				'Transakcijos',
				'\'Iškasti\' blokai',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Aktyvų birža',
				'Naujienos',
				'Aplikacijos',
				'Sąskaitos',
				'Nustatymai',
				'Uždaryti programą',
			],
			bootNodeWarning: 'Norint naudotis NCC pilnai, vietinis prieigos taškas turi būti paleistas.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Svarbumo tinkle procentas',
				unknown: 'Statusas nežinomas',
				start: 'Pradėti \'kasti\'',
				harvesting: '\'Kasimas\' vyksta',
				stop: 'Nutraukti \'kasimą\'',
				description: 'Sąskaitos svarbumas NEM \'debesyje\'',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Nuotolinis \'kasimas\' vyksta',
					stopRemoteHarvesting: 'Stop delegated harvesting',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Paskutinės transakcijos',
				sendNem: 'Siųsti XEM',
				signMultisig: 'SIGN',
				balance: 'Turimas balansas',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig sąskaita.',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: '\'Kasantis\' balansas',
				syncStatus: '(blokas {{1}}{{#2}} : po {{3}} dienu{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'nežinomas',
				columns: [
					'',
					'Laikas',
					'Siuntėjas/Gavėjas',
					'Žinutė',
					'',
					'Informacija',
					'Patvirtinimai',
					'Mokestis',
					'Suma'
				],
				noMessage: 'Žinutės nera',
				encrypted: 'Žinutė šifruota',
				view: 'Peržiūrėti',
				confirmationsUnknown: 'Nežinoma',
				pending: 'Atliekama',
				seeAll: 'Peržiūreti visas transakcijas',
				noTransactions: 'Nėra dar atlikta jokių transakcijų'
			},
			nemValue: {
				title: 'XEM vertės statistika'
			},
			messages: {
				titleTooltip: 'Žinutės'
			},
			news: {
				titleTooltip: 'Naujienos'
			},
			notAvailable: 'Dar nėra šioje alpha versijoje'
		},
		transactions: {
			title: 'Transakcijos',
			sendNem: 'Siųsti XEM',
			balance: 'Turimas balansas',
			filters: {
				confirmed: 'Patvirtintos',
				unconfirmed: 'Nepatvirtintos',
				incoming: 'Įeinančios',
				outgoing: 'Išeinančios'
			},
			table: {
				columns: [
					'',
					'Laikas',
					'Siuntėjas/Gavėjas',
					'Žinutė',
					'',
					'Informacija',
					'Patvirtinimai',
					'Mokestis',
					'Suma'
				],
				noMessage: 'Nėra žinutės',
				encrypted: 'Žinutė šifruota',
				view: 'Peržiūrėti',
				confirmationsUnknown: 'Nežinoma',
				pending: 'Vykdoma',
				noTransactions: 'Nėra atliktų transakcijų',
				loading: 'Krauna daugiau transakcijų...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Turimas balansas',
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
			title: 'Iškasti blokai',
			feeEarned: 'Iš paskutinių 25 \'iškastų\' blokų gauti mokesciai',
			unknown: 'Nežinoma',
			table: {
				columns: [
					'Bloko numeris',
					'Laikas',
					'Bloko sudėtingumas',
					'Mokestis'
				],
				noBlocks: 'Nėra \'iškastų\' blokų ',
				loading: 'Kraunama daugiau \'iškastų\' blokų'
			},
			harvesting: {
				unknown: 'Statusas nežinomas',
				start: 'Pradėti \'kasti\'',
				harvesting: '\'Kasimas\' vyksta',
				stop: 'Stabdyti \'kasimą\'',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'Adresų knyga',
			addContact: 'Pridėti kontaktą',
			table: {
				columns: [
					'Sąskaitos adresas',
					'Privati žymė',
					'Vieša žymė'
				],
				noContacts: 'Nėra kontaktų adresų knygoje'
			},
			noLabel: 'Nera žymės',
			sendNem: 'Siųsti XEM',
			edit: 'Redaguoti',
			remove: 'Pašalinti'
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
				amount: 'Amount',
				price: 'Price',
				time: 'Time',
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
				amount: 'Amount',
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
				title: 'Settings',
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
				senderOrRecipient: 'Sender/Recipient',
				message: 'Message',
				confirmations: 'Confirmations',
				fee: 'Fee',
				amount: 'Amount',
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
					time: 'Time',
					sender: 'Sender',
					sendAmount: 'Sent',
					recipient: 'Recipient',
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
			title: 'Nustatymai',
			settings: [{
				name: 'Kalba'
			}],
			save: 'Išsaugoti pakeitimus',
			saveSuccess: 'Nustatymai išsaugoti sėkmingai'
		}
	}
});