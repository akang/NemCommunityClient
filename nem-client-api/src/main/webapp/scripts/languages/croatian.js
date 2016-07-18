define({
	id: 'hr',
	name: 'hrvatski',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Datoteka ne postoji.',
			102: 'Novčanik nije stvoren.',
			103: 'Datoteka novčanika je oštećena. Molim Vas povratite novčanik iz sigurnosne kopije.',
			104: 'Unešena lozinka je netočna. Nadam se da se možete sjetiti točne lozinke jer izgubljenu lozinku je nemoguće povratiti!',
			105: 'Lozinka novčanika nije unešena.',
			106: 'Novčanik mora biti otvoren da biste ga mogli koristiti. Morate unijeti lozinku za novčanik da biste bili sigurni da ste ovlašteni za korištenje istog.',
			107: 'Novčanik ne sadrži taj račun.',
			108: 'Nemoguće je ukloniti račun jer je iznos na njemu veći od 0 XEM-a ili jer pokušavate ukloniti primarni račun.',
			109: 'Drugi novčanik sa istim nazivom već postoji. Molim Vas izaberite drugi naziv za novčanik.',
			110: 'Novčanik već sadrži taj račun.',
			111: 'Naziv novčanika je direktorij',
			112: 'Nastavak datoteke novčanika je netočan.  ',
			113: 'Novčanik se ne može ukloniti.',
			121: 'Datoteka adresara ne postoji.',
			122: 'Adresar nije bio stvoren',
			123: 'Datoteka adresara je oštećena. Molimo vas povratite datoteku adresara iz sigurnosne kopije.',
			124: 'Unesena lozinka je neidpravna.',
			125: 'Nije unesena lozinka adresara',
			127: 'Adresa u adresaru nije pronađena.',
			128: 'Unešena adresa nije ispravna.',
			129: 'Adresar s takvim nazivom već postoji. Molim vas izaberite drugi naziv adresara.',
			130: 'Adresar već sadrži takvu adresu.',
			131: 'Naziv adresara je datoteka',
			132: 'Nastavak naziva datoteke adresara je netočan.',
			133: 'Adresar nije mogao biti izbrisan.',
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
			202: 'Šifrirana se poruka nije mogla poslati jer primatelj nije nikad napravio niti jednu transakciju.',
			203: 'Račun ne može biti izmjenjen zbog tog što sve potpisnici nisu poznati. Svi potpisnici se moraju nalaziti u istom novčaniku ili moraju imati barem jednu obavljenu transakciju.',
			305: 'NEM infrastrukturni poslužitelj (NIS) nije dostupan. Pokušajte ponovo pokrenuti NEM program. U slučaju da koristite udaljeni NIS, provjerite postavke poslužitelja za ispis grešaka ili koristite drugi udaljeni NIS.',
			306: 'Došlo je do pogreške koju razvojni tim nije predvidio. Ispričavamo se zbog toga. Novi pokušaj bi mogao pomoći, u suprotnom molim Vas pošaljite upit NEM NIS/NCC zajednici.',
			400: 'Neki parametar nedostaje ili je nevažeći.',
			401: 'Ova operacije nije mogla biti sprovedena zato što bi moglo doći do otkrivanja privatnog kluča slanjem na NIS.',
			404: 'Zatraženi resurs nije mogao biti pronađen.',
			500: 'Došlo je do pogreške koju razvojni tim nije predvidio. Ispričavamo se zbog toga. Ponovno pokretanje programa bi moglo pomoći u suprotnom molimo vas da grešku prijavite NEM NIS/NCC zajednicom.',
			600: 'Prije slanja i primanje transakcija sa NEM oblaka, NIS poslužitelj mora biti pokrenut. Molim Vas da u NCC izborniku koristite stavku za pokretanje lokalnog čvora.',
			601: 'NIS čvor je već pokrenut. Sljedeći pokušaj za pokretanje NIS čvora nije moguć.',
			602: 'Skoro spreman. NEM infrastrukturni poslužitelj trenutno učitava blokove. Novčanik će biti funkcionalan nakon što se baza u potpunosti učita.',
			699: 'Dostignut je najveći dopušteni broj žetveoca na poslužitelju.',
			700: 'Navedeni račun ne ispunjava osnovne kriterije za ubiranje blokova. Za ubiranje blokova račun mora sadržavati najmanje iznos od 10000 osiguran XEM-a.',
			901: 'Došlo je do pogreške kod postavljanja u izvanmrežni način rada.',
			1000: 'Privatni i javni ključ koji ste unijeli se ne poklapaju.',
			1001: 'Javni ključ i adresa koju ste unijeli se ne poklapaju.',
			1002: 'Adresa ne pripada glavnoj mreži.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Datum isteka je u prošlosti. Datum isteka mora biti u roku od jednog dana.',
			1204: 'Datum isteka je predaleko u budućnosti. Datum isteka mora biti u roku od jednog dana.',
			1205: 'Vaš račun ne sadrži ispravan iznos za izvršavanje te transakcije.',
			1206: 'Tekst u poruci je predugačak. Molim Vas, probajte smanjiti dužinu teksta u Vašoj poruci ako ju želite slati.',
			1207: 'Šifra transakcije već postoji u bazi podataka ili u listi nepotvrđenih transakcija.',
			1208: 'Potpis transakcije nije mogao biti provjeren.',
			1209: 'Vremenska oznaka transakcije je predaleko u prošlosti.',
			1210: 'Vremenska oznaka transakcije je predaleko u budućnosti.',
			1219: 'Transakcija je odbačena. Veća naknada povećava šansu za prihvaćanje transakcije.',
			1262: 'Račun se ne može koristiti jer je iznos na računu za povjereno ubiranje je veći od nule.',
			1263: 'Prijenos važnosti odbijen. Operacija prijenosa važnosti se već nalazi na čekanju.',
			1264: 'Povjereno ubiranje je već aktivno.',
			1265: 'Povjereno ubiranje nije aktivno. Nemoguće ga je deaktivirati.',
			1266: 'Transakcija prijenosa važnosti (povjereno ubiranje) je u suprotnosti sa postojećom transakcijom.',
			1271: 'Transakcija potpisa je odbačena. Ovaj račun nije potpisnik višepotpisničkog računa.',
			1273: 'Višepotpisnička transkacija je odbačena. Transakcija nije prepoznata u NEM mreži',
			1274: 'Transakcija nije dozvoljena u višepotpisničkom računu.',
			1275: 'Promjena višepotpisničkog računa je odbačena. Jedan od dodanih računa je već potpisnik.',
			1321: 'Račun je nepoznat. Račun se mora pojaviti barem u jednoj transakciji (pošiljatelja ili primatelja) da bi bio prepoznat u mreži.',
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
			success: 'Uspjeh',
			unknown: 'Nepoznat status',
			unknownMessage: 'Ncc nije dobio odgovor u razumnom roku. Moguće je da je transakcija poslana na mrežu.<br /><br />Molim vas, provjerite transakciju prije ponovnog pokušaja.',
			appStatus: {
				nccUnknown: 'NCC status je nepoznat',
				nccUnavailable: 'NCC je nedostupan',
				nccStarting: 'NCC se pokreće...',
				nisUnknown: 'NIS status je nepoznat',
				nisUnavailable: 'NIS je nedostupan',
				nisStarting: 'NIS se pokreće...',
				notBooted: 'NIS mora biti pokrenut. Molim vas otvorite vaš novčanik i pokrenite lokalni čvor preko skočnog prozora ili podesite postavke automatsko pokretanje.',
				loading: 'Učitavanje blokova iz baze, na bloku: ',
				booting: 'Pokrećem NIS...',
				nisInfoNotAvailable: 'NIS informacije nisu još dostupne. Pokušavam prikupiti informacije NIS-a...',
				synchronizing: 'NIS usklađivanje. Na bloku {{1}}, otprilike {{2}} u zaostatku.',
				daysBehind: {
					0: 'manje od 1 dan',
					1: '1 dan',
					many: '{{1}} dana'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS je usklađen!',
				noRemoteNisAvailable: 'Nije pronađen niti jedan udaljeni NIS (server), odspojen od interneta?'
			},
			addressBook: 'Adresar',
			password: 'Lozinka',
			passwordValidation: 'Lozinka ne smije biti prazna',
			address: 'Adresa',
			privateLabel: 'Privatna oznaka',
			publicLabel: 'Javna oznaka',
			noCharge: 'Naknada <b>neće</b> biti naplaćena sa trenutnog računa. Višepotpisnički račun to pokriva.',
			fee: 'Naknada',
			multisigFee: 'Višepotpisnička naknada',
			useMinimumFee: 'Koristi najmanju naknadu',
			feeValidation: 'Naknada nemože biti manja od najniže naknade',
			justUse: 'Samo u koristi',
			dueBy: 'Trajanje',
			minutes: 'minute(s)',
			hours: 'sat(i)',
			hoursDue: 'Vremensko razdoblje (sati)',
			hoursDueExplanation: 'Transakcija se odbacuje ako nije uključena u vremenski rok.',
			amount: 'Iznos',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Zatvori',
			saveButton: 'Spremi',
			cancelButton: 'Odustani',
			sendButton: 'Šalji',
			account: 'Račun',
			thisAccount: 'Ovaj račun',
			warning: 'Upozorenje',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'TRANSAKCIJA PRIJENOSA',
			21: 'PRIJENOS VAŽNOSTI',
			22: 'PROMJENA MULTISIG RAČUNA',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			51: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			52: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			53: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			54: 'VIŠEPOTPISNIČKA TRANSAKCIJA',
			55: 'VIŠEPOTPISNIČKA TRANSAKCIJA',

		},
		Validity: {
			GOOD_TILL_CANCELLED: 'Good till cancelled',
			HOURS: 'Vremensko razdoblje (sati)'
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
			pending: 'Transakcija na čekanju',
			outgoing: 'Odlazna transakcija',
			incoming: 'Dolazna transakcija',
			self: 'Vlastita transakcija',
			importance: 'Transakcija važnosti',
			modification: 'Skupne izmjene više potpisa',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'GREŠKA {{1}}'
			},
			yikes: {
				title: 'Greška!',
				caption: 'info kod {{1}}'
			},
			confirmDefault: {
				yes: 'Da',
				no: 'Ne'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'Postavke',
				language: {
					label: 'Jezik'
				},
				remoteServer: {
					tabTitle: 'Udaljeni poslužitelj',
					protocol: 'Protokol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Koristi zadani port'
				},
				autoBoot: {
					tabTitle: 'Automatsko pokretanje',
					name: 'Naziv čvora',
					primaryAccount: 'Primarni račun',
					auto: 'Samostalno pokretanje prilikom otvaranja novčanika'
				},
				save: 'Spremi',
				saveSuccess: 'Postavke su uspješno spremljene'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'Pretvori račun u višepotpisnički',
				multisigAccount: 'Višepotpisnički račun',
				cosignatories: 'Adrese supotpisnika',
				labelDesc: 'Ovaj račun je označen kao {{1}}',
				nullLabelDesc: 'Ovaj račun nema oznake',
				addCosignatory: '+ Dodaj potpisnika',
				convert: 'Pretvori',
				txConfirm: {
					title: 'Potvrdi pretvaranje u Multisig račun',
					total: 'Ukupno'
				},
				warning: 'Višepotpisnički račun se nalazi u listi supotpisnika što može imati za posljedicu zaključavanje računa i zabranu pristupa sredstvima na istom. Vjerojatno <b>NE</b> želite to učiniti.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Potpiši višepotpisničku transakciju',
				original: {
					from: 'Višepotpisnički račun',
					to: 'Primatelj',
					amount: 'Količina',
					fee: 'Interna naknada',
					deadline: 'Rok'
				},
				multisigFees: 'Višepotpisničke naknade',
				multisigTotal: 'Ukupno',
				sender: 'Potpisnik',
				passwordValidation: 'Lozinka ne smije biti prazna',
				sending: 'Slanje...',
				txConfirm: {
					title: 'Potvrdi Multisig transakciju',
					message: 'Poruka',
					encrypted: 'Poruak je šifrirana',
					noMessage: 'Nema poruke',

				}
			},
			sendNem: {
				title: 'Slanje XEM-a',
				sender: 'Pošiljatelj',
				thisAccount: 'Ovaj račun',
				labelDesc: 'Ovaj račun je označen kao {{1}}',
				nullLabelDesc: 'Ovaj račun nema oznake',
				amount: 'Iznos',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Račun primatelja',
				recipientValidation: 'Adresa računa mora sadržavati 40 karaktera bez crtica',
				message: 'Poruka',
				encrypt: 'Šifriraj poruku',
				sending: 'Slanje...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Potvrdi transakciju',
					amount: 'Iznos',
					to: 'Na',
					total: 'Ukupno',
					message: 'Poruka',
					encrypted: 'Poruka je šifrirana',
					noMessage: 'Nema poruke',
					confirm: 'Potvrdi',
					sending: 'Šaljem...'
				},
				notBootedWarning: {
					title: 'Čvor nije pokrenut',
					message: 'Za slanje XEM-a lokalni čvor mora biti pokrenut. '
				},
				bootingWarning: {
					title: 'Čvor se pokreće',
					message: 'Molimo vas pričekajte prije slanja transakcije da se proces pokretanja čvora završi.'
				},
				loadingWarning: {
					title: 'Učitavanje baze'
				},

			},
			clientInfo: {
				title: 'Informacije klijenta',
				ncc: 'NEM Community Client - NCC',
				signer: 'Potpisnik',
				remoteServer: 'Udaljeni poslužitelj',
				local: 'Lokalno',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Usklađen',
				notSync: 'Nije usklađen',
				notConnected: 'Nije spojen na NEM oblak',
				loading: 'Učitavanje...'
			},
			transactionDetails: {
				title: 'Detalji transakcije',
				id: 'ID',
				hash: 'Hash',
				type: 'Tip transakcije',
				direction: 'Smjer transakcije',
				pending: 'U tijeku',
				outgoing: 'Odlazno',
				incoming: 'Dolazno',
				self: 'Vlastito',
				sender: 'Pošiljatelj',
				multisigAccount: 'Višepotpisnički račun',
				issuer: 'Izdavatelj',
				recipient: 'Primatelj',
				remote: 'Udaljeno',
				multisigMessage: 'Potpisi prisutni',
				message: 'Poruka',
				noMessage: 'Nema poruka',
				encrypted: 'Poruka je šifrirana',
				time: 'Vremenski zapis',
				confirmations: 'Potvrde',
				confirmationsUnknown: 'Nepoznato',
				amount: 'Iznos',
				multiplier: 'Multiplier',
				innerFee: 'Interna naknada',
				multisigFees: 'Višepotpisničke naknade',
				cosignatory: 'Potpisnik',
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
				title: 'Detalji računa',
				label: 'Oznaka',
				noLabel: 'Nema oznake',
				add: 'Dodaj u adresar',
				remove: 'Ukloni iz adresara',
				balance: 'Stanje',
				vested: 'osiguran',
				importance: 'Važnost',
				publicKey: 'Javni ključ',
				noPublicKey: 'Nema javnog ključa',
				harvestedBlocks: 'Harvested blocks'
			},
			bootLocalNode: {
				title: 'Pokreni lokalni čvor',
				account: 'Račun za pokretanje lokalnog čvora',
				noLabel: '<span class=\'null\'>&lt;Nema oznake&gt;</span>',
				wallet: 'Novčanik',
				node: 'Naziv čvora',
				boot: 'Pokreni',
				booting: 'Pokretanje...',
				warning: 'Upozorenje o pokretanju čvora',
				warningText: 'Pokušavate pokrenuti čvor <u>{{2}}</u><br/><br/>Pokretanje udaljenog čvora korištenjem NCC-a je trenutno nemoguće.',
				warningStatement: 'Vi koristite udaljeni čvor dok je automatsko pokretanje uključeno{{3}}.<br/><br/>Pokretanje udaljenog čvora korištenjem NCC-a je trenutno nemoguće.',
				warningQuestion: 'Jeste li sigurni da želite pokrenuti čvor <u>{{3}}</u> korištenjem privatnog ključa računa {{1}} ({{2}} XEM)?<br><br>To će otkriti <span class=\"sublabelWarning\">privatni ključ</span> tog računa čvoru: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Zatvori novčanik',
				message: 'Jeste li sigurni da želite zatvoriti novčanik i vratiti se na početnu stranicu?'
			},
			createAccount: {
				title: 'Stvori novi račun',
				label: 'Privatna oznaka',
				wallet: 'Novčanik',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno stvoren!',
				create: 'Stvori'
			},
			showPrivateKey: {
				title: 'Prikaži PRIVATNI ključ računa',
				message: 'Ovo će vaš privatni ključ računa prikazati na ekranu kao tekst. Ovo može biti opasna operacija u slučaju da je vaš sustav zaražen zločudnim programom. Jeste li sigurni da to želite?',
				publicKey: 'Javni ključ',
				privateKey: 'Privatni ključ',
				show: 'Prikaži ključ'
			},
			showRemotePrivateKey: {
				title: 'Prikaži PRIVATNI ključ udaljenog računa.',
				message: 'Ovo će privatni ključ udaljenog računa prikazati na ekranu kao tekst. Ovo može biti opasna operacija u slučaju da je vaš sustav zaražen zločudnim programom. Jeste li sigurni da to želite?',

			},
			addAccount: {
				title: 'Dodaj postojeći račun',
				privateKey: 'Privatni ključ računa',
				wallet: 'Novčanik',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno dodan u novčanik!',
				add: 'Dodaj',
				label: 'Oznaka'
			},
			setPrimary: {
				title: 'Postavi primarni račun',
				account: 'Račun koji će biti postavljen kao primarni',
				noLabel: '<span class=\'null\'>&lt;Nema oznake&gt;</span>',
				wallet: 'Novčanik',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je postavljen kao primarni!',
				set: 'Postavi kao primarni'
			},
			changeWalletName: {
				title: 'Izmijeni naziv novčanika',
				wallet: 'Trenutni naziv novčanika',
				newName: 'Novi naziv novčanika',
				successMessage: 'Naziv novčanika je uspješno izmijenjen iz <em>{{1}}</em> u <em>{{2}}</em>',
				change: 'Izmijeni'
			},
			changeWalletPassword: {
				title: 'Izmijeni lozinku novčanika',
				wallet: 'Novčanik',
				password: 'Trenutna lozinka',
				newPassword: 'Nova lozinka',
				confirmPassword: 'Potvrdi novu lozinku',
				successMessage: 'Lozinka novčanika je uspješno izmijenjena',
				change: 'Izmijeni',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Unesena lozinka i potvrda lozinke se ne podudaraju. Molimo Vas da upišete novu lozinku ispravno.'
			},
			changeAccountLabel: {
				title: 'Izmijeni oznaku računa',
				label: 'Oznaka računa',
				wallet: 'Novčanik',
				successMessage: 'Račun {{1}} je sad označen kao {{2}}',
				change: 'Izmijeni'
			},
			removeAccount: {
				title: 'Ukloni račun',
				label: 'Oznaka računa',
				wallet: 'Pridruženi novčanik',
				warning: 'Molim Vas da prije uklanjanja računa provjerite da isti ne sadrži XEM ili će iznos biti izgubljen zauvijek nakon uklanjanja računa.',
				successMessage: 'Račun {{1}} {{#2}}({{2}}){{/2}} je uspješno uklonjen!',
				remove: 'Ukloni'
			},
			nisUnavailable: {
				title: 'NIS nedostupan',
				message: 'Odspojen od NIS-a, čekanje na vezu'
			},
			shutdown: {
				title: 'Zatvori program',
				message: 'Jeste li sigurni za želite zatvoriti NEM Community Client?'
			},
			activateDelegated: {
				title: 'Aktiviraj povjereno ubiranje',
				wallet: 'Novčanik',
				activate: 'Pokreni',
				warningText: 'Za aktivaciju je potrebno 6 sati (360 blokova). Aktivacija neće automatski započeti ubiranje.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Prekini povjereno ubiranje',
				wallet: 'Novčanik',
				deactivate: 'Deaktiviraj',
				warningText: 'Deaktivacija će trajati 6 sati (360 blokova).'
			},
			startRemote: {
				title: 'Pokreni povjereno ubiranje',
				wallet: 'Novčanik',
				start: 'Start'
			},
			stopRemote: {
				title: 'Prekini povjereno ubiranje',
				wallet: 'Novčanik',
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: 'Napuštate vaš novčanik. Zapamtite da ako napuštate novčanik na takav način drugi korisnici na ovo računalu će još biti u mogućnosti pristupiti vašem navčaniku. Kako bi to spriječili odjavite se korištenjem opcije u \"Zatvori novčanik\" iz padajućeg menija desno na vrhu.'
			},
			addContact: {
				title: 'Dodaj kontakt',
				add: 'Dodaj'
			},
			editContact: {
				title: 'Uredi kontakt',
				saveChanges: 'Spremi promjene'
			},
			removeContact: {
				title: 'Ukloni kontakt',
				remove: 'Ukloni'
			},
			placeOrder: {
				title: 'Place order',
				cancel: 'Odustani',
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
				cancel: 'Odustani',
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
				cancel: 'Odustani',
				editDetails: 'Edit details',
				confirm: 'Potvrdi'
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
				cancel: 'Odustani',
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
				address: 'Adresa',
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
				cancel: 'Odustani',
				finish: 'Finish',
				finishing: 'Finishing',

			},
			setXemWithdrawalAccount: {
				title: 'Create XEM Withdrawal Account',
				detailsMessage: 'The new XEM withdrawal account will be associated with your current user details, you can update them before establishing the new withdrawal account.',
				message: 'You are almost there, now you should type in the address of the account that will be used as a withdraw account.',
				createSuccess: 'XEM Withdrawal account created successfully',
				cancel: 'Odustani',
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
				confirm: 'Potvrdi',
				message: 'In order to complete this action you should confirm your password.',
				password: 'Lozinka',
				wallet: 'Novčanik'
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
				cancel: 'Odustani',
				setupWithdraw: 'setup',
				noWithdraw: 'not set yet:'
			},
			orderUpdate: {
				title: 'Order Update',
				buying: 'Buying',
				selling: 'Selling',
				eachFor: 'Each for',
				fee: 'Naknada',
				strategy: 'Strategy',
				total: 'Ukupno',
				ok: 'OK',
				orderDetails: 'Order details',
				price: 'Price',
				amount: 'Iznos',
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
				cancel: 'Odustani'
			},
			addFiatAccount: {
				title: 'Add Fiat account',
				message: 'Enter the data about the new Fiat account',
				tradeInstrument: 'Trade instrument',
				accountNumber: 'Account number',
				btcPrivateKey: 'BTC private key',
				correspondingKey: 'corresponding BitId key',
				add: 'Dodaj',
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
				cancel: 'Odustani',
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
			importSuccess: 'Novčanik je uspješno uvezen!',
			nav: {
				start: 'Početak',
				about: 'O NEM',
				settings: 'Postavke'
			},
			main: {
				leftTitle: 'Novi <em>NEM</em> korisnik?',
				leftButton: 'Stvori novi novčanik',
				walletNamePlh: 'Naziv Vašeg novčanika',
				passwordPlh: 'Lozinka',
				confirmPasswordPlh: 'Potvrdi lozinku',
				create: 'Stvori',
				creating: 'Stvaranje...',
				rightTitle: 'Već si <em>NEM</em>ber?',
				rightButton: 'Otvori novčanik',
				openButton: 'Otvori',
				walletsFound: 'Pronađeno <strong>{{1}}</strong> <em>novčanik(a)</em>',
				copyright: 'Fotografiju ustupio  <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC šifrira vaš novčanik',
					description: '<em>Sigurnost</em> je za NEM  jako važna za sprječavanje krađe XEM novčića &amp; udjela.'
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
					title: 'Kako radi NCC?',
					paragraphs: [
						'<strong>NCC</strong> pruža pristup Vašim udjelima i XEM novčićima kao što to čini običan novčanik. Možete',
						'<strong>NCC</strong> zahtijeva pristup na <strong>NIS</strong> poslužitelj kako bi mogao funkcionirati. Standardno je imati aktivan lokalni poslužitelj (instalira se zajedno sa <strong>NCC</strong>-om)',
						'Moguće je također podesiti pristup na udaljeni <strong>NIS</strong> poslužitelj.'
					],
					listItems: [
						'Koristiti više novčanika',
						'Definirati više računa koji će biti uključeni u novčanik'
					]
				}, {
					title: 'Što je to &#42;NIS?',
					paragraphs: [
						'Ova komponenta je odgovorna za održavanje <strong>NEM</strong> oblaka.',
						'Sigurnost je bolja što je više <strong>NIS</strong> poslužitelja u mreži.,',
						'<strong>NIS</strong> je pristupna točka <strong>NEM</strong> oblaku.'
					],
					legend: '<strong>&#42;NIS</strong> je oznaka za <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Otprilike prije {{1}} dan(a)',
			lastAccessJustNow: 'Upravo sad',
			lastAccessTooltip: 'Zadnji pristup na {{1}}',
			primary: 'primarni',
			primaryShort: 'P',
			noLabel: '<Nema oznake>',
			copiedToClipboard: 'Adresa je kopirana u međuspremnik!',
			actions: {
				refreshInfo: 'Osvježi informacije',
				bootLocalNode: 'Pokreni lokalni čvor',
				changeWalletName: 'Izmijeni naziv novčanika',
				changeWalletPassword: 'Izmijeni lozinku novčanika',
				mergeWallets: 'Spoji novčanike',
				exportWallet: 'Izvezi novčanike',
				createAccount: 'Stvori novi račun',
				createRealAccountData: 'Stvori podatke za stvarni račun',
				verifyRealAccountData: 'Provjeri podatke za stvarnog računa',
				showPrivateKey: 'Prikaži PRIVATNI ključ računa',
				showRemotePrivateKey: 'Prikaži PRIVATNI ključ udaljenog računa',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'Prikaži detalje o računu',
				addAccount: 'Dodaj postojeći račun',
				changeAccountLabel: 'Izmijeni oznaku računa',
				setPrimary: 'Postavi kao primarni račun',
				removeAccount: 'Ukloni račun',
				clientInfo: 'Informacije klijenta',
				closeWallet: 'Zatvori novčanik',
				closeProgram: 'Zatvori  program',
				copyClipboard: 'Kopiraj adresu u međuspremnik',
				copyDisabled: 'Kopiranje zahtijeva instalirani \"flash\"',
				convertMultisig: 'Prebaci drugi račun u višepotpisnički',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Kontrolna ploča',
				'Poruke',
				'Adresar',
				'Transakcije',
				'Ubrani blokovi',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Asset Exchange',
				'News',
				'Accounts',
				'Settings',
				'Zatvori program',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'Lokalni čvor mora biti pokrenut prije nego što u potpunosti  možete iskoristiti sva NCC svojstva.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Razina važnosti',
				unknown: 'Nepoznat status',
				start: 'Pokreni ubiranje',
				harvesting: 'Ubiranje',
				stop: 'Prekini ubiranje',
				description: 'Važnost računa u NEM oblaku',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Aktiviraj povjereno ubiranje',
					activating: 'Aktivacija povjerenog ubiranja...',
					active: 'Povjereno ubiranje je aktivno',
					deactivate: 'Deaktiviraj povjereno ubiranje',
					deactivating: 'Deaktivacija povjerenog ubiranja...',
					startRemoteHarvesting: 'Pokreni povjereno ubiranje',
					remotelyHarvesting: 'Udaljeno ubiranje',
					stopRemoteHarvesting: 'Prekini povjereno ubiranje',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Nedavne transakcije',
				sendNem: 'Šalji XEM',
				signMultisig: 'POTPIŠI',
				balance: 'Trenutno stanje',
				loading: 'Učitavanje stanja',
				accountCosignatories: 'Višepotpisnički račun',
				accountCosignatoriesView: 'prikaži potpisnike',
				vestedBalance: 'Osigurani iznos',
				syncStatus: '(na bloku {{1}}{{#2}} : otprilike {{3}} dan(a) u zaostatku {{/2}})',
				notSynced: 'može biti netočno, NIS još nije usklađen',
				unknown: 'nepoznato',
				columns: [
					'',
					'Vrijeme',
					'Pošiljatelj/Primatelj',
					'Poruka',
					'',
					'Detalji',
					'Potvrde',
					'Naknada',
					'Iznos'
				],
				noMessage: 'Nema poruke',
				encrypted: 'Poruka je šifrirana',
				view: 'Pregled',
				confirmationsUnknown: 'Nepoznato',
				pending: 'U tijeku',
				seeAll: 'Pogledaj sve transakcije',
				noTransactions: 'Niti jedna transakcija nije još izvršena'
			},
			nemValue: {
				title: 'XEM statistika vrijednosti'
			},
			messages: {
				titleTooltip: 'Poruke'
			},
			news: {
				titleTooltip: 'Novosti'
			},
			notAvailable: 'Nije još dostupno u beta izdanju'
		},
		transactions: {
			title: 'Transakcije',
			sendNem: 'Šalji XEM',
			balance: 'Trenutno stanje',
			filters: {
				confirmed: 'Potvrđene',
				unconfirmed: 'Nepotvrđene',
				incoming: 'Dolazne',
				outgoing: 'Odlazne'
			},
			table: {
				columns: [
					'',
					'Vrijeme',
					'Pošiljatelj/Primatelj',
					'Poruka',
					'',
					'Detalji',
					'Potvrde',
					'Naknada',
					'Iznos'
				],
				noMessage: 'Nema poruke',
				encrypted: 'Poruka je šifrirana',
				view: 'Pregled',
				confirmationsUnknown: 'Nepoznato',
				pending: 'U tijeku',
				noTransactions: 'Još nema izvršenih transakcija',
				loading: 'Učitavanje više transakcija...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Trenutno stanje',
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
			title: 'Ubrani blokovi',
			feeEarned: 'Zarađene naknade od zadnjih 25 ubranih blokova',
			unknown: 'Nepoznato',
			table: {
				columns: [
					'Visina',
					'Vrijeme',
					'Težina bloka',
					'Naknada'
				],
				noBlocks: 'Nema ubranih blokova',
				loading: 'Učitavam više ubranih blokova'
			},
			harvesting: {
				unknown: 'Nepoznat status',
				start: 'Pokreni ubiranje',
				harvesting: 'Ubiranje',
				stop: 'Prekini ubiranje',
				remoteHarvest: {
					startRemoteHarvesting: 'Pokreni povjerno ubiranje',
					stopRemoteHarvesting: 'Prekini povjerno ubiranje'
				}
			}
		},
		addressBook: {
			title: 'Adresar',
			addContact: 'Dodaj kontak',
			table: {
				columns: [
					'Adresa računa',
					'Privatna oznaka',
					'Javna oznaka'
				],
				noContacts: 'Nema unešenih kontakata u vašem adresaru'
			},
			noLabel: 'Bez oznake',
			sendNem: 'Šalji XEM',
			edit: 'Uredi',
			remove: 'Ukloni'
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
				amount: 'Iznos',
				price: 'Price',
				time: 'Vrijeme',
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
				amount: 'Iznos',
				price: 'Price',
				perOne: 'per 1',
				createdOn: 'Created on',
				type: 'Type',
				noOrders: 'You haven\'t placed any orders yet.',
				strategy: 'Strategy',
				remove: 'Ukloni'
			},
			graphChart: {
				title: 'Graph Chart',
				step: 'Step',
				steps: {
					fifteenMinutes: '15 minutes',
					oneHour: '1 hour',
					oneDay: '1 dan'
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
					confirmed: 'Potvrđene',
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
				title: 'Postavke',
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
				senderOrRecipient: 'Pošiljatelj/Primatelj',
				message: 'Poruka',
				confirmations: 'Potvrde',
				fee: 'Naknada',
				amount: 'Iznos',
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
					time: 'Vrijeme',
					sender: 'Pošiljatelj',
					sendAmount: 'Sent',
					recipient: 'Primatelj',
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
			title: 'Postavke',
			settings: [{
				name: 'Jezik'
			}],
			save: 'Spremi izmjene',
			saveSuccess: 'Postavke su uspješno spremljene'
		}
	}
});