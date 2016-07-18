define({
	id: 'fi',
	name: 'suomi',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Lompakkotiedostoa ei löydy.',
			102: 'Lompakkoa ei ole luotu.',
			103: 'Lompakkotiedosto on vaurioitunut. Palauta lompakkotiedosto varmuuskopiosta.',
			104: 'Syöttämäsi salasana ei ole oikea.',
			105: 'Et syöttänyt salasanaa.',
			106: 'Jos haluat käyttää lompakkoa, se pitää avata. Avataksesi lompakon, on sinulla oltava salasana.',
			107: 'Lompakko ei sisällä tätä tiliä.',
			108: 'Tiliä ei voida poistaa. Tämä johtuu todennäköisesti siitä, että tilin saldo on suurempi kuin 0 XEM, tai yrität poistaa ensisijaista tiliä.',
			109: 'Samanniminen lompakko on jo olemassa. Valitse lompakolle toinen nimi.',
			110: 'Lompakko sisältää jo tämän tilin.',
			111: 'Lompakon nimi on hakemisto.',
			112: 'Lompakkotiedoston laajennus on väärä.',
			113: 'Lompakkoa ei voitu poistaa.',
			121: 'Osoitekijatiedostoa ei ole.',
			122: 'Osoitekirjaa ei ole luotu.',
			123: 'Osoitekirjatiedosto on viallinen, palauta se varmuuskopiosta.',
			124: 'Syöttämäsi osoitekirjan salasana on väärä.',
			125: 'Et syöttänyt osoitekirjan salasanaa.',
			127: 'Osoitekirja ei sisällä tätä osoitetta.',
			128: 'Osoite ei ole oikea.',
			129: 'Samalla nimellä oleva osoitekija on jo olemassa. Valitse osoitekirjalle toinen nimi.',
			130: 'Osoitekirja sisältää jo antamasi osoitteen.',
			131: 'Osoitekirjan nimi on hakemisto.',
			132: 'Osoitekirjan laajennustiedosto on väärä.',
			133: 'Osoitekirjaa ei voida poistaa.',
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
			202: 'Salattua viestiä ei voida lähettää, koska vastaanottaja ei ole tehnyt koskaan tilisiirtoa.',
			203: 'Tiliä ei voida muuntaa, koska kaikki allekirjoituskumppanit eivät ole tunnettuja. Heidän täytyy kuulua samaan lompakkoon tai vähintään yksi siirto täytyy olla tehtynä.',
			305: 'NIS ei ole käytettävissä. Yritä käynnistää NEM-sovellus uudelleen. Mikäli yrität käyttää NIS-palvelua etänä, tarkista kirjoitusvirheet (host), tai käytä toista etä-NIS -palvelua.',
			306: 'Esiintyi ongelma, jota kehitystiimi ei ole tavannut aikaisemmin. Pahoittelemme tilannetta, yritä uudelleen. Muussa tapauksessa avaa uusi keskustelu NEM:n keskustelualueella NIS/NCC -kohdassa.',
			400: 'Jotkut parametrit puuttuvat tai ovat viallisia.',
			401: 'Tätä toimintoa ei voida saattaa loppuun, koska muutoin on mahdollista että \'private key\' näkyy ulkopuolisille, mikäli se lähetetään etä-NIS -palveluun.',
			404: 'Lähdettä ei löydy.',
			500: 'Esiintyi ongelma, jota kehitystiimi ei ole tavannut aikaisemmin. Pahoittelemme tilannetta, yritä uudelleen. Muussa tapauksessa avaa uusi keskustelu NEM:n keskustelualueella NIS/NCC -kohdassa.',
			600: 'NCC vaatii NIS-palvelimen uudelleenkäynnistyksen, jotta siirtoja voidaan suorittaa NEM cloud palvelusta. Käytä NCC:n menua käynnistääksesi Local noden uudelleen.',
			601: 'NIS on jo käynnistetty uudelleen.',
			602: 'Melkein valmista. NIS lataa lohkoja. Lompakko on käytettävissä, kun tietokanta on täysin ladattu.',
			699: 'Louhijoiden maksimimäärä palvelimella on saavutettu.',
			700: 'Louhintaa ei voida aloittaa. Toiminto on mahdollista, kun tilisi saldo on vähintään 10000 louhittu XEM.',
			901: 'Offline-moden käynnistyksessä tapahtui virhe.',
			1000: 'Private key ja public key eivät vastaa toisiaan.',
			1001: 'Public key ja osoite eivät vastaa toisiaan.',
			1002: 'Osoite ei kuulu varsinaiseen verkkoon.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Aikaraja on ylitetty. Aikaraja on oltava yhden päivän sisällä.',
			1204: 'Valittu aikaraja on liian kaukana tulevaisuudessa. Aikaraja täytyy olla yhden päivän sisällä.',
			1205: 'Tilisi saldo ei ole oikea tälle siirrolle.',
			1206: 'Teksti on liian pitkä lähetettäväksi siirron mukana. Yritä lyhentää viestiä.',
			1207: 'Hash on jo tietokannassa tai siirtoja on vahvistamatta.',
			1208: 'Siirron allekirjoitusta ei voida varmistaa.',
			1209: 'Siirron aikamerkintä on liian kaukana menneisyydessä.',
			1210: 'Siirron aikamerkintä on liian kaukana tulevaisuudessa.',
			1219: 'Siirtoa ei hyväksytty, koska siirtojen välimuisti on täynnä. Korkeampi palkkio parantaaa mahdollisuutta siirron hyväksymiseen.',
			1262: 'Valtuutetulla louhintatilillä ei ole saldoa, joten sitä ei voida käyttää.',
			1263: 'Siirtoa ei hyväksytty, viivästynyt siirto on vielä käynnissä.',
			1264: 'Valtuutettu louhinta on jo käytössä.',
			1265: 'Ei voida deaktivoida, koska valtuutettu louhinta ei ole käytössä.',
			1266: 'Merkityksen siirto (valtuutettu louhinta) on ristiriidassa olemassa olevan siirron kanssa.',
			1271: 'Multisig allekirjoitettu siirto hylättiin. Nykyinen tili ei ole multisig-tilin allekirjoittaja.',
			1273: 'Multisig allekirjoitettu siirto hylättiin. Allekirjoittajakumppania ei tunneta NEM verkossa.',
			1274: 'Siirtoa ei sallita multisig-tilille.',
			1275: 'Multisig-tilin muutos hylätty. Yksi lisätty tili on jo allekirjoittaja.',
			1321: 'Tili on tuntematon. Tilin täytyy olla tehnyt ainakin yksi siirto (joko lähettäjänä tai vastaanottajana), jotta se voidaan tunnistaa verkossa.',
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
			success: 'Onnistui',
			unknown: 'Tuntematon tila',
			unknownMessage: 'NCC ei saanut vastausta oikeassa ajassa. Siirto saattoi kuitenkin onnistua.<br /><br />Tarkista siirrot ennen kuin yrität siirtoa uudelleen.',
			appStatus: {
				nccUnknown: 'NCC:n tila on tuntematon.',
				nccUnavailable: 'NCC ei ole käytettävissä.',
				nccStarting: 'NCC on käynnistymässä...',
				nisUnknown: 'NIS:n tila on tuntematon',
				nisUnavailable: 'NIS ei ole käytettävissä',
				nisStarting: 'NIS on käynnistymässä...',
				notBooted: 'NIS on käynnistettävä uudelleen. Avaa lompakkosi ja käynnistä local node uudelleen popup-valikosta, jotta voit muuttaa auto-boot asetuksia.',
				loading: 'Ladataan lohkoja tietokannasta, lohkossa:',
				booting: 'NIS on käynnistymässä uudelleen...',
				nisInfoNotAvailable: 'NIS info ei ole vielä käytettävissä. Yritetään hakea NIS infoa...',
				synchronizing: 'NIS:n synkronointi on käynnissä. Lohko {{1}}, {{2}} takana.',
				daysBehind: {
					0: 'Vähemmän, kuin yksi päivä.',
					1: 'Yksi päivä',
					many: '{{1}} päivää'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS on synkronoitu!',
				noRemoteNisAvailable: 'NIS ei löydy verkosta, tarkista internet-yhteys?'
			},
			addressBook: 'Osoitekirja',
			password: 'Salasana',
			passwordValidation: 'Salasana ei voi olla tyhjä',
			address: 'Osoite',
			privateLabel: 'Yksityinen merkintä',
			publicLabel: 'Julkinen merkintä',
			noCharge: 'Olemassa olevaa tiliä <b>ei</b> veloiteta, se katetaan multisig-tililtä.',
			fee: 'Palkkio',
			multisigFee: 'Multisig-palkkio',
			useMinimumFee: 'Käytä minimipalkkiota',
			feeValidation: 'Palkkio ei voi olla minimipalkkiota pienempi.',
			justUse: 'Käytä',
			dueBy: 'Maksettava',
			minutes: 'minute(s)',
			hours: 'Tunnit',
			hoursDue: 'Erääntyy (tunneissa)',
			hoursDueExplanation: 'Siirto hylätään, jos sitä ei tehdä ennen erääntymistä.',
			amount: 'Amount',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Sulje',
			saveButton: 'Save',
			cancelButton: 'Peruuta',
			sendButton: 'Lähetä',
			account: 'Tili',
			thisAccount: 'Tämä tili',
			warning: 'Varoitus',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'SIIRTO LÄHETYS',
			21: 'IMPORTANCE LÄHETYS',
			22: 'MULTISIG TILIN MUOKKAUS',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'MULTISIG SIIRTO',
			51: 'MULTISIG SIIRTO',
			52: 'MULTISIG SIIRTO',
			53: 'MULTISIG SIIRTO',
			54: 'MULTISIG SIIRTO',
			55: 'MULTISIG SIIRTO',

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
			pending: 'Vireillä oleva siirto',
			outgoing: 'Lähtevä siirto',
			incoming: 'Tuleva siirto',
			self: 'Siirto itselle',
			importance: 'Importance siirto',
			modification: 'Multisig-tilin muokkaus',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Hups!',
				caption: 'Virhe {{1}}'
			},
			yikes: {
				title: 'Ou nou!',
				caption: 'Koodin tieto {{1}}'
			},
			confirmDefault: {
				yes: 'Kyllä',
				no: 'Ei'
			},
			initialBackup: {
				title: "Tervetuloa NEM:iin",
				content: "Voit tehdä lompakostasi varmuuskopion oikean ylänurkan valikossa."
			},
			settings: {
				title: 'Asetukset',
				language: {
					label: 'Kieli'
				},
				remoteServer: {
					tabTitle: 'Etäpalvelin',
					protocol: 'Protokolla',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Käytä oletusporttia.'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Noden nimi',
					primaryAccount: 'Ensisijainen tili',
					auto: 'Automaattinen uudelleenkäynnistys, kun lompakko on avattu'
				},
				save: 'Tallenna',
				saveSuccess: 'Asetukset on tallennettu onnistuneesti'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'Muunna tili multisig-tiliksi',
				multisigAccount: 'Multisig-tili',
				cosignatories: 'Allekijoittajien osoitteet',
				labelDesc: 'Tämä tili on nimetty {{1}}',
				nullLabelDesc: 'Tällä tilillä ei ole nimeä',
				addCosignatory: '+ Lisää allekirjoittaja',
				convert: 'Muunna',
				txConfirm: {
					title: 'Vahvista multisig-tilin muunto',
					total: 'Yhteensä'
				},
				warning: 'Multisig-tili on allekirjoittajien listalla. Tämä aiheuttaa tilin lukkiutumisen ja estää pääsyn varoihin. Todennäköisesti <b>ET</b> halua tehdä sitä!',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Allekirjoita multisig-siirto',
				original: {
					from: 'Multisig-tili',
					to: 'Vastaanottaja',
					amount: 'Summa',
					fee: 'Sisäinen veloitus',
					deadline: 'Määräaika'
				},
				multisigFees: 'Multisig-palkkiot',
				multisigTotal: 'Yhteensä',
				sender: 'Allekirjoittaja',
				passwordValidation: 'Salasanakenttä ei voi olla tyhjä',
				sending: 'Lähetetään...',
				txConfirm: {
					title: 'Vahvista multisig-siirto',
					message: 'Viesti',
					encrypted: 'Viesti on salattu',
					noMessage: 'Ei viestiä',

				}
			},
			sendNem: {
				title: 'Lähetä XEM',
				sender: 'Lähettäjä',
				thisAccount: 'Tämä tili',
				labelDesc: 'Tämä tili on nimetty {{1}}',
				nullLabelDesc: 'Tällä tilillä ei ole nimeä',
				amount: 'Summa',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Vastaanottajan tili',
				recipientValidation: 'Tilin osoite on oltava 40 merkkiä pitkä (viivoja ei lasketa merkeiksi)',
				message: 'Viesti',
				encrypt: 'Salaa viesti',
				sending: 'Lähetetään...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Vahvista siirto',
					amount: 'Summa',
					to: 'Vastaanottaja',
					total: 'Kokonaissumma',
					message: 'Viesti',
					encrypted: 'Viesti on salattu',
					noMessage: 'Ei viestiä',
					confirm: 'Vahvista',
					sending: 'Lähetetään...'
				},
				notBootedWarning: {
					title: 'Nodea ei ole käynnistetty uudelleen!',
					message: 'Local node on käynnistettävä uudelleen, jotta XEM voidaan lähettää!'
				},
				bootingWarning: {
					title: 'Node on käynnistymässä uudelleen',
					message: 'Odota, että uudelleenkäynnistys on valmis, ennen kuin teet siirtoja.'
				},
				loadingWarning: {
					title: 'Ladataan tietokantaa'
				},

			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'Allekirjoittaja',
				remoteServer: 'Etäpalvelin',
				local: 'Paikallinen',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synkronoitu',
				notSync: 'Ei synkronoitu',
				notConnected: 'Ei yhteydessä NEM Cloud -palveluun',
				loading: 'Ladataan...'
			},
			transactionDetails: {
				title: 'Siirron tiedot',
				id: 'ID',
				hash: 'Hash',
				type: 'Siirron tyyppi',
				direction: 'Siirron suunta',
				pending: 'Vireillä oleva',
				outgoing: 'Lähtevä',
				incoming: 'Saapuva',
				self: 'Itse',
				sender: 'Lähettäjä',
				multisigAccount: 'Multisig-tili',
				issuer: 'Myöntäjä',
				recipient: 'Vastaanottaja',
				remote: 'Etä',
				multisigMessage: 'Olemassaolevat allekirjoitukset',
				message: 'Viesti',
				noMessage: 'Ei viestiä',
				encrypted: 'Viesti on salattu',
				time: 'Aikamerkintä',
				confirmations: 'Vahvistuksia',
				confirmationsUnknown: 'Tuntemaon',
				amount: 'Summa',
				multiplier: 'Multiplier',
				innerFee: 'Sisäinen palkkio',
				multisigFees: 'Multisig-palkkio',
				cosignatory: 'Allekirjoittaja',
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
				title: 'Tilin tiedot',
				label: 'Merkki',
				noLabel: 'Ei merkkiä',
				add: 'Lisää osoitekirjaan',
				remove: 'Poista osoitekirjasta',
				balance: 'Saldo',
				vested: 'Louhittu',
				importance: 'Merkitys',
				publicKey: 'Julkinen avain',
				noPublicKey: 'Ei julkista avainta',
				harvestedBlocks: 'Louhitut lohkot'
			},
			bootLocalNode: {
				title: 'Käynnistä local node uudelleen',
				account: 'Tili, jolta local node käynnistetään uudelleen',
				noLabel: '<span class=\'null\'>&lt;Ei nimeä&gt;</span>',
				wallet: 'Lompakko',
				node: 'Noden nimi',
				boot: 'Käynnistä uudelleen',
				booting: 'Käynnistymässä uudelleen...',
				warning: 'Boot node -varoitus',
				warningText: 'Yrität käynnistää noden uudelleen <u>{{2}}</u><br/><br/>Noden käynnistäminen uudelleen ei ole tällä hetkellä mahdollista etänä NCC:stä.',
				warningStatement: 'Sinulla on asetuksissa päällä noden uudelleen käynnistäminen automaattisesti, vaikka olet yhdistänyt nodeen etänä {{3}}.<br/><br/>Noden käynnistäminen uudelleen ei ole tällä hetkellä mahdollista etänä NCC:stä',
				warningQuestion: 'Oletko varma, että haluat käynnistää noden uudelleen <u>{{3}}</u> käyttämällä private keytä tilille {{1}} ({{2}} XEM)?<br><br>tämä paljastaa<span class=\"varoitus\">private keyn</span>  nodelle: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Sulje lompakko',
				message: 'Oletko varma, että haluat sulkea lompakon ja palata aloitussivulle?'
			},
			createAccount: {
				title: 'Luo uusi lompakko',
				label: 'Yksityinen merkintä',
				wallet: 'Lompakko',
				successMessage: 'Tili {{1}} {{#2}}({{2}}){{/2}} on luotu!',
				create: 'Luo'
			},
			showPrivateKey: {
				title: 'Näytä tilin PRIVATE Key',
				message: 'Tämä näyttää tilin private keyn tekstinä näytöllä. Tämä voi olla vaarallinen operaation, jos tietokoneellasi on haittaohjelmia. Jatketaanko tästä huolimatta?',
				publicKey: 'Public key',
				privateKey: 'Private key',
				show: 'Näytä avain'
			},
			showRemotePrivateKey: {
				title: 'Näytä etätilin PRIVATE Key',
				message: 'Tämä näyttää tilin private keyn tekstinä näytöllä. Tämä voi olla vaarallinen operaation, jos tietokoneellasi on haittaohjelmia. Jatketaanko tästä huolimatta?',

			},
			addAccount: {
				title: 'Lisää olemassaoleva tili',
				privateKey: 'Tilin Private Key',
				wallet: 'Lompakko',
				successMessage: 'Tili {{1}} {{#2}}({{2}}){{/2}} on lisätty lompakkoon!',
				add: 'Lisää',
				label: 'Merkki'
			},
			setPrimary: {
				title: 'Aseta ensisijainen tili',
				account: 'Tili on asetettu ensisijaiseksi',
				noLabel: '<span class=\'null\'>&lt;Ei merkkiä&gt;</span>',
				wallet: 'Lompakko',
				successMessage: 'Tili {{1}} {{#2}}({{2}}){{/2}} on asetettu ensisijaiseksi!',
				set: 'Aseta ensisijaiseksi'
			},
			changeWalletName: {
				title: 'Vaihda lompakon nimi',
				wallet: 'Nykyisen lompakon nimi',
				newName: 'Uusi lompakon nimi',
				successMessage: 'Lompakon nimi on vaihdetttu onnistuneesti<em>{{1}}</em> - <em>{{2}}</em>',
				change: 'Vaihda'
			},
			changeWalletPassword: {
				title: 'Vaihda lompakon salasana',
				wallet: 'Lompakko',
				password: 'Nykyinen salasana',
				newPassword: 'Uusi salasana',
				confirmPassword: 'Vahvista uusi salasana',
				successMessage: 'Lompakon salasana on vaihdettu onnistuneesti',
				change: 'Vaihda',
				passwordNotMatchTitle: 'Hups!',
				passwordNotMatchMessage: 'Syöttämäsi salasana ja salasanan vahvistus eivät vastaa toisiaan. Varmista, että syötät uuden salasanasi oikein.'
			},
			changeAccountLabel: {
				title: 'Vaihda tilin nimi',
				label: 'Tilin nimi',
				wallet: 'Lompakko',
				successMessage: 'Tili {{1}} on nimetty {{2}}',
				change: 'Vaihda'
			},
			removeAccount: {
				title: 'Poista tili',
				label: 'Tilin nimi',
				wallet: 'Lompakko',
				warning: 'Varmista, että tilisi on tyhjä ennen kuin poistat sen, tai muuten menetät kaikki tilille jääneet XEM:t.',
				successMessage: 'Tili {{1}} {{#2}}({{2}}){{/2}} on poistettu',
				remove: 'Poista'
			},
			nisUnavailable: {
				title: 'NIS ei ole käytettävissä',
				message: 'Yhteys NIS:iin katkaistu, odotetaan yhteyttä'
			},
			shutdown: {
				title: 'Sulje ohjelma',
				message: 'Haluatko varmasti sulkea NEM Community Client -sovelluksen?'
			},
			activateDelegated: {
				title: 'Aktivoi valtuutettu louhinta',
				wallet: 'Lompakko',
				activate: 'Aktivoi',
				warningText: 'Aktivointi kestää 6 tuntia (360 lohkoa). Aktivointi EI aloita louhintaa automaattisesti.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deaktivoi valtuutettu louhinta',
				wallet: 'Lompakko',
				deactivate: 'Katkaise yhteys',
				warningText: 'Deaktivointi kestää 6 tuntia (360 lohkoa).'
			},
			startRemote: {
				title: 'Käynnistä valtuutettu louhinta',
				wallet: 'Lompakko',
				start: 'Käynnistä'
			},
			stopRemote: {
				title: 'Lopeta valtuutettu louhinta',
				wallet: 'Lompakko',
				stop: 'Pysäytä'
			},
			logoutWarning: {
				leavePage: "Olet poistumassa lompakostasi. Muista, että muut tämän tietokoneen käyttäjät voivat päästä lompakkoosi, jos poistut lompakostasi tällä tavalla. Jos haluat estää muiden pääsyn lompakkoosi, valitse \"Sulje lompakko\" oikean ylänurkan valikosta ennen kuin suljet lompakkosivun."
			},
			addContact: {
				title: 'Lisää yhteystieto',
				add: 'Lisää'
			},
			editContact: {
				title: 'Muokkaa yhteystietoa',
				saveChanges: 'Tallenna muutokset'
			},
			removeContact: {
				title: 'Poista yhteystieto',
				remove: 'Poista'
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
			importSuccess: 'Lompakko on tuotu onnistuneesti!',
			nav: {
				start: 'Aloitussivu',
				about: 'NEM ',
				settings: 'Asetukset'
			},
			main: {
				leftTitle: 'Uusi <em>NEM-käyttäjä</em>?',
				leftButton: 'Luo uusi lompakko',
				walletNamePlh: 'Lompakkosi nimi',
				passwordPlh: 'Salasana',
				confirmPasswordPlh: 'Vahvista salasana',
				create: 'Luo',
				creating: 'Luodaan...',
				rightTitle: 'Oletko jo <em>NEM</em>-tilin käyttäjä?',
				rightButton: 'Avaa lompakkosi',
				openButton: 'Avaa',
				walletsFound: 'Löydetty <strong>{{1}}</strong> <em>Lompakko(a)</em>',
				copyright: 'Valokuvaaja <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC salaa lompakkosi',
					description: '<em>Lompakon turvallisuus</em> on erittäin tärkeää varkauksien välttämiseksi.'
				}, {
					title: 'Etä-NIS-palvelin',
					description: 'Käyttämällä etä-NIS-palvelinta sinun ei tarvitse synkronoida lohkoketjua käynnistyksen yhteydessä.',

				}, {
					title: 'Valtuutettu louhinta',
					description: 'Valtuutetulla louhinnalla voit louhia etä-NIS-palvelinten kautta!',

				}, {
					title: 'Usean allekirjoituksen siirrot',
					description: 'Turvaa XEM-valuuttasi ja muu omaisuutesi usean allekirjoituksen siirroilla lohkoketjussa.',

				}, {
					title: 'Kielten tuki',
					description: 'NEM:n käyttöliittymä tukee monia eri kieliä. Katso "Asetukset".'
				}, {
					title: 'Onko sinulla lisää kysyttävää tai muuta palautetta?',
					description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

				}]
			},
			about: {
				sections: [{
					title: 'Miten NCC toimii?',
					paragraphs: [
						'<strong>NCC</strong> luo yhteyden assetteihisi ja XEM-tilillesi samalla tapaa kuin perinteinen lompakko:',
						'<strong>NCC</strong> vaatii yhteyden <strong>NIS</strong>-palvelimeen ollakseen toimintavalmis. Normaalisti paikallinen palvelin on aktiivinen, kun se on asennettu <strong>NCC</strong>-palvelun kanssa.',
						'Voit myös konfiguroida pääsyn <strong>NIS</strong>-etäpalvelimelle.'
					],
					listItems: [
						'Sinulla voi olla useita lompakoita',
						'Voit määrittää useita tilejä lompakkoosi'
					]
				}, {
					title: 'Mikä on &#42;NIS?',
					paragraphs: [
						'Tämä komponentti pitää <strong>NEM</strong> cloud-palvelun käynnissä.',
						'The more <strong>NIS</strong> there are in the network, the better the security.,',
						'<strong>NIS</strong> on yhdyspiste <strong>NEM</strong>-cloudiin.'
					],
					legend: '<strong>&#42;NIS</strong> tulee sanoista <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Noin {{1}} päivää sitten',
			lastAccessJustNow: 'Juuri nyt',
			lastAccessTooltip: 'Viimeinen kirjautuminen oli {{1}}',
			primary: 'Ensisijainen',
			primaryShort: 'E',
			noLabel: '<Ei merkkiä>',
			copiedToClipboard: 'Osoite on kopioitu leikepöydälle!',
			actions: {
				refreshInfo: 'Päivitä Info',
				bootLocalNode: 'Käynnistä Local Node uudelleen',
				changeWalletName: 'Vaihda lompakon nimi',
				changeWalletPassword: 'Vaihda lompakon salasana',
				mergeWallets: 'Yhdistä lompakot',
				exportWallet: 'Vie lompakko',
				createAccount: 'Luo uusi lompakko',
				createRealAccountData: 'Luo real account data',
				verifyRealAccountData: 'Tarkista real account data',
				showPrivateKey: 'Näytä tilin PRIVATE key',
				showRemotePrivateKey: 'Näytä etätilin PRIVATE key',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'Näytä tilin tarkemmat tiedot',
				addAccount: 'Lisää olemassaoleva tili',
				changeAccountLabel: 'Vahda tilin nimi',
				setPrimary: 'Aseta ensisijainen tili',
				removeAccount: 'Poista tili',
				clientInfo: 'Client Info',
				closeWallet: 'Sulje lomakko',
				closeProgram: 'Sulje ohjelma',
				copyClipboard: 'Kopioi osoite leikepöydälle',
				copyDisabled: 'Osoitteen kopiointi vaatii toimiakseen flashia',
				convertMultisig: 'Muunna toinen tili multisig-tiliksi',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Valikko',
				'Viesti',
				'Osoitekirja',
				'Siirrot',
				'Louhitut lohkot',
				'Asset-vaihdanta',
				'Uutiset',
				'Sovellukset',
				'Tilit',
				'Asetukset',
				'Sulje ohjelma',
				'Namespaces & Mosaics',
				'Accounts',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'Local node täytyy käynnistää uudelleen, jotta saat kaikki NCC:n ominaisuudet käyttöösi.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Merkitys',
				unknown: 'Tuntematon tila',
				start: 'Aloita paikallinen louhinta',
				harvesting: 'Louhinta ',
				stop: 'Lopeta paikallinen louhinta',
				description: 'Tilin merkitys NEM-cloud -palvelussa',
				remoteHarvest: {
					title: 'Valtuutettu louhinta',
					activate: 'Aktivoi valtuutettu louhinta',
					activating: 'Aktivoidaan valtuutettua louhintaa...',
					active: 'Valtuutettu louhinta on aktiivinen',
					deactivate: 'Deaktivoi valtuutettu louhinta',
					deactivating: 'Deaktivoidaan valtuutettua louhintaa...',
					startRemoteHarvesting: 'Aloita valtuutettu louhinta',
					remotelyHarvesting: 'Etälouhinta',
					stopRemoteHarvesting: 'Lopeta valtuutettu louhinta',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Viimeisimmät siirrot',
				sendNem: 'Lähetä XEM',
				signMultisig: 'ALLEKIRJOITA',
				balance: 'Saldo',
				loading: 'Ladataan saldoa',
				accountCosignatories: 'Multisig-tili',
				accountCosignatoriesView: 'Näytä allekirjoittajakumppanit',
				vestedBalance: 'Louhittu saldo',
				syncStatus: '(lohko {{1}}{{#2}} : {{3}} päivää takana{{/2}})',
				notSynced: 'Saattaa olla epätarkka, NIS ei ole vielä ajan tasalla',
				unknown: 'Tuntematon',
				columns: [
					'',
					'Aika',
					'Lähettäjä/Vastaanottaja',
					'Viesti',
					'',
					'Tiedot',
					'Vahvistukset',
					'Palkkio',
					'Summa'
				],
				noMessage: 'Ei viestiä',
				encrypted: 'Viesti on salattu',
				view: 'Näytä',
				confirmationsUnknown: 'Tuntematon',
				pending: 'Vireillä oleva',
				seeAll: 'Näytä kaikki siirrot',
				noTransactions: 'Siirtoja ei ole vielä tehty'
			},
			nemValue: {
				title: 'XEM:n arvon statistiikka'
			},
			messages: {
				titleTooltip: 'Viestit'
			},
			news: {
				titleTooltip: 'Uutiset'
			},
			notAvailable: 'Ei vielä saatavilla beta-versiossa'
		},
		transactions: {
			title: 'Siirrot',
			sendNem: 'Lähetä XEM',
			balance: 'Saldo',
			filters: {
				confirmed: 'Vahvistettu',
				unconfirmed: 'Vahvistamaton',
				incoming: 'Saapuva',
				outgoing: 'Lähtevä'
			},
			table: {
				columns: [
					'',
					'Aika',
					'Lähettäjä/Vastaanottaja',
					'Viesti',
					'',
					'Tiedot',
					'Vahvistuksia',
					'Palkkio',
					'Summa'
				],
				noMessage: 'Ei viestiä',
				encrypted: 'Viesti on salattu',
				view: 'Näytä',
				confirmationsUnknown: 'Tuntematon',
				pending: 'Vireillä oleva',
				noTransactions: 'Siirtoja ei ole vielä tehty',
				loading: 'Lataa lisää siirtoja...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Saldo',
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
			title: 'Louhitut lohkot',
			feeEarned: 'Ansaittuja palkkioita 25 viimeisestä louhitusta lohkosta',
			unknown: 'Tuntematon',
			table: {
				columns: [
					'Korkeus',
					'Aika',
					'Lohkon vaikeus',
					'Palkkio'
				],
				noBlocks: 'Yhtään lohkoa ei ole vielä louhittu',
				loading: 'Ladataan lisää louhittuja lohkoja'
			},
			harvesting: {
				unknown: 'Tuntematon tila',
				start: 'Aloita paikallinen louhinta',
				harvesting: 'Louhinta ',
				stop: 'Lopeta paikallinen louhinta ',
				remoteHarvest: {
					startRemoteHarvesting: 'Aloita valtuutettu louhinta',
					stopRemoteHarvesting: 'Lopeta valtuutettu louhinta'
				}
			}
		},
		addressBook: {
			title: 'Osoitekirja',
			addContact: 'Lisää yhteystieto',
			table: {
				columns: [
					'Tilin osoite',
					'Yksityinen merkintä',
					'Julkinen merkintä'
				],
				noContacts: 'Osoitekirjassasi ei ole yhteystietoja'
			},
			noLabel: 'Ei merkkiä',
			sendNem: 'Lähetä XEM',
			edit: 'Muokkaa',
			remove: 'Poista'
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
			title: 'Asetukset',
			settings: [{
				name: 'Kieli'
			}],
			save: 'Tallenna muutokset',
			saveSuccess: 'Asetukset on tallennettu onnistuneesti'
		}
	}
});