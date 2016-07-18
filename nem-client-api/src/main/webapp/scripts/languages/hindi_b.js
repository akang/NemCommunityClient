define({
	id: 'Hn',
	name: 'हिन्दी (Hindi)',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'वॉलेट फ़ाइल मौजूद नहीं है.',
			102: 'वॉलेट नहीं बनाया गया है.',
			103: 'वॉलेट फ़ाइल अनुपयोगी है. बैकअप फ़ाइल से अपने वॉलेट को ठीक करें.',
			104: 'वॉलेट के लिए प्रदान किया गया पासवर्ड सही नहीं है.',
			105: 'वॉलेट के लिए कोई पासवर्ड प्रदान नहीं किया गया है.',
			106: 'वॉलेट खोलने के बाद हि आप इस्के साथ काम कर सक्ते हैं. वॉलेट का उपयोग करने के लिए आपको पासवर्ड प्रदान  कर्ना हे.',
			107: 'वॉलेट मे अकाउंट शामिल नहीं है.',
			108: 'अकाउंट नहीं हटाया जा सकता हे. यह संभावना है कि अकाउंट खाली नही हे या फिर आप प्राइमरी अकाउंट को हटाने की कोशिश कर रहें हें.',
			109: 'इसी नाम से एक और वॉलेट पहले से ही मौजूद है. एक अन्य नाम चुनें.',
			110: 'अकाउंट पहले से ही इस वॉलेट में हे.',
			111: 'वॉलेट का नाम एक डायरेक्टरी का नाम है.',
			112: 'वॉलेट फाइल का एक्सटेंशन गलत है.',
			113: 'वॉलेट को हटाया नहीं जा सका है.',
			121: 'अड्रेस बुक फ़ाइल मौजूद नहीं है.',
			122: 'अड्रेस बुक नहीं बनाया गया है.',
			123: 'अड्रेस बुक फ़ाइल अनुपयोगी है. एक बैकअप फ़ाइल से अपने अड्रेस बुक की वसूली कीजिए.',
			124: 'अड्रेस बुक के लिए दिया गया पासवर्ड सही नही है.',
			125: 'अड्रेस बुक के लिए कोई पासवर्ड एंटर नही किया गया है.',
			127: 'अड्रेस बुक मे यह अड्रेस शामिल नहीं है.',
			128: 'उपलब्ध कराया गया अड्रेस मान्य नहीं है',
			129: 'ईसी नाम से और एक अड्रेस बुक पहले से ही मौजूद है. एक अन्य नाम का चयन करें.',
			130: 'अड्रेस बुक मे यह अड्रेस पहले से ही शामिल है.',
			131: 'अड्रेस बुक का नाम एक डायरेक्टरी का नाम है.',
			132: 'अड्रेस बुक फाइल का एक्सटेंशन गलत है.',
			133: 'अड्रेस बुक को हटाया नहीं जा सका है.',
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
			202: 'एन्क्रिप्टेड मेसेज नहीं भेजा जा सकता हे क्योंकि रेसिपईयेंट ने अभी तक एक बार भी XEM का ट्रांजैक्शन नही किया है.',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'NEM इन्फ्रास्ट्रक्चर सर्वर ( NIS ) उपलब्ध नहीं है. NEM सॉफ्टवेयर पुनरारंभ करने का प्रयास करें. यदि आप एक Remote NIS का उपयोग कर रहे हैं, तो अपने configured host  में टाइपिंग में हुई त्रुटियों को खोजें, या दूसरे Remote NIS का प्रयोग करें.',
			306: 'एक एरर आ गया हे जिसके बारे में विकास टीम ने नही सोचा था. इस बात के लिए हम माफी चाहते हें, शायद एक बार फिरसे प्रयास करने पर मदद मिल सकती है. अन्यथा, NEM NIS/NCC समुदाय के भीतर एक मुद्दे को खोलने का कष्ट करें.',
			400: 'कुछ पैरामीटर गुम या अवैध है.',
			401: 'यह ऑपरेशन पूरा नहीं किया जा सकता है क्योंकि इससे आपकी Private Key एक Remote NIS को भेजा जाता है(आपकी Private Key इस समय प्रकाशित हो सकती है) जिससे आपके अकाउंट पर खतरा हो सकता है.',
			404: 'अनुरोध किया गया संसाधन नहीं पाया जा सका हे.',
			500: 'एक एरर आ गया हे जिसके बारे में विकास टीम ने नही सोचा था. इस बात के लिए हम माफी चाहते हें, शायद एक बार फिरसे प्रयास करने पर मदद मिल सकती है. अन्यथा, NEM NIS/NCC समुदाय के भीतर एक मुद्दे को खोलने का कष्ट करें.',
			600: 'NCC मे XEM की लेनदेन करने के लिए NIS सर्वर को बूट करने की आवश्यकता हे. लोकल नोड बूट करने के लिए NCC मेनू एंट्री का उपयोग करें.',
			601: 'NIS नोड पहले से बूट हो चुकी हे. NIS बूट करने के लिए एक दूसरा प्रयास संभव नहीं है.',
			602: 'लगभग तैयार...NIS ब्लॉक्स लोड कर रहा है. डेटाबेस केे पूरी तरह से लोड होन केे बाद ही आप वॉलेट का पूरी तरह से इस्तेमाल कर सकते हैं.',
			699: 'सर्वर पर अनुमति हारवेस्टर्स की अधिकतम संख्या तक पहुंच गया है.',
			700: 'प्रदान किया गया अकाउंट हार्वेस्टिंग के लिए बुनियादी मानदंडों को पूरा नहीं करता है. मुख्य रूप से यह अकाउंट के अंदर XEM की राशि से संबंधित है. हार्वेस्टिंग के लिए कम से कम 10 000 XEM की ज़रूरत हे और पहले ट्रांजैक्शन के बाद एक दिन की प्रतीक्षा करनी पड़ती है.',
			901: 'ऑफलाइन मोड की स्थापना करने में त्रुटि आई है.',
			1000: 'आपके द्वारा प्रदान की गई Private Key और Public Key मैच नहीं कर रहीं है.',
			1001: 'आपके द्वारा प्रदान की गई Public key और Address मैच नहीं कर रहीं है.',
			1002: 'यह अड्रेस मुख्य NEM नेटवर्क से संबंधित नहीं है.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'प्रदान की गई समय सीमा अतीत में है. समय सीमा 1 दिन की अवधि के अंदर प्रदान की जानी चाहिए.',
			1204: 'प्रदान की गई समय सीमा भविष्य में बहुत दूर है. समय सीमा 1 दिन की अवधि के अंदर प्रदान की जानी चाहिए.',
			1205: 'Your account does not have the right balance to make this transaction.',
			1206: 'प्रदान की गई मेसेज टेक्स्ट NEM के माध्यम से भेजने के लिए बहुत बड़ी है. कृपया अपने मेसेज की लंबाई कम करने का प्रयास करें.',
			1207: 'ट्रांजैक्शन हैश पहले से ही डेटाबेस या अपुष्ट ट्रांजैक्शन सूची में मौजूद है.',
			1208: 'ट्रांजैक्शन हस्ताक्षर का जांच नही किया जा सका है.',
			1209: 'ट्रांजैक्शन ID का समय बहुत दूर अतीत में हे.',
			1210: 'ट्रांजैक्शन ID का समय बहुत दूर भविष्य में हे.',
			1219: 'ट्रांजैक्शन को अस्वीकार कर दिया गया है क्योंकि ट्रांजैक्शन कैश अनुमति से ज़्यादा भर गया है. एक उच्च फ़ीस ट्रांजैक्शन के स्वीकार होने के मौके बेहतर बनाता है.',
			1262: 'Delegated harvesting account has non zero balance and cannot be used.',
			1263: 'इंपॉर्टेन्स ट्रान्सफर खारिज कर दिया गया है. एक अपूर्ण इंपॉर्टेन्स ट्रान्सफर ऑपरेशन पहले से ही है.',
			1264: 'Delegated harvesting is already active.',
			1265: 'Delegated harvesting is NOT active. Cannot deactivate.',
			1266: 'Importance transfer transaction (delegated harvesting) conflicts with existing transaction.',
			1271: 'Multisig हस्ताक्षर ट्रांजैक्शन को अस्वीकार कर दिया गया है. यह अकाउंट Multisig अकाउंट की cosignatory नहीं है.',
			1273: 'Multisig हस्ताक्षर ट्रांजैक्शन को अस्वीकार कर दिया गया है. एसोसिएटेड Multisig ट्रांजैक्शन NEM नेटवर्क के लिए अज्ञात है.',
			1274: 'Multisig अकाउंट के लिए ट्रांजैक्शन की अनुमति नहीं है.',
			1275: 'Multisig अकाउंट परिवर्तन को खारिज कर दिया गया है. जोड़े गये अकाउंट्स में से एक अकाउंट पहले से ही cosignatory है.',
			1321: 'यह अकाउंट अज्ञात है. नेटवर्क को अकाउंट को पहचानने के लिए अकाउंट में कम से कम एक ट्रांजैक्शन (सेनडर/रेसिपईयेंट) का शामिल होना ज़रूरी होता है.',
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
			success: 'सफलता',
			unknown: 'अज्ञात स्थिति',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCC की स्तिति अग्यात है',
				nccUnavailable: 'NCC उपलब्ध नहीं है',
				nccStarting: 'NCC स्टार्ट हो रहा है...',
				nisUnknown: 'NIS की स्तिति अग्यात है',
				nisUnavailable: 'NIS  उपलब्ध नहीं है',
				nisStarting: 'NIS स्टार्ट हो रहा है...',
				notBooted: 'NIS को बूट करने की आवश्यकता हे. कृपया अपना वॉलेट खोलें और लोकल नोड बूट करें. आप ऑटो-बूट सेट्टिंग का भी प्रयोग कर सकतें हैं.',
				loading: 'डेटाबेस से ब्लॉक्स लोड हो रहें हैं, ब्लॉक: ',
				booting: 'NIS को बूट किया जा रहा है...',
				nisInfoNotAvailable: 'NIS की जानकारी अभी तक उपलब्ध नहीं है. जानकारी प्राप्त करने का प्रयास किया जा रहा है. ...',
				synchronizing: 'NIS सिंक्रनाइज़ हो रहा हे. ब्लॉक {{1}}, स्था. {{2}} पीछे.',
				daysBehind: {
					0: '1 दिन से कम',
					1: '1 दिन',
					many: '{{1}} दिन'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS सिंक्रनाइज़ हो चुकी है!',
				noRemoteNisAvailable: '\'रीमोट NIS\' नेटवर्क में नहीं पाया गया है. क्या आप इंटरनेट से डिस्कनेक्ट हो गये हैं?'
			},
			addressBook: 'अड्रेस बुक',
			password: 'पासवर्ड',
			passwordValidation: 'पासवर्ड खाली नहीं होना चाहिए.',
			address: 'अड्रेस',
			privateLabel: 'प्राइवेट लेबल',
			publicLabel: 'Public label',
			noCharge: 'करेंट अकाउंट से कोई फ़ीस <b> नहीं </ b > लिया जाएगा. Multisig अकाउंट में उन्हें शामिल किया गया है.',
			fee: 'Fee',
			multisigFee: 'Multisig फ़ीस',
			useMinimumFee: 'न्यूनतम फ़ीस का प्रयोग करें.',
			feeValidation: 'फ़ीस \'न्यूनतम फ़ीस\' से कम नहीं होना चाहिए.',
			justUse: 'महज प्रयोग करें',
			dueBy: 'Due by',
			minutes: 'minute(s)',
			hours: 'hour(s)',
			hoursDue: 'Hours due',
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
			cancelButton: 'Cancel',
			sendButton: 'भेजें',
			account: 'अकाउंट',
			thisAccount: 'This account',
			warning: 'Warning',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: 'ट्रान्सफर ट्रांजैक्शन',
			21: 'इंपॉर्टेन्स ट्रान्सफर',
			22: 'Multisig अकाउंट में परिवर्तन',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: 'MULTISIG ट्रांजैक्शन',
			51: 'MULTISIG ट्रांजैक्शन',
			52: 'MULTISIG ट्रांजैक्शन',
			53: 'MULTISIG ट्रांजैक्शन',
			54: 'MULTISIG ट्रांजैक्शन',
			55: 'MULTISIG ट्रांजैक्शन',

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
				caption: 'एरर {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'हाँ',
				no: 'नहीं'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'सेटिंग्स',
				language: {
					label: 'भाषा'
				},
				remoteServer: {
					tabTitle: 'रीमोट सर्वर',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: 'ऑटो-बूट',
					name: 'नोड नेम',
					primaryAccount: 'प्राइमरी अकाउंट',
					auto: 'वॉलेट खोलने पर ऑटो-बूट करें.'
				},
				save: 'Save',
				saveSuccess: 'सेटिंग्स सफलतापूर्वक बचा लिया गया है.'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: 'अकाउंट को Multisig अकाउंट में परिवर्तित करें',
				multisigAccount: 'Multisig अकाउंट',
				cosignatories: 'Cosignatories\' अड्रेसस',
				labelDesc: 'इस अकाउंट का लेबल {{1}} हे',
				nullLabelDesc: 'इस अकाउंट का लेबल मौजूद नही हे',
				addCosignatory: '+ Cosignatory जोड़ें',
				convert: 'परिवर्तित करें',
				txConfirm: {
					title: 'Multisig अकाउंट में परिवर्तन की पुष्टि करें.',
					total: 'Total'
				},
				warning: 'Multisig अकाउंट cosignatories की सूची में है.</b>इससे आपका अकाउंट लॉक हो जाएगा और आप अपने सारे XEM गंवा देंगें. कृपया Multisig अकाउंट को cosignatories की सूची में से हटाए</b>.',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: 'Sign multisig transaction',
				original: {
					from: 'Multisig अकाउंट',
					to: 'रेसिपईयेंट',
					amount: 'अमाउंट',
					fee: 'इनर फ़ीस',
					deadline: 'समय सीमा'
				},
				multisigFees: 'Multisig फ़ीस',
				multisigTotal: 'Total',
				sender: 'Cosignatory',
				passwordValidation: 'पासवर्ड खाली नहीं होना चाहिए.',
				sending: 'भेजा जा रहा है...',
				txConfirm: {
					title: 'Multisig ट्रांजैक्शन की पुष्टि करें',
					message: 'मेसेज',
					encrypted: 'मेसेज एनक्रिपटेड है',
					noMessage: 'नो मेसेज',

				}
			},
			sendNem: {
				title: 'XEM भेजें',
				sender: 'सेनडर',
				thisAccount: 'This account',
				labelDesc: 'इस अकाउंट का लेबल {{1}} हे',
				nullLabelDesc: 'इस अकाउंट का लेबल मौजूद नही हे',
				amount: 'रकम',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'रेसिपईयेंट अकाउंट',
				recipientValidation: 'अकाउंट अड्रेसस \'-\' को छोड़कर 40 चरित्र लंबे होना चाहिए',
				message: 'मेसेज',
				encrypt: 'एन्क्रिप्टेड मेसेज',
				sending: 'भेजा जा रहा है...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'ट्रांजैक्शन की पुष्टि करें',
					amount: 'अमाउंट',
					to: 'To',
					total: 'Total',
					message: 'मेसेज',
					encrypted: 'मेसेज एन्क्रिप्टेड है',
					noMessage: 'नो मेसेज',
					confirm: 'Confirm',
					sending: 'भेजा जा रहा है...'
				},
				notBootedWarning: {
					title: 'लोकल नोड बूट नही हो पाया है!',
					message: 'XEM भेजने के लिए लोकल नोड को बूट करना ज़रूरी है!'
				},
				bootingWarning: {
					title: 'नोड को बूट किया जा रहा है',
					message: 'कृपया ट्रांजैक्शन करने से पहले नोड को बूट होने दें.'
				},
				loadingWarning: {
					title: 'डेटाबेस लोड हो रहा है...'
				},

			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'हस्ताक्षरकर्ता',
				remoteServer: 'रिमोट सर्वर',
				local: 'लोकल',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'सिंक्रनाइज़ हो चुका है',
				notSync: 'सिंक्रनाइज़ नहीं हुआ है',
				notConnected: 'NEM क्लाउड से कनेक्टेड नहीं हे',
				loading: 'Loading...'
			},
			transactionDetails: {
				title: 'ट्रांजैक्शन विवरण',
				id: 'ID',
				hash: 'Hash',
				type: 'ट्रांजैक्शन प्रकार',
				direction: 'Transaction Direction',
				pending: 'Pending',
				outgoing: 'Outgoing',
				incoming: 'Incoming',
				self: 'Self',
				sender: 'Sender',
				multisigAccount: 'Multisig अकाउंट',
				issuer: 'Issuer',
				recipient: 'रेसिपईयेंट',
				remote: 'रीमोट',
				multisigMessage: 'हस्ताक्षर मौजूद',
				message: 'मेसेज',
				noMessage: 'नो मेसेज',
				encrypted: 'मेसेज एन्क्रिप्टेड है',
				time: 'Timestamp',
				confirmations: 'कन्फर्मेशन्स',
				confirmationsUnknown: 'Unknown',
				amount: 'अमाउंट',
				multiplier: 'Multiplier',
				innerFee: 'इनर फ़ीस',
				multisigFees: 'Multisig फ़ीस',
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
				label: 'लेबल',
				noLabel: 'नो लेबल',
				add: 'अड्रेस बुक में जोड़ें',
				remove: 'अड्रेस बुक से हटा दें',
				balance: 'Balance',
				vested: 'vested',
				importance: 'Importance',
				publicKey: 'Public key',
				noPublicKey: 'No public key',
				harvestedBlocks: 'हारवेस्टेड ब्लॉक्स'
			},
			bootLocalNode: {
				title: 'लोकल नोड बूट कीजिए',
				account: 'लोकल नोड बूट करने वाला अकाउंट',
				noLabel: '<span class=\'null\'>&lt;No label&gt;</span>',
				wallet: 'वॉलेट',
				node: 'नोड नाम',
				boot: 'बूट',
				booting: 'बूट हो रहा है...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'वॉलेट बंद करें',
				message: 'क्या आप अपने वॉलेट को बंद करके लैंडिंग पेज पर बापस जाना चाहते हैं?'
			},
			createAccount: {
				title: 'नया अकाउंट बनाएँ',
				label: 'निजी लेबल',
				wallet: 'वॉलेट',
				successMessage: 'अकाउंट {{1}} {{#2}}({{2}}){{/2}} बना दिया गया है!',
				create: 'बनाएँ'
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
				title: 'कोई मौजूदा अकाउंट जोड़ें',
				privateKey: 'अकाउंट का Private Key',
				wallet: 'वॉलेट',
				successMessage: 'अकाउंट {{1}} {{#2}}({{2}}){{/2}} वॉलेट में जोड़ दिया गया है!',
				add: 'जोड़ें',
				label: 'लेबल'
			},
			setPrimary: {
				title: 'सेट प्राइमरी अकाउंट',
				account: 'प्राइमरी स्थापित होने वाला अकाउंट',
				noLabel: '<span class=\'null\'>&lt;No label&gt;</span>',
				wallet: 'वॉलेट',
				successMessage: 'अकाउंट {{1}} {{#2}}({{2}}){{/2}} प्राइमरी सेट हो चुका है!',
				set: 'प्राइमरी सेट करें'
			},
			changeWalletName: {
				title: 'वॉलेट का नाम बदलें',
				wallet: 'मौजूदा वॉलेट का नाम',
				newName: 'नये वॉलेट का नाम',
				successMessage: 'वॉलेट का नाम <em>{{1}}</em> से <em>{{2}}</em> सफलतापूर्वक बदल दिया गया है',
				change: 'बदलें'
			},
			changeWalletPassword: {
				title: 'वॉलेट का पासवर्ड बदलें',
				wallet: 'वॉलेट',
				password: 'मौजूदा पासवर्ड',
				newPassword: 'नया पासवर्ड',
				confirmPassword: 'नए पासवर्ड की पुष्टि करें',
				successMessage: 'वॉलेट के पासवर्ड को सफलतापूर्वक बदल दिया गया है',
				change: 'बदलें',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'आपका प्रवेश किया पासवर्ड और पासवर्ड की पुष्टि मेल नहीं खाते हैं. सही ढंग से अपना नया पासवर्ड टाइप करें.'
			},
			changeAccountLabel: {
				title: 'अकाउंट लेबल बदल',
				label: 'अकाउंट लेबल',
				wallet: 'वॉलेट',
				successMessage: 'अकाउंट {{1}} अब {{2}} के रूप में चिह्नित है',
				change: 'बदलें'
			},
			removeAccount: {
				title: 'Remove account',
				label: 'अकाउंट लेबल',
				wallet: 'वॉलेट',
				warning: 'कृपया हटाने से पहले यह सुनिश्चित करें कि अकाउंट में कोई भी XEM ना हो, अथवा वे हमेशा के लिए खो जाएँगे.',
				successMessage: 'अकाउंट {{1}} {{# 2}} ({{2}}) {{/ 2}} हटा दिया गया है!',
				remove: 'हटाएँ'
			},
			nisUnavailable: {
				title: 'NIS उपलब्ध नहीं है',
				message: 'NIS से कनेक्शन कट गयी है, कनेक्शन के लिए इंतजार हो रही है'
			},
			shutdown: {
				title: 'Close program',
				message: 'क्या आप NEM समुदाय क्लाइंट को बंद करना चाहते हैं?'
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: 'वॉलेट',
				activate: 'सक्रिय करें',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'वॉलेट',
				deactivate: 'निष्क्रिय करें',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'वॉलेट',
				start: 'सक्रिय करें'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'वॉलेट',
				stop: 'निष्क्रिय करें'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Add contact',
				add: 'जोड़ें'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Save changes'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'हटाएँ'
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
			importSuccess: 'वॉलेट को सफलतापूर्वक इम्पोर्ट कर दिया गया है!',
			nav: {
				start: 'Getting Started',
				about: 'About NEM',
				settings: 'सेटिंग्स'
			},
			main: {
				leftTitle: 'क्या आप <em>NEM</em> में नएँ हैं?',
				leftButton: 'नया वॉलेट बनाएँ',
				walletNamePlh: 'अपने वॉलेट का नाम',
				passwordPlh: 'पासवर्ड',
				confirmPasswordPlh: 'पासवर्ड की पुष्टि करें',
				create: 'बनाएँ',
				creating: 'बनाया जा रहा है...',
				rightTitle: 'क्या आप पहले से ही एक <em>NEM</em>ber हैं?',
				rightButton: 'अपना वॉलेट खोलें',
				openButton: 'खोलें',
				walletsFound: 'Found <strong>{{1}}</strong> <em>wallets</em>',
				copyright: 'फोटोग्राफ़ी <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC आपके वॉलेट को एनक्रिप्ट करता है',
					description: 'XEM और असेट्स की चोरी से बचने के लिए <em>सुरक्षा</em> बहुत महत्वपूर्ण है.'
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
					title: 'NCC कैसे काम करता है?',
					paragraphs: [
						'<strong>NCC</strong> एक पारंपरिक वॉलेट की तरह आपके असेट्स और XEM के लिए एक पहुँच प्रदान करता है.',
						'<strong>NCC</strong> को संचालित रहने के लिए एक <strong>NIS</strong> सर्वर तक पहुँच की आवश्यकता होती है. एक स्थानीय सर्वर को हमेशा सक्रिय रहना होता है(यह <strong>NCC</strong> के साथ इनस्टॉल्ड आता है)',
						'आप एक रिमोट <strong>NIS</strong> भी कॉन्फ़िगर कर सकते हैं.'
					],
					listItems: [
						'मल्टिपल वॉलेट्स',
						'एक वॉलेट में मल्टिपल अकाउंट्स को शामिल करने के लिए अकाउंट्स निर्धारित कीजिए'
					]
				}, {
					title: '&#42;NIS क्या है?',
					paragraphs: [
						'यह कॉंपोनेंट <strong>NEM</strong> क्लाउड को जिंदा रखने के लिए जिम्मेदार है.',
						'The more <strong>NIS</strong> there are in the network, the better the security.,',
						'<strong>NEM</strong> क्लाउड की पहुँच बिंदु <strong>NIS</strong> है.'
					],
					legend: '<strong>&#42;NIS</strong> का मतलब <strong>NEM Infrastructure Server</strong> है'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '{{1}} दिन पहले',
			lastAccessJustNow: 'थोड़ी देर पहले',
			lastAccessTooltip: 'पिछला लॉगिन था {{1}}',
			primary: 'प्राइमरी',
			primaryShort: 'P',
			noLabel: '<नो लेबल>',
			copiedToClipboard: 'अड्रेस क्लिपबोर्ड में कॉपी कर दिया गया है!',
			actions: {
				refreshInfo: 'जानकारी ताज़ा करे',
				bootLocalNode: 'लोकल नोड बूट करें',
				changeWalletName: 'वॉलेट का नाम बदलें',
				changeWalletPassword: 'वॉलेट का पासवर्ड बदलें',
				mergeWallets: 'मर्ज वॉलेट्स',
				exportWallet: 'एक्सपोर्ट वॉलेट',
				createAccount: 'नया अकाउंट बनाएँ',
				createRealAccountData: 'नया असली NEM अकाउंट बनाएँ.',
				verifyRealAccountData: 'असली NEM अकाउंट जाँचे.',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'View Account Details',
				addAccount: 'किसी मौजूदा अकाउंट को जोड़ें',
				changeAccountLabel: 'अकाउंट लेबल बदलें',
				setPrimary: 'प्राइमरी अकाउंट के रूप में सेट करें',
				removeAccount: 'Remove Account',
				clientInfo: 'क्लाइंट इन्फो.',
				closeWallet: 'क्लोज़ वॉलेट',
				closeProgram: 'क्लोज़ प्रोग्राम',
				copyClipboard: 'अड्रेस को क्लिपबोर्ड पर कॉपी करें',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'डैशबोर्ड',
				'मेसेजस',
				'अड्रेस बुक',
				'ट्रॅन्सॅक्षन्स',
				'हारवेस्टेड ब्लॉक्स',
				'असेट एक्सचेंज',
				'समाचार',
				'अप्लिकेशन्स',
				'अकाउंट्स',
				'सेटिंग्स',
				'Close Program',
				'Namespaces & Mosaics',
				'Accounts',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: 'NCC की सुविधाओं का पूरी तरह से उपयोग करने के लिए आपको एक लोकल नोड बूट करना होगा.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'इंपॉर्टेन्स स्कोर',
				unknown: 'अज्ञात स्थिति',
				start: 'स्टार्ट हार्वेस्टिंग',
				harvesting: 'हार्वेस्टिंग',
				stop: 'स्टॉप हार्वेस्टिंग',
				description: 'NEM क्लाउड के लिए अकाउंट का महत्व',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'रीमोट हार्वेस्टिंग चल रही है',
					stopRemoteHarvesting: 'Stop delegated harvesting',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'हाल ही में किए गये ट्रॅन्सॅक्षन्स',
				sendNem: 'XEM भेजें',
				signMultisig: 'SIGN',
				balance: 'मौजूदा XEM राशि',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig अकाउंट',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(at block {{1}}{{#2}} : est. {{3}} days behind{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'अज्ञात',
				columns: [
					'',
					'समय',
					'सेनडर/रेसिपईयेंट',
					'मेसेज',
					'',
					'विवरण',
					'कन्फर्मेशन्स',
					'फ़ीस',
					'अमाउंट'
				],
				noMessage: 'नो मेसेज',
				encrypted: 'मेसेज एनक्रिपटेड है',
				view: 'जाँचे',
				confirmationsUnknown: 'Unknown',
				pending: 'पेंडिंग',
				seeAll: 'सभी ट्रॅन्सॅक्षन्स',
				noTransactions: 'अभी तक कोई ट्रॅन्सॅक्षन्स नही किया गया है'
			},
			nemValue: {
				title: 'XEM मूल्य आँकड़े'
			},
			messages: {
				titleTooltip: 'मेसेजस'
			},
			news: {
				titleTooltip: 'समाचार'
			},
			notAvailable: 'बीटा रिलीज में अभी तक उपलब्ध नहीं'
		},
		transactions: {
			title: 'ट्रॅन्सॅक्षन्स',
			sendNem: 'XEM भेजें',
			balance: 'मौजूदा XEM राशि',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: 'Incoming',
				outgoing: 'Outgoing'
			},
			table: {
				columns: [
					'',
					'समय',
					'सेनडर/रेसिपईयेंट',
					'मेसेज',
					'',
					'विवरण',
					'कन्फर्मेशन्स',
					'फ़ीस',
					'अमाउंट'
				],
				noMessage: 'नो मेसेज',
				encrypted: 'मेसेज एनक्रिपटेड है',
				view: 'जाँचे',
				confirmationsUnknown: 'Unknown',
				pending: 'Pending',
				noTransactions: 'अभी तक कोई ट्रॅन्सॅक्षन्स नही किया गया है',
				loading: 'Loading...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'मौजूदा XEM राशि',
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
			title: 'हारवेस्टेड ब्लॉक्स',
			feeEarned: 'पिछले 25 ब्लॉक्स के हारवेस्टेड फ़ीस',
			unknown: 'Unknown',
			table: {
				columns: [
					'Height',
					'Time',
					'Block difficulty',
					'Fee'
				],
				noBlocks: 'नो हारवेस्टेड ब्लॉक्स ',
				loading: 'पुराने हारवेस्टेड ब्लॉक्स'
			},
			harvesting: {
				unknown: 'अज्ञात स्थिति',
				start: 'स्टार्ट लोकल हार्वेस्टिंग',
				harvesting: 'हार्वेस्टिंग',
				stop: 'स्टॉप लोकल हार्वेस्टिंग',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'अड्रेस बुक',
			addContact: 'Add contact',
			table: {
				columns: [
					'अकाउंट अड्रेस',
					'प्राइवेट लेबल',
					'पब्लिक लेबल'
				],
				noContacts: 'आपके अड्रेस बुक में कोई अड्रेस नहीं है'
			},
			noLabel: 'नो लेबल',
			sendNem: 'XEM भेजें',
			edit: 'Edit',
			remove: 'हटाएँ'
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
			title: 'सेटिंग्स',
			settings: [{
				name: 'भाषा'
			}],
			save: 'Save changes',
			saveSuccess: 'सेटिंग्स सफलतापूर्वक बचा लिया गया है'
		}
	}
});