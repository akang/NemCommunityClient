define({
	id: 'it',
	name: 'Italiano',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: ','
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Il portafoglio non è stato creato.',
			103: 'Il file del portafoglio è corrotto. Ripristina il portafoglio da un backup.',
			104: 'La password inserita non è corretta per questo portafoglio.',
			105: 'Non è stata inserita la password per il portafoglio.',
			106: 'Per poter utilizzare un portafoglio è necessario aprirlo. Per accertarsi che l\'utente sia autorizzato ad accedervi, è necessario fornire la password del portafoglio.',
			107: 'Il portafoglio non contiene questo indirizzo',
			108: 'L\'indirizzo non può essere eliminato. Probabilmente perché contiene qualche XEM oppure perché è l\'indirizzo principale.',
			109: 'Esiste già un portafoglio con questo nome. Scegli un nome differente.',
			110: 'Esiste già un portafoglio contenete questo indirizzo.',
			111: 'Esiste già una cartella con questo nome.',
			112: 'L\'estensione del nome del file del portafoglio non è corretta.',
			113: 'Il portafoglio non può essere eliminato.',
			121: 'Il file della rubrica non esite.',
			122: 'L\'indirizzo non è stato creato.',
			123: 'Il file della rubrica è corrotto. Recuperalo da un backup.',
			124: 'La password fornita per la rubrica non è corretta.',
			125: 'Nessuna password fornita per la rubrica.',
			127: 'La rubrica non contiene questo indirizzo.',
			128: 'L\'indirizzo specificato non è valido.',
			129: 'Esiste già una rubrica con lo stesso nome. Scegli un nuovo nome per la rubrica.',
			130: 'La rubrica contiene già questo indirizzo.',
			131: 'Esiste già una cartella con questo nome.',
			132: 'L\'estensione del nome del file della rubrica non è corretta.',
			133: 'La rubrica non può essere eliminata.',
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
			202: 'Impossibile cifrare il testo: non è nota la chiave pubblica del destinatario',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'E\' occorso un errore imprevisto; riprova ad effettuare l\'operazione. Se il problema persiste chiedi supporto alla comunità NEM',
			400: 'Manca qualche parametro obbligatorio',
			401: 'L\'operazione non può essere completata perché è insicuro trasmettere la chiave privata ad un server remoto',
			404: 'Strategia di avvio non valida',
			500: 'E\' occorso un errore imprevisto; riprova ad effettuare l\'operazione. Se il problema persiste chiedi supporto alla comunità NEM',
			600: 'NCC richiede che il server NIS sia avviato per poter inviare e ricevere transazioni nella rete NEM. Usa la voce \'Avvia il nodo locale\' nel menu di NCC.',
			601: 'Il nodo NIS locale è già avviato; non è possibile avviarlo nuovamente.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'E\' stato raggiunto il numero massimo di indirizzi che generano blocchi.',
			700: 'L\'indirizzo indicato non soddisfa i criteri minimi per generare blocchi. Per poter generare blocchi è necessario disporre di almeno 10000 vested XEM',
			901: 'Errore nella modalità fuori rete.',
			1000: 'Mancata corrispondenza tra chiave privata e chiave pubblica.',
			1001: 'Mancata corrispondenza tra chiave pubblica ed indirizzo.',
			1002: 'L\'indirizzo non appartiene alla rete NEM principale',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Il termine massimo indicato è nel passato. Dovrebbe invece essere nelle prossime 24 ore.',
			1204: 'Il termine massimo indicato è troppo lontano nel futuro. Dovrebbe invece essere nelle prossime 24 ore.',
			1205: 'Your account does not have the right balance to make this transaction.',
			1206: 'Il messaggio inserito è troppo grande. Riduci la dimensione del testo.',
			1207: 'La firma della transazione è già presente nel database delle transazioni non ancora confermate.',
			1208: 'Errore nella verifica della firma della transazione.',
			1209: 'La marca temporale della transazione è troppo lontana nel passato.',
			1210: 'La marca temporale della transazione è troppo lontana nel futuro.',
			1219: 'La transazione è stata annullata in quanto la lista delle transazioni in attesa è piena. Commissioni maggiori possono migliorare la probabilità che la transazione venga accettata.',
			1262: 'Delegated harvesting account has non zero balance and cannot be used.',
			1263: 'Trasferimento di importanza annullato. C\'è già una transazione di questo tipo in corso.',
			1264: 'Delegated harvesting is already active.',
			1265: 'Delegated harvesting is NOT active. Cannot deactivate.',
			1266: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			1271: 'Transazione rifiutata. L\'indirizzo non è uno dei cofirmatari.',
			1273: 'Transazione rifiutata. La definizione dei cofirmatari non è nota alla rete NEM.',
			1274: 'Tipo di transazione non consentita per indirizzi a firma multipla.',
			1275: 'Modifica rifiutata. Uno dei cofirmatari da aggiungere è già un cofirmatario.',
			1321: 'Indirizzo sconosciuto. Un indirizzo deve comparire in almeno una transazione (come mittente o come destinatario) per essere noto alla rete.',
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
			success: 'Operazione completata',
			unknown: 'Stato sconosciuto',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'Lo stato di NCC è ignoto',
				nccUnavailable: 'NCC non disponibile',
				nccStarting: 'NCC sta partendo...',
				nisUnknown: 'Lo stato di NIS è ignoto',
				nisUnavailable: 'NIS non disponibile',
				nisStarting: 'NIS sta partendo...',
				notBooted: 'NIS deve essere avviato. Apri il tuo portafoglio ed avvia il nodo locale attraverso la finestra di dialogo oppure configura l\'auto-avvio.',
				loading: 'Lettura dei blocchi dal database, al blocco:',
				booting: 'Avvio di NIS in corso...',
				nisInfoNotAvailable: 'Verifica dello stato di NIS...',
				synchronizing: 'Sincronizzazione NIS in corso. Al blocco {{1}}, {{2}} indietro.',
				daysBehind: {
					0: 'meno di un giorno',
					1: 'un giorno',
					many: '{{1}} giorni'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS è sincronizzato!',
				noRemoteNisAvailable: 'NIS remoto non trovato, forse sei disconnesso da Internet?'
			},
			addressBook: 'Rubrica',
			password: 'Password',
			passwordValidation: 'La password non può essere vuota',
			address: 'Indirizzo',
			privateLabel: 'Nome privato',
			publicLabel: 'Nome pubblico',
			noCharge: 'L\'indirizzo <b>NON</b> deve pagare commissioni, verranno coperte dall\'indirizzo cointestato.',
			fee: 'Commissioni',
			multisigFee: 'Commissione multifirma',
			useMinimumFee: 'Usa commissioni minime',
			feeValidation: 'Le commissioni non possono essere inferiori al minimo previsto',
			justUse: 'Just use',
			dueBy: 'Tempo massimo',
			minutes: 'minute(s)',
			hours: 'ore',
			hoursDue: 'Tempo massimo (ore)',
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
			cancelButton: 'Annulla',
			sendButton: 'Invia',
			account: 'Indirizzo',
			thisAccount: 'Questo indirizzo',
			warning: 'Warning',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'TRASFERIMENTO FONDI',
			21: 'TRASFERIMENTO IMPORTANZA',
			22: 'MODIFICA INDIRIZZO MULTIFIRMATO',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'TRANSAZIONE MULTIFIRMA',
			51: 'TRANSAZIONE MULTIFIRMA',
			52: 'TRANSAZIONE MULTIFIRMA',
			53: 'TRANSAZIONE MULTIFIRMA',
			54: 'TRANSAZIONE MULTIFIRMA',
			55: 'TRANSAZIONE MULTIFIRMA',

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
			pending: 'Transazione in attesa',
			outgoing: 'Transazione in uscita',
			incoming: 'Transazione in entrata',
			self: 'Transazione a te stesso',
			importance: 'Trasferimento di importanza',
			modification: 'Modifica cofirmatari',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Errore!',
				caption: 'ERRORE {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Sì',
				no: 'No'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'Impostazioni',
				language: {
					label: 'Lingua'
				},
				remoteServer: {
					tabTitle: 'Server remoto',
					protocol: 'Protocollo',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Nome del server',
					port: 'Porta',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: 'Auto-avvio',
					name: 'Nome del nodo',
					primaryAccount: 'Indirizzo principale',
					auto: 'Auto avvia quando il portafoglio viene aperto'
				},
				save: 'Salva',
				saveSuccess: 'Impostazioni salvate con successo'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'Trasforma indirizzo in indirizzo multifirma',
				multisigAccount: 'Indirizzo multifirma',
				cosignatories: 'Indirizzi dei cofirmatari',
				labelDesc: 'Questo indirizzo è denominato {{1}}',
				nullLabelDesc: 'Questo indirizzo non ha un nome',
				addCosignatory: '+ Aggiungi cofirmatario',
				convert: 'Trasforma',
				txConfirm: {
					title: 'Conferma la trasformazione in indirizzo multifirma',
					total: 'Totale'
				},
				warning: 'L\'indirizzo multifirma è nella lista dei cofirmatari. Questo porterebbe all\'impossibilità di accesso ai fondi. Probabilmente <b>non è</b> questo quello che vuoi.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Aggiungi firma alla trasazione multifirma',
				original: {
					from: 'Indirizzo multifirma',
					to: 'Destinatario',
					amount: 'Importo',
					fee: 'Commissioni interne',
					deadline: 'Tempo massimo'
				},
				multisigFees: 'Commissioni per multifirma',
				multisigTotal: 'Totale',
				sender: 'Cofirmatario',
				passwordValidation: 'La password non può essere vuota',
				sending: 'Invio in corso...',
				txConfirm: {
					title: 'Conferma transazione multifirma',
					message: 'Messaggio',
					encrypted: 'Il messaggio è cifrato',
					noMessage: 'Nessun messaggio',

				}
			},
			sendNem: {
				title: 'Invia XEM',
				sender: 'Mittente',
				thisAccount: 'Questo indirizzo',
				labelDesc: 'Questo indirizzo è denominato {{1}}',
				nullLabelDesc: 'Questo indirizzo non ha un nome associato',
				amount: 'Importo',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Indirizzo del destinatario',
				recipientValidation: 'L\'indirizzo deve essere composto di 40 caratteri trattini esclusi',
				message: 'Messaggio',
				encrypt: 'Cifra il mesaggio',
				sending: 'Invio in corso...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Conferma transazione',
					amount: 'Importo',
					to: 'A',
					total: 'Totale',
					message: 'Messaggio',
					encrypted: 'Cifra messaggio',
					noMessage: 'Nessun messaggio',
					confirm: 'Conferma',
					sending: 'Invio in corso...'
				},
				notBootedWarning: {
					title: 'NIS non è stato avviato!',
					message: 'NIS deve essere avviato prima che tu passa inviare NEM!'
				},
				bootingWarning: {
					title: 'Avvio NIS in corso',
					message: 'Attendi finché NIS non è avviato prima di effettuare una transazione'
				},
				loadingWarning: {
					title: 'Caricamento dal database in corso'
				},

			},
			clientInfo: {
				title: 'Informazioni sul programma',
				ncc: 'NEM Community Client - NCC',
				signer: 'Firmatario',
				remoteServer: 'Server remoto',
				local: 'Locale',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Sincronizzato',
				notSync: 'Non sincronizzato',
				notConnected: 'Non connesso alla rete NEM',
				loading: 'Caricamento...'
			},
			transactionDetails: {
				title: 'Informazioni sulla transazione',
				id: 'Identificativo',
				hash: 'Firma',
				type: 'Tipo di transazione',
				direction: 'Direzione della transazione',
				pending: 'In attesa',
				outgoing: 'In uscita',
				incoming: 'In ingresso',
				self: 'A te stesso',
				sender: 'Mittente',
				multisigAccount: 'Indirizzo multifirma',
				issuer: 'Mittente',
				recipient: 'Destinatario',
				remote: 'Remoto',
				multisigMessage: 'Firme presenti',
				message: 'Messaggio',
				noMessage: 'Nessun messaggio',
				encrypted: 'Il messaggio è cifrato',
				time: 'Marca temporale',
				confirmations: 'Conferme',
				confirmationsUnknown: 'Sconosciuto',
				amount: 'Importo',
				multiplier: 'Multiplier',
				innerFee: 'Commissioni interne',
				multisigFees: 'Commissioni multifirma',
				cosignatory: 'Cofirmatario',
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
				title: 'Informazioni sull\'indirizzo',
				label: 'Nome',
				noLabel: 'Nessun nome',
				add: 'Aggiungi alla rubrica',
				remove: 'Rimuovi dalla rubrica',
				balance: 'Bilancio',
				vested: 'vested',
				importance: 'Importanza',
				publicKey: 'Chiave pubblica',
				noPublicKey: 'Nessuna chiave pubblica',
				harvestedBlocks: 'Blocchi generati'
			},
			bootLocalNode: {
				title: 'Avvia nodo locale',
				account: 'Indirizzo con cui avviare il nodo',
				noLabel: '<span class=\'null\'>&lt;Senza nome&gt;</span>',
				wallet: 'Portafoglio',
				node: 'Nome del nodo',
				boot: 'Avvia',
				booting: 'Avvio in corso...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Chiudi portafoglio',
				message: 'Sicuro di voler chiudere il portafoglio e tornare alla pagina iniziale?'
			},
			createAccount: {
				title: 'Creazione nuovo indirizzo',
				label: 'Nome privato',
				wallet: 'Portafoglio',
				successMessage: 'L\'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato creato!',
				create: 'Crea'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Chiave pubblica',
				privateKey: 'Chiave privata',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Aggiunta indirizzo esistente',
				privateKey: 'Chiave privata',
				wallet: 'Portafoglio',
				successMessage: 'L\'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato aggiunto al portafoglio!',
				add: 'Aggiungi',
				label: 'Nome'
			},
			setPrimary: {
				title: 'Selezione indirizzo principale',
				account: 'Indirizzo da rendere principale',
				noLabel: '<span class=\'null\'>&lt;Senza nome&gt;</span>',
				wallet: 'Portafoglio',
				successMessage: 'L\'indirizzo {{1}} {{#2}}({{2}}){{/2}} è il principale',
				set: 'Imposta come principale'
			},
			changeWalletName: {
				title: 'Modifica nome del portafoglio',
				wallet: 'Nome attuale del portafoglio',
				newName: 'Nuovo nome del portafoglio',
				successMessage: 'Il portafoglio è stato rinominato da <em>{{1}}</em> in <em>{{2}}</em>',
				change: 'Modifica'
			},
			changeWalletPassword: {
				title: 'Modifica password del portafoglio',
				wallet: 'Portafoglio',
				password: 'Password attuale',
				newPassword: 'Nuova password',
				confirmPassword: 'Conferma nuova password',
				successMessage: 'La password del portafoglio è stata modificata con successo',
				change: 'Modifica',
				passwordNotMatchTitle: 'Errore!',
				passwordNotMatchMessage: 'Le password inserite non corrispondono. Assicurati di scriverle correttamente'
			},
			changeAccountLabel: {
				title: 'Modifica nome dell\'indirizzo',
				label: 'Nome dell\'indirizzo',
				wallet: 'Portafoglio',
				successMessage: 'L\'indirizzo {{1}} è ora denominato {{2}}',
				change: 'Modifica'
			},
			removeAccount: {
				title: 'Cancellazione indirizzo',
				label: 'Nome dell\'indirizzo',
				wallet: 'Portafoglio',
				warning: 'Assicurati che l\'indirizzo non contenga alcun NEM prima di eliminarlo oppure questi saranno definitivamente persi.',
				successMessage: 'L\'indirizzo {{1}} {{#2}}({{2}}){{/2}} è stato eliminato!',
				remove: 'Elimina'
			},
			nisUnavailable: {
				title: 'NIS non disponibile',
				message: 'Disconnesso da NIS, in attesa di connessione'
			},
			shutdown: {
				title: 'Arresto NCC',
				message: 'Sei sicuro di voler arrestare NEM Community Client?'
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Portafoglio',
				activate: 'Attiva',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Portafoglio',
				deactivate: 'Disattiva',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Portafoglio',
				start: 'Avvia'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Portafoglio',
				stop: 'Ferma'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Aggiungi contatto',
				add: 'Aggiungi'
			},
			editContact: {
				title: 'Modifica contatto',
				saveChanges: 'Salva le modifiche'
			},
			removeContact: {
				title: 'Elimina contatto',
				remove: 'Elimina'
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
			importSuccess: 'Il portafoglio è stato importato!',
			nav: {
				start: 'Vai',
				about: 'Informazioni su NEM',
				settings: 'Impostazioni'
			},
			main: {
				leftTitle: 'Nuovo utente <em>NEM</em>?',
				leftButton: 'Crea nuovo portafoglio',
				walletNamePlh: 'Nome del portafoglio',
				passwordPlh: 'Password',
				confirmPasswordPlh: 'Conferma password',
				create: 'Crea',
				creating: 'Creazione in corso...',
				rightTitle: 'Già utente <em>NEM</em>?',
				rightButton: 'Apri il portafoglio',
				openButton: 'Apri',
				walletsFound: 'Trovati <strong>{{1}}</strong> <em>portafogli</em>',
				copyright: 'Grafica di <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC protegge il tuo portafoglio',
					description: 'La <em>sicurezza</em> è molto importante per XEM per evitare il furto di monete e titoli.'
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
					title: 'Come funziona NCC?',
					paragraphs: [
						'<strong>NCC</strong> gestisce l\'accesso ai tuoi titoli e monete come un portafoglio tradizionale. Puoi:',
						'<strong>NCC</strong> necessita di un server <strong>NIS</strong> per operare. La norma è averne uno locale (installato contestualmente ad <strong>NCC</strong>)',
						'Puoi anche configurare l\'accesso ad un server <strong>NIS</strong> remoto.'
					],
					listItems: [
						'Gestire diversi portafogli',
						'Gestire diversi indirizzi per portafoglio'
					]
				}, {
					title: 'Cos\'è &#42;NIS?',
					paragraphs: [
						'Fa funzionare la rete <strong>NEM</strong>.',
						'The more <strong>NIS</strong> there are in the network, the better the security.,',
						'<strong>NIS</strong> è il punto di accesso alla rete <strong>NEM</strong>.'
					],
					legend: '<strong>&#42;NIS</strong> è l\'acronimo di <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Circa {{1}} giorni fa',
			lastAccessJustNow: 'Proprio ora',
			lastAccessTooltip: 'L\'ultimo accesso è stato {{1}}',
			primary: 'principale',
			primaryShort: 'P',
			noLabel: '<Senza nome>',
			copiedToClipboard: 'Indirizzo copiato negli appunti!',
			actions: {
				refreshInfo: 'Aggiorna informazioni',
				bootLocalNode: 'Avvia nodo locale',
				changeWalletName: 'Modifica nome del portafoglio',
				changeWalletPassword: 'Modifica password del portafoglio',
				mergeWallets: 'Unisci portafogli',
				exportWallet: 'Esporta portafoglio',
				createAccount: 'Crea nuovo indirizzo',
				createRealAccountData: 'Crea indirizzo reale',
				verifyRealAccountData: 'Verifica indirizzo reale',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'View Account Details',
				addAccount: 'Aggiungi indirizzo esistente',
				changeAccountLabel: 'Modifica nome dell\'indirizzo',
				setPrimary: 'Seleziona indirizzo principale',
				removeAccount: 'Elimina indirizzo',
				clientInfo: 'Informazioni sul programma',
				closeWallet: 'Chiudi portafoglio',
				closeProgram: 'Arresta NCC',
				copyClipboard: 'Copia indirizzo negli appunti',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Vista d\'insieme',
				'Messaggi',
				'Contatti',
				'Transazioni',
				'Blocchi generati',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Borsa',
				'Notizie',
				'Applicazioni',
				'Indirizzi',
				'Impostazioni',
				'Arresta NCC',
			],
			bootNodeWarning: 'E\' necessario avviare un nodo locale per poter utilizzare a pieno le funzionalità di NCC.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Livello di importanza',
				unknown: 'Stato sconosciuto',
				start: 'Avvia generazione blocchi',
				harvesting: 'Generazione blocchi in corso',
				stop: 'Ferma generazione blocchi',
				description: 'importanza dell\'indirizzo nella rete NEM',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Generazione blocchi sicura in corso',
					stopRemoteHarvesting: 'Stop delegated harvesting',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Transazioni recenti',
				sendNem: 'Invia XEM',
				signMultisig: 'FIRMA',
				balance: 'Bilancio attuale',
				loading: 'Loading balance',
				accountCosignatories: 'Indirizzo multifirma',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Bilancio vested',
				syncStatus: '(al blocco {{1}}{{#2}} : circa {{3}} giorni indietro{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'sconosciuto',
				columns: [
					'',
					'Orario',
					'Mittente/destinatario',
					'Messaggio',
					'',
					'Dettagli',
					'Conferme',
					'Commissioni',
					'Importo'
				],
				noMessage: 'Nessun messaggio',
				encrypted: 'Messaggio cifrato',
				view: 'Visualizza',
				confirmationsUnknown: 'Sconosciuto',
				pending: 'In attesa',
				seeAll: 'Visualizza tutte le transazioni',
				noTransactions: 'Ancora nessuna transazione'
			},
			nemValue: {
				title: 'Statistiche sul valore dei XEM'
			},
			messages: {
				titleTooltip: 'Messaggi'
			},
			news: {
				titleTooltip: 'Notizie'
			},
			notAvailable: 'Non disponibile nella versione beta'
		},
		transactions: {
			title: 'Transazioni',
			sendNem: 'Invia XEM',
			balance: 'Bilancio attuale',
			filters: {
				confirmed: 'Confermate',
				unconfirmed: 'Non confermate',
				incoming: 'In ingresso',
				outgoing: 'In uscita'
			},
			table: {
				columns: [
					'',
					'Orario',
					'Mittente/destinatario',
					'Messaggio',
					'',
					'Dettagli',
					'Conferme',
					'Commissioni',
					'Importo'
				],
				noMessage: 'Nessun messaggio',
				encrypted: 'Messaggio cifrato',
				view: 'Visualizza',
				confirmationsUnknown: 'Sconoscito',
				pending: 'In attesa',
				noTransactions: 'Ancora nessuna transazione',
				loading: 'Caricamento ulteriori transazioni...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Bilancio attuale',
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
			title: 'Blocchi generati',
			feeEarned: 'Commissioni guadagnate nella generazione degli ultimi 25 blocchi',
			unknown: 'Sconosciuto',
			table: {
				columns: [
					'Numero',
					'Orario',
					'Block difficulty',
					'Commissioni'
				],
				noBlocks: 'Nessun blocco generato ',
				loading: 'Caricamento blocchi precedenti...'
			},
			harvesting: {
				unknown: 'Stato sconosciuto',
				start: 'Avvia generazione blocchi',
				harvesting: 'Generazione blocchi in corso',
				stop: 'Ferma generazione blocchi',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'Contatti',
			addContact: 'Aggiungi contatto',
			table: {
				columns: [
					'Indirizzo',
					'Nome privato',
					'Nome pubblico'
				],
				noContacts: 'Nessun contatto nella tua rubrica'
			},
			noLabel: 'Nessun nome',
			sendNem: 'Invia XEM',
			edit: 'Modifica',
			remove: 'Elimina'
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
			title: 'Impostazioni',
			settings: [{
				name: 'Lingua'
			}],
			save: 'Salva modifiche',
			saveSuccess: 'Le impostazioni sono state salvate'
		}
	}
});