define({
	id: 'nl',
	name: 'Nederlands',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Portefeuille bestaat niet.',
			102: 'Portefeuille is niet aangemaakt.',
			103: 'Portefeuille is corrupt. Herstel de portefeuille van een reservekopie die u als het goed is hebt gemaakt.',
			104: 'Opgegeven wachtwoord is niet correct.',
			105: 'Geen wachtwoord opgegeven voor de portefeuille.',
			106: 'Voordat u met uw portefeuille aan de slag kan, moet hij worden geopend. Om er zeker van te zijn dat u de rechtmatige eigenaar bent moet u het wachtwoord opgeven.',
			107: 'Rekeningnummer komt niet voor in de portefeuille.',
			108: 'De rekening kan niet worden verwijderd. Waarschijnlijk komt dit omdat de balans op de rekening hoger is dan 0 XEM. Het kan ook zijn dat deze rekening de primaire rekening is van de portefeuille.',
			109: 'Een andere portefeuille met dezelfde naam bestaat al, kies een andere portefeuille naam.',
			110: 'Account komt al voor in de portefeuille.',
			111: 'De naam van de portemonnee is een mapnaam.',
			112: 'De bestandextensie van de portemonnee is niet correct.',
			113: 'De portemonnee kon niet worden verwijderd.',
			121: 'Het adresboek bestand bestaat niet.',
			122: 'Adresboek is niet aangemaakt. ',
			123: 'Het adresboekbestand is helaas corrupt. Herstel het bestand van een reservekopie.',
			124: 'Het opgegeven wachtwoord van het adresboekbestand is niet correct.',
			125: 'Er was geen wachtwoord opgegeven voor het adresboek.',
			127: 'Het opgegeven adres komt niet voor in het adresboek.',
			128: 'Het opgegeven adres is niet valide.',
			129: 'Another address book with the same name exists already. Please choose another address book name.',
			130: 'Adres komt al voor in het adresboek.',
			131: 'Het adresboek is een mapnaam.',
			132: 'De extensie van het adresboekbestand is niet correct.',
			133: 'Het adresboek kon niet worden verwijderd.',
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
			202: 'Er kan geen beveiligd bericht worden verstuurd naar de ontvanger omdat hij/zij nog nooit een transactie heeft gemaakt met dit rekeningnummer.',
			203: 'De rekening kan niet worden geconverteerd, omdat niet alle ondertekenaars bekend zijn. Ze moeten ofwel in dezelfde portefeuille of er moet ten minste één transactie worden gemaakt.',
			305: 'De NEM Infrastructuur Server (NIS) is niet beschikbaar. Probeer de NEM software opnieuw te starten. \nAls u gebruik maakt van een externe NIS, controleer uw geconfigureerde gastheer op typefouten of gebruik een andere NOS afstandsbediening.',
			306: 'Er is een fout opgetreden wat het ontwikkelingsteam niet heeft voorzien. Onze verontschuldigingen hiervoor, misschien helpt het om het nog een keer te proberen. Als dat ook niet lukt, is het wijs om een ticket te openen binnen de NEM NIS/NCC gemeenschap.',
			400: 'Er mist een parameter of er is een parameter niet goed.',
			401: 'Deze actie is niet toegestaan, omdat er een privé sleutel naar een remote NIS kan worden verstuurd.',
			404: 'De opgevraagde bron kon niet worden gevonden..',
			500: 'Er is een fout opgetreden wat het ontwikkelingsteam niet heeft voorzien. Onze verontschuldigingen hiervoor, misschien helpt het om het nog een keer te proberen. Als dat ook niet lukt, is het wijs om een ticket te openen binnen de NEM NIS/NCC gemeenschap.',
			600: 'Voor de NCC (Nem Gemeenschaps Cliënt) is het vereist om de NIS (Network Infrastructuur Server) te starten voor het verzenden en ontvangen van transacties van de NEM cloud. Gebruik de NCC menu optie om lokaal te starten.',
			601: 'De NIS node is al gestart. Een tweede poging om te starten is niet mogelijk.',
			602: 'Bijna klaar. NEM Infrastructure Server is momenteel blokken aan het laden. De portefeuille is functioneel als de volledige db is geladen.',
			699: 'Het maximaal aantal oogsters wat is toegestaan op deze server, is reeds bereikt.',
			700: 'Het opgegeven account voldoet niet aan de basis criteria om te harvesten/oogsten. Waarschijnlijk heeft dat te maken met het aantal XEM wat zich in het account bevindt. Oogsten begint bij tenminste 1000 XEM.',
			901: 'Er is een fout opgetreden bij het instellen van de offline modus.',
			1000: 'De privé sleutel en de publieke sleutel komen niet overeen.',
			1001: 'De publieke sleutel en het adres komen niet overeen.',
			1002: 'Het adres klopt niet en hoort niet bij het netwerk.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Het termijn ligt in het verleden en is alleen geldig binnen het tijdsbestek van 1 dag.',
			1204: 'Het termijn ligt te ver in de toekomst en is alleen geldig binnen het tijdsbestek van 1 dag.',
			1205: 'Uw rekening heeft niet genoeg balans om deze transactie te maken.',
			1206: 'De tekst is te groot om het via NEM te verzenden. Reduceer de tekst en probeer het opnieuw te verzenden.',
			1207: 'De kluts (hash) van de transactie bestaat al in de database van onbevestigde transacties.',
			1208: 'De handtekening van de transactie kon niet worden geverifieerd.',
			1209: 'De tijdsaanduiding van de transactie ligt te ver in het verleden.',
			1210: 'De tijdsaanduiding van de transactie ligt te ver in de toekomst.',
			1219: 'De transactie is geweigerd omdat het transactie cache vol zit. Een hogere toeslag bevordert de kans dat de transactie geaccepteerd wordt.',
			1262: 'De rekening van gedelegeerd oogsten heeft een saldo van nul en kan niet worden gebruikt.',
			1263: 'Prioriteit overdracht geweigerd. Er is al een prioriteit overdracht in afwachting.',
			1264: 'Gedelegeerd oogsten is al geactiveerd.',
			1265: 'Gedelegeerd oogsten is NIET actief. Kan niet gedeactiveerd worden.',
			1266: 'Belang overdrachtstransactie (gedelegeerd oogsten) komt in conflict met bestaande transactie.',
			1271: 'De handtekening van deze multisig transactie is geweigerd. Geselecteerde rekening is geen handtekeninghouder van een multisig rekening.',
			1273: 'De handtekening van deze multisig transactie is geweigerd. Geassocieerde multisig transactie is niet bekend bij het NEM netwerk.',
			1274: 'Transactie niet toegestaan voor multisig rekening.',
			1275: 'Aanpassing van multisig rekening is geweigerd. Een van de toegevoegde rekeningen is al handtekeninghouder.',
			1321: 'Het rekeningnummer is onbekend.  Een rekening wordt pas bekend op het netwerk als dit deel heeft uitgemaakt van een transactie (als verzender of ontvanger).',
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
			success: 'Gelukt!',
			unknown: 'Onbekende status',
			unknownMessage: 'NCC heeft niet tijdig antwoord gekregen. Transactie kan gestuurd zijn naar het netwerk.<br /><br />Controleer alstublieft de transactie voordat u het nog eens probeert.',
			appStatus: {
				nccUnknown: 'NCC status is onbekend',
				nccUnavailable: 'NCC is niet beschikbaar',
				nccStarting: 'NCC is aan het starten...',
				nisUnknown: 'NIS status is onbekend',
				nisUnavailable: 'NIS is niet beschikbaar',
				nisStarting: 'NIS is aan het starten...',
				notBooted: 'Het is vereist om NIS te (her)starten. Open een portemonnee en start een lokaal station bij het popup dialoog of configureer de automatische opstart instellingen.',
				loading: 'Blokken aan het laden uit de database, momenteel bij blok: ',
				booting: 'Starten van de NIS...',
				nisInfoNotAvailable: 'NIS info is nog niet beschikbaar. NIS info nu aan het ophalen...',
				synchronizing: 'NIS is aan het synchronizeren. Bij block {{1}}, loopt ong. {{2}} achter.',
				daysBehind: {
					0: 'minder dan 1 dag',
					1: '1 dag',
					many: '{{1}} dagen'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS is gesynchroniseerd!',
				noRemoteNisAvailable: 'Geen afgelegen NIS gevonden in het netwerk. Heeft u een werkende internet verbinding?'
			},
			addressBook: 'Adresboek',
			password: 'Wachtwoord',
			passwordValidation: 'Wachtwoord moet worden ingevuld',
			address: 'Adres',
			privateLabel: 'Privé label',
			publicLabel: 'Publiek label',
			noCharge: 'Over de huidige rekening zullen <b>GEEN</b> toeslagen berekend worden, dit wordt afgehandeld met multisig rekeningen',
			fee: 'Toeslag',
			multisigFee: 'Multisig toeslag',
			useMinimumFee: 'Gebruik minimale toeslag',
			feeValidation: 'Toeslag mag niet lager zijn dan het minimum',
			justUse: 'Gewoon gebruiken',
			dueBy: 'Verzenden voor',
			minutes: 'minute(s)',
			hours: '(uur(en)',
			hoursDue: 'Binnen (uren)',
			hoursDueExplanation: 'Als de transactie niet is voldaan binnen de tijdslimiet, dan is de transactie afgewezen.',
			amount: 'Bedrag',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Sluiten',
			saveButton: 'Opslaan',
			cancelButton: 'Annuleer',
			sendButton: 'Verstuur',
			account: 'Rekening',
			thisAccount: 'Deze rekening',
			warning: 'Waarschuwing',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'NORMALE TRANSACTIE',
			21: 'BELANGRIJKE TRANSACTIE',
			22: 'AANPASSING VAN EEN MULTISIG REKENING',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'MULTISIG TRANSACTIE',
			51: 'MULTISIG TRANSACTIE',
			52: 'MULTISIG TRANSACTIE',
			53: 'MULTISIG TRANSACTIE',
			54: 'MULTISIG TRANSACTIE',
			55: 'MULTISIG TRANSACTIE',

		},
		Validity: {
			GOOD_TILL_CANCELLED: 'Good till cancelled',
			HOURS: 'Binnen (uren)'
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
			pending: 'In afwachting van transactie',
			outgoing: 'Uitgaande transactie',
			incoming: 'Inkomende transactie',
			self: 'Eigen transactie',
			importance: 'Prioriteits transactie',
			modification: '(Geaggregeerde) aanpassing van multisig',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Oeps!',
				caption: 'FOUT {{1}}'
			},
			yikes: {
				title: 'Oeps!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Ja',
				no: 'Nee'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'Instellingen',
				language: {
					label: 'Taal'
				},
				remoteServer: {
					tabTitle: 'Afgelegen Server',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Poort',
					defaultPort: 'Gebruik standaard poort.'
				},
				autoBoot: {
					tabTitle: 'Automatische start',
					name: 'Station naam',
					primaryAccount: 'Primair account',
					auto: 'Automatisch starten als er een portefeuille geopend is'
				},
				save: 'Opslaan',
				saveSuccess: 'Instellingen zijn met succes opgeslagen'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'Converteer een rekening naar een multisig rekening',
				multisigAccount: 'Multisig rekening',
				cosignatories: 'Handtekeninghouders adressen',
				labelDesc: 'Deze account is als {{1}} gelabeld',
				nullLabelDesc: 'Deze rekening heeft geen label',
				addCosignatory: '+ Handtekeninghouder toevoegen',
				convert: 'Converteer',
				txConfirm: {
					title: 'Bevestig conversie naar Multisig Rekening',
					total: 'Totaal'
				},
				warning: 'Multisig rekening staat op de lijst van co ondertekenaars. Dit zal resulteren in vergrendeling van de rekening, wat de toegang tot het fonds zal blokkeren. Grote kans dat u dit <b>NIET</b> wilt doen.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Signeer multisig transactie',
				original: {
					from: 'Multisig rekening',
					to: 'Ontvanger',
					amount: 'Bedrag',
					fee: 'Toeslag',
					deadline: 'Uiterste leverdatum'
				},
				multisigFees: 'Multisig toeslagen',
				multisigTotal: 'Totaal',
				sender: 'Handtekeninghouder',
				passwordValidation: 'Wachwoord moet worden ingevuld',
				sending: 'Verzenden...',
				txConfirm: {
					title: 'Bevestig Multisig Transactie',
					message: 'Bericht',
					encrypted: 'Bericht is versleuteld',
					noMessage: 'Geen bericht',

				}
			},
			sendNem: {
				title: 'XEM versturen',
				sender: 'Afzender',
				thisAccount: 'Deze rekening',
				labelDesc: 'Deze rekening is als {{1}} gelabeld',
				nullLabelDesc: 'Deze rekening heeft geen label',
				amount: 'Bedrag',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Rekening van ontvanger',
				recipientValidation: 'Rekening moet een lengte hebben van 40 karakters en/of spaties',
				message: 'Bericht',
				encrypt: 'Beveilig dit bericht',
				sending: 'Versturen...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Bevestig transactie',
					amount: 'Hoeveelheid',
					to: 'Naar',
					total: 'Totaal',
					message: 'Bericht',
					encrypted: 'Bericht is versleuteld',
					noMessage: 'Geen bericht',
					confirm: 'Bevestig',
					sending: 'Verzenden...'
				},
				notBootedWarning: {
					title: 'Station is niet gestart!',
					message: 'Een lokaal station moet eerst gestart worden om XEM te versturen!'
				},
				bootingWarning: {
					title: 'Station wordt opgestart',
					message: 'Wacht a.u.b. tot het opstartproces klaar is om uw transactie te verzenden.'
				},
				loadingWarning: {
					title: 'Aan het laden van de databank'
				},

			},
			clientInfo: {
				title: 'Cliënt informatie',
				ncc: 'NEM Gemeenschaps Cliënt - NCC',
				signer: 'Ondertekenaar',
				remoteServer: 'Afgelegen Server',
				local: 'Lokale Server',
				nis: 'NEM Infrastructuur Server - NIS',
				sync: 'Gesynchroniseerd',
				notSync: 'Niet gesynchroniseerd',
				notConnected: 'Kan geen verbinding maken met de NEM Cloud',
				loading: 'Laden...'
			},
			transactionDetails: {
				title: 'Transactie details',
				id: 'ID',
				hash: 'Kluts (hash)',
				type: 'Type transactie',
				direction: 'Richting van transactie',
				pending: 'Wachten',
				outgoing: 'Uitgaand',
				incoming: 'Inkomend',
				self: 'Zelf',
				sender: 'Afzender',
				multisigAccount: 'Multisig Rekening',
				issuer: 'Uitgever',
				recipient: 'Ontvanger',
				remote: 'Afgelegen',
				multisigMessage: 'Handtekeningen aanwezig',
				message: 'Bericht',
				noMessage: 'Geen bericht',
				encrypted: 'Bericht is beveiligd',
				time: 'Tijdsaanduiding',
				confirmations: 'Confirmaties',
				confirmationsUnknown: 'Onbekend',
				amount: 'Bedrag',
				multiplier: 'Multiplier',
				innerFee: 'Interne toeslagen',
				multisigFees: 'Multisig toeslagen',
				cosignatory: 'Handtekeninghouder',
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
				title: 'Rekening details',
				label: 'Label',
				noLabel: 'Geen label',
				add: 'Toevoegen aan het adresboek',
				remove: 'Verwijderen van het adresboek',
				balance: 'Balans',
				vested: 'gevestigd',
				importance: 'Waardering van importantie',
				publicKey: 'Publieke sleutel',
				noPublicKey: 'Geen publieke sleutel',
				harvestedBlocks: 'Geoogste blokken'
			},
			bootLocalNode: {
				title: 'Start lokaal station',
				account: 'Rekening voor het starten van het lokale station',
				noLabel: '<span class=\"null\">&lt;Geen label&gt;</span>',
				wallet: 'Portefeuille',
				node: 'Naam van het station',
				boot: 'Start',
				booting: 'Opstarten...',
				warning: 'Waarschuwing bij starten van het station',
				warningText: 'U probeert een station te starten <u>{{2}}</u><br/><br/> Opstarten van een afgelegen station is momenteel onmogelijk vanuit NCC. ',
				warningStatement: 'U moet automatisch starten naar waarheid als u het afgelegen station {{3}} gebruikt.<br/><br/>Starten van een station op afstand is momenteel onmogelijk vanuit NCC',
				warningQuestion: 'Weet u zeker dat u het station <u>{{3}}</u> wilt starten met gebruik van een privé sleutel van de rekening {{1}} ({{2}} XEM)?<br><br>Dit zal de <span class=\"sublabelWarning\">privé sleutel</span> naar station: <u>{{3}}</u> onthullen.'
			},
			closeWallet: {
				title: 'Portefeuille sluiten',
				message: 'Weet u het zeker dat u wilt terugkeren naar de openingspagina?'
			},
			createAccount: {
				title: 'Nieuwe rekening aanmaken',
				label: 'Privé label',
				wallet: 'Portefeuille',
				successMessage: 'Rekening {{1}} {{#2}}({{2}}){{/2}} is aangemaakt!',
				create: 'Aanmaken'
			},
			showPrivateKey: {
				title: 'Laat de privésleutel van deze rekening zien.',
				message: 'Dit zal de privé sleutel onthullen in tekst op deze pagina. Als er malware is geïnstalleerd op deze computer kan dit uw gegevens in gevaar brengen, weet u zeker dat u dit wilt doen?',
				publicKey: 'Publieke sleutel',
				privateKey: 'Privé sleutel',
				show: 'Laat de sleutel zien'
			},
			showRemotePrivateKey: {
				title: 'Laat de privé sleutel van de afgelegen rekening zien',
				message: 'Dit zal de privé sleutel van de afgelegen rekening op het scherm tonen. Als er malware op uw computer geïnstalleerd is, dan kan dit uw gegevens in gevaar brengen. Weet u zeker dat u dat wilt doen?',

			},
			addAccount: {
				title: 'Voeg een bestaande rekening toe',
				privateKey: 'Privé sleutel van de rekening',
				wallet: 'Portefeuille',
				successMessage: 'Rekening {{1}} {{#2}}({{2}}){{/2}} is toegevoegd aan portefeuille!',
				add: 'Voeg toe',
				label: 'Label'
			},
			setPrimary: {
				title: 'Primaire rekening instellen',
				account: 'Rekening die primair wordt ingesteld.',
				noLabel: '<span class=\"null\">&lt;Geen label&gt;</span>',
				wallet: 'Portefeuille',
				successMessage: 'Rekening {{1}} {{#2}}({{2}}){{/2}} is als primaire rekening ingesteld!',
				set: 'Stel als primaire rekening in'
			},
			changeWalletName: {
				title: 'Verander naam van portefeuille',
				wallet: 'Huidige naam van de portefeuille',
				newName: 'Nieuwe naam van de portefeuille',
				successMessage: 'Naam van portefeuille is gewijzigd van <em>{{1}}</em> naar <em>{{2}}</em>',
				change: 'Aanpassen'
			},
			changeWalletPassword: {
				title: 'Verander het wachtwoord van de portefeuille',
				wallet: 'Portefeuille',
				password: 'Huidig wachtwoord',
				newPassword: 'Nieuw wachtwoord',
				confirmPassword: 'Bevestig het nieuwe wachtwoord',
				successMessage: 'Wachtwoord van de portefeuille is aangepast.',
				change: 'Aanpassen',
				passwordNotMatchTitle: 'Oeps!',
				passwordNotMatchMessage: 'Het wachtwoord komt niet overeen.'
			},
			changeAccountLabel: {
				title: 'Verander het label van de rekening',
				label: 'Label van rekening',
				wallet: 'Portefeuille',
				successMessage: 'Rekening {{1}} is gelabeld als {{2}}',
				change: 'Aanpassen'
			},
			removeAccount: {
				title: 'Rekening verwijderen',
				label: 'Label rekening',
				wallet: 'Portefeuille',
				warning: 'Let op! Wees er zeker van dat er geen saldo in XEM opstaat. Eventueel saldo wordt voor altijd verwijderd.',
				successMessage: 'Rekening {{1}} {{#2}}({{2}}){{/2}} is verwijderd!',
				remove: 'Verwijderen'
			},
			nisUnavailable: {
				title: 'NIS is niet beschikbaar',
				message: 'Connectie van NIS is onderbroken, wachten op verbinding'
			},
			shutdown: {
				title: 'Afsluiten',
				message: 'Weet u zeker dat u de NEM Gemeenschaps Cliënt wil afsluiten?'
			},
			activateDelegated: {
				title: 'Activeren van gedelegeerd oogsten',
				wallet: 'Portefeuille',
				activate: 'Activeren',
				warningText: 'Activeren zal ongeveer 6 uur duren (360 blokken).  Activeren zal oogsten NIET automatisch laten starten.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deactiveren Gedelegeerd Oogsten',
				wallet: 'Portefeuille',
				deactivate: 'Deactiveer',
				warningText: 'Deactiveren zal 6 uur duren (360 blokken).'
			},
			startRemote: {
				title: 'Starten Gedelegeerd Oogsten',
				wallet: 'Portefeuille',
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Gedelegeerd Oogsten',
				wallet: 'Portefeuille',
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: 'U verlaat uw portefeuille. Als u op deze manier uw portefeuille verlaat, zullen anderen nog in staat zijn om toegang te krijgen tot uw portefeuille vanaf deze computer. Om te voorkomen dat dit gebeurd kunt u uitloggen door gebruik te maken van het menu-item \"Sluit Portefuille\" in de rechterbovenhoek voordat u het tablad of de browser sluit.'
			},
			addContact: {
				title: 'Contact toevoegen',
				add: 'Voeg toe'
			},
			editContact: {
				title: 'Wijzig contact',
				saveChanges: 'Opslaan'
			},
			removeContact: {
				title: 'Verwijder contact',
				remove: 'Verwijderen'
			},
			placeOrder: {
				title: 'Place order',
				cancel: 'Annuleer',
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
				cancel: 'Annuleer',
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
				cancel: 'Annuleer',
				editDetails: 'Edit details',
				confirm: 'Bevestig'
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
				cancel: 'Annuleer',
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
				address: 'Adres',
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
				cancel: 'Annuleer',
				finish: 'Finish',
				finishing: 'Finishing',

			},
			setXemWithdrawalAccount: {
				title: 'Create XEM Withdrawal Account',
				detailsMessage: 'The new XEM withdrawal account will be associated with your current user details, you can update them before establishing the new withdrawal account.',
				message: 'You are almost there, now you should type in the address of the account that will be used as a withdraw account.',
				createSuccess: 'XEM Withdrawal account created successfully',
				cancel: 'Annuleer',
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
				confirm: 'Bevestig',
				message: 'In order to complete this action you should confirm your password.',
				password: 'Wachtwoord',
				wallet: 'Portefeuille'
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
				cancel: 'Annuleer',
				setupWithdraw: 'setup',
				noWithdraw: 'not set yet:'
			},
			orderUpdate: {
				title: 'Order Update',
				buying: 'Buying',
				selling: 'Selling',
				eachFor: 'Each for',
				fee: 'Toeslag',
				strategy: 'Strategy',
				total: 'Totaal',
				ok: 'OK',
				orderDetails: 'Order details',
				price: 'Price',
				amount: 'Bedrag',
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
				cancel: 'Annuleer'
			},
			addFiatAccount: {
				title: 'Add Fiat account',
				message: 'Enter the data about the new Fiat account',
				tradeInstrument: 'Trade instrument',
				accountNumber: 'Account number',
				btcPrivateKey: 'BTC private key',
				correspondingKey: 'corresponding BitId key',
				add: 'Voeg toe',
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
				cancel: 'Annuleer',
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
			importSuccess: 'Portefeuille is met succes geïmporteerd!',
			nav: {
				start: 'Aan de slag',
				about: 'Over NEM',
				settings: 'Instellingen'
			},
			main: {
				leftTitle: 'Nieuw bij <em>NEM</em>?',
				leftButton: 'Maak een nieuwe portefeuille ',
				walletNamePlh: 'Naam van de portefeuille ',
				passwordPlh: 'Wachtwoord',
				confirmPasswordPlh: 'Bevestig nieuw paswoord',
				create: 'Aanmaken',
				creating: 'Aanmaken...',
				rightTitle: 'Al een <em>NEM</em>ber?',
				rightButton: 'Open uw portefeuille ',
				openButton: 'Open',
				walletsFound: '<strong>{{1}}</strong> <em>Portefeuille(s) gevonden</em>',
				copyright: 'Fotografie door <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC beveiligt uw portefeuille ',
					description: '<em>Veiligheid</em> is heel belangrijk voor NEM om diefstal van XEM &amp; activa te voorkomen.'
				}, {
					title: 'Afgelegen NEM Infrastructuur Server',
					description: 'Door gebruik van een externe NIS moet u de blokken opnieuw synchroniseren bij het opstarten.',

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
					title: 'Hoe werkt NCC?',
					paragraphs: [
						'<strong>NCC</strong> zorgt voor toegang tot uw activa en XEM zoals een traditionele portefeuille, of portomonnee dat doet.',
						'<strong>NCC</strong> heeft toegang tot de <strong>NIS</strong> server nodig om te kunnen functioneren. Er is een standaard lokale service actief. Deze wordt geïnstalleerd met de gemeenschaps cliënt (NCC)',
						'U kunt de NCC ook configureren om toegang te krijgen tot een afgelegen <strong>NIS</strong>.'
					],
					listItems: [
						'Hebben van meerdere rekeningen',
						'Definieer meerdere rekeningen die u wilt toevoegen aan een portefeuille'
					]
				}, {
					title: 'Wat is &#42;NIS?',
					paragraphs: [
						'Dit component is verantwoordelijk om de <strong>NEM</strong> cloud in de lucht te houden.',
						'Des de meer <strong>NIS’</strong> er zijn in het netwerk, des de beter de beveiliging.,',
						'<strong>NIS</strong> is het toegangspunt voor de <strong>NEM</strong> cloud.'
					],
					legend: '<strong>&#42;NIS</strong> staat voor <strong>NEM Infrastructuur Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Gemeenschaps Cliënt.'
			}
		},
		wallet: {
			logo: 'afbeeldingen/nem_logo.png',
			lastAccess: 'Ongeveer {{1}} dag(en) geleden',
			lastAccessJustNow: 'Zojuist',
			lastAccessTooltip: 'Laatste toegang was {{1}}',
			primary: 'Primaire',
			primaryShort: 'P',
			noLabel: '<Geen label>',
			copiedToClipboard: 'Account is gekopieerd naar het klembord!',
			actions: {
				refreshInfo: 'Hernieuw informatie',
				bootLocalNode: 'Start Lokaal Station',
				changeWalletName: 'Verander naam van de portefeuille',
				changeWalletPassword: 'Verander het wachtwoord van de portefeuille',
				mergeWallets: 'Portefeuilles samenvoegen',
				exportWallet: 'Exporteer de portefeuille',
				createAccount: 'Maak een nieuwe rekening',
				createRealAccountData: 'Maak een echte rekening',
				verifyRealAccountData: 'Controleer of de rekening gegevens juist zijn.',
				showPrivateKey: 'Onthul PRIVÉ sleutel',
				showRemotePrivateKey: 'Onthul PRIVÉ sleutel van afgelegen rekening',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'Laat details van de rekening zien',
				addAccount: 'Voor een bestaande rekening toe',
				changeAccountLabel: 'Verander het label van de rekening',
				setPrimary: 'Stel in als Primaire Rekening',
				removeAccount: 'Verwijder rekening',
				clientInfo: 'Cliënt Informatie',
				closeWallet: 'Sluit Portefeuille',
				closeProgram: 'Programma Afsluiten',
				copyClipboard: 'Kopieer rekeningnummer naar het klembord.',
				copyDisabled: 'Voor het kopieren van een adres is Flash vereist',
				convertMultisig: 'Converteer andere rekening naar multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Instrumentenpaneel',
				'Berichten',
				'Adresboek',
				'Transacties',
				'Geoogste Blokken',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Asset Exchange',
				'News',
				'Accounts',
				'Settings',
				'Afsluiten',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'Een lokaal station moet gestart zijn om alle functionaliteiten van de NCC te gebruiken.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Score',
				unknown: 'Onbekende status',
				start: 'Start oogsten',
				harvesting: 'Oogsten',
				stop: 'Stop oogsten',
				description: 'Status-score van deze rekening op de NEM-cloud',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Activeer gedelegeerd oogsten',
					activating: 'Activeren van gedelegeerd oogsten...',
					active: 'Gedelegeerd oogsten is geactiveerd',
					deactivate: 'Deactiveer gedelegeerd oogsten',
					deactivating: 'Deactiveren van gedelegeerd oogsten...',
					startRemoteHarvesting: 'Start gedelegeerd oogsten',
					remotelyHarvesting: 'Oogsten op afstand',
					stopRemoteHarvesting: 'Stop gedelegeerd oogsten',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Recente Transacties',
				sendNem: 'Verstuur XEM',
				signMultisig: 'SIGNEER',
				balance: 'Huidige balans',
				loading: 'Laden van balans',
				accountCosignatories: 'Multisig rekening',
				accountCosignatoriesView: 'bekijk gezamenlijke ondertekenaars',
				vestedBalance: 'Verworven Balans',
				syncStatus: '(bij blok {{1}}{{#2}} : ong. {{3}} dagen achter{{/2}})',
				notSynced: 'zou onjuist kunnen zijn, NIS is nog niet gesynchroniseerd',
				unknown: 'onbekend',
				columns: [
					'',
					'Tijd',
					'Afzender/Ontvanger',
					'Bericht',
					'',
					'Details',
					'Confirmaties',
					'Toeslag',
					'Bedrag'
				],
				noMessage: 'Geen bericht',
				encrypted: 'Bericht is beveiligd',
				view: 'Bekijk',
				confirmationsUnknown: 'Onbekend',
				pending: 'In afwachting',
				seeAll: 'Bekijk alle transacties',
				noTransactions: 'Er zijn nog geen transacties uitgevoerd'
			},
			nemValue: {
				title: 'XEM statistieken'
			},
			messages: {
				titleTooltip: 'Berichten'
			},
			news: {
				titleTooltip: 'Nieuws'
			},
			notAvailable: 'Nog niet beschikbaar bij test versie'
		},
		transactions: {
			title: 'Transacties',
			sendNem: 'Verstuur XEM',
			balance: 'Huidige Balans',
			filters: {
				confirmed: 'Bevestigd',
				unconfirmed: 'Onbevestigd',
				incoming: 'Inkomend',
				outgoing: 'Uitgaand'
			},
			table: {
				columns: [
					'',
					'Tijd',
					'Afzender/Ontvanger',
					'Bericht',
					'',
					'Details',
					'Confirmaties',
					'Toeslag',
					'Bedrag'
				],
				noMessage: 'Geen bericht',
				encrypted: 'Bericht is versleuteld',
				view: 'Bekijk',
				confirmationsUnknown: 'Onbekend',
				pending: 'In afwachting',
				noTransactions: 'Er zijn nog geen transacties uitgevoerd',
				loading: 'Meer transacties laden...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Huidige Balans',
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
			title: 'Geoogste Blokken',
			feeEarned: 'Toeslagen verdient van de laatste 25 geoogste blokken',
			unknown: 'Onbekend',
			table: {
				columns: [
					'Blokhoogte',
					'Tijd',
					'Moeilijkheid blok',
					'Toeslag'
				],
				noBlocks: 'Geen geoogste blokken',
				loading: 'Bekijk blokken die voorafgaand geoogst zijn'
			},
			harvesting: {
				unknown: 'Onbekende status',
				start: 'Start oogsten',
				harvesting: 'Oogsten',
				stop: 'Stop oogsten',
				remoteHarvest: {
					startRemoteHarvesting: 'Start gedelegeerd oogsten',
					stopRemoteHarvesting: 'Stop gedelegeerd oogsten'
				}
			}
		},
		addressBook: {
			title: 'Adresboek',
			addContact: 'Voeg contact toe',
			table: {
				columns: [
					'Adres van rekening',
					'Prive label',
					'Publiek Label'
				],
				noContacts: 'Er staan geen contacten in uw adresboek'
			},
			noLabel: 'Geen label',
			sendNem: 'Verstuur XEM',
			edit: 'Aanpassen',
			remove: 'Verwijderen'
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
				amount: 'Bedrag',
				price: 'Price',
				time: 'Tijd',
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
				amount: 'Bedrag',
				price: 'Price',
				perOne: 'per 1',
				createdOn: 'Created on',
				type: 'Type',
				noOrders: 'You haven\'t placed any orders yet.',
				strategy: 'Strategy',
				remove: 'Verwijderen'
			},
			graphChart: {
				title: 'Graph Chart',
				step: 'Step',
				steps: {
					fifteenMinutes: '15 minutes',
					oneHour: '1 hour',
					oneDay: '1 dag'
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
					confirmed: 'Bevestigd',
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
				title: 'Instellingen',
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
				senderOrRecipient: 'Afzender/Ontvanger',
				message: 'Bericht',
				confirmations: 'Confirmaties',
				fee: 'Toeslag',
				amount: 'Bedrag',
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
					time: 'Tijd',
					sender: 'Afzender',
					sendAmount: 'Sent',
					recipient: 'Ontvanger',
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
			title: 'Instellingen',
			settings: [{
				name: 'Taal'
			}],
			save: 'Opslaan',
			saveSuccess: 'Instellingen zijn opgeslagen'
		}
	}
});