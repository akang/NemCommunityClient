define({
	id: 'jp',
	name: '日本語',
	texts: {
		preferences: {
			thousandSeparator: ' ',
			decimalSeparator: '.'
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'ウォレットが作成できませんでした。',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'ウォレットを開く前に、ウォレットのロックを解いてください. ウォレットにパスワードを入力することでアクセスすることができます。',
			107: 'ウォレットにはこのアカウントはありません。',
			108: 'このアカウントは削除することができません。おそらく、アカウント残高がゼロではないか、そのアカウントがプライマリーアカウント（削除不可なアカウント）だからです。',
			109: '同名のウォレットがすでに存在します。他の名前にしてください。',
			110: 'ウォレットにはこのアカウントはもうすでに存在しています。',
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
			202: '相手が送金及びメッセージを送信されていない為、このメッセージを暗号化して送れない。',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: '開発者が考えられなかったエラーが発生しまして、申し訳ありません。もう一度実行して、問題が再び発生したら場合、NIS/NCCのサイトにエラーリポートを書いてください。',
			400: 'パラメーターがないか間違っている。',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'リクエストされたリソースが見つかれなかった。',
			500: 'Failed to save configuration file.',
			600: 'NCCはNISサーバーがNEMクラウドからトランザクション(取引)履歴を送受信するために起動しておく必要があります。ローカルノードを起動するためにNCCメニューエントリを使用してください。',
			601: 'NISノードはすでに起動しています。NISは複数起動することができません。',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: '入力されたアカウントがハーベストのための基準を満たしていません。その基準はそのアカウントにあるXEMの量が関係しています。ハーベストは少なくとも10000 vested XEMから始めることができます。',
			901: 'オフラインモードに変換する際にエラーが発生しました。',
			1000: '入力したプライベートキーとパブリックキーは合っていません。',
			1001: '入力したパブリックキーとNEMアドレスは合っていません。',
			1002: 'The address does not belong to the main network.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: '提供期限が過ぎています。期限は1日の間です。',
			1204: '提供期限はまだ先です。期間は1日の間です。',
			1205: 'Your account does not have the right balance to make this transaction.',
			1206: '入力されたメッセージテキストは、NEMを経由して送信するには長すぎます。メッセージを短くしてください。',
			1207: 'その取引のハッシュはすでにデータベースの未検証取引の中に存在しています。',
			1208: 'トランザクション(取引)の電子署名の正当性を確認できませんでした。',
			1209: 'トランザクション(取引)IDのタイムスタンプが古すすぎます。',
			1210: 'トランザクション(取引)のタイムスタンプが先すぎます',
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
			1321: '不明なアカウントです。アカウントはNEMクラウド内で共有されている少なくとも1つのトランザクション(取引)に記載されている必要がある。(送信側、受信側どちらでも良い)',
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
			success: '成功!',
			unknown: '不明な状態',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'NCCは状態不明',
				nccUnavailable: 'NCCは無効',
				nccStarting: 'NCC開始中・・・',
				nisUnknown: 'NISは状態不明',
				nisUnavailable: 'NISは無効',
				nisStarting: 'NIS開始中',
				notBooted: 'NISを起動する必要があります。ウオレットを開き、ポップアップダイアログでローカルノードを起動し、またはローカルノードの自動起動設定を行って下さい。',
				loading: 'Loading blocks from db, at block: ',
				booting: 'NIS起動中・・・',
				nisInfoNotAvailable: 'NIS情報はまだ取得不可能。NIS情報を取得しようとしています・・・',
				synchronizing: 'NISはブロック{{1}}を同期中で、約{{2}}個ブロックを遅れています。',
				daysBehind: {
					0: '１日以下',
					1: '１日',
					many: '{{1}}日'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NISは同期されました！',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'パスワード',
			passwordValidation: 'Password must not be blank',
			address: 'アドレス',
			privateLabel: 'プライベートラベル',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			fee: '手数料',
			multisigFee: 'Multisig fee',
			useMinimumFee: 'Use minimum fee',
			feeValidation: 'Fee must not be less than the minimum fee',
			justUse: 'Just use',
			dueBy: 'Due by',
			minutes: 'minute(s)',
			hours: 'hour(s)',
			hoursDue: 'Due by (hours)',
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
			sendButton: '送る',
			account: 'アカウント',
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
			pending: '未処理（未検証）の取引',
			outgoing: '出金',
			incoming: '入金',
			self: 'セルフトランザクション',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'おっと…',
				caption: 'エラー{{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'はい',
				no: 'いいえ'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: '設定',
				language: {
					label: '言語'
				},
				remoteServer: {
					tabTitle: 'リモートサーバー',
					protocol: 'プロトコル',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'ホスト名',
					port: 'ポート番号',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: '自動起動',
					name: 'ノード名',
					primaryAccount: '主要アカウント',
					auto: 'ウォレットを開く時に自動起動'
				},
				save: '保存',
				saveSuccess: '設定は保存されました。'
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
				labelDesc: 'このアカウントのラベルは {{1}}',
				nullLabelDesc: 'このアカウントにラベルはありません。',
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
					to: '受取先',
					amount: '残高',
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
					message: 'メッセージ',
					encrypted: 'メッセージを暗号させた',
					noMessage: 'メッセージなし',

				}
			},
			sendNem: {
				title: 'XEMを送信する',
				sender: '送信元',
				thisAccount: 'This account',
				labelDesc: 'このアカウントのラベルは {{1}}',
				nullLabelDesc: 'このアカウントにラベルはありません。',
				amount: '金額',
				escrow: 'Escrow',
				other: 'Other',
				recipient: '相手のアカウント',
				recipientValidation: 'Account addresses must be 40 character long excluding dashes',
				message: 'メッセージ',
				encrypt: 'メッセージを暗号化する。',
				sending: '送信中…',
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
					title: 'ノードが起動していません!',
					message: 'NEMを送信する前に、ローカルノードを起動する必要があります。'
				},
				bootingWarning: {
					title: 'ノードは起動中',
					message: 'Please wait until booting process is done to send your transaction.'
				},
				loadingWarning: {
					title: 'Loading db'
				},

			},
			clientInfo: {
				title: 'クライアント情報',
				ncc: 'NEM Community Client - NCC',
				signer: '著名者',
				remoteServer: 'リモートサーバー',
				local: 'ローカル',
				nis: 'NEM Infrastructure Server - NIS',
				sync: '同期完了',
				notSync: '同期されていません',
				notConnected: 'NEMクラウドに繋がっていません',
				loading: '読み込み中…'
			},
			transactionDetails: {
				title: 'トランザクション(取引)の詳細',
				id: 'ID',
				hash: 'ハッシュ',
				type: 'トランザクションのタイプ',
				direction: 'トランザクションの方向',
				pending: '処理中',
				outgoing: '送金',
				incoming: '入金',
				self: '自分',
				sender: '送信元',
				multisigAccount: '複数調印のみアカウント',
				issuer: 'Issuer',
				recipient: '受取先',
				remote: 'Remote',
				multisigMessage: '調印あり',
				message: 'メッセージ',
				noMessage: 'メッセージなし',
				encrypted: '暗号化されたメッセージ',
				time: 'タイムスタンプ',
				confirmations: '承認数',
				confirmationsUnknown: '承認数不明',
				amount: '量',
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
				title: 'ローカルノードを起動する',
				account: 'ローカルノードを起動するためのアカウント',
				noLabel: '<span class=\"null\">&lt;ラベルなし&gt;</span>',
				wallet: 'ウォレット',
				node: 'ノード名前',
				boot: '起動',
				booting: '起動中…',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'ウォレットを閉じます',
				message: 'ウォレットを終了して、最初のページに戻りますがよろしいですか？'
			},
			createAccount: {
				title: '新しいアカウントを作成する',
				label: 'プライベートラベル',
				wallet: 'ウォレット',
				successMessage: 'アカウント: {{1}} {{#2}}({{2}}){{/2}} が作成されました。',
				create: '作成'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'パブリックキー',
				privateKey: 'プライベートキー',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: '既存のアカウントを追加します。',
				privateKey: 'アカウントのプライベートキー',
				wallet: 'ウォレット',
				successMessage: 'アカウント: {{1}} {{#2}}({{2}}){{/2}} はウォレットに追加されました!',
				add: '追加',
				label: 'プライベートラベル'
			},
			setPrimary: {
				title: 'プライマリーアカウントを設定',
				account: 'プライマリーとして設定するアカウント',
				noLabel: '<span class=\"null\">&lt;ラベルなし&gt;</span>',
				wallet: 'ウォレット',
				successMessage: 'アカウント: {{1}} {{#2}}({{2}}){{/2}} はプライマリーに設定されました!',
				set: 'プライマリに設定'
			},
			changeWalletName: {
				title: 'ウォレットの名前の変更する',
				wallet: '現在のウォレットの名前',
				newName: '新しいウォレットの名前',
				successMessage: 'ウォレットの名前が <em>{{1}}</em> から <em>{{2}}</em> に変更されました。',
				change: '変更'
			},
			changeWalletPassword: {
				title: 'ウォレットパスワードを変更する',
				wallet: 'ウォレット',
				password: '現在のパスワード',
				newPassword: '新しいパスワード',
				confirmPassword: '新しいパスワードの再入力',
				successMessage: 'ウォレットパスワードを変更しました。',
				change: '変更',
				passwordNotMatchTitle: 'おっと…',
				passwordNotMatchMessage: 'あなたが入力したパスワードが一致しません。 パスワードを再入力してください。'
			},
			changeAccountLabel: {
				title: 'アカウントのラベルを変更する',
				label: 'アカウントラベル',
				wallet: 'ウォレット',
				successMessage: 'アカウント: {{1}} は {{2}} に変更されました。',
				change: '変更'
			},
			removeAccount: {
				title: 'アカウントを削除',
				label: 'アカウントラベル',
				wallet: 'ウォレット',
				warning: 'アカウントを削除する前にXEMが残っていないか確認してください。削除が完了したら、一旦削除したXEMは復元できません。',
				successMessage: 'アカウント: {{1}} {{#2}}({{2}}){{/2}} は削除されました。',
				remove: '削除'
			},
			nisUnavailable: {
				title: 'NISを使用できません。',
				message: 'NISから切断されました。接続を待っています。'
			},
			shutdown: {
				title: 'ウォレットを終了',
				message: 'NEM Community Clientを閉じますか。'
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: 'ウォレット',
				activate: 'Activate',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'ウォレット',
				deactivate: 'Deactivate',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'ウォレット',
				start: '開始'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'ウォレット',
				stop: '停止'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: '新規連絡先',
				add: '追加'
			},
			editContact: {
				title: '連絡先を編集',
				saveChanges: '変更を保存する'
			},
			removeContact: {
				title: '連絡先を削除',
				remove: '削除'
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
			importSuccess: 'ウォレットのインポートに成功しました。',
			nav: {
				start: '始め方',
				about: 'NEMについて',
				settings: '設定'
			},
			main: {
				leftTitle: '<em>NEM</em>は初めてですか?',
				leftButton: '新しいウォレットを作成する',
				walletNamePlh: 'あなたのウォレットの名前',
				passwordPlh: 'パスワード',
				confirmPasswordPlh: 'Confirm password',
				create: '作成',
				creating: 'Creating...',
				rightTitle: 'すでに<em>NEM</em>のアカウントを持っていますか?',
				rightButton: 'ウォレットを開く',
				openButton: '開く',
				walletsFound: ' <em>ウォレット:</em><strong>{{1}}</strong> が見つかりました。',
				copyright: '撮影者：<em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'あなたのウォレットをNCC暗号化する。',
					description: '<em>セキュリティ</em> はあなたのXEMの資産を盗難から守る上で非常に&amp;重要です。 '
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
					title: 'どの様にNCCは動いている?',
					paragraphs: [
						'<strong>NCC</strong> では一般的なウォレットでのNEMやその他の財産へのアクセスができるようになります。',
						'<strong>NCC</strong> サーバーは動作するために <strong>NIS</strong> サーバーへの接続を必要とします。標準ではローカルサーバーを起動します。 (ローカルサーバーは<strong>NCC</strong>と一緒にインストールされています。)',
						'また、遠隔で<strong>NIS</strong>へのアクセスを作成することもできます。.'
					],
					listItems: [
						'複数のウォレットを持っている',
						'複数のウォレットのアカウントを決める'
					]
				}, {
					title: '&#42;NISとは?',
					paragraphs: [
						'このコンポーネント(NEMの部品の1つ) は<strong>NEM</strong> クラウドを維持するものです。',
						'The more <strong>NIS</strong> there are in the network, the better the security.,',
						'<strong>NIS</strong> は <strong>NEM</strong> クラウドにアクセスする際の中継所となります。'
					],
					legend: '<strong>&#42;NIS</strong> は <strong>NEM のインフラとして機能しています。</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '約 {{1}} 日前',
			lastAccessJustNow: '現在',
			lastAccessTooltip: '最後のアクセスは {{1}}',
			primary: '主なウォレット',
			primaryShort: '主',
			noLabel: '<ラベルなし>',
			copiedToClipboard: 'アドレスがクリップボードにコピーされました。',
			actions: {
				refreshInfo: '更新する',
				bootLocalNode: 'ローカルノードを起動する',
				changeWalletName: 'ウォレットの名前を変更する',
				changeWalletPassword: 'ウォレットパスワードを変更する',
				mergeWallets: 'ウォレットを統合する',
				exportWallet: 'ウォレットをバックアップする',
				createAccount: '新しいアカウントを作成する',
				createRealAccountData: '実際のアカウントデータを作成する',
				verifyRealAccountData: '実際のアカウントデータを確認する',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'View Account Details',
				addAccount: '既存のアカウントを追加する',
				changeAccountLabel: 'アカウントラベルを変更する',
				setPrimary: 'プライマリーアカウントに設定する',
				removeAccount: 'アカウントを削除する',
				clientInfo: 'クライアント情報',
				closeWallet: 'ウォレットを閉じる',
				closeProgram: '終了する',
				copyClipboard: 'アドレスをクリップボードにコピーする',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'ダッシュボード',
				'メッセージ',
				'Address Book',
				'トランザクション(取引)',
				'ハーベストされたブロック',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'残高のやりとり',
				'ニュース',
				'アプリケーション',
				'アカウント',
				'設定',
				'終了する',
			],
			bootNodeWarning: 'NCCの全ての機能を利用するためには、ローカルノードを起動する必要があります。'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: '重要なスコア',
				unknown: '不明な状態',
				start: 'ハーベスティングを開始する',
				harvesting: 'ハーベスティング中…',
				stop: 'ハーベスティングを中断する',
				description: 'NEMクラウドのアカウントの重要性',
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
				title: '直近の取引',
				sendNem: 'XEMの送金',
				signMultisig: '調印する',
				balance: '現在の残高',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(現在同期しているブロック: {{1}}{{#2}} 推定で {{3}} 日前の取引{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: '不明',
				columns: [
					'',
					'時間',
					'送信者/受信者',
					'メッセージ',
					'',
					'詳細',
					'承認数',
					'手数料',
					'残高'
				],
				noMessage: 'メッセージはありません',
				encrypted: 'メッセージは暗号化されています。',
				view: '表示',
				confirmationsUnknown: '不明',
				pending: '未処理（未検証）',
				seeAll: 'すべてのトランザクション(取引)を見る',
				noTransactions: 'まだ取引は行われていません。'
			},
			nemValue: {
				title: 'XEMの統計'
			},
			messages: {
				titleTooltip: 'メッセージ'
			},
			news: {
				titleTooltip: 'ニュース'
			},
			notAvailable: 'ベータ版ではまだ利用できません。'
		},
		transactions: {
			title: '取引',
			sendNem: 'XEMを送金する',
			balance: '現在の残高',
			filters: {
				confirmed: '検証済',
				unconfirmed: '未検証',
				incoming: '入金',
				outgoing: '出金'
			},
			table: {
				columns: [
					'',
					'時間',
					'送信者/受信者',
					'メッセージ',
					'',
					'詳細',
					'承認数',
					'手数料',
					'残高'
				],
				noMessage: 'メッセージなし',
				encrypted: 'メッセージを暗号させた',
				view: '提示',
				confirmationsUnknown: '不明',
				pending: '未定',
				noTransactions: 'まだ取引は行われていません。',
				loading: '過去のトランザクションを見る'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: '現在の残高',
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
			title: 'ハーベストされたブロック',
			feeEarned: '現在のブロックから25ブロック前から発生する収入',
			unknown: '不明',
			table: {
				columns: [
					'ブロック番号',
					'時間',
					'Block difficulty',
					'手数料'
				],
				noBlocks: 'ハーベストされたブロックではありません。 ',
				loading: 'ハーベストされたブロックをロード中・・・'
			},
			harvesting: {
				unknown: '不明な状態',
				start: 'ハーベスティングを開始する',
				harvesting: 'ハーベスティング',
				stop: 'ハーベスティングを停止する',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: '連絡先',
			addContact: '新規連絡先',
			table: {
				columns: [
					'NEMアドレス',
					'非公開ラベル',
					'一般公開ラベル'
				],
				noContacts: '連絡先無し'
			},
			noLabel: 'ラベル無し',
			sendNem: 'XEMを送金する',
			edit: '編集',
			remove: '削除'
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
			title: '設定',
			settings: [{
				name: '言語'
			}],
			save: '変更を保存する',
			saveSuccess: '変更の保存に成功しました'
		}
	}
});