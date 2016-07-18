define({
	id: 'vi',
	name: 'Tiếng Việt',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: ','
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Ví của bạn chưa được tạo.',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'Trước khi bạn có thể làm việc với một chiếc ví, nó phải được mở. Để chắc chắn rằng bạn có quyền truy cập vào ví, bạn phải cung cấp mật khẩu cho ví đó.',
			107: 'Ví không chứa tài khoản này',
			108: 'Tài khoản không thể bị xoá. Có vẻ bởi vì tài khoản vẫn còn số dư lón hơn 0 XEM hoặc tài khoản bạn đang cố gắng xoá là tài khoản chính.',
			109: 'Một ví khác có cùng tên đã tồn tại. Hãy chọn một cái tên khác.',
			110: 'Tài khoản này đã có trong ví rồi.',
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
			202: 'Không thể gửi thông điệp mã hoá bởi vì người nhận chưa từng thực hiện một giao dịch trước đây.',
			203: 'The account cannot be converted because not all cosignatories are known. They either need to be in the same wallet or have made at least one transaction.',
			305: 'The NEM Infrastructure Server (NIS) is not available.\n\nTry to restart the NEM software.\n\nIf you are using a remote NIS, check your configured host for typing errors or use another remote NIS.',
			306: 'Một lỗi nằm ngoài dự tính của nhóm phát triển đã xảy ra. Xin lỗi bạn vì điều này, có thể thử lại sẽ có tác dụng. Nếu không, hãy tạo một issue trong cộng đồng NIS/NCC của NEM.',
			400: 'Một tham số nào đó bị thiếu hoặc không hợp lệ.',
			401: 'Tác vụ này không thể hoàn thành vì khoá bí mật có thể sẽ bị lộ khi được gửi tới một NIS từ xa.',
			404: 'Không tìm thấy tài nguyên được yêu cầu.',
			500: 'Lưu file cấu hình thất bại.',
			600: 'NCC yêu cầu máy chủ NIS phải được boot để gửi và nhận các giao dịch từ NEM cloud. Hãy dùng thực đơn của NCC để boot node cục bộ.',
			601: 'NIS node đã được boot rồi. Không thể boot NIS thêm một lần nữa.',
			602: 'Almost ready. NEM Infrastructure Server is currently loading blocks. Wallet will be functional when db is fully loaded.',
			699: 'Maximum number of harvesters allowed on server has been reached.',
			700: 'Tài khoản được cung cấp không thoả mãn các tiêu chí cơ bản để được thu hoạch. Phần lớn liên quan tới lượng XEM có trong tài khoản. Việc thu hoạch có thể bắt đầu với ít nhất 10000 vested XEM.',
			901: 'Đã xảy ra lỗi trong lúc cài đặt chế độ offline.',
			1000: 'Khoá bí mật và khoá công khai mà bạn vừa cung cấp không khớp với nhau.',
			1001: 'Khoá công khai và địa chỉ mà bạn vừa cung cấp không khớp với nhau.',
			1002: 'Địa chỉ không thuộc về mạng lưới chính.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'Deadline được cung cấp đã trôi qua.',
			1204: 'Deadline được cung cấp quá xa trong tương lai.',
			1205: 'Your account does not have the right balance to make this transaction.',
			1206: 'Đoạn thông điệp được cung cấp quá lớn để gửi qua NEM. Hãy cố gắng giảm độ dài của thông điệp mà bạn gửi.',
			1207: 'Hash của giao dịch đã tồn tại trong cơ sở dữ liệu hoặc trong danh sách những giao dịch chưa được xác nhận.',
			1208: 'Không thể xác nhận chữ ký của giao dịch.',
			1209: 'Mốc thời gian của giao dịch quá xa trong quá khứ.',
			1210: 'Mốc thời gian của giao dịch quá xa về tương lai.',
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
			1321: 'Tài khoản không được biết đến. Một tài khoản cần phải tham gia vào ít nhất một giao dịch (là người gửi hoặc người nhận) để được mạng lưới biết đến.',
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
			success: 'Thành công',
			unknown: 'Không rõ trạng thái',
			unknownMessage: 'Ncc did not get response in a timely manner. Transaction might have been sent to the network.<br /><br />Please, check transactions before attempting to make it again.',
			appStatus: {
				nccUnknown: 'Không rõ trạng thái của NCC',
				nccUnavailable: 'Mất kết nối với NCC',
				nccStarting: 'NCC đang khởi động...',
				nisUnknown: 'Không rõ trạng thái của NIS',
				nisUnavailable: 'Mất kết nối với NIS',
				nisStarting: 'NIS đang khởi động...',
				notBooted: 'NIS cần phải được boot. Hãy mở ví của bạn và boot node cục bộ bằng hộp thoại hiện ra hoặc đặt cấu hình thiết lập tự động boot.',
				loading: 'Loading blocks from db, at block: ',
				booting: 'Đang boot NIS...',
				nisInfoNotAvailable: 'Thông tin về NIS chưa sẵn sàng. Đang truy xuất thông tin về NIS...',
				synchronizing: 'NIS đang đồng bộ hoá. Đang ở block {{1}}, trễ khoảng {{2}}.',
				daysBehind: {
					0: 'ít hơn 1 ngày',
					1: '1 ngày',
					many: '{{1}} ngày'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS đã được đồng bộ!',
				noRemoteNisAvailable: 'No remote NIS found in the network, disconnected from internet?'
			},
			addressBook: 'Address book',
			password: 'Mật khẩu',
			passwordValidation: 'Mật khẩu không được để trống',
			address: 'Địa chỉ',
			privateLabel: 'Nhãn cá nhân',
			publicLabel: 'Public label',
			noCharge: 'Current account will <b>NOT</b> be charged any fees, multisig account covers them',
			fee: 'Phí',
			multisigFee: 'Multisig fee',
			useMinimumFee: 'Sử dụng phí tối thiểu',
			feeValidation: 'Phí không được thấp hơn phí tối thiểu',
			justUse: 'Just use',
			dueBy: 'Hết hạn',
			minutes: 'minute(s)',
			hours: 'giờ',
			hoursDue: 'Hết hạn sau (giờ)',
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
			cancelButton: 'Huỷ',
			sendButton: 'Gửi',
			account: 'Tài khoản',
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
			pending: 'Giao dịch đang chờ xác nhận',
			outgoing: 'Giao dịch gửi đi',
			incoming: 'Giao dịch gửi đến',
			self: 'Giao dịch tự gửi',
			importance: 'Importance transaction',
			modification: 'Aggregate Modification of Multisig',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Ui chà!',
				caption: 'LỖI {{1}}'
			},
			yikes: {
				title: 'Yikes!',
				caption: 'info code {{1}}'
			},
			confirmDefault: {
				yes: 'Có',
				no: 'Không'
			},
			initialBackup: {
				title: "Welcome to NEM",
				content: "You can create wallet backup from menu in upper right corner."
			},
			settings: {
				title: 'Thiết lập',
				language: {
					label: 'Ngôn ngữ'
				},
				remoteServer: {
					tabTitle: 'Server từ xa',
					protocol: 'Giao thức',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Cổng',
					defaultPort: 'Use default port.'
				},
				autoBoot: {
					tabTitle: 'Tự boot node',
					name: 'Tên node',
					primaryAccount: 'Tài khoản chính',
					auto: 'Tự động boot node khi ví được mở'
				},
				save: 'Lưu',
				saveSuccess: 'Thiết lập đã được lưu thành công'
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
				labelDesc: 'Tài khoản này được dán nhãn là {{1}}',
				nullLabelDesc: 'Tài khoản này không được dán nhãn',
				addCosignatory: '+ Add Cosignatory',
				convert: 'Convert',
				txConfirm: {
					title: 'Confirm Conversion to Multisig Account',
					total: 'Tổng cộng'
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
					to: 'Người nhận',
					amount: 'Số lượng',
					fee: 'Inner Fee',
					deadline: 'Deadline'
				},
				multisigFees: 'Multisig Fees',
				multisigTotal: 'Tổng cộng',
				sender: 'Cosignatory',
				passwordValidation: 'Mật khẩu không được để trống',
				sending: 'Đang gửi...',
				txConfirm: {
					title: 'Confirm Multisig Transaction',
					message: 'Thông điệp',
					encrypted: 'Thông điệp được mã hoá',
					noMessage: 'Không có',

				}
			},
			sendNem: {
				title: 'Gửi XEM',
				sender: 'Người gửi',
				thisAccount: 'This account',
				labelDesc: 'Tài khoản này được dán nhãn là {{1}}',
				nullLabelDesc: 'Tài khoản này không được dán nhãn',
				amount: 'Số lượng',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Người nhận',
				recipientValidation: 'Địa chỉ tài khoản phải có đúng 40 ký tự trừ các dấu gạch ngang',
				message: 'Thông điệp',
				encrypt: 'Mã hoá thông điệp',
				sending: 'Đang gửi...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Xác nhận giao dịch',
					amount: 'Số lượng',
					to: 'Tới',
					total: 'Tổng cộng',
					message: 'Thông điệp',
					encrypted: 'Thông điệp được mã hoá',
					noMessage: 'Không có thông điệp',
					confirm: 'Xác nhận',
					sending: 'Đang gửi...'
				},
				notBootedWarning: {
					title: 'Node chưa được boot!',
					message: 'Node cục bộ cần phải được boot trước khi bạn có thể gửi XEM đi!'
				},
				bootingWarning: {
					title: 'Node đang được boot',
					message: 'Xin hãy đợi cho quá trình boot hoàn thành để gửi giao dịch của bạn.'
				},
				loadingWarning: {
					title: 'Loading db'
				},

			},
			clientInfo: {
				title: 'Thông tin client',
				ncc: 'NEM Community Client - NCC',
				signer: 'Chữ ký',
				remoteServer: 'Máy chủ từ xa',
				local: 'Cục bộ',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Đồng bộ',
				notSync: 'Không đồng bộ',
				notConnected: 'Không kết nối tới NEM Cloud',
				loading: 'Đang tải...'
			},
			transactionDetails: {
				title: 'Chi tiết giao dịch',
				id: 'ID',
				hash: 'Hash',
				type: 'Loại giao dịch',
				direction: 'Transaction Direction',
				pending: 'Đang chờ xác nhận',
				outgoing: 'Gửi đi',
				incoming: 'Gửi đến',
				self: 'Tự gửi',
				sender: 'Người gửi',
				multisigAccount: 'Multisig Account',
				issuer: 'Issuer',
				recipient: 'Người nhận',
				remote: 'Remote',
				multisigMessage: 'Signatures present',
				message: 'Thông điệp',
				noMessage: 'Không có thông điệp nào',
				encrypted: 'Thông điệp được mã hoá',
				time: 'Mốc thời gian',
				confirmations: 'Số xác nhận',
				confirmationsUnknown: 'Không rõ',
				amount: 'Số lượng',
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
				title: 'Boot node cục bộ',
				account: 'Tài khoản để boot node cục bộ',
				noLabel: '<span class=\"null\">&lt;Không có nhãn&gt;</span>',
				wallet: 'Ví',
				node: 'Tên node',
				boot: 'Boot',
				booting: 'Đang boot...',
				warning: 'Boot node warning',
				warningText: 'You\'re trying to boot a node <u>{{2}}</u><br/><br/>Booting remote node is currently impossible from within NCC.',
				warningStatement: 'You have auto-boot set to true and you\'re using remote node {{3}}.<br/><br/>Booting remote node is currently impossible from within NCC',
				warningQuestion: 'Are you sure you want to boot node <u>{{3}}</u> using private key of account {{1}} ({{2}} XEM)?<br><br>This will reveal this account\'s <span class="sublabelWarning">private key</span> to node: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Đóng ví',
				message: 'Bạn có chắc bạn muốn đóng ví của mình và trở về trang chủ?'
			},
			createAccount: {
				title: 'Tạo tài khoản mới',
				label: 'Nhãn cá nhân',
				wallet: 'Ví',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được tạo!',
				create: 'Tạo'
			},
			showPrivateKey: {
				title: 'Show Account\'s PRIVATE Key',
				message: 'This will display account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',
				publicKey: 'Khoá công khai',
				privateKey: 'Khoá bí mật',
				show: 'Show the key'
			},
			showRemotePrivateKey: {
				title: 'Show Remote Account\'s PRIVATE Key',
				message: 'This will display remote account\'s private key on the screen, as a text. In case of any malware present in the system, this might be hazardous operation. Are you sure you want to do that?',

			},
			addAccount: {
				title: 'Thêm tài khoản đã tồn tại',
				privateKey: 'Khoá bí mật',
				wallet: 'Ví',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được thêm vào ví!',
				add: 'Thêm',
				label: 'Nhãn'
			},
			setPrimary: {
				title: 'Đặt tài khoản chính',
				account: 'Tài khoản được đặt làm tài khoản chính',
				noLabel: '<span class=\"null\">&lt;Không có nhãn&gt;</span>',
				wallet: 'Ví',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được đặt làm tài khoản chính!',
				set: 'Đặt làm tài khoản chính'
			},
			changeWalletName: {
				title: 'Đổi tên ví',
				wallet: 'Tên ví hiện tại',
				newName: 'Tên ví mới',
				successMessage: 'Tên ví đã được đổi thành công từ <em>{{1}}</em> sang <em>{{2}}</em>',
				change: 'Thay đổi'
			},
			changeWalletPassword: {
				title: 'Đổi mật khẩu ví',
				wallet: 'Ví',
				password: 'Mật khẩu hiện tại',
				newPassword: 'Mật khẩu mới',
				confirmPassword: 'Xác nhận mật khẩu mới',
				successMessage: 'Mật khẩu ví đã được thay đổi thành công',
				change: 'Thay đổi',
				passwordNotMatchTitle: 'Ui chà!',
				passwordNotMatchMessage: 'Mật khẩu và mật khẩu xác nhận mà bạn nhập không khớp. Hãy chắc chắn rằng bạn gõ đúng mật khẩu mới.'
			},
			changeAccountLabel: {
				title: 'Đổi nhãn tài khoản',
				label: 'Nhãn tài khoản',
				wallet: 'Ví',
				successMessage: 'Tài khoản {{1}} giờ đây được dán nhãn là {{2}}',
				change: 'Thay đổi'
			},
			removeAccount: {
				title: 'Xoá tài khoản',
				label: 'Nhãn tài khoản',
				wallet: 'Ví',
				warning: 'Please ensure that your account has no XEM left before you remove it, or they would be lost forever.',
				successMessage: 'Tài khoản {{1}} {{#2}}({{2}}){{/2}} đã được xoá!',
				remove: 'Xoá'
			},
			nisUnavailable: {
				title: 'Không thể kết nối với NIS',
				message: 'Mất kết nối từ NIS, đang đợi kết nối'
			},
			shutdown: {
				title: 'Đóng chương trình',
				message: 'Bạn có chắc rằng bạn muốn đóng NEM Community Client không?'
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: 'Ví',
				activate: 'Kích hoạt',
				warningText: 'Activation will take 6 hours (360 blocks). Activation will NOT start harvesting automatically.',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: 'Deactivate Delegated Harvesting',
				wallet: 'Ví',
				deactivate: 'Vô hiệu hoá',
				warningText: 'Deactivation will take 6 hours (360 blocks).'
			},
			startRemote: {
				title: 'Start Delegated Harvesting',
				wallet: 'Ví',
				start: 'Bắt đầu'
			},
			stopRemote: {
				title: 'Stop Delegated Harvesting',
				wallet: 'Ví',
				stop: 'Ngừng'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer. To prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away."
			},
			addContact: {
				title: 'Add contact',
				add: 'Thêm'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Lưu thay đổi'
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Xoá'
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
			importSuccess: 'Ví đã được nhập thành công!',
			nav: {
				start: 'Khởi đầu',
				about: 'Về NEM',
				settings: 'Thiết lập'
			},
			main: {
				leftTitle: 'Mới đến với <em>NEM</em>?',
				leftButton: 'Tạo một ví mới',
				walletNamePlh: 'Tên ví của bạn',
				passwordPlh: 'Mật khẩu',
				confirmPasswordPlh: 'Confirm password',
				create: 'Tạo',
				creating: 'Creating...',
				rightTitle: 'Đã là <em>thành viên</em>?',
				rightButton: 'Mở ví của bạn',
				openButton: 'Mở',
				walletsFound: 'Tìm thấy <strong>{{1}}</strong> <em>ví</em>',
				copyright: 'Ảnh chụp bởi <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC mã hoá ví của bạn',
					description: '<em>Bảo mật</em> là rất quan trọng với NEM để ngăn ngừa nạn trộm cắp XEM &amp; tài sản.'
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
					title: 'NCC hoạt động thế nào?',
					paragraphs: [
						'<strong>NCC</strong> cho phép bạn tiếp cận với tài sản và XEM của bạn như một chiếc ví thông thường vẫn làm. Bạn có thể',
						'<strong>NCC</strong> yêu cầu truy cập tới một <strong>NIS</strong> server để có thể hoạt động. Thôgn thường là sẽ có một server chạy trên máy bạn (được cài đặt cùng với <strong>NCC</strong>)',
						'Bạn cũng có thể cấu hình truy cập tới một máy chủ <strong>NIS</strong> từ xa.'
					],
					listItems: [
						'Có nhiều ví cùng lúc',
						'Lập ra nhiều tài khoản chứa trong một chiếc ví'
					]
				}, {
					title: '&#42;NIS là gì?',
					paragraphs: [
						'Thành phần này chịu trách nhiệm giữ cho <strong>NEM</strong> cloud hoạt động.',
						'The more <strong>NIS</strong> there are in the network, the better the security.,',
						'<strong>NIS</strong> là điểm truy cập tới <strong>NEM</strong> cloud.'
					],
					legend: '<strong>&#42;NIS</strong> là viết tắt của <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Quyền tác giả 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Khoảng {{1}} ngày trước',
			lastAccessJustNow: 'Mới đây',
			lastAccessTooltip: 'Truy cập lần cuối từ {{1}}',
			primary: 'chính',
			primaryShort: 'C',
			noLabel: '<Không nhãn>',
			copiedToClipboard: 'Địa chỉ đã được copy vào clipboard!',
			actions: {
				refreshInfo: 'Cập nhật dữ liệu',
				bootLocalNode: 'Boot node cục bộ',
				changeWalletName: 'Đổi tên ví',
				changeWalletPassword: 'Đổi mật khẩu ví',
				mergeWallets: 'Hợp nhất nhiều ví',
				exportWallet: 'Xuất ví',
				createAccount: 'Tạo tài khoản mới',
				createRealAccountData: 'Tạo dữ liệu tài khoản thực',
				verifyRealAccountData: 'Verify real account data',
				showPrivateKey: 'Show Account\'s PRIVATE key',
				showRemotePrivateKey: 'Show Remote Account\'s PRIVATE key',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'View Account Details',
				addAccount: 'Thêm tài khoản đã tồn tại',
				changeAccountLabel: 'Đổi nhãn tài khoản',
				setPrimary: 'Đặt làm tài khoản chính',
				removeAccount: 'Xoá tài khoản',
				clientInfo: 'Thông tin client',
				closeWallet: 'Đóng ví',
				closeProgram: 'Đóng chương trình',
				copyClipboard: 'Copy địa chỉ vào clipboard',
				copyDisabled: 'Copying an address requires flash',
				convertMultisig: 'Convert other account to multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Bảng tin',
				'Tin nhắn',
				'Address Book',
				'Các giao dịch',
				'Block thu hoạch được',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Trao đổi tài sản',
				'Tin tức',
				'Ứng dụng',
				'Các tài khoản',
				'Thiết lập',
				'Đóng chương trình',
			],
			bootNodeWarning: 'Node cần phải được boot trước khi bạn có thể sử dụng đầy đủ các tính năng của NCC'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Điểm tầm quan trọng',
				unknown: 'Không rõ trạng thái',
				start: 'Bắt đầu thu hoạch cục bộ',
				harvesting: 'Đang thu hoạch',
				stop: 'Ngừng thu hoạch cục bộ',
				description: 'tầm quan trọng của tài khoản với NEM cloud',
				remoteHarvest: {
					title: 'Delegated harvesting',
					activate: 'Activate delegated harvesting',
					activating: 'Activating delegated harvesting...',
					active: 'Delegated harvesting is active',
					deactivate: 'Deactivate delegated harvesting',
					deactivating: 'Deactivating delegated harvesting...',
					startRemoteHarvesting: 'Start delegated harvesting',
					remotelyHarvesting: 'Đang thu hoạch từ xa',
					stopRemoteHarvesting: 'Stop delegated harvesting',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Các giao dịch gần đây',
				sendNem: 'Gửi XEM',
				signMultisig: 'SIGN',
				balance: 'Số dư hiện tại',
				loading: 'Loading balance',
				accountCosignatories: 'Multisig account',
				accountCosignatoriesView: 'view cosignatories',
				vestedBalance: 'Vested Balance',
				syncStatus: '(tại block {{1}}{{#2}} : chậm khoảng {{3}} ngày{{/2}})',
				notSynced: 'might be inaccurate, NIS not synchronized yet',
				unknown: 'không xác định',
				columns: [
					'',
					'Thời điểm',
					'Người gửi/nhận',
					'Thông điệp',
					'',
					'Chi tiết',
					'Số xác nhận',
					'Phí',
					'Số lượng'
				],
				noMessage: 'Không có',
				encrypted: 'Thông điệp được mã hoá',
				view: 'Xem',
				confirmationsUnknown: 'Không rõ',
				pending: 'Đang chờ xác nhận',
				seeAll: 'Xem tất cả giao dịch',
				noTransactions: 'Chưa có giao dịch nào'
			},
			nemValue: {
				title: 'Thống kê giá trị XEM'
			},
			messages: {
				titleTooltip: 'Tin nhắn'
			},
			news: {
				titleTooltip: 'Tin tức'
			},
			notAvailable: 'Chưa khả dụng trong phiên bản beta'
		},
		transactions: {
			title: 'Các giao dịch',
			sendNem: 'Gửi XEM',
			balance: 'Số dư hiện tại',
			filters: {
				confirmed: 'Đã xác nhận',
				unconfirmed: 'Chưa xác nhận',
				incoming: 'Gửi đến',
				outgoing: 'Gửi đi'
			},
			table: {
				columns: [
					'',
					'Thời điểm',
					'Người gửi/nhận',
					'Thông điệp',
					'',
					'Chi tiết',
					'Số xác nhận',
					'Phí',
					'Số lượng'
				],
				noMessage: 'Không có',
				encrypted: 'Thông điệp được mã hoá',
				view: 'Xem',
				confirmationsUnknown: 'Không rõ',
				pending: 'Đang chờ xác nhận',
				noTransactions: 'Chưa có giao dịch nào',
				loading: 'Đang tải thêm các giao dịch...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Số dư hiện tại',
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
			title: 'Các block thu hoạch được',
			feeEarned: 'Phí giao dịch kiếm được từ 25 block mới nhất',
			unknown: 'Không rõ',
			table: {
				columns: [
					'Chiều cao',
					'Thời điểm',
					'Block difficulty',
					'Phí'
				],
				noBlocks: 'Chưa có block nào được thu hoạch',
				loading: 'Xem các block cũ'
			},
			harvesting: {
				unknown: 'Không rõ trạng thái',
				start: 'Bắt đầu thu hoạch cục bộ',
				harvesting: 'Đang thu hoạch',
				stop: 'Ngừng thu hoạch cục bộ',
				remoteHarvest: {
					startRemoteHarvesting: 'Start delegated harvesting',
					stopRemoteHarvesting: 'Stop delegated harvesting'
				}
			}
		},
		addressBook: {
			title: 'Address book',
			addContact: 'Add contact',
			table: {
				columns: [
					'Account address',
					'Private Label',
					'Public Label'
				],
				noContacts: 'There is no contacts in your address book'
			},
			noLabel: 'No label',
			sendNem: 'Gửi XEM',
			edit: 'Edit',
			remove: 'Xoá'
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
			title: 'Thiết lập',
			settings: [{
				name: 'Ngôn ngữ'
			}],
			save: 'Lưu thay đổi',
			saveSuccess: 'Thiết lập đã được lưu thành công'
		}
	}
});