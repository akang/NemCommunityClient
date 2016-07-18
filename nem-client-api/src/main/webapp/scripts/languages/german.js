define({
	id: 'DE',
	name: 'Deutsch',
	texts: {
		preferences: {
			thousandSeparator: '.',
			decimalSeparator: ','
		},
		faults: {
			101: 'Die Brieftasche existiert nicht.',
			102: 'Die Brieftasche konnte nicht erstellt werden.',
			103: 'Die Brieftasche ist beschädigt. Bitte stelle die Brieftasche aus einem Backup wieder her.',
			104: 'Das Passwort ist nicht korrekt.',
			105: 'Es wurde kein Passwort für die Brieftasche eingegeben.',
			106: 'Bevor du eine Brieftasche benutzen kannst, muss sie geöffnet werden. Um sicher zu stellen, dass du berechtigt bist, die Brieftasche zu verwenden, musst du das Passwort für die Brieftasche eingeben.',
			107: 'Die Brieftasche enthält dieses Konto nicht.',
			108: 'Das Konto kann nicht entfernt werden. Der Grund ist meistens, dass der Kontostand größer als 0 XEM ist oder, dass Du versuchst, ein Hauptkonto zu entfernen.',
			109: 'Es gibt bereits eine Brieftasche mit diesem Namen. Bitte wähle einen anderen Namen für die Brieftasche.',
			110: 'Die Brieftasche enthält dieses Konto bereits.',
			111: 'Der Name der Brieftasche darf kein Dateiverzeichnis sein.',
			112: 'Die Dateiendung der Brieftasche ist falsch.',
			113: 'Die Brieftasche konnte nicht gelöscht werden.',
			121: 'Das Adressbuch existiert nicht.',
			122: 'Das Adressbuch konnte nicht erstellt werden.',
			123: 'Das Adressbuch ist beschädigt. Bitte stelle das Adressbuch aus einem Backup wieder her.',
			124: 'Das Passwort ist nicht korrekt.',
			125: 'Es wurde kein Passwort für das Adressbuch eingegeben.',
			127: 'Das Adressbuch enthält diese Adresse nicht.',
			128: 'Die Adresse ist ungültig.',
			129: 'Es gibt bereits ein Adressbuch mit diesem Namen. Bitte wähle einen anderen Namen für das Adressbuch.',
			130: 'Das Adressbuch enthält diese Adresse bereits.',
			131: 'Der Name des Adressbuches darf kein Dateiverzeichnis sein.',
			132: 'Die Dateiendung des Adressbuchs ist falsch.',
			133: 'Das Adressbuch konnte nicht gelöscht werden.',
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
			202: 'Die verschlüsselte Nachricht kann nicht gesendet werden, da der Empfänger bisher noch keine Transaktion gesendet hat und deswegen der öffentliche Schlüssel des Empfängers unbekannt ist.',
			203: 'Das Konto kann nicht umgewandelt werden, da nicht alle Mitsignierer bekannt sind. \'Bekannt\' heißt hier, dass die entsprechenden Konten entweder schon mal eine Transaktion gesendet oder empfangen haben müssen oder sich in deiner Brieftasche befinden müssen.',
			305: 'Der NEM Infrastructure Server (NIS) ist nicht verfügbar.\n\nEin Neustart der NEM Software könnte dieses Problem beheben.\n\nFalls du einen Remote-NIS benutzt, überprüfe den eingestellten Host auf Tippfehler oder benutze einen anderen Remote-NIS.',
			306: 'Es ist ein unvorhergesehener Fehler aufgetreten.\n\nSollte dieser Fehler wiederholt auftreten, könnte ein Neustart der NEM Software das Problem beheben. Falls nicht, eröffne bitte einen Thread in der NEM NIS/NCC Community.',
			400: 'Einer der Parameter fehlt oder ist ungültig.',
			401: 'Dieser Vorgang wurde aus Sicherheitsgründen unterbunden, denn der private Schlüssel könnte gestohlen werden, wenn er an einen Remote-NIS gesendet wird.',
			404: 'Die angeforderte Ressource wurde nicht gefunden.',
			500: 'Es ist ein unvorhergesehener Fehler aufgetreten.\n\nSollte dieser Fehler wiederholt auftreten, könnte ein Neustart der NEM Software das Problem beheben. Falls nicht, eröffne bitte einen Thread in der NEM NIS/NCC Community.',
			600: 'Der NEM Infrastructure Server (NIS) muss gebootet sein, damit Transaktionen gesendet und empfangen werden können. Bitte boote NIS mit Hilfe des NCC Boot-Menüpunkts.',
			601: 'Der NEM Infrastructure Server (NIS) ist bereits gebootet. Es ist nicht nötig, NIS ein weiteres Mal zu booten.',
			602: 'Fast fertig! NEM Infrastructure Server (NIS) lädt gerade die Blöcke. Die Brieftasche ist einsatzbereit, wenn alle Blöcke geladen sind.',
			699: 'Die maximale Anzahl an Harvestern, die auf diesem Server erlaubt ist, ist erreicht.',
			700: 'Das angegebene Konto erfüllt nicht die Grundkriterien, um Blöcke zu erzeugen. Um Blöcke erzeugen zu können, muss der zur Ernte verwendbare Anteil deines Kontostands mindestens 10.000 XEM betragen.',
			901: 'Es ist ein Fehler beim Übergang zum Offlinemodus aufgetreten.',
			1000: 'Der eingegebene private Schlüssel passt nicht zum eingegebenen öffentlichen Schlüssel.',
			1001: 'Der eingegebene öffentliche Schlüssel passt nicht zur eingegebenen Adresse.',
			1002: 'Die Adresse gehört nicht zum Hauptnetzwerk.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Das angegebene Verfallsdatum liegt in der Vergangenheit. Das Verfallsdatum muss in einem Zeitraum von einem Tag liegen.',
			1204: 'Das angegebene Verfallsdatum liegt zu weit in der Zukunft. Das Verfallsdatum muss in einem Zeitraum von einem Tag liegen.',
			1205: 'Der Kontostand reicht nicht aus, um diese Transaktion durchzuführen.',
			1206: 'Die eingegebene Nachricht ist zu lang. Bitte reduziere die Länge der Nachricht, um sie versenden zu können.',
			1207: 'Der Transaktionshash existiert bereits in der Datenbank oder in der Liste der ausstehenden Transaktionen.',
			1208: 'Die Signatur der Transaktion konnte nicht verifiziert werden.',
			1209: 'Der Zeitstempel der Transaktion liegt zu weit in der Vergangenheit.',
			1210: 'Der Zeitstempel der Transaktion liegt zu weit in der Zukunft.',
			1219: 'Die Transaktion wurde abgelehnt, weil gerade zu viele Transaktionen gesendet werden. Eine höhere Gebühr erhöht die Chance, dass die Transaktion akzeptiert wird.',
			1262: 'Das Konto, welches für die delegierte Ernte benutzt werden soll, hat einen Kontostand größer als Null und kann daher nicht verwendet werden.',
			1263: 'Übertragung der Wichtigkeit abgelehnt, da es noch eine ausstehende Übertragung gibt.',
			1264: 'Die delegierte Ernte ist bereits freigeschaltet.',
			1265: 'Die delegierte Ernte ist bereits deaktiviert.',
			1266: 'Die Wichtigkeitsübertragung (für die delegierte Ernte) steht im Konflikt mit einer anderen Wichtigkeitsübertragung.',
			1271: 'Multisig-Signierung abgelehnt. Das aktuelle Konto ist kein Mitsignierer eines Multisig-Kontos.',
			1273: 'Multisig-Signierung abgelehnt. Die zu signierende Multisig-Transaktion existiert nicht.',
			1274: 'Diese Transaktion ist für ein Multisig-Konto nicht erlaubt.',
			1275: 'Änderung des Multisig-Kontos abgelehnt. Eines der hinzugefügten Konten ist schon Mitsignierer.',
			1321: 'Das Konto ist unbekannt. Ein Konto muss mindestens einmal als Absender oder Empfänger in einer Transaktion auftreten, um dem Netzwerk bekannt zu sein.',
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
			success: 'Erfolg',
			unknown: 'Unbekannter Status',
			unknownMessage: 'NCC hat keine Rückmeldung bekommen. Es ist unklar, ob die Transaktion gesendet wurde.<br /><br />Bitte prüfe, ob die Transaktion unter "Transaktionen" aufgelistet wird (Ausgehend oder Ausstehend) und sende sie nur dann noch mal, wenn sie dort nicht vorhanden ist.',
			appStatus: {
				nccUnknown: 'NCC-Status ist unbekannt',
				nccUnavailable: 'NCC ist nicht verfügbar',
				nccStarting: 'NCC wird gestartet...',
				nisUnknown: 'NIS-Status ist unbekannt',
				nisUnavailable: 'NIS ist nicht verfügbar',
				nisStarting: 'NIS wird gestartet...',
				notBooted: 'NIS muss gebootet werden. Bitte öffne eine Brieftasche und boote NIS mit Hilfe des Popup-Dialoges.',
				loading: 'Lade Blöcke aus der Datenbank, im Moment bei Block: ',
				booting: 'NIS wird gebootet...',
				nisInfoNotAvailable: 'NIS-Status wird abgefragt...',
				synchronizing: 'NIS synchronisiert gerade. Block {{1}}, {{2}} im Rückstand.',
				daysBehind: {
					0: 'weniger als 1 Tag',
					1: 'etwa 1 Tag',
					many: 'etwa {{1}} Tage'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS ist synchron!',
				noRemoteNisAvailable: 'Kein Remote-NIS gefunden. Ist die Internetverbindung unterbrochen?'
			},
			addressBook: 'Adressbuch',
			password: 'Passwort',
			passwordValidation: 'Das Passwort darf nicht leer sein',
			address: 'Adresse',
			privateLabel: 'Eigene Bezeichnung',
			publicLabel: 'Öffentliche Bezeichnung',
			noCharge: 'Das Konto wird <b>NICHT</b> mit Gebühren belastet. Das Multisig-Konto zahlt die Gebühren.',
			fee: 'Gebühr',
			multisigFee: 'Signierungs-Gebühr',
			useMinimumFee: 'Benutze Mindestgebühr',
			feeValidation: 'Die Gebühr darf die Mindestgebühr nicht unterschreiten',
			justUse: 'Just use',
			dueBy: 'Verfällt in',
			minutes: 'minute(s)',
			hours: 'Stunde(n)',
			hoursDue: 'Verfällt in (Stunden)',
			hoursDueExplanation: 'Falls die Transaktion von der NEM Cloud nicht innerhalb der hier eingestellten Zeit akzeptiert wird, wird sie endgültig abgelehnt.',
			amount: 'Amount',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Schließen',
			saveButton: 'Save',
			cancelButton: 'Abbrechen',
			sendButton: 'Senden',
			account: 'Adresse des Kontos',
			thisAccount: 'Dieses Konto',
			warning: 'Achtung',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'XEM-Überweisung',
			21: 'Wichtigkeitsübertragung',
			22: 'Multisig-Konto-Modifikation',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'Multisig-Überweisung',
			51: 'Multisig-Überweisung',
			52: 'Multisig-Überweisung',
			53: 'Multisig-Überweisung',
			54: 'Multisig-Überweisung',
			55: 'Multisig-Überweisung',

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
			pending: 'Ausstehende Transaktion',
			outgoing: 'Ausgehende Transaktion',
			incoming: 'Eingehende Transaktion',
			self: 'Transaktion zu sich selbst',
			importance: 'Wichtigkeitsübertragung',
			modification: 'Multisig-Konto-Modifikation',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Entschuldigung!',
				caption: 'FEHLER {{1}}'
			},
			yikes: {
				title: 'Achtung!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Ja',
				no: 'Nein'
			},
			initialBackup: {
				title: "Willkommen bei NEM!",
				content: "Es wird empfohlen, ein Brieftaschen-Backup anzulegen. Dies ist über das Menü in der oberen, rechten Ecke möglich."
			},
			settings: {
				title: 'Einstellungen',
				language: {
					label: 'Sprache'
				},
				remoteServer: {
					tabTitle: 'Remote-Server',
					protocol: 'Protokoll',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Standard-Port benutzen.'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Name des NIS',
					primaryAccount: 'Hauptkonto',
					auto: 'Automatisch booten beim Öffnen der Brieftasche'
				},
				save: 'Speichern',
				saveSuccess: 'Die Einstellungen wurden erfolgreich gespeichert'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'In Multisig-Konto umwandeln',
				multisigAccount: 'Multisig-Konto',
				cosignatories: 'Adressen der Mitsignierer',
				labelDesc: 'Die Bezeichnung des Kontos ist {{1}}',
				nullLabelDesc: 'Dieses Konto hat keine Bezeichnung',
				addCosignatory: '+ Mitsignierer hinzufügen',
				convert: 'Umwandeln',
				txConfirm: {
					title: 'Umwandlung in Multisig-Konto bestätigen',
					total: 'Insgesamt'
				},
				warning: 'Das Multisig-Konto ist selbst in der Liste der Mitsignierer. Das bedeutet, dass über das Vermögen auf diesem Konto nicht mehr verfügt werden kann. Es ist höchstwahrscheinlich, dass du das <b>NICHT</b> tun möchtest.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Multisig-Transaktion signieren',
				original: {
					from: 'Multisig-Konto',
					to: 'Empfänger',
					amount: 'Betrag',
					fee: 'Gebühr',
					deadline: 'Frist'
				},
				multisigFees: 'Signierungs-Gebühr',
				multisigTotal: 'Insgesamt',
				sender: 'Mitsignierer',
				passwordValidation: 'Das Passwort darf nicht leer sein',
				sending: 'Sende...',
				txConfirm: {
					title: 'Multisig-Transaktion bestätigen',
					message: 'Nachricht',
					encrypted: 'Nachricht ist verschlüsselt',
					noMessage: 'Keine Nachricht',

				}
			},
			sendNem: {
				title: 'XEM senden',
				sender: 'Absender',
				thisAccount: 'Dieses Konto',
				labelDesc: 'Die Bezeichnung des Kontos ist {{1}}',
				nullLabelDesc: 'Dieses Konto hat keine Bezeichnung',
				amount: 'Betrag',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Adresse oder Bezeichnung des Empfängerkontos',
				recipientValidation: 'Adressen müssen eine Länge von 40 Zeichen (ohne Bindestriche) haben',
				message: 'Nachricht',
				encrypt: 'Nachricht verschlüsseln',
				sending: 'Sende...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Transaktion bestätigen',
					amount: 'Betrag',
					to: 'An',
					total: 'Insgesamt',
					message: 'Nachricht',
					encrypted: 'Nachricht ist verschlüsselt',
					noMessage: 'Keine Nachricht',
					confirm: 'Bestätigen',
					sending: 'Sende...'
				},
				notBootedWarning: {
					title: 'NIS wurde noch nicht gebootet!',
					message: 'NIS muss gebootet werden, bevor Transaktionen gesendet werden können!'
				},
				bootingWarning: {
					title: 'NIS wird gebootet',
					message: 'Bitte warte bis der Bootprozess abgeschlossen ist, bevor Du eine Transaktion sendest.'
				},
				loadingWarning: {
					title: 'Datenbank wird geladen'
				},

			},
			clientInfo: {
				title: 'Software Informationen',
				ncc: 'NEM Community Client (NCC)',
				signer: 'Unterzeichner:',
				remoteServer: 'Verbundener NIS:',
				local: 'Lokal',
				nis: 'NEM Infrastructure Server (NIS)',
				sync: 'Synchron',
				notSync: 'Nicht synchron',
				notConnected: 'Nicht verbunden mit der NEM Cloud',
				loading: 'Lade...'
			},
			transactionDetails: {
				title: 'Transaktionsdetails',
				id: 'ID',
				hash: 'Hash',
				type: 'Transaktionstyp',
				direction: 'Transaktionsrichtung',
				pending: 'Ausstehend',
				outgoing: 'Ausgehend',
				incoming: 'Eingehend',
				self: 'Selbst',
				sender: 'Absender',
				multisigAccount: 'Multisig-Konto',
				issuer: 'Initiator',
				recipient: 'Empfänger',
				remote: 'Remote',
				multisigMessage: 'Vorhandene Signaturen',
				message: 'Nachricht',
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				time: 'Zeitpunkt',
				confirmations: 'Bestätigungen',
				confirmationsUnknown: 'Unbekannt',
				amount: 'Betrag',
				multiplier: 'Multiplier',
				innerFee: 'Gebühr',
				multisigFees: 'Signierungs-Gebühren',
				cosignatory: 'Mitsignierer',
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
				title: 'Kontodetails',
				label: 'Eigene Bezeichnung',
				noLabel: 'Keine Bezeichnung',
				add: 'Zum Adressbuch hinzufügen',
				remove: 'Vom Adressbuch entfernen',
				balance: 'Kontostand',
				vested: 'Für Ernte verwendbarer Anteil',
				importance: 'Wichtigkeit',
				publicKey: 'Öffentlicher Schlüssel',
				noPublicKey: 'Öffentlicher Schlüssel unbekannt',
				harvestedBlocks: 'Geerntete Böcke'
			},
			bootLocalNode: {
				title: 'NIS booten',
				account: 'Adresse des Kontos, mit dem NIS gebootet werden soll',
				noLabel: '<span class=\'null\'><Keine Bezeichnung></span>',
				wallet: 'Zugehörige Brieftasche',
				node: 'Name des NIS',
				boot: 'Booten',
				booting: 'Wird gebootet...',
				warning: 'Warnung',
				warningText: 'Du versucht NIS zu booten <u>{{2}}</u><br/><br/>Ein Remote-NIS kann jedoch nicht über NCC gebootet werden.',
				warningStatement: 'Du hast Auto-boot aktiviert und verwendest gerade einen Remote-NIS {{3}}.<br/><br/>Ein Remote-NIS kann jedoch nicht über NCC gebootet werden.',
				warningQuestion: 'Bist du sicher, dass du den NIS <u>{{3}}</u> mit dem privaten Schlüssel des Kontos {{1}} ({{2}} XEM) booten möchtest?<br><br>Dadurch wird der <span class="sublabelWarning">private Schlüssel</span> des Kontos an diesen NIS übertragen: <u>{{3}}</u>. Es wird empfohlen, NIS nur mit leeren Konten zu booten.'
			},
			closeWallet: {
				title: 'Brieftasche schließen',
				message: 'Bist Du sicher, dass Du die Brieftasche schließen und zurück zur Startseite wechseln möchtest?'
			},
			createAccount: {
				title: 'Neues Konto anlegen',
				label: 'Eigene Bezeichnung',
				wallet: 'Zugehörige Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde angelegt!',
				create: 'Anlegen'
			},
			showPrivateKey: {
				title: 'PRIVATEN Schlüssel des Kontos anzeigen',
				message: 'Dies wird den privaten Schlüssel des Kontos anzeigen. Falls Schadsoftware (Viren, Trojaner etc.) auf dem System ist, könnte dies ein Sicherheitsrisiko darstellen. Trotzdem fortfahren?',
				publicKey: 'Öffentlicher Schlüssel',
				privateKey: 'Privater Schlüssel',
				show: 'Schlüssel anzeigen'
			},
			showRemotePrivateKey: {
				title: 'PRIVATEN Schlüssel des Kontos für die delegierte Ernte anzeigen',
				message: 'Dies wird den privaten Schlüssel des Kontos für die delegierte Ernte anzeigen. Falls Schadsoftware (Viren, Trojaner etc.) auf dem System ist, könnte dies ein Sicherheitsrisiko darstellen. Trotzdem fortfahren?',

			},
			addAccount: {
				title: 'Ein existierendes Konto hinzufügen',
				privateKey: 'Privater Schlüssel des Kontos',
				wallet: 'Zugehörige Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde zur Brieftasche hinzugefügt!',
				add: 'Hinzufügen',
				label: 'Eigene Bezeichnung'
			},
			setPrimary: {
				title: 'Hauptkonto festlegen',
				account: 'Adresse des Kontos, welches das Hauptkonto werden soll',
				noLabel: '<span class=\'null\'><Keine Bezeichnung></span>',
				wallet: 'Zugehörige Brieftasche',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde als Hauptkonto festgelegt!',
				set: 'Als Hauptkonto festlegen'
			},
			changeWalletName: {
				title: 'Namen der Brieftasche ändern',
				wallet: 'Aktueller Name der Brieftasche',
				newName: 'Neuer Name der Brieftasche',
				successMessage: 'Der Name der Brieftasche wurde erfolgreich von <em>{{1}}</em> in <em>{{2}}</em> geändert.',
				change: 'Ändern'
			},
			changeWalletPassword: {
				title: 'Passwort der Brieftasche ändern',
				wallet: 'Brieftasche',
				password: 'Aktuelles Passwort',
				newPassword: 'Neues Passwort',
				confirmPassword: 'Neues Passwort bestätigen',
				successMessage: 'Das Passwort der Brieftasche wurde erfolgreich geändert',
				change: 'Ändern',
				passwordNotMatchTitle: 'Fehler!',
				passwordNotMatchMessage: 'Passwort und Passwortbestätigung sind verschieden. Bitte gib das neue Passwort beide Male richtig ein.'
			},
			changeAccountLabel: {
				title: 'Bezeichnung des Kontos ändern',
				label: 'Neue Bezeichnung des Kontos',
				wallet: 'Zugehörige Brieftasche',
				successMessage: 'Das Konto {{1}} hat jetzt die Bezeichnung {{2}}',
				change: 'Ändern'
			},
			removeAccount: {
				title: 'Konto entfernen',
				label: 'Bezeichnung des Kontos',
				wallet: 'Zugehörige Brieftasche',
				warning: 'Stelle bitte sicher, dass das Konto leer ist, bevor du es entfernst. Ohne Backup des privaten Schlüssels ist der Betrag sonst unwiederbringlich verloren.',
				successMessage: 'Das Konto {{1}} {{#2}}({{2}}){{/2}} wurde entfernt!',
				remove: 'Entfernen'
			},
			nisUnavailable: {
				title: 'NIS nicht verfügbar',
				message: 'Nicht verbunden mit NEM Infrastructure Server (NIS), warte auf die Verbindung...'
			},
			shutdown: {
				title: 'Programm schließen',
				message: 'Bist Du sicher, dass Du den NEM Community Client schließen möchtest?'
			},
			activateDelegated: {
				title: 'Delegierte Ernte freischalten',
				wallet: 'Zugehörige Brieftasche',
				activate: 'Freischalten',
				warningText: 'Das Freischalten der delegierten Ernte dauert ca. 6 Stunden (360 Blöcke) und kostet eine Gebühr. Nachdem die delegierte Ernte freigeschaltet ist, wird sie nicht automatisch gestartet!',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Delegierte Ernte deaktivieren',
				wallet: 'Zugehörige Brieftasche',
				deactivate: 'Deaktivieren',
				warningText: 'Die Deaktivierung der delegierten Ernte dauert ca. 6 Stunden (360 Blöcke) und kostet eine Gebühr.'
			},
			startRemote: {
				title: 'Delegierte Ernte starten',
				wallet: 'Zugehörige Brieftasche',
				start: 'Starten'
			},
			stopRemote: {
				title: 'Delegierte Ernte beenden',
				wallet: 'Zugehörige Brieftasche',
				stop: 'Beenden'
			},
			logoutWarning: {
				leavePage: "Du verlässt deine Brieftasche. Bitte beachte, dass der Zugang zu deiner Brieftasche so nicht gesperrt wird und Unbefugte Zugriff erhalten könnten. Um dies zu verhindern, verlasse deine Brieftasche bitte über das Menü in der oberen, rechten Ecke (Brieftasche schließen), bevor du den Tab oder den Browser schließt."
			},
			addContact: {
				title: 'Kontakt hinzufügen',
				add: 'Hinzufügen'
			},
			editContact: {
				title: 'Kontakt bearbeiten',
				saveChanges: 'Änderungen speichern'
			},
			removeContact: {
				title: 'Kontakt entfernen',
				remove: 'Entfernen'
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
			importSuccess: 'Die Brieftasche wurde erfolgreich importiert!',
			nav: {
				start: 'Erste Schritte',
				about: 'Über NEM',
				settings: 'Einstellungen'
			},
			main: {
				leftTitle: 'Neu bei <em>NEM</em>?',
				leftButton: 'Neue Brieftasche anlegen',
				walletNamePlh: 'Name Deiner Brieftasche',
				passwordPlh: 'Passwort wählen',
				confirmPasswordPlh: 'Passwort bestätigen',
				create: 'Anlegen',
				creating: 'Wird angelegt...',
				rightTitle: 'Bist Du schon ein <em>NEM</em>ber?',
				rightButton: 'Öffne Deine Brieftasche',
				openButton: 'Öffnen',
				walletsFound: '<strong>{{1}}</strong> <em>Brieftasche(n)</em> gefunden',
				copyright: 'Fotografie von <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC verschlüsselt Deine Brieftasche',
					description: '<em>Sicherheit</em> ist sehr wichtig, um den Raub von Münzen &amp; Anlagen zu verhindern.'
				}, {
					title: 'Remote NEM Infrastructure Server',
					description: 'Wenn du einen remote NIS benutzt, muss die Blockchain nicht heruntergeladen/synchronisiert werden.',

				}, {
					title: 'Delegierte Ernte',
					description: 'Mit der delegierten Ernte kannst du auf externen Servern ernten und musst deinen eigenen Computer nicht laufen lassen!',

				}, {
					title: 'Multisig-Überweisungen',
					description: 'Schütze deine XEM und Anlagen durch Blockchain-basierte Multisig-Überweisungen.',

				}, {
					title: 'Viele Sprachen verfügbar',
					description: 'NEM ist in vielen Sprachen verfügbar. Siehe "Einstellungen".'
				}, {
					title: 'Fragen oder Feedback?',
					description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | IRC: #ournem | Telegram-Gruppenchats',

				}]
			},
			about: {
				sections: [{
					title: 'Wie funktioniert NCC?',
					paragraphs: [
						'<strong>NCC</strong> ermöglicht Dir den Zugriff auf Anlagen und NEM genauso wie eine herkömmliche Brieftasche. Du kannst',
						'<strong>NCC</strong> braucht Zugang zu einem <strong>NIS</strong> Server, um zu funktionieren. Normalerweise wird der Server lokal betrieben (wird zusammen mit dem <strong>NCC</strong> installiert)',
						'Du kannst auch den Zugang zu einem Remote-<strong>NIS</strong> konfigurieren.'
					],
					listItems: [
						'mehrere Brieftaschen haben',
						'mehrere Konten in jeder Brieftasche haben'
					]
				}, {
					title: 'Was ist &#42;NIS?',
					paragraphs: [
						'Diese Komponente ist dafür zuständig, die <strong>NEM</strong> Cloud am Leben zu halten.',
						'The more <strong>NIS</strong> there are in the network, the better the security.,',
						'<strong>NIS</strong> ist der Zugangspunkt zur <strong>NEM</strong> Cloud.'
					],
					legend: '<strong>&#42;NIS</strong> steht für <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '© Copyright 2014-2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Ungefähr vor {{1}} Tagen',
			lastAccessJustNow: 'Gerade eben',
			lastAccessTooltip: 'Letzter Zugriff war {{1}}',
			primary: 'Hauptkonto',
			primaryShort: 'H',
			noLabel: '<Keine Bezeichnung>',
			copiedToClipboard: 'Die Adresse wurde in die Zwischenablage kopiert!',
			actions: {
				refreshInfo: 'Informationen aktualisieren',
				bootLocalNode: 'NIS booten',
				changeWalletName: 'Namen der Brieftasche ändern',
				changeWalletPassword: 'Passwort der Brieftasche ändern',
				mergeWallets: 'Brieftaschen zusammenführen',
				exportWallet: 'Brieftasche exportieren',
				createAccount: 'Neues Konto anlegen',
				createRealAccountData: 'Daten für ein echtes Konto erzeugen',
				verifyRealAccountData: 'Daten eines echten Kontos verifizieren',
				showPrivateKey: 'PRIVATEN Schlüssel des Kontos anzeigen',
				showRemotePrivateKey: 'PRIVATEN Schlüssel des Kontos für die delegierte Ernte anzeigen',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'Kontodetails anzeigen',
				addAccount: 'Existierendes Konto hinzufügen',
				changeAccountLabel: 'Bezeichnung des Kontos ändern',
				setPrimary: 'Als Hauptkonto festlegen',
				removeAccount: 'Konto entfernen',
				clientInfo: 'Software Informationen',
				closeWallet: 'Brieftasche schließen',
				closeProgram: 'Programm beenden',
				copyClipboard: 'Adresse in die Zwischenablage kopieren',
				copyDisabled: 'Das Kopieren einer Adresse in die Zwischenablage erfordert Adobe Flash',
				convertMultisig: 'Ein anderes Konto in Multisig-Konto konvertieren',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Übersicht',
				'Nachrichten',
				'Adressbuch',
				'Transaktionen',
				'Geerntete Blöcke',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Börse',
				'Neuigkeiten',
				'Anwendungen',
				'Konten',
				'Einstellungen',
				'Programm beenden',
			],
			bootNodeWarning: 'NIS muss gebootet werden, bevor du alle NCC Features verwenden kannst.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Wichtigkeit',
				unknown: 'Unbekannter Status',
				start: 'Ernte starten',
				harvesting: 'Es wird geerntet',
				stop: 'Ernte beenden',
				description: 'Wichtigkeit des Kontos für die NEM Cloud',
				remoteHarvest: {
					title: 'Delegierte Ernte',
					activate: 'Delegierte Ernte freischalten',
					activating: 'Delegierte Ernte wird freigeschaltet...',
					active: 'Delegierte Ernte ist freigeschaltet',
					deactivate: 'Delegierte Ernte deaktivieren',
					deactivating: 'Delegierte Ernte wird deaktiviert...',
					startRemoteHarvesting: 'Delegierte Ernte starten',
					remotelyHarvesting: 'Delegierte Ernte',
					stopRemoteHarvesting: 'Delegierte Ernte beenden',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Letzte Transaktionen',
				sendNem: 'XEM senden',
				signMultisig: 'Signieren',
				balance: 'Kontostand',
				loading: 'Lade Kontostand...',
				accountCosignatories: 'Multisig-Konto',
				accountCosignatoriesView: 'Mitsignierer anzeigen',
				vestedBalance: 'Für Ernte verwendbarer Anteil',
				syncStatus: '(Block {{1}}{{#2}} : etwa {{3}} Tage im Rückstand{{/2}})',
				notSynced: 'könnte falsch sein, NIS ist nicht synchron',
				unknown: 'unbekannt',
				columns: [
					'',
					'Zeitpunkt',
					'Absender/Empfänger',
					'Nachricht',
					'',
					'Details',
					'Bestätigungen',
					'Gebühr',
					'Betrag'
				],
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				view: 'Ansehen',
				confirmationsUnknown: 'Unbekannt',
				pending: 'Ausstehend',
				seeAll: 'Alle Transaktionen ansehen',
				noTransactions: 'Es wurden noch keine Transaktionen ausgeführt'
			},
			nemValue: {
				title: 'XEM Statistiken'
			},
			messages: {
				titleTooltip: 'Nachrichten'
			},
			news: {
				titleTooltip: 'Neuigkeiten'
			},
			notAvailable: 'Noch nicht verfügbar im Beta Release'
		},
		transactions: {
			title: 'Transaktionen',
			sendNem: 'XEM senden',
			balance: 'Kontostand',
			filters: {
				confirmed: 'Bestätigt',
				unconfirmed: 'Ausstehend',
				incoming: 'Eingehend',
				outgoing: 'Ausgehend'
			},
			table: {
				columns: [
					'',
					'Zeitpunkt',
					'Absender/Empfänger',
					'Nachricht',
					'',
					'Details',
					'Bestätigungen',
					'Gebühr',
					'Betrag'
				],
				noMessage: 'Keine Nachricht',
				encrypted: 'Nachricht ist verschlüsselt',
				view: 'Ansehen',
				confirmationsUnknown: 'Unbekannt',
				pending: 'Ausstehend',
				noTransactions: 'Es wurden noch keine Transaktionen ausgeführt',
				loading: 'Lade weitere Transaktionen...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Kontostand',
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
			title: 'Geerntete Blöcke',
			feeEarned: 'Aus den letzten 25 geernteten Blöcken erhaltene Gebühren',
			unknown: 'Unbekannt',
			table: {
				columns: [
					'Block',
					'Zeitpunkt',
					'Schwierigkeitsgrad',
					'Gebühr'
				],
				noBlocks: 'Noch keine Blöcke geerntet',
				loading: 'Lade weitere geerntete Blöcke...'
			},
			harvesting: {
				unknown: 'Unbekannter Status',
				start: 'Ernte starten',
				harvesting: 'Ernte',
				stop: 'Ernte beenden',
				remoteHarvest: {
					startRemoteHarvesting: 'Delegierte Ernte starten',
					stopRemoteHarvesting: 'Delegierte Ernte beenden'
				}
			}
		},
		addressBook: {
			title: 'Adressbuch',
			addContact: 'Kontakt hinzufügen',
			table: {
				columns: [
					'Adresse des Kontakts',
					'Eigene Bezeichnung',
					'Öffentliche Bezeichnung'
				],
				noContacts: 'Keine Kontakte im Adressbuch vorhanden'
			},
			noLabel: 'Keine Bezeichnung',
			sendNem: 'XEM senden',
			edit: 'Bearbeiten',
			remove: 'Entfernen'
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
			title: 'Einstellungen',
			settings: [{
				name: 'Sprache'
			}],
			save: 'Änderungen speichern',
			saveSuccess: 'Die Änderungen wurden erfolgreich gespeichert'
		}
	}
});