define({
	id: 'pl',
	name: 'Polski',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Plik portfela nie istnieje.',
			102: 'Portfel nie został utworzony.',
			103: 'Plik portfela jest uszkodzony. Proszę odzyskać portfel z kopii zapasowej.',
			104: 'Podane hasło jest niepoprawne.',
			105: 'Nie podano hasła.',
			106: 'Zanim zaczniesz używać portfela, musisz go otworzyć. Aby go otworzyć, musisz podać hasło do tego portfela.',
			107: 'Poftfel nie zawiera tego konta.',
			108: 'Konto nie może zostać usunięte. Prawdopodobnie dlatego, że bilans konta jest większy niż 0 XEM lub jest to konto główne.',
			109: 'Inny portfel z tą samą nazwą już istnieje. Proszę wybrać inną nazwę dla portfela.',
			110: 'Portfel zawiera już to konto.',
			111: 'Nazwa portfela jest katalogiem.',
			112: 'Rozszerzenie pliku portfela jest niepoprawne.',
			113: 'Portfel nie mógł zostać usunięty.',
			121: 'Plik książki adresowej nie istnieje.',
			122: 'Książka adresowa nie została utworzona.',
			123: 'Plik książki adresowej jest uszkodzony. Proszę odzyskać plik z backupu.',
			124: 'Podane hasło do książki adresowej nie jest poprawne.',
			125: 'Nie podano hasła dla książki adresowej.',
			127: 'Książka adresowa nie zawiera tego adresu.',
			128: 'Podany adres nie jest ważny.',
			129: 'Inna książka adresowa z taką samą nazwą już istnieje. Proszę wybrać inną nazwę.',
			130: 'Książka adresowa zawiera już ten adres.',
			131: 'Nazwa książki adresowej jest katalogiem.',
			132: 'Rozszerzenie pliku książki adresowej jest niepoprawne.',
			133: 'Książka adresowa nie mogła zostać usunięta.',
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
			202: 'Zaszyfrowana wiadomość nie może zostać wysłana ponieważ odbiorca nie wykonał jeszcze żadnej transakcji.',
			203: 'Konto nie może być przekształcone, ponieważ nie wszyscy sygnatariusze są znani. Muszą oni być w tym samym portfelu lub dokonać przynajmniej jednej transakcji.',
			305: 'Serwer infrastruktury NEM (NIS) jest niedostępny.\n\nSpróbuj zrestartować oprogramowanie NEM.\n\nJeśli korzystasz ze zdalnego NIS, sprawdź czy poprawnie wpisałeś numer hosta lub użyj innego zdalnego NIS.',
			306: 'Wystąpił błąd, którego deweloperzy nie przewidzieli. Przepraszamy, ponowna próba może rozwiązać problem. W innym wypadku proszę zwrócić się o pomoc do deweloperów NEM NIS/NCC.',
			400: 'Brakujący lub niewłaściwy parametr.',
			401: 'Ta operacja nie może zostać wykonana ponieważ może to spowodować wyciek klucza prywatnego poprzez wysłanie go do zdalnego NIS.',
			404: 'Żądany zasób nie został odnaleziony.',
			500: 'Wystąpił błąd, którego deweloperzy nie przewidzieli. Przepraszamy, ponowna próba może rozwiązać problem. W innym wypadku proszę zwrócić się o pomoc do deweloperów NEM NIS/NCC.',
			600: 'NCC wymaga uruchomienia serwera NIS aby wysyłać i przyjmować transakcje z chmury NEM. Użyj menu NCC aby uruchomić lokalny węzeł.',
			601: 'Węzeł NIS jest już uruchomiony. Nie można uruchomić go po raz drugi.',
			602: 'Prawie gotowe. Serwer Infrastruktury NEM laduje bloki. Portfel będzie działać, gdy baza danych sie zaladuje.',
			699: 'Maksymalna ilość zbieraczy dozwolona na serwerze została osiągnięta.',
			700: 'Konto nie spełnia podstawowych wymagań do zbierania bloków. Głównie jest to związane z ilością XEM na koncie. Zbieranie wymaga minimum 10000 usankcjonowane XEM na koncie.',
			901: 'Wystąpił błąd podczas przechodzenia w tryb offline.',
			1000: 'Klucz prywatny i klucz publiczny nie pasują do siebie.',
			1001: 'Klucz publiczny i adres nie pasują do siebie..',
			1002: 'Adres nie należy do sieci głównej.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Podany termin jest w przeszłości. Termin musi się zawierać w okresie jednego dnia.',
			1204: 'Podany termin jest zbyt daleko w przyszłości. Termin musi się zawierać w okresie jednego dnia.',
			1205: 'Twoje konto nie ma wystarczajacych srodkow aby wykonac ta transakcje.',
			1206: 'Wiadomość jest zbyt długa. Spróbuj ją skrócić.',
			1207: 'Skrót (hash) transakcji istnieje już w bazie danych lub na liście niepotwierdzonych transakcji.',
			1208: 'Sygnatura transakcji nie mogła zostać zweryfikowana.',
			1209: 'Sygnatura czasowa transakcji jest zbyt daleko w przeszłości.',
			1210: 'Sygnatura czasowa transakcji jest zbyt daleko w przyszłości.',
			1219: 'Transakcja została odrzucona ponieważ bufor jest przepełniony. Wyzsza opłata transakcyjna zwiększa szanse na zaakceptowanie transakcji.',
			1262: 'Konto delegowanego zbierania ma niezerowe saldo i nie moze byc uzyte.',
			1263: 'Przekazanie znaczenia odrzucone. Istnieje już oczekująca operacja przekazania znaczenia.',
			1264: 'Delegowane zbieranie jest juz aktywne.',
			1265: 'Delegowane zbieranie NIE jest aktywne. Nie mozna deaktywowac.',
			1266: 'Transakcja transferu waznosci (delegowane zbieranie) jest w konflikcie z istniejaca transakcja.',
			1271: 'Podpis transkacji multisig odrzucony. Bieżące konto nie jest sygnatariuszem konta multisig.',
			1273: 'Podpis transkacji multisig odrzucony. Transakcja nie jest znana sieci NEM',
			1274: 'Transakcja nie jest dozwolona dla konta multisig.',
			1275: 'Modyfikacja konta multisig odrzucona. Jedno z dodanych kont jest juz sygnatariuszem.',
			1321: 'Konto nieznane. Konto musi wziąć udział w przynajmniej jednej transakcji (wychodzącej lub przychodzącej) aby było znane sieci.',
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
			success: 'Sukces',
			unknown: 'Status nieznany',
			unknownMessage: 'Ncc nie dostał odpowiedzi w odpowiednim czasie. Transakcja mogla zostac wyslana do sieci.<br /><br />Prosze, sprawdz transakcje zanim sprobujesz wyslac ponownie.',
			appStatus: {
				nccUnknown: 'Status NCC jest nieznany',
				nccUnavailable: 'NCC jest niedostępny',
				nccStarting: 'NCC uruchamia się...',
				nisUnknown: 'Status NIS jest nieznany',
				nisUnavailable: 'NIS jest niedostępny',
				nisStarting: 'NIS uruchamia się...',
				notBooted: 'NIS wymaga uruchomienia. Proszę otworzyć portfel i uruchomić lokalny węzeł poprzez okno dialogowe lub skonfigurować ustawienia automatycznego uruchamiania.',
				loading: 'Ładowanie bloków z bazy danych, blok: ',
				booting: 'Uruchamianie NIS...',
				nisInfoNotAvailable: 'Info o NIS jest jeszcze niedostępne. Próba uzyskania info o NIS...',
				synchronizing: 'NIS synchronizuje się. Blok {{1}}, ok. {{2}} opóźnienia.',
				daysBehind: {
					0: 'mniej niż 1 dzień',
					1: '1 dzień',
					many: '{{1}} dni'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS jest zsynchronizowany!',
				noRemoteNisAvailable: 'Nie znaleziono zdalnego NIS w sieci, brak połączenia z internetem?'
			},
			addressBook: 'Książka adresowa',
			password: 'Hasło',
			passwordValidation: 'Hasło nie może być puste',
			address: 'Adres',
			privateLabel: 'Etykieta prywatna',
			publicLabel: 'Etykieta publiczna',
			noCharge: 'Bieżące konto <b>NIE</b> będzie obciążone opłatami, konto multisig je opłaca.',
			fee: 'Opłata',
			multisigFee: 'Opłata multisig',
			useMinimumFee: 'Użyj minimalnej opłaty',
			feeValidation: 'Opłata nie może być niższa, niż minimalna opłata',
			justUse: 'Wystarczy użyć',
			dueBy: 'Ważne przez',
			minutes: 'minute(s)',
			hours: 'godzin(y)',
			hoursDue: 'Wykonaj w ciągu (godziny)',
			hoursDueExplanation: 'Jesli transakcja nie zostanie zalaczona w terminie, zostanie odrzucona.',
			amount: 'Amount',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Zamknij',
			saveButton: 'Save',
			cancelButton: 'Anuluj',
			sendButton: 'Wyślij',
			account: 'Konto',
			thisAccount: 'To konto',
			warning: 'Ostrzezenie',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'TRANSFER TRANSAKCJI',
			21: 'TRANSFER ZNACZENIA',
			22: 'MODYFIKACJA KONTA MULTISIG',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'TRANSAKCJA MULTISIG',
			51: 'TRANSAKCJA MULTISIG',
			52: 'TRANSAKCJA MULTISIG',
			53: 'TRANSAKCJA MULTISIG',
			54: 'TRANSAKCJA MULTISIG',
			55: 'TRANSAKCJA MULTISIG',

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
			pending: 'Transakcja oczekująca',
			outgoing: 'Transakcja wychodząca',
			incoming: 'Transakcja przychodząca',
			self: 'Transakcja wewnętrzna',
			importance: 'Transakcja ważności',
			modification: 'Zbiorcza Modyfikacja Multisig',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'BŁĄD {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Tak',
				no: 'Nie'
			},
			initialBackup: {
				title: "Witaj w NEM",
				content: "Możesz utworzyć kopię zapasową portfela w menu w prawym, górnym rogu."
			},
			settings: {
				title: 'Ustawienia',
				language: {
					label: 'Język'
				},
				remoteServer: {
					tabTitle: 'Zdalny Serwer',
					protocol: 'Protokół',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Użyj domyślnego portu.'
				},
				autoBoot: {
					tabTitle: 'Auto-uruchamianie',
					name: 'Nazwa węzła',
					primaryAccount: 'Konto podstawowe',
					auto: 'Uruchom automatycznie przy otwarciu portfela'
				},
				save: 'Zapisz',
				saveSuccess: 'Ustawienia zostały zapisane pomyślnie'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'Konwertuj konto na multisig',
				multisigAccount: 'Konto multisig',
				cosignatories: "Adresy sygnatariuszy",
				labelDesc: 'To konto jest oznaczone jako {{1}}',
				nullLabelDesc: "To konto nie ma etykiety",
				addCosignatory: '+ Dodaj sygnatariusza',
				convert: 'Konwertuj',
				txConfirm: {
					title: 'Potwierdź konwersję do Konta Multisig',
					total: 'Suma'
				},
				warning: 'Konto Multisig jest na liscie sygnatariuszy. To spowoduje zablokowanie konta odcinając dostęp do funduszy. Prawdopodobnie <b>NIE CHCESZ</b> tego zrobic.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Podpisz transakcję multisig',
				original: {
					from: 'Konto multisig',
					to: 'Odbiorca',
					amount: 'Ilość',
					fee: 'Wewn. opłata',
					deadline: 'Ostateczna data'
				},
				multisigFees: 'Opłaty Multisig',
				multisigTotal: 'Suma',
				sender: 'Sygnatariusz',
				passwordValidation: 'Hasło nie może być puste',
				sending: 'Wysyłanie...',
				txConfirm: {
					title: 'Potwierdź Transakcję Multisig',
					message: 'Wiadomość',
					encrypted: 'Wiadomość jest zaszyfrowana',
					noMessage: 'Brak wiadomości',

				}
			},
			sendNem: {
				title: 'Wyślij XEM',
				sender: 'Nadawca',
				thisAccount: 'To konto',
				labelDesc: 'To konto jest oznaczone jako {{1}}',
				nullLabelDesc: "To konto nie ma etykiety",
				amount: 'Ilość',
				escrow: 'Escrow',
				other: 'Other',
				recipient: "Konto odbiorcy",
				recipientValidation: 'Adresy kont muszą mieć 40 znaków (nie licząc myślników)',
				message: 'Wiadomość',
				encrypt: 'Zaszyfruj wiadomość',
				sending: 'Wysyłanie...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Potwierdź transakcję',
					amount: 'Ilość',
					to: 'Do',
					total: 'Suma',
					message: 'Wiadomość',
					encrypted: 'Wiadomość jest zaszyfrowana',
					noMessage: 'Brak wiadomości',
					confirm: 'Potwierdź',
					sending: 'Wysyłanie...'
				},
				notBootedWarning: {
					title: 'Węzeł nie został uruchomiony!',
					message: 'Lokalny węzeł musi być uruchomiony zanim będzie można wysyłać XEM!'
				},
				bootingWarning: {
					title: 'Węzeł uruchamia się.',
					message: 'Zaczekaj, aż proces uruchamiania zakończy się, aby wysłać transakcję.'
				},
				loadingWarning: {
					title: 'Ładowanie bazy danych'
				},

			},
			clientInfo: {
				title: 'Informacje o kliencie',
				ncc: 'Klient Społeczności NEM - NCC',
				signer: 'Podpisujący',
				remoteServer: 'Zdalny Serwer',
				local: 'Lokalny',
				nis: 'Serwer Infrastruktury NEM - NIS',
				sync: 'Zsynchronizowany',
				notSync: 'Niezsynchronizowany',
				notConnected: 'Nie podłączony do chmury NEM',
				loading: 'Ładowanie...'
			},
			transactionDetails: {
				title: 'Szczegóły transakcji',
				id: 'ID',
				hash: 'Skrót (hash)',
				type: 'Typ transakcji',
				direction: 'Rodzaj Transakcji',
				pending: 'Oczekujące',
				outgoing: 'Wychodzące',
				incoming: 'Przychodzące',
				self: 'Wewnętrzne',
				sender: 'Nadawca',
				multisigAccount: 'Konto Multisig',
				issuer: 'Emitent',
				recipient: 'Odbiorca',
				remote: 'Zdalny',
				multisigMessage: 'Obecne podpisy',
				message: 'Wiadomość',
				noMessage: 'Brak wiadomości',
				encrypted: 'Wiadomość jest zaszyfrowana',
				time: 'Data',
				confirmations: 'Potwierdzenia',
				confirmationsUnknown: 'Nieznana',
				amount: 'Ilość',
				multiplier: 'Multiplier',
				innerFee: 'Wewnętrzne opłaty',
				multisigFees: 'Opłaty Multisig',
				cosignatory: 'Sygnatariusz',
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
				title: "Dane konta",
				label: "Etykieta",
				noLabel: "Brak etykiety",
				add: "Dodaj do książki adresowej",
				remove: "Usuń z książki adresowej",
				balance: "Saldo",
				vested: "usankcjonowane",
				importance: "Znaczenie",
				publicKey: "Klucz publiczny",
				noPublicKey: "Brak klucza publicznego",
				harvestedBlocks: "Zebrane bloki"
			},
			bootLocalNode: {
				title: 'Uruchom lokalny węzeł',
				account: 'Konto do uruchomienia lokalnego węzła',
				noLabel: '<span class="null">&lt;Brak etykiety&gt;</span>',
				wallet: 'Portfel',
				node: 'Nazwa węzła',
				boot: 'Uruchom',
				booting: 'Uruchamianie...',
				warning: 'Boot node warning',
				warningText: 'Probujesz uruchomic wezel <u>{{2}}</u><br/><br/>Uruchomienie zdalnego węzła jest obecnie niemożliwe z wewnątrz NCC.',
				warningStatement: 'Masz auto-bootowanie ustawione na true i uzywasz zdalnego wezla {{3}}.<br/><br/>Uruchomienie zdalnego węzła jest obecnie niemożliwe z wewnątrz NCC',
				warningQuestion: 'Czy jestes pewny, ze chcesz uruchomic wezel <u>{{3}}</u> uzywajac klucza prywatnego konta {{1}} ({{2}} XEM)?<br><br>To ujawni <span class="sublabelWarning">klucz prywatny</span> tego konta wezlowi: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Zamknij portfel',
				message: 'Czy jesteś pewny, że chcesz zamknąć portfel i powrócić do strony startowej?'
			},
			createAccount: {
				title: 'Stwórz nowe konto',
				label: 'Etykieta',
				wallet: 'Portfel',
				successMessage: 'Konto {{1}} {{#2}}({{2}}){{/2}} zostało utworzone!',
				create: 'Utwórz'
			},
			showPrivateKey: {
				title: 'Pokaz klucz PRYWATNY konta',
				message: 'Spowoduje to wyświetlenie klucza prywatnego konta na ekranie, jako tekst. W przypadku jakiegokolwiek szkodliwego oprogramowania obecnego w systemie, może to być niebezpieczne. Czy na pewno chcesz to zrobić?',
				publicKey: 'Klucz publiczny',
				privateKey: 'Klucz prywatny',
				show: 'Pokaz klucz'
			},
			showRemotePrivateKey: {
				title: 'Pokaz klucz PRYWATNY Zdalnego Konta',
				message: 'Spowoduje to wyświetlenie klucza prywatnego zdalnego konta na ekranie, jako tekst. W przypadku jakiegokolwiek szkodliwego oprogramowania obecnego w systemie, może to być niebezpieczne. Czy na pewno chcesz to zrobić?',

			},
			addAccount: {
				title: 'Dodaj istniejące konto',
				privateKey: "Klucz Prywatny Konta",
				wallet: 'Portfel',
				successMessage: 'Konto {{1}} {{#2}}({{2}}){{/2}} zostało dodane do portfela!',
				add: 'Dodaj',
				label: 'Etykieta'
			},
			setPrimary: {
				title: 'Ustaw Konto Podstawowe',
				account: 'Konto, które będzie ustawione jako Podstawowe',
				noLabel: '<span class="null">&lt;Brak etykiety&gt;</span>',
				wallet: 'Portfel',
				successMessage: 'Konto {{1}} {{#2}}({{2}}){{/2}} zostało ustawione jako podstawowe!',
				set: 'Ustaw jako podstawowe'
			},
			changeWalletName: {
				title: 'Zmień nazwę portfela',
				wallet: 'Bieżąca nazwa portfela',
				newName: 'Nowa nazwa portfela',
				successMessage: 'Nazwa portfela została pomyślnie zmieniona z <em>{{1}}</em> na <em>{{2}}</em>',
				change: 'Zmień'
			},
			changeWalletPassword: {
				title: 'Zmień hasło portfela',
				wallet: 'Portfel',
				password: 'Bieżące hasło',
				newPassword: 'Nowe hasło',
				confirmPassword: 'Potwierdź nowe hasło',
				successMessage: 'Hasło portfela zostało pomyślnie zmienione',
				change: 'Zmień',
				passwordNotMatchTitle: 'Ups!',
				passwordNotMatchMessage: 'Wpisane hasło i potwierdzenie hasła różnią się. Proszę upewnić się, że hasło jest wpisane poprawnie.'
			},
			changeAccountLabel: {
				title: 'Zmień etykietę konta',
				label: 'Etykieta',
				wallet: 'Portfel',
				successMessage: 'Konto {{1}} ma teraz etykietę {{2}}',
				change: 'Zmień'
			},
			removeAccount: {
				title: 'Usuń konto',
				label: 'Etykieta',
				wallet: 'Portfel',
				warning: 'Upewnij się, że Twoje konto nie zawiera już XEM, gdyż znikną na zawsze.',
				successMessage: 'Konto {{1}} {{#2}}({{2}}){{/2}} zostało usunięte!',
				remove: 'Usuń'
			},
			nisUnavailable: {
				title: 'NIS niedostępny',
				message: 'Rozłączony z NIS, oczekiwanie na połączenie'
			},
			shutdown: {
				title: 'Zamknij program',
				message: 'Czy na pewno chcesz zamknąć Klient Społeczności NEM?'
			},
			activateDelegated: {
				title: 'Aktywuj Delegowane Zbieranie',
				wallet: 'Portfel',
				activate: 'Aktywuj',
				warningText: 'Aktywacja potrwa 6 godzin (360 blokow). Aktywacja NIE rozpocznie zbierania automatycznie.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deaktywuj Delegowane Zbieranie',
				wallet: 'Portfel',
				deactivate: 'Deaktywuj',
				warningText: 'Deaktywacja potrwa 6 godzin (360 blokow).'
			},
			startRemote: {
				title: 'Rozpocznij Delegowane Zbieranie',
				wallet: 'Portfel',
				start: 'Start'
			},
			stopRemote: {
				title: 'Zakoncz Delegowane Zbieranie',
				wallet: 'Portfel',
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Dodaj kontakt',
				add: 'Dodaj'
			},
			editContact: {
				title: 'Edytuj kontakt',
				saveChanges: 'Zapisz zmiany'
			},
			removeContact: {
				title: 'Usuń kontakt',
				remove: 'Usuń'
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
			importSuccess: 'Portfel został zaimportowany!',
			nav: {
				start: 'Zaczynamy',
				about: 'O NEM',
				settings: 'Ustawienia'
			},
			main: {
				leftTitle: 'Nowy w <em>NEM</em>?',
				leftButton: 'Stwórz nowy portfel',
				walletNamePlh: 'Nazwa Twojego portfela',
				passwordPlh: 'Hasło',
				confirmPasswordPlh: 'Potwierdź hasło',
				create: 'Stwórz',
				creating: 'Tworzenie...',
				rightTitle: 'Uczestnik <em>NEM</em>?',
				rightButton: 'Otwórz swój portfel',
				openButton: 'Otwórz',
				walletsFound: 'Znaleziono <strong>{{1}}</strong> <em>portfeli</em>',
				copyright: 'Zdjęcie: <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC szyfruje Twój portfel',
					description: '<em>Bezpieczeństwo</em> jest bardzo ważne aby uniknąć kradzieży monet XEM i aktywów.'
				}, {
					title: 'Zdalny Serwer Infrastruktury NEM',
					description: 'Uzywajac zdalnego NIS nie musisz synchronizowac lancucha blokow przy starcie.',

				}, {
					title: 'Delegowane zbieranie',
					description: 'Uzywajac delegowanego zbierania mozesz korzystac ze zdalnego wezla NIS!',

				}, {
					title: 'Multisignature transactions',
					description: 'Zabezpiecz swoje XEM i aktywa poprzez wbudowane w blockchain transakcje multi-podpisu.',

				}, {
					title: 'Obsluga jezyka ojczystego',
					description: 'Interfejs użytkownika NEM obsługuje wiele języków. Zobacz "Ustawienia".'
				}, {
					title: 'Masz pytania lub uwagi?',
					description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

				}]
			},
			about: {
				sections: [{
					title: 'Jak działa NCC?',
					paragraphs: [
						'<strong>NCC</strong> zapewnia dostęp do Twoich aktywów i monet tak jak to robi tradycyjny portfel. Możesz',
						'<strong>NCC</strong> wymaga dostępu do serwera <strong>NIS</strong> aby działać. Standardem jest aktywny lokalny serwer (jest zainstalowany razem z <strong>NCC</strong>)',
						'Możesz też skonfigurować dostęp do zdalnego <strong>NIS</strong>.'
					],
					listItems: [
						'Mieć wiele portfeli',
						'Zdefiniować wiele kont wewnątrz swojego portfela'
					]
				}, {
					title: 'Czym jest &#42;NIS?',
					paragraphs: [
						'Ten komponent jest odpowiedzialny za podtrzymywanie chmury <strong>NEM</strong> .',
						'Im wiecej <strong>NIS</strong> w sieci, tym wieksze bezpieczenstwo.,',
						'<strong>NIS</strong> jest punktem dostępu do chmury <strong>NEM</strong> .'
					],
					legend: '<strong>&#42;NIS</strong> to skrót od <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Około {{1}} dni temu',
			lastAccessJustNow: 'Przed chwilą',
			lastAccessTooltip: 'Ostatno uruchomiony {{1}}',
			primary: 'podstawowe',
			primaryShort: 'P',
			noLabel: '<Brak etykiety>',
			copiedToClipboard: 'Adres został skopiowany do schowka!',
			actions: {
				refreshInfo: 'Odśwież Info',
				bootLocalNode: 'Uruchom Lokalny Węzeł',
				changeWalletName: 'Zmień Nazwę Portfela',
				changeWalletPassword: 'Zmień Hasło Portfela',
				mergeWallets: 'Połącz Portfele',
				exportWallet: 'Eksportuj Portfel',
				createAccount: 'Stwórz Nowe Konto',
				createRealAccountData: 'Utwórz prawdziwe konto',
				verifyRealAccountData: 'Weryfikacja prawdziwego konta',
				showPrivateKey: 'Pokaż klucz PRYWATNY konta',
				showRemotePrivateKey: 'Pokaz klucz PRYWATNY zdalnego konta',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'Zobacz szczegoly konta',
				addAccount: 'Dodaj Istniejące Konto',
				changeAccountLabel: 'Zmień Etykietę Konta',
				setPrimary: 'Ustaw jako Konto Podstawowe',
				removeAccount: 'Usuń Konto',
				clientInfo: 'Info o kliencie',
				closeWallet: 'Zamknij Portfel',
				closeProgram: 'Zamknij Program',
				copyClipboard: 'Kopiuj adres do schowka',
				copyDisabled: 'Kopiowanie adresu wymaga flasha',
				convertMultisig: 'Konwertuj inne konto na multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Dashboard',
				'Wiadomości',
				'Książka adresowa',
				'Transakcje',
				'Zebrane bloki',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Giełda aktywów',
				'Aktualności',
				'Aplikacje',
				'Konta',
				'Ustawienia',
				'Zamknij Program',
			],
			bootNodeWarning: "Lokalny węzeł musi zostać uruchomiony zanim będziesz mógł w pełni wykorzystać funkcje NCC."
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Wskaźnik Znaczenia',
				unknown: 'Status nieznany',
				start: 'Rozpocznij zbieranie',
				harvesting: 'Zbieranie bloków',
				stop: 'Zakończ zbieranie bloków',
				description: 'Znaczenie konta dla chmury NEM',
				remoteHarvest: {
					title: 'Delegowane zbieranie',
					activate: 'Aktywuj delegowane zbieranie',
					activating: 'Aktywowanie delegowanego zbierania...',
					active: 'Delegowane zbieranie jest aktywne',
					deactivate: 'Deaktywuj delegowane zbieranie',
					deactivating: 'Deaktywowanie delegowanego zbierania...',
					startRemoteHarvesting: 'Rozpocznij delegowane zbieranie',
					remotelyHarvesting: 'Zdalne zbieranie bloków',
					stopRemoteHarvesting: 'Zatrzymaj delegowane zbieranie',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Ostatnie Transakcje',
				sendNem: 'Wyślij XEM',
				signMultisig: 'PODPISZ',
				balance: 'Stan Konta',
				loading: 'Ladowanie salda',
				accountCosignatories: 'Konto multisig',
				accountCosignatoriesView: 'zobacz sygnatariuszy',
				vestedBalance: 'Saldo usankcjonowane',
				syncStatus: '(blok {{1}}{{#2}} : ok. {{3}} dni opóźnienia{{/2}})',
				notSynced: 'może być niedokładny, NIS nie jest jeszcze zsynchronizowany',
				unknown: 'nieznany',
				columns: [
					'',
					'Czas',
					'Nadawca/Odbiorca',
					'Wiadomość',
					'',
					'Szczegóły',
					'Potwierdzenia',
					'Opłata',
					'Ilość'
				],
				noMessage: 'Brak wiadomości',
				encrypted: 'Wiadomość jest zaszyfrowana',
				view: 'Zobacz',
				confirmationsUnknown: 'Nieznana',
				pending: 'Oczekuje',
				seeAll: 'Zobacz wszystkie transakcje',
				noTransactions: 'Nie wykonano żadnych transakcji'
			},
			nemValue: {
				title: 'Statystyki wartości XEM'
			},
			messages: {
				titleTooltip: 'Wiadomości'
			},
			news: {
				titleTooltip: 'Aktualności'
			},
			notAvailable: 'Niedostępne'
		},
		transactions: {
			title: 'Transakcje',
			sendNem: 'Wyślij XEM',
			balance: 'Stan Konta',
			filters: {
				confirmed: 'Potwierdzone',
				unconfirmed: 'Niepotwierdzone',
				incoming: 'Przychodzące',
				outgoing: 'Wychodzące'
			},
			table: {
				columns: [
					'',
					'Czas',
					'Nadawca/Odbiorca',
					'Wiadomość',
					'',
					'Szczegóły',
					'Potwierdzenia',
					'Opłata',
					'Ilość'
				],
				noMessage: 'Brak wiadomości',
				encrypted: 'Wiadomość jest zaszyfrowana',
				view: 'Zobacz',
				confirmationsUnknown: 'Nieznana',
				pending: 'Oczekuje',
				noTransactions: 'Nie wykonano jeszcze żadnych transakcji',
				loading: 'Ładowanie kolejnych transakcji...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Stan Konta',
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
			title: 'Zebrane bloki',
			feeEarned: 'Opłaty otrzymane z ostatnich 25 zebranych bloków',
			unknown: 'Nieznany',
			table: {
				columns: [
					'Wysokość',
					'Czas',
					'Trudnosc bloku',
					'Opłata'
				],
				noBlocks: 'Brak zebranych bloków',
				loading: 'Zobacz wcześniej zebrane bloki'
			},
			harvesting: {
				unknown: 'Status nieznany',
				start: 'Rozpocznij zbieranie bloków',
				harvesting: 'Zbieranie',
				stop: 'Zakończ zbieranie bloków',
				remoteHarvest: {
					startRemoteHarvesting: 'Rozpocznij delegowane zbieranie',
					stopRemoteHarvesting: 'Zatrzymaj delegowane zbieranie'
				}
			}
		},
		addressBook: {
			title: 'Książka adresowa',
			addContact: 'Dodaj kontakt',
			table: {
				columns: [
					'Adres konta',
					'Etykieta prywatna',
					'Etykieta publiczna'
				],
				noContacts: 'Nie ma kontaktów w książce adresowej'
			},
			noLabel: 'Brak etykiety',
			sendNem: 'Wyślij XEM',
			edit: 'Edytuj',
			remove: 'Usuń'
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
			title: 'Ustawienia',
			settings: [{
				name: 'Język'
			}],
			save: 'Zapisz zmiany',
			saveSuccess: 'Ustawienia zostały zapisane'
		}
	}
});