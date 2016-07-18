define({
	id: 'bg',
	name: 'Български',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'Файлът на портфейла не съществува',
			102: 'Портфейлът не е създаден.',
			103: 'Файлът на портфейла е повреден.Моля възстановете файла от копие което сте запазили при създаването на портфейла.',
			104: 'Въведената парола е грешна.',
			105: 'Не е предоставена парола за портфейла.',
			106: 'Преди да започнете работа с портфейла се убедете че той е отворен. За да получите достъп до портфейла въведете паролата за този портфейл.',
			107: 'Портфейла не съдържа този акаунт.',
			108: 'Акаунта не може да бъде премахнат. По всяка вероятност това е така защото акаунта има баланс повече от 0 XEM или акаунта ,който се опитвате да премахнете е главен акаунт. ',
			109: 'Друг портфейл със същото име вече съществува. Моля  изберете друго име на портфейла.',
			110: 'Портфейла вече съдържа този акаунт.',
			111: 'Името на портфейла е директория.',
			112: 'Типът на файла на портфейла е некоректен.',
			113: 'Портфейла не може да бъде изтрит.',
			121: 'Адрес бук файла не съществува.',
			122: 'Адрес букът не беше създаден.',
			123: 'Адрес бук файлът е повреден.Моля възстановете вашият адрес бук от резервното копие.',
			124: 'Предоставената парола на адрес бука не е правилна.',
			125: 'Не е предоставена парола на адрес бука.',
			127: 'Адрес бука не съдържа този адрес.',
			128: 'Предоставения адрес е невалиден',
			129: 'Друг адрес бук със същото име вече съществува.Моля изберете друго име на адрес бука.',
			130: 'Адрес бука вече съдържа този адрес.',
			131: 'Името на адрес бука е директория.',
			132: 'Типът на адрес бук файла е некоректен.',
			133: 'Адрес букът не може да бъде изтрит.',
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
			202: 'Криптирано съобщение не може да бъде изпратено понеже получателя до сега не е извършил нито една транзакция и няма публичен ключ.',
			203: 'Акаунта не може да бъде преобразуван защото не са известни всички косигнатури.Те трябва да са или в същия портфейл или да са направили поне една транзакция.',
			305: 'NEM Infrastructure Server е недостъпен.Опитайте да рестартирате NEM програмата.Ако ползвате отдалечен NIS,проверете вашият конфигуриран хост за правописни грешки или ползвайте друг отдалечен NIS.',
			306: 'Възникна непредвидена грешка.Извиняваме се за това ,опитайте отново може това да помогне.В противен случай се обърнете за помощ към NEM NIS/NCC community.',
			400: 'Някой параметри липсват или са некоректни.',
			401: 'Тази операция не може да бъде завършена защото може да компрометира частният ви ключ като го изпрати до отдалечения NIS',
			404: 'Търсеният ресурс не може да бъде намерен.',
			500: 'Възникна грешка, която не е предвидена от разработчиците. Извиняваме се за това, може би повторен опит може да помогне. В противен случай се обърнете за помощ към NEM NIS/NCC community.',
			600: 'За получаване и изпращане на транзакции NEM Infrastructure Server (NIS) сървъра трябва да бъде рестартиран.Моля използвайте менюто на NCC за рестартиране на локалния възел.',
			601: 'NEM Infrastructure Server (NIS) възела е вече стартиран.',
			602: 'Почти е готово. NEM Infrastructure Server понастоящем зарежда блоковете.\nПортфейла ще функционира когато db се зареди напълно.',
			699: 'Максималния брой на генериращите адреси позволени от сървъра беше превишен.',
			700: 'Предоставения акаунт не удовлетворява основните критерии за генерация.Основно това е свързано с количеството XEM в сметката.Генерацията започва поне с 10000 утвърдени XEM.',
			901: 'Възникна грешка при преминаване в режим офлайн.',
			1000: 'Частният ключ и публичният ключ ,който въведохте са разменени.',
			1001: 'Публичният ключ и адресът ,който въведохте са разменени.',
			1002: 'Адресът не принадлежи към основната мрежа',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Предоставеният срок е в миналото. Срокът трябва да бъде предоставен в рамките на 1-дневен период.',
			1204: 'Предоставеният срок е твърде далеч в бъдещето. Срокът трябва да бъде в рамките на еднодневен период от време.',
			1205: 'Вашият акаунт няма правилния баланс за да се извърши тази транзакция. ',
			1206: 'Предоставеното съобщение е прекалено голямо за да бъде изпратено.Моля опитайте да съкратите дължината на съобщението ,което искате да изпратите.',
			1207: 'Транзакцията вече съществува в базата данни или в листа на непотвърдените транзакции.',
			1208: 'Подписът на сделката не може да бъде проверен.',
			1209: 'Времевата отметка на транзакцията е много далеч в миналото.',
			1210: 'Времевата отметка на транзакцията е много далеч в бъдещето.',
			1219: 'Транзакцията беше отхвърлена защото кеша на транзакциите е препълнен.По голямата такса увеличава шанса транзакцията да бъде приета.',
			1262: 'Делегирания генериращ акаунт няма нулев баланс и не може да бъде използван.',
			1263: 'Важният трансфер е отхвърлен.Вече съществува чакаща важна трансфер операция.',
			1264: 'Делегираното генериране е вече активно.',
			1265: 'Делегираното генериране НЕ е активно.Не може да се деактивира.',
			1266: 'Важната трансфер транзакция (делегирано генериране)е в конфликт със съществуващата транзакция.',
			1271: 'Мултисигнатурния подпис на транзакцията е отхвърлен.Този акаунт не е косигнатурен на мултисигнатурния акаунт.',
			1273: 'Мултисигнатурния подпис на транзакцията е отхвърлен.Асоциираната мултисигнатурна транзакция е неизвестна за NEM мрежата.',
			1274: 'Транзакцията не е позволена за мултисигнатурен акаунт.',
			1275: 'Модификацията на мултисигнатурния акаунт е отхвърлена.Един от добавените акаунти е вече косигнатурен.',
			1321: 'Неизвестен акаунт. Акаунта трябва да е част от поне една транзакция (входяща или изходяща) за да бъде разпознат от мрежата.',
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
			success: 'Успешно',
			unknown: 'Неизвестен статус',
			unknownMessage: 'Ncc не може да получи отговор по временни причини. Транзакцията може да е изпратена в мрежата.<br /><br />Моля проверете транзакцията преди да опитате да я извършите отново.',
			appStatus: {
				nccUnknown: 'NCC статуса е неизвестен',
				nccUnavailable: 'NCC е недостъпен',
				nccStarting: 'NCC стартира...',
				nisUnknown: 'NIS статуса е неизвестен',
				nisUnavailable: 'NIS е недостъпен',
				nisStarting: 'NIS стартира...',
				notBooted: 'NIS трябва да бъде презареден. Моля отворете портфейла и презаредете локалния възел чрез изплуващия прозорец или конфигурирайте ауто зареждащите настройки',
				loading: 'Зареждане на блоковете от db до блок: ',
				booting: 'Зарежда NIS...',
				nisInfoNotAvailable: 'NIS инфо не е все още на разположение.Опитвам се да получа отново NIS инфо...',
				synchronizing: 'NIS се синхронизира. В блок {{1}}, около {{2}} назад.',
				daysBehind: {
					0: 'по малко от 1 ден',
					1: '1 ден',
					many: '{{1}} дни'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS е синхронизиран!',
				noRemoteNisAvailable: 'Не е намерен отдалечен NIS в мрежата,изключен от интернет?'
			},
			addressBook: 'Адрес бук',
			password: 'Парола',
			passwordValidation: 'Паролата не трябва да е празна',
			address: 'Адрес',
			privateLabel: 'Частна маркировка',
			publicLabel: 'Публична маркировка',
			noCharge: 'Този акаунт <b>Няма</b> да бъде обложен с никакви такси, мултисигнатурният акаунт ги покрива.',
			fee: 'Такса',
			multisigFee: 'Мултисигнатурна такса',
			useMinimumFee: 'Ползвай минималната такса',
			feeValidation: 'Таксата не трябва да бъде по малка от минималната такса',
			justUse: 'Просто използвайте',
			dueBy: 'Време до края',
			minutes: 'минута(и)',
			hours: 'час(а)',
			hoursDue: 'Време до края (часове)',
			hoursDueExplanation: 'Ако транзакцията не се включи до времето оставащо до края и тя ще бъде отхвърлена.',
			amount: 'Сума',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Затвори',
			saveButton: 'Запази',
			cancelButton: 'Отмени',
			sendButton: 'Изпрати',
			account: 'Акаунт',
			thisAccount: 'Този акаунт',
			warning: 'Предупреждение',
			newBuild: 'НОВ РЕЛИЙЗ',
			newBuildNumber: 'Има нов релийз {{1}} наличен за даунлоуд. Провери <a class=\"hyperlink--default\", href=\"http://blog.nem.io\">blog.nem.io</a> за детайли.',

		},
		transactionTypes: {
			20: 'ПРЕХВЪРЛИ ТРАНЗАКЦИЯТА',
			21: 'ВАЖНО ПРЕХВЪРЛЯНЕ',
			22: 'МОДИФИКАЦИЯ НА МУЛТИСИГНАТУРНИЯ АКАУНТ',
			23: 'ОСИГУРЯВАНЕ NAMESPACE',
			24: 'MOSAIC СЪЗДАВАНЕ',
			25: 'MOSAIC ДОСТАВКА',
			40: 'МУЛТИСИГНАТУРЕН ПОДПИС',
			50: 'МУЛТИСИГНАТУРНА ТРАНЗАКЦИЯ',
			51: 'МУЛТИСИГНАТУРНА ТРАНЗАКЦИЯ',
			52: 'МУЛТИСИГНАТУРНА ТРАНЗАКЦИЯ',
			53: 'МУЛТИСИГНАТУРНА ТРАНЗАКЦИЯ',
			54: 'МУЛТИСИГНАТУРНА ТРАНЗАКЦИЯ',
			55: 'МУЛТИСИГНАТУРНА ТРАНЗАКЦИЯ',

		},
		Validity: {
			GOOD_TILL_CANCELLED: 'Good till cancelled',
			HOURS: 'Време до края (часове)'
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
			3: 'Стоп',
			4: 'Peg'
		},
		transactionDirections: {
			pending: 'Чакаща транзакция',
			outgoing: 'Изходяща транзакция',
			incoming: 'Входяща транзакция',
			self: 'Собственна транзакция',
			importance: 'Важна транзакция',
			modification: 'Сумарна Модификация на Мултисигнатурата',
			provision: 'Осигуряване Namespace',
			mosaicCreation: 'Mosaic Създаване',
			mosaicSupply: 'Mosaic Доставка'
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'Грешка {{1}}'
			},
			yikes: {
				title: 'Олеле!',
				caption: 'Инфо код {{1}}'
			},
			confirmDefault: {
				yes: 'Да',
				no: 'Не'
			},
			initialBackup: {
				title: 'Добре дошли в NEM',
				content: 'Вие може да създадете бекъп на портфейла си от менюто в горния ляв ъгъл.'
			},
			settings: {
				title: 'Настройки',
				language: {
					label: 'Език'
				},
				remoteServer: {
					tabTitle: 'Отдалечен сървър',
					protocol: 'Протокол',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Хост',
					port: 'Порт',
					defaultPort: 'Използвайте порта по подразбиране.'
				},
				autoBoot: {
					tabTitle: 'Авто зареждане',
					name: 'Име на възела',
					primaryAccount: 'Главен Акаунт',
					auto: 'Авто зареждане когато се отвори портфейла'
				},
				save: 'Запази',
				saveSuccess: 'Настройките бяха успешно запазени'
			},
			signToken: {
				title: 'Подпиши символите използвайки акаунта',
				label: 'Символи (url, string, каквото и да е)',
				signature: 'Подписани символи',
				sign: 'Подпиши'
			},
			multisig: {
				title: 'Превърни акаунта в мултисигнатурен',
				multisigAccount: 'Мултисигнатурен акаунт',
				cosignatories: 'Косигнатурни адреси',
				labelDesc: 'Този акаунт е маркиран като {{1}}',
				nullLabelDesc: 'Този акаунт няма маркировка',
				addCosignatory: '+ Добави косигнатура',
				convert: 'Конвертирай',
				txConfirm: {
					title: 'Потвърди Преобразуването в Мултисигнатурен Акаунт',
					total: 'Общо'
				},
				warning: 'Мултисигнатурния акаунт е в списъка на косигнатурите.Това ще предизвика блокиране на акаунта и прекъсване досъпа до фонда му.Вие навярно <b>НЕ ИСКАТЕ </b> да направите това.',
				minCosignatoriesDefaultLabel: 'Използвай косигнатурния номер по подразбиране.',
				minCosignatoriesRelativeLabel: 'относителна промяна',
				minCosignatoriesLabel: 'Минимален номер на косигнатурите',
				minCosignatoriesZero: 'Използвайки нула ще доведе всички косигнатури да са необходими.',
				minCosignatoriesOverflow: 'Предоставения номер е по голям от номера на косигнатурите'
			},
			signMultisig: {
				title: 'Подпиши мултисигнатурна транзакция',
				original: {
					from: 'Мултисигнатурен акаунт',
					to: 'Получател',
					amount: 'Сума',
					fee: 'Вътрешна такса',
					deadline: 'Краен срок'
				},
				multisigFees: 'Мултисигнатурна такса',
				multisigTotal: 'Общо',
				sender: 'Косигнатура',
				passwordValidation: 'Паролата не може да бъде празна',
				sending: 'Изпращам...',
				txConfirm: {
					title: 'Потвърди Мултисигнатурната Транзакция',
					message: 'Съобщение',
					encrypted: 'Съобщението е криптирано',
					noMessage: 'Няма съобщение',

				}
			},
			sendNem: {
				title: 'Изпрати XEM',
				sender: 'Изпращач',
				thisAccount: 'Този акаунт',
				labelDesc: 'Този акаунт е маркиран като {{1}}',
				nullLabelDesc: 'Този акаунт не е маркиран',
				amount: 'Сума',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Акаунт на Получателя',
				recipientValidation: 'Акаунт адреса трябва да е 40 символа дълъг като се изключат тиретата',
				message: 'Съобщение',
				encrypt: 'Криптирано съобщение',
				sending: 'Изпращам...',
				successMessage: 'Вашата транзакция беше изпратена успешно! <br><br>Hash на транзакцията: {{1}}',
				txConfirm: {
					title: 'Потвърдете транзакцията',
					amount: 'Сума',
					to: 'До',
					total: 'Общо',
					message: 'Съобщение',
					encrypted: 'Съобщението е криптирано',
					noMessage: 'Без съобщение',
					confirm: 'Потвърди',
					sending: 'Изпращам...'
				},
				notBootedWarning: {
					title: 'Възелът не бе стартиран!',
					message: 'Локалният възел трябва да бъде стартиран преди да можете да изпратите XEM'
				},
				bootingWarning: {
					title: 'Възелът се стартира',
					message: 'Моля почакайте докато възелът се стартира за да изпратите вашата транзакция.'
				},
				loadingWarning: {
					title: 'Зареждане на db'
				},

			},
			clientInfo: {
				title: 'Клиент инфо',
				ncc: 'NEM Community Client - NCC',
				signer: 'Притежател на подписа',
				remoteServer: 'Отдалечен сървър',
				local: 'Локален',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Синхронизиран',
				notSync: 'Не синхронизиран',
				notConnected: 'Не съединен с NEM облака',
				loading: 'Зареждане...'
			},
			transactionDetails: {
				title: 'Детайли на транзакцията',
				id: 'ID',
				hash: 'Hash',
				type: 'Тип на транзакцията',
				direction: 'Посока на Транзакцията',
				pending: 'В очакване',
				outgoing: 'Изходящи',
				incoming: 'Входящи',
				self: 'Собственна',
				sender: 'Изпращач',
				multisigAccount: 'Мултисигнатурен Акаунт',
				issuer: 'Емитент',
				recipient: 'Получател',
				remote: 'Отдалечен',
				multisigMessage: 'Сигнатури на лице',
				message: 'Съобщение',
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				time: 'Време на създаване',
				confirmations: 'Потвърждения',
				confirmationsUnknown: 'Неизвестни',
				amount: 'Сума',
				multiplier: 'Multiplier',
				innerFee: 'Вътрешна такса',
				multisigFees: 'Мултисигнатурни такси',
				cosignatory: 'Косигнатура',
				namespace: 'Namespace',
				rentalFee: 'Такса за наем',
				mosaicName: 'Mosaic Име',
				mosaicQuantity: 'Mosaic quantity',
				mosaicLevy: 'Mosaic levy',
				description: 'Описание',
				propertiesLabel: 'Аксесоари',
				properties: {
					divisibility: 'Делимост',
					initialSupply: 'Initial supply',
					supplyMutable: 'Is supply mutable',
					transferable: 'Може да се прехвърля'
				},
				supplyType: 'Снабдяване тип ',
				supplyAmount: 'Снабдяване количество',

			},
			accountDetails: {
				title: 'Детайли на акаунта',
				label: 'Маркировка',
				noLabel: 'Без маркировка',
				add: 'Прибави в адрес бука',
				remove: 'Премахни от адрес бука',
				balance: 'Баланс',
				vested: 'утвърдени',
				importance: 'Важност',
				publicKey: 'Публичен ключ',
				noPublicKey: 'Няма публичен ключ',
				harvestedBlocks: 'Генерирани блокове'
			},
			bootLocalNode: {
				title: 'Стартирайте локалния възел.',
				account: 'Акаунт за стартиране на локалния възел.',
				noLabel: '<span class=\"null\">&lt;Не маркиран&gt;</span>',
				wallet: 'Портфейл',
				node: 'Име на локалния възел',
				boot: 'Старт',
				booting: 'Стартиране...',
				warning: 'Предупреждение за зареждането на възела',
				warningText: 'Вие се опитвате да рестартирате възела <u>{{2}}</u><br/><br/>Рестартирането на отдалечен възел е по принцип невъзможно от NCC.',
				warningStatement: 'Вие имате аутостартиране зададено ,като истина ,а ползвате отдалечен възел {{3}}.<br/><br/>Рестартирането на отдалечен възел е по принцип невъзможно от NCC.',
				warningQuestion: 'Сигурни ли сте ,че искате да заредите възела <u>{{3}}</u> ползвайки частния ключ на акаунта {{1}} ({{2}} XEM)?<br><br>Това ще разкрие на този акаунт <span class=\"sublabelWarning\">частния ключ</span> във възела: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Затваряне на портфейла',
				message: 'Сигурни ли сте че искате да затворите портфейла и да се върнете на главната страница?'
			},
			createAccount: {
				title: 'Създайте нов акаунт',
				label: 'Частна маркировка',
				wallet: 'Портфейл',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше създаден!',
				create: 'Създай'
			},
			showPrivateKey: {
				title: 'Покажи ЧАСТНИЯТ Ключ на акаунта',
				message: 'Това ще покаже частният ключ на акаунта на екрана ,като текст.В предвид ,че може да имате някъкъв малуер в системата това може да бъде опасна операция.Сигурни ли сте че искате да го направите?',
				publicKey: 'Публичен ключ',
				privateKey: 'Частен ключ',
				show: 'Покажи ключа'
			},
			showRemotePrivateKey: {
				title: 'Покажи ЧАСТНИЯТ Ключ на Отдалечения Акаунт',
				message: 'Това ще покаже частният ключ на отдалечения акаунт на екрана ,като текст.В предвид ,че може да имате някъкъв малуер в системата това може да бъде опасна операция.Сигурни ли сте че искате да го направите?',

			},
			addAccount: {
				title: 'Добавете съществуващ акаунт',
				privateKey: 'Частен ключ на акаунта',
				wallet: 'Портфейл',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше добавен към портфейла!',
				add: 'Добави',
				label: 'Маркировка'
			},
			setPrimary: {
				title: 'Задаване като главен акаунт',
				account: 'Задайте като главен акаунт',
				noLabel: '<span class=\"null\">&lt;Без маркировка&gt;</span>',
				wallet: 'Портфейл',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше зададен като главен!',
				set: 'Задай като главен'
			},
			changeWalletName: {
				title: 'Сменете името на портфейла',
				wallet: 'Настоящо име на портфейла',
				newName: 'Ново име на портфейла',
				successMessage: 'Името на портфейла е успешно сменено от <em>{{1}}</em> на <em>{{2}}</em>',
				change: 'Смени'
			},
			changeWalletPassword: {
				title: 'Сменете паролата на портфейла',
				wallet: 'Портфейл',
				password: 'Текуща парола',
				newPassword: 'Нова парола',
				confirmPassword: 'Повторете новата парола',
				successMessage: 'Паролата на портфейла беше успешно сменена',
				change: 'Смени',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Въведената от вас парола и потвърдената парола не съвпадат.Моля убедете се ,че правилно сте написали новата парола.'
			},
			changeAccountLabel: {
				title: 'Сменете маркировката на акаунта',
				label: 'Маркировка на акаунта',
				wallet: 'Портфейл',
				successMessage: 'Акаунтът {{1}} сега е маркиран като {{2}}',
				change: 'Смени'
			},
			removeAccount: {
				title: 'Премахнете акаунта',
				label: 'Маркировка на акаунта',
				wallet: 'Свързан портфейл',
				warning: 'Моля уверете се че нямате XEM в акаунта преди да го премахнете иначе те ще бъдат изгубени завинаги.',
				successMessage: 'Акаунтът {{1}} {{#2}}({{2}}){{/2}} беше премахнат!',
				remove: 'Премахни'
			},
			nisUnavailable: {
				title: 'NIS е недостъпен',
				message: 'NIS е прекъснат,очакване на включване'
			},
			shutdown: {
				title: 'Затворете програмата',
				message: 'Сигурни ли сте че искате да затворите NEM Community Client?'
			},
			activateDelegated: {
				title: 'Активирайте Делегираното Генериране',
				wallet: 'Портфейл',
				activate: 'Активирай',
				warningText: 'Активирането ще отнеме 6 часа (360 блока). Активирането НЯМА да стартира генерирането автоматично.',
				delegatedAccount: 'Публичен ключ на делегирания акаунт',
				builtIn: 'вграден в портфейла',

			},
			deactivateDelegated: {
				title: 'Деактивирай Делегираното Генериране',
				wallet: 'Портфейл',
				deactivate: 'Деактивирай',
				warningText: 'Деактивирането ще отнеме 6 часа (360 блока).'
			},
			startRemote: {
				title: 'Старт на Делегираното Генериране',
				wallet: 'Портфейл',
				start: 'Старт'
			},
			stopRemote: {
				title: 'Стоп на Делегираното Генериране',
				wallet: 'Портфейл',
				stop: 'Стоп'
			},
			logoutWarning: {
				leavePage: 'Вие напускате вашия портфейл.Запомнете ,че напускайки вашият портфейл по този начин ,някой друг може да има досъп до вашия портфейл от този компютър.За да не се случи това моля излезте от портфейла си ползвайки \"Затвори портфейла\" от падащото меню в горния десен ъгъл преди да затворите таба на браузъра или да станете от компютъра.'
			},
			addContact: {
				title: 'Добави контакт',
				add: 'Добави'
			},
			editContact: {
				title: 'Редактирай контакта',
				saveChanges: 'Запази промените'
			},
			removeContact: {
				title: 'Премахни контакта',
				remove: 'Премахни'
			},
			placeOrder: {
				title: 'Place order',
				cancel: 'Отмени',
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
					stop: 'Стоп',
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
				cancel: 'Отмени',
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
				cancel: 'Отмени',
				editDetails: 'Edit details',
				confirm: 'Потвърди'
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
				cancel: 'Отмени',
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
				address: 'Адрес',
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
				cancel: 'Отмени',
				finish: 'Finish',
				finishing: 'Finishing',

			},
			setXemWithdrawalAccount: {
				title: 'Create XEM Withdrawal Account',
				detailsMessage: 'The new XEM withdrawal account will be associated with your current user details, you can update them before establishing the new withdrawal account.',
				message: 'You are almost there, now you should type in the address of the account that will be used as a withdraw account.',
				createSuccess: 'XEM Withdrawal account created successfully',
				cancel: 'Отмени',
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
				confirm: 'Потвърди',
				message: 'In order to complete this action you should confirm your password.',
				password: 'Парола',
				wallet: 'Портфейл'
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
				cancel: 'Отмени',
				setupWithdraw: 'setup',
				noWithdraw: 'not set yet:'
			},
			orderUpdate: {
				title: 'Order Update',
				buying: 'Buying',
				selling: 'Selling',
				eachFor: 'Each for',
				fee: 'Такса',
				strategy: 'Strategy',
				total: 'Общо',
				ok: 'OK',
				orderDetails: 'Order details',
				price: 'Price',
				amount: 'Сума',
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
				cancel: 'Отмени'
			},
			addFiatAccount: {
				title: 'Add Fiat account',
				message: 'Enter the data about the new Fiat account',
				tradeInstrument: 'Trade instrument',
				accountNumber: 'Account number',
				btcPrivateKey: 'BTC private key',
				correspondingKey: 'corresponding BitId key',
				add: 'Добави',
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
				cancel: 'Отмени',
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
			importSuccess: 'Портфейлът беше успешно импортнат!',
			nav: {
				start: 'Първи стъпки',
				about: 'Относно NEM',
				settings: 'Настройки'
			},
			main: {
				leftTitle: 'Нов за <em>NEM</em>?',
				leftButton: 'Създай нов портфейл',
				walletNamePlh: 'Име на вашия портфейл',
				passwordPlh: 'Парола',
				confirmPasswordPlh: 'Потвърдете паролата',
				create: 'Създай',
				creating: 'Създаване...',
				rightTitle: 'Вече сте <em>NEM</em>ber?',
				rightButton: 'Отворете вашия портфейл',
				openButton: 'Отвори',
				walletsFound: 'Намерени <strong>{{1}}</strong> <em>Портфейл(и)</em>',
				copyright: 'Фотография от <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC криптира твоя портфейл',
					description: '<em>Сигурността на портфейла </em> е най важна за предотвратяването на кражба на XEM монети и активи.'
				}, {
					title: 'Отдалечен NEM Infrastructure Server',
					description: 'Използвайки отдалечен NIS Вие не трябва да синхронизирате блокчейна при стартирането.',

				}, {
					title: 'Делегирано генериране',
					description: 'С делегираното генериране Вие можете да генерирате на отдалечени NIS възли!',

				}, {
					title: 'Мултисигнатурни трансакции',
					description: 'Защитете Вашите ХЕМ и активи чрез ин-блокчейн мулти-сигнатурни транзакции.',

				}, {
					title: 'Поддръжка на роден език',
					description: 'NEM юзър интерфейса поддържа много езици.Виж \"Настройки\" '
				}, {
					title: 'Имаш ли някакви въпроси или коментари ?',
					description: '<a href=\"http://forum.ournem.com\">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

				}]
			},
			about: {
				sections: [{
					title: 'Как работи NCC?',
					paragraphs: [
						'<strong>NCC</strong> предоставя достъп до вашите активи и XEM като обикновен портфейл.Вие можете',
						'<strong>NCC</strong> изисква достъп до <strong>NIS</strong> сървър за да може да работи.Стандартно е да има локален сървър и той трябва да е активен(той се инсталира заедно <strong>NCC</strong>)',
						'Вие също може да конфигурирате достъп до отдалечен <strong>NIS</strong>.'
					],
					listItems: [
						'Да имате няколко портфейла',
						'Да дефинирате няколко акаунта да се съдържат в един портфейл.'
					]
				}, {
					title: 'Какво е &#42;NIS?',
					paragraphs: [
						'Този компонент отговаря за функционирането на <strong>NEM</strong> облака.',
						'Колкото повече <strong>NIS</strong> има в мрежата толкова по добра е сигурността и.,',
						'<strong>NIS</strong> това е точката за достъп за <strong>NEM</strong> облака.'
					],
					legend: '<strong>&#42;NIS</strong> се разшифрова <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Около {{1}} дни назад',
			lastAccessJustNow: 'Точно сега',
			lastAccessTooltip: 'Последният достъп е бил {{1}}',
			primary: 'Главен',
			primaryShort: 'Г',
			noLabel: '<Без маркировка>',
			copiedToClipboard: 'Адресът беше копиран в клипборда!',
			actions: {
				refreshInfo: 'Обновяване на информацията',
				bootLocalNode: 'Стартиране на локалния възел',
				changeWalletName: 'Промяна името на портфейла',
				changeWalletPassword: 'Промяна паролата на портфейла',
				mergeWallets: 'Обединяване на портфейли',
				exportWallet: 'Експорт на портфейла',
				createAccount: 'Създаване на нов акаунт',
				createRealAccountData: 'Създайте данните на реалния акаунт',
				verifyRealAccountData: 'Проверете данните на реалния акаунт',
				showPrivateKey: 'Покажи ЧАСТНИЯТ ключ на акаунта',
				showRemotePrivateKey: 'Покажи ЧАСТНИЯТ ключ на отдалечения акаунт',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'Виж Детайлите на Акаунта',
				addAccount: 'Добавяне на съществуващ акаунт',
				changeAccountLabel: 'Промяна на маркировката на акаунта',
				setPrimary: 'Задай като главен акаунт',
				removeAccount: 'Премахни акаунта',
				clientInfo: 'Информация за клиента',
				closeWallet: 'Затвори портфейла',
				closeProgram: 'Затвори програмата',
				copyClipboard: 'Копирай адреса в клипборда',
				copyDisabled: 'Копирането на аддрес изисква флаш',
				convertMultisig: 'Превърни друг акаунт в мултисигнатурен',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Панел за управление',
				'Съобщения',
				'Адрес Бук',
				'Транзакции',
				'Генерирани блокове',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Asset Exchange',
				'News',
				'Accounts',
				'Settings',
				'Затворете програмата',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'За пълното функциониране на NCC е нужно локалният възел да се рестартира.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Важен резултат',
				unknown: 'Неизвестен статус',
				start: 'Старт на локалното генериране',
				harvesting: 'Генериране',
				stop: 'Стоп на локалното генериране',
				description: 'Важност на акаунта за NEM облака',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Активирайте делегираното генериране',
					activating: 'Активиране делегираното генериране...',
					active: 'Делегираното генериране е активно',
					deactivate: 'Деактивирайте делегираното генериране',
					deactivating: 'Деактивиране делегираното генериране...',
					startRemoteHarvesting: 'Старт на делегираното генериране',
					remotelyHarvesting: 'Отдалечено генериране',
					stopRemoteHarvesting: 'Стоп на делегираното генериране',
					multisigInfo: 'Активацията или деактивацията на делегираното генериране за мултисигнатурния акаунт трябва да се направи от някой от косигнатурните акаунти.',

				}
			},
			transactions: {
				title: 'Скорошни транзакции',
				sendNem: 'Изпрати XEM',
				signMultisig: 'Подпиши',
				balance: 'Текущ баланс',
				loading: 'Зареждане баланса',
				accountCosignatories: 'Мултисигнатурен акаунт',
				accountCosignatoriesView: 'виж косигнатурите',
				vestedBalance: 'Утвърден Баланс',
				syncStatus: '( Блок {{1}}{{#2}} : около {{3}} дена на зад {{/2}})',
				notSynced: 'може да е неточен, NIS не е синхронизиран все още',
				unknown: 'неизвестно',
				columns: [
					'',
					'Време',
					'Изпращач/Получател',
					'Съобщение',
					'',
					'Детайли',
					'Потвърждения',
					'Такса',
					'Сума'
				],
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				view: 'Преглед',
				confirmationsUnknown: 'Неизвестни',
				pending: 'В очакване',
				seeAll: 'Виж всички транзакции',
				noTransactions: 'Не е направена нито една транзакция все още'
			},
			nemValue: {
				title: 'XEM статистически стойности'
			},
			messages: {
				titleTooltip: 'Съобщения'
			},
			news: {
				titleTooltip: 'Новини'
			},
			notAvailable: 'Още е недостъпно в бета версията'
		},
		transactions: {
			title: 'Транзакции',
			sendNem: 'Изпрати XEM',
			balance: 'Текущ баланс',
			filters: {
				confirmed: 'Потвърдени',
				unconfirmed: 'Непотвърдени',
				incoming: 'Входящи',
				outgoing: 'Изходящи'
			},
			table: {
				columns: [
					'',
					'Време',
					'Изпращач/Получател',
					'Съобщение',
					'',
					'Детайли',
					'Потвърждения',
					'Такса',
					'Сума'
				],
				noMessage: 'Няма съобщение',
				encrypted: 'Съобщението е криптирано',
				view: 'Преглед',
				confirmationsUnknown: 'Неизвестни',
				pending: 'В очакване',
				noTransactions: 'Не е направена нито една транзакция все още',
				loading: 'Зареждане на още транзакции...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Текущ баланс',
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
			title: 'Генерирани блокове',
			feeEarned: 'Такси събрани от последните 25 генерирани блока',
			unknown: 'Неизвестно',
			table: {
				columns: [
					'Височина',
					'Време',
					'Блок трудност',
					'Такса'
				],
				noBlocks: 'Няма генерирани блокове все още',
				loading: 'Зареждане на още генерирани блокове'
			},
			harvesting: {
				unknown: 'Неизвестен статус',
				start: 'Старт на локалното генериране ',
				harvesting: 'Генериране',
				stop: 'Стоп на локалното генериране',
				remoteHarvest: {
					startRemoteHarvesting: 'Старт на делегираното генериране',
					stopRemoteHarvesting: 'Стоп на делегираното генериране'
				}
			}
		},
		addressBook: {
			title: 'Адрес бук',
			addContact: 'Добави контакт',
			table: {
				columns: [
					'Адрес на акаунта',
					'Частна маркировка',
					'Публична маркировка'
				],
				noContacts: 'Няма контакти във Вашия адрес бук'
			},
			noLabel: 'Няма маркировка',
			sendNem: 'Изпрати XEM',
			edit: 'Редактирай',
			remove: 'Премахни'
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
				amount: 'Сума',
				price: 'Price',
				time: 'Време',
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
				amount: 'Сума',
				price: 'Price',
				perOne: 'per 1',
				createdOn: 'Created on',
				type: 'Type',
				noOrders: 'You haven\'t placed any orders yet.',
				strategy: 'Strategy',
				remove: 'Премахни'
			},
			graphChart: {
				title: 'Graph Chart',
				step: 'Step',
				steps: {
					fifteenMinutes: '15 minutes',
					oneHour: '1 hour',
					oneDay: '1 ден'
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
					confirmed: 'Потвърдени',
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
				title: 'Настройки',
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
				senderOrRecipient: 'Изпращач/Получател',
				message: 'Съобщение',
				confirmations: 'Потвърждения',
				fee: 'Такса',
				amount: 'Сума',
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
					time: 'Време',
					sender: 'Изпращач',
					sendAmount: 'Sent',
					recipient: 'Получател',
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
			title: 'Настройки',
			settings: [{
				name: 'Език'
			}],
			save: 'Запази промените',
			saveSuccess: 'Настройките бяха успешно запазени'
		}
	}
});