define({
	id: 'cn',
	name: '中文（简体）',
	texts: {
		preferences: {
			thousandSeparator: ',',
			decimalSeparator: '.'
		},
		faults: {
			101: '未找到文件。',
			102: '尚未建立钱包。',
			103: '钱包文件已损坏。如果您的钱包存在备份，请使用备份恢复你的账户，或添加一个新账户。',
			104: '该密码不正确，请认真回忆密码，如该密码丢失将造成无法复原！',
			105: '未输入钱包密码。',
			106: '使用钱包需先正常开启，您必须提供正确密码才能打开钱包。',
			107: '钱包内无此账户。',
			108: '无法删除该账户。可能的原因是，该账户存在余额或该帐户是主帐户。',
			109: '具有相同名称的另一个钱包已经存在。请选择一个其它的钱包名。',
			110: '钱包里已经包含了此帐户。',
			111: '钱包名与目录名重名。',
			112: '钱包文件插件已损坏。',
			113: '无法删除钱包。',
			121: '地址簿文件不存在。',
			122: '地址簿尚未创建。',
			123: '地址簿文件已损坏，请从备份恢复地址簿。',
			124: '您提供的地址簿密码有误。',
			125: '未输入地址簿密码。',
			127: '地址簿中不含此地址。',
			128: '您提供的地址不正确。',
			129: '同名地址簿已存在，请选择一个新的地址簿名。',
			130: '地址簿中已包含此地址。',
			131: '地址簿名与目录重名。',
			132: '地址簿插件文件错误。',
			133: '此地址簿无法删除。',
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
			202: '该公钥不存在。',
			203: '账户无法转换，可能存在未激活的共同签署人账号。需要完成一笔交互以激活账户。',
			305: 'NEM基础设施服务 (NIS)不可用。\n\n请尝试重启NEM软件。\n\n如果您在使用远程NIS，请确认NIS端口开放，连接未受局域网限制。',
			306: '对不起，一个开发团队没有预见到的错误发生了。请尝试重试，若问题未解决，请在NEM NIS/NCC社区内提交该问题。',
			400: '缺失某些参数。',
			401: '抱歉，不允许执行该操作，本能地钱包登陆远程NIS存在私钥丢失风险！',
			404: '您请求的资源无法找到。',
			500: '保存配置文件失败。',
			600: 'NCC需要连接至已启用的NIS服务启动以从NEM云发送和接收交易数据，请使用NCC菜单项启动本地节点。',
			601: 'NIS节点已启用，无法重复启用。',
			602: 'NEM基础设施服务（NIS）当前正在加载数据，数据完全加载后钱包将可用。',
			699: '此服务器已达最大收获人数。',
			700: '所提供的帐户不满足收获的基本要求。主要原因可能是金额不足，账户中至少有10000 vested XEM才能开始收获。',
			901: '设置离线模式发生错误。',
			1000: '您所提供的密钥公钥与私钥不对应。',
			1001: '您所提供的公钥和地址不对应。',
			1002: '网络中无法找到改地址。',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: '所提供的截止日期过早。必须输入1天以内的日期作为截止日期。',
			1204: '所提供的截止日期过晚。必须输入1天以内的日期作为截止日期。',
			1205: '您的账户余额不足，无法发起该交互。',
			1206: '提供消息的文本太大，无法通过XEM发送。请减少消息的长度。',
			1207: '数据库或交易清单中已经存在此交易的hash值。',
			1208: '无法验证本次交易的签名。',
			1209: '此交易ID的时间戳不合法，时间过早。',
			1210: '此交易ID的时间戳不合法，时间过晚。',
			1219: '交互缓存耗尽，交互被拒绝。网络繁忙时高手续费优先处理。 ',
			1262: '申请委托收获的账户具有非0余额，无法开启。',
			1263: '重要性传输被拒绝，已有等待中重要性传输操作。 ',
			1264: '委托收获已激活。',
			1265: '委托收获未被激活，无法取消激活。',
			1266: '重要性传输交互 (委托收获) 与现有交互冲突。',
			1271: '多重签名签名交互被拒绝。当前账户不是此多重签名交互的合法共同签署人账号。',
			1273: '多重签名签名交互被拒绝。相关多重签名交互在NEM网络中未公知。',
			1274: '多重签名账号不可发起交互。',
			1275: '多重签名账户变更被拒绝。一个待加入账号已是共同签署人。',
			1321: '该帐户未知。一个帐户需要至少完成一个交易（作为发件人或收件人）才能被网络公知。',
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
			success: '成功',
			unknown: '未知状态',
			unknownMessage: 'NCC未按时获得回复。交互可能已经发送到网络中。 <br /><br />请在重新创建交互前检查确认。',
			appStatus: {
				nccUnknown: 'NCC 状态未知',
				nccUnavailable: 'NCC 不可用',
				nccStarting: 'NCC 开始启用…',
				nisUnknown: 'NIS 状态未知',
				nisUnavailable: 'NIS 不可用',
				nisStarting: 'NIS 开始启用…',
				notBooted: '需要启用NIS。请打开你的钱包，通过弹出的对话框启用一个本地节点，或设置自动启用。',
				loading: '正在数据库中加载区块, 现区块号: ',
				booting: '正在启用 NIS...',
				nisInfoNotAvailable: '收不到NIS信息，正尝试接收NIS信息...',
				synchronizing: 'NIS 在和服务器执行同步. 现位于 {{1}}, 大约落后 {{2}} 。',
				daysBehind: {
					0: '少于一天',
					1: '一天',
					many: '{{1}} 天'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS已完成同步!',
				noRemoteNisAvailable: '在相应地址未发现NIS网络，互联网已断开？'
			},
			addressBook: '地址簿',
			password: '密码',
			passwordValidation: '密码不可为空',
			address: '地址',
			privateLabel: '个人标签',
			publicLabel: '公共标签',
			noCharge: '当前账号<b>不会</b>支付相关费用，费用由多重签名账号支付。',
			fee: '费用',
			multisigFee: '多重签名费用',
			useMinimumFee: '支付最小费用',
			feeValidation: '无效费用值，必须填入等于或高于最小费用的值。',
			justUse: 'Just use',
			dueBy: '限期',
			minutes: 'minute(s)',
			hours: '小时数',
			hoursDue: '到期小时数',
			hoursDueExplanation: '如果交互未在截止时间之前完成，它会被拒绝。',
			amount: '金额',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: '关闭',
			saveButton: '保存',
			cancelButton: '取消',
			sendButton: '发送',
			account: '帐户',
			thisAccount: '本账户',
			warning: '警告',
			newBuild: 'NEW BUILD',
			newBuildNumber: 'There is new build {{1}} available for download. Check <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> for details',

		},
		transactionTypes: {
			20: '传输交互',
			21: '重要性传输',
			22: '多重签名账户变更',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'MULTISIG SIGNATURE',
			50: '多重签名交互',
			51: '多重签名交互',
			52: '多重签名交互',
			53: '多重签名交互',
			54: '多重签名交互',
			55: '多重签名交互',

		},
		Validity: {
			GOOD_TILL_CANCELLED: 'Good till cancelled',
			HOURS: '到期小时数'
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
			3: '停止',
			4: 'Peg'
		},
		transactionDirections: {
			pending: '等待中交互',
			outgoing: '发送交互',
			incoming: '接受交互',
			self: '自我交互',
			importance: '重要性交互',
			modification: '多重签名账户协同变更',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: '哎呀!',
				caption: '错误 {{1}}'
			},
			yikes: {
				title: '异常!',
				caption: '信息码 {{1}}'
			},
			confirmDefault: {
				yes: '是',
				no: '否'
			},
			initialBackup: {
				title: "欢迎来到NEM",
				content: "您可在点击右上方的菜单创建钱包备份。"
			},
			settings: {
				title: '设置',
				language: {
					label: '语言'
				},
				remoteServer: {
					tabTitle: '远程服务器',
					protocol: '协议',
					protocolOptions: {
						http: 'HTTP'
					},
					host: '主机名',
					port: '端口',
					defaultPort: '使用默认端口'
				},
				autoBoot: {
					tabTitle: '自动启用',
					name: '节点名',
					primaryAccount: '主帐户',
					auto: '开启钱包时自动启用'
				},
				save: '保存',
				saveSuccess: '设置保存成功'
			},
			signToken: {
				title: "Sign a token using account",
				label: "Token (url, string, anything)",
				signature: "Signed token",
				sign: "Sign"
			},
			multisig: {
				title: '转换为多重签名账号',
				multisigAccount: '多重签名账号',
				cosignatories: '共同签署人地址',
				labelDesc: '账户标签为 {{1}}',
				nullLabelDesc: '该账户未设置标签',
				addCosignatory: '+ 添加共同签署人',
				convert: '转换',
				txConfirm: {
					title: '确认转换至多重签名账户',
					total: '总额'
				},
				warning: '多重签名账户本身不可以作为共同签署人。这样做会把账户彻底锁死无法发出交互。估计您<b>不会</b>想要这么做。',
				minCosignatoriesDefaultLabel: 'Use default cosignatories number',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'Using zero would cause all cosignatories to be required',
				minCosignatoriesOverflow: 'Specified number is larger than number of cosignatories'
			},
			signMultisig: {
				title: '签署多重签名交互',
				original: {
					from: '多重签名账户',
					to: '接收人',
					amount: '量',
					fee: '内部费用',
					deadline: '期限'
				},
				multisigFees: '多重签名费用',
				multisigTotal: '总额',
				sender: '共同签署人',
				passwordValidation: '密码不可为空',
				sending: '发送中...',
				txConfirm: {
					title: '确认多重签名交互',
					message: '信息',
					encrypted: '信息已加密',
					noMessage: '无信息',

				}
			},
			sendNem: {
				title: '发送 XEM',
				sender: '发送人',
				thisAccount: '本账户',
				labelDesc: '此账户标记为 {{1}}',
				nullLabelDesc: '此帐户没有标记',
				amount: '金额',
				escrow: 'Escrow',
				other: 'Other',
				recipient: '收件人账号',
				recipientValidation: '账户地址长度必须为40个字符（含符号）',
				message: '信息',
				encrypt: '加密',
				sending: '正在发送...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: '确认交易',
					amount: '金额',
					to: '收件人',
					total: '总价',
					message: '信息',
					encrypted: '信息已加密',
					noMessage: '未发送信息',
					confirm: '确认',
					sending: '正在发送中...'
				},
				notBootedWarning: {
					title: '节点还没有启用!',
					message: '本地节点需要被启用后才能发送XEM!'
				},
				bootingWarning: {
					title: '正在启用节点',
					message: '请等待节点启用完成后再发起交互。'
				},
				loadingWarning: {
					title: '正在加载数据库'
				},

			},
			clientInfo: {
				title: '客户端信息',
				ncc: 'NEM 社区客户端 - NCC',
				signer: '签名者',
				remoteServer: '远程服务器',
				local: '本地',
				nis: 'NEM 基础设施服务器 - NIS',
				sync: '完成同步',
				notSync: '未完成同步',
				notConnected: '未连接 NEM 云',
				loading: '加载中...'
			},
			transactionDetails: {
				title: '交易详情',
				id: 'ID',
				hash: 'Hash',
				type: '交易类型',
				direction: '交互方向',
				pending: '待定',
				outgoing: '发送',
				incoming: '接收',
				self: '本人',
				sender: '发件人',
				multisigAccount: '多重签名账户',
				issuer: '发起人',
				recipient: '收件人',
				remote: '远程',
				multisigMessage: '已存签名',
				message: '信息',
				noMessage: '无信息',
				encrypted: '已加密',
				time: '时间戳',
				confirmations: '确认',
				confirmationsUnknown: '未知',
				amount: '金额',
				multiplier: 'Multiplier',
				innerFee: '内部费用',
				multisigFees: '多重签名费用',
				cosignatory: '共同签署人',
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
				title: '账户细节',
				label: '标签',
				noLabel: '无标签',
				add: '添加到地址簿',
				remove: '从地址簿删除',
				balance: '余额',
				vested: "vested",
				importance: '重要性',
				publicKey: '公钥',
				noPublicKey: '无公钥',
				harvestedBlocks: '已收获块'
			},
			bootLocalNode: {
				title: '启用本地节点',
				account: '节点启用帐号',
				noLabel: '<span class=\'null\'>&lt;没有标识&gt;</span>',
				wallet: '钱包',
				node: '节点名称',
				boot: '启用',
				booting: '正在启用...',
				warning: '启用节点警告',
				warningText: '您正在试图启用一个远程节点<u>{{2}}</u><br/><br/>从NCC启用远程节点当前无法实现。',
				warningStatement: '您已设置自动启用，且正在使用远程节点：{{3}}。<br/><br/>从NCC启用远程节点当前无法实现。',
				warningQuestion: '您确定要使用账户{{1}} ({{2}}） XEM 的私钥启用节点<u>{{3}}</u>?<br><br>这会对 <u>{{3}}</u>这台NIS暴露您的 <span class="sublabelWarning">私钥</span>。'
			},
			closeWallet: {
				title: '关闭钱包',
				message: '您确定要关闭钱包并返回到登陆页面?'
			},
			createAccount: {
				title: '创建新帐号',
				label: '标识',
				wallet: '钱包',
				successMessage: '帐号 {{1}} {{#2}}({{2}}){{/2}} 已创建!',
				create: '创建'
			},
			showPrivateKey: {
				title: '显示账户私钥',
				message: '该操作会将账户私钥明文显示在屏幕中，请谨慎操作。如果您的电脑中有病毒软件，私钥将有可能被盗。您确认这么做吗?',
				publicKey: '公钥',
				privateKey: '私钥',
				show: '显示私钥'
			},
			showRemotePrivateKey: {
				title: '显示远程账号的私钥',
				message: '该操作会把远程账户的私钥输出在屏幕中，如果执行中有恶意软件存在，该操作有暴露私钥的风险，您确认要这样做吗？',

			},
			addAccount: {
				title: '添加一个现有帐户',
				privateKey: '帐户的私钥',
				wallet: '钱包',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 已被添加到钱包!',
				add: '添加',
				label: '标识'
			},
			setPrimary: {
				title: '设置主账户',
				account: '帐户被设置为主账户',
				noLabel: '<span class=\'null\'>&lt;无标识&gt;</span>',
				wallet: '钱包',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 被设置为主账户!',
				set: '设置为主账户'
			},
			changeWalletName: {
				title: '修改钱包名',
				wallet: '当前钱包名',
				newName: '新钱包名',
				successMessage: '钱包名称已成功从<em>{{1}}</em>变更为<em>{{2}}</em>',
				change: '修改'
			},
			changeWalletPassword: {
				title: '修改钱包密码',
				wallet: '钱包',
				password: '当前密码',
				newPassword: '新密码',
				confirmPassword: '确认新密码',
				successMessage: '钱包密码已经修改成功',
				change: '修改',
				passwordNotMatchTitle: '糟!',
				passwordNotMatchMessage: '您输入的密码不正确，请务必正确输入您的密码'
			},
			changeAccountLabel: {
				title: '更改帐户标识',
				label: '帐户标识',
				wallet: '帐户',
				successMessage: '帐户{{1}}现在的标识是{{2}}',
				change: '修改'
			},
			removeAccount: {
				title: '删除帐户',
				label: '帐户标识',
				wallet: '钱包',
				warning: '在你删除帐户前请确保您的帐户无剩余MEM，一经删除余额将无法恢复',
				successMessage: '帐户 {{1}} {{#2}}({{2}}){{/2}} 被删除了!',
				remove: '删除'
			},
			nisUnavailable: {
				title: 'NIS 不可用',
				message: 'NIS连接不可用。'
			},
			shutdown: {
				title: '关闭程序',
				message: '您确定要关闭NEM社区客户端?'
			},
			activateDelegated: {
				title: 'Activate Delegated Harvesting',
				wallet: '钱包',
				activate: '激活',
				warningText: '激活会花费6小时的时间 (360块)。激活操作并不会开启收获。',
				delegatedAccount: 'Delegated account public key',
				builtIn: 'built into the wallet',

			},
			deactivateDelegated: {
				title: '取消激活委托收获',
				wallet: '钱包',
				deactivate: '停止激活',
				warningText: '解除激活会花费6小时的时间 (360块)。'
			},
			startRemote: {
				title: '开启委托收获',
				wallet: '钱包',
				start: '开始'
			},
			stopRemote: {
				title: '停止委托收获',
				wallet: '钱包',
				stop: '停止'
			},
			logoutWarning: {
				leavePage: "您正在退出钱包。请注意能登陆本机的用户仍然可以访问该钱包，为确保无人可登录钱包，请在关闭浏览器之前点击右上方的下拉菜单执行\"关闭钱包\"菜单项。"
			},
			addContact: {
				title: '新增联系人',
				add: '新增'
			},
			editContact: {
				title: '编辑联系人',
				saveChanges: '保存修改'
			},
			removeContact: {
				title: '删除联系人',
				remove: '删除'
			},
			placeOrder: {
				title: 'Place order',
				cancel: '取消',
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
					stop: '停止',
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
				cancel: '取消',
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
				cancel: '取消',
				editDetails: 'Edit details',
				confirm: '确认'
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
				cancel: '取消',
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
				address: '地址',
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
				cancel: '取消',
				finish: 'Finish',
				finishing: 'Finishing',

			},
			setXemWithdrawalAccount: {
				title: 'Create XEM Withdrawal Account',
				detailsMessage: 'The new XEM withdrawal account will be associated with your current user details, you can update them before establishing the new withdrawal account.',
				message: 'You are almost there, now you should type in the address of the account that will be used as a withdraw account.',
				createSuccess: 'XEM Withdrawal account created successfully',
				cancel: '取消',
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
				confirm: '确认',
				message: 'In order to complete this action you should confirm your password.',
				password: '密码',
				wallet: '钱包'
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
				cancel: '取消',
				setupWithdraw: 'setup',
				noWithdraw: 'not set yet:'
			},
			orderUpdate: {
				title: 'Order Update',
				buying: 'Buying',
				selling: 'Selling',
				eachFor: 'Each for',
				fee: '费用',
				strategy: 'Strategy',
				total: '总价',
				ok: 'OK',
				orderDetails: 'Order details',
				price: 'Price',
				amount: '金额',
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
				cancel: '取消'
			},
			addFiatAccount: {
				title: 'Add Fiat account',
				message: 'Enter the data about the new Fiat account',
				tradeInstrument: 'Trade instrument',
				accountNumber: 'Account number',
				btcPrivateKey: 'BTC private key',
				correspondingKey: 'corresponding BitId key',
				add: '新增',
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
				cancel: '取消',
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
			importSuccess: '钱包已成功导入!',
			nav: {
				start: '已经 开始',
				about: '关于NEM',
				settings: '设置'
			},
			main: {
				leftTitle: '<em>NEM</em>新手?',
				leftButton: '创建新钱包',
				walletNamePlh: '您钱包的名称',
				passwordPlh: '密码',
				confirmPasswordPlh: '确认密码',
				create: '创建',
				creating: '创建中...',
				rightTitle: '已经是<em>NEM</em>用户?',
				rightButton: '打开您的钱包',
				openButton: '打开',
				walletsFound: '发现 <strong>{{1}}</strong> <em>钱包</em>',
				copyright: '由<em>Cas Cornelissen</em>摄制'
			},
			carousel: {
				items: [{
					title: 'NCC 加密你的钱包',
					description: '为避免XEM被盗，加密是<em>安全</em>的有效保证 &amp;。'
				}, {
					title: '远程NEM基础设施服务',
					description: '使用一个远程NIS服务，您可以避免从零开始同步块链。',

				}, {
					title: '委托收获',
					description: '使用委托收获，您可以在远程节点上执行收获!',

				}, {
					title: '多重签名交互',
					description: '使用块链内置的多重签名交互保障您的XEM和资产安全。',

				}, {
					title: '多语言支持',
					description: 'NEM用户界面支持多语言，请查看“设置"。'
				}, {
					title: '有任何问题或反馈？',
					description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem on freenode.org | Telegram',

				}]
			},
			about: {
				sections: [{
					title: 'NCC是如何工作的?',
					paragraphs: [
						'<strong>NCC</strong> 让您使用XEM时就如使用一个传统的钱包一样。',
						'<strong>NCC</strong>打开使用前需要您连接到<strong>NIS</strong> 服务器。 您可以本地同时安装<strong>NCC</strong>服务和<strong>NIS</strong>服务。',
						'也可以访问一个远程<strong>NIS</strong>。'
					],
					listItems: [
						'拥有多个钱包',
						'在一个钱包里定义多个帐户'
					]
				}, {
					title: '什么是&#42;NIS?',
					paragraphs: [
						'负责保持<strong>NEM</strong>云存活.',
						'网络中存在越多的<strong>NIS</strong>节点，NEM的安全性就越高,',
						'<strong>NIS</strong> 是 <strong>NEM</strong> 云的接入点。'
					],
					legend: '<strong>&#42;NIS</strong> 是 <strong>NEM基础架构服务</strong>的缩写'
				}]
			},
			footer: {
				copyright: '&copy; 版权所有 2015. NEM 社区客户端。'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: '大约 {{1}} 天前',
			lastAccessJustNow: '当前',
			lastAccessTooltip: '上次访问时间 {{1}}',
			primary: '主账户',
			primaryShort: 'P',
			noLabel: '<无标识>',
			copiedToClipboard: '已复制地址到剪贴板!',
			actions: {
				refreshInfo: '刷新信息',
				bootLocalNode: '启用本地节点',
				changeWalletName: '修改钱包名称',
				changeWalletPassword: '修改钱包密码',
				mergeWallets: '合并钱包',
				exportWallet: '输出钱包',
				createAccount: '创建新帐号',
				createRealAccountData: '创建真实账户信息',
				verifyRealAccountData: '确认真实账户信息',
				showPrivateKey: '显示账户私钥',
				showRemotePrivateKey: '显示远程账户私钥',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: '查看账户细节',
				addAccount: '添加一个现有帐户',
				changeAccountLabel: '更改帐户标识',
				setPrimary: '设为主帐户',
				removeAccount: '删除帐户',
				clientInfo: '客户信息',
				closeWallet: '关闭钱包',
				closeProgram: '关闭程序',
				copyClipboard: '复制地址至剪贴板',
				copyDisabled: '复制地址需要flash支持',
				convertMultisig: '转换其他账户到多重签名',
				bootBroker: 'Boot broker'
			},
			nav: [
				'仪表板',
				'消息',
				'联系人',
				'交易',
				'收获的区块',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Asset Exchange',
				'News',
				'Accounts',
				'Settings',
				'Accounts',
				'Namespaces & Mosaics'
			],
			bootNodeWarning: '启用本地节点后，才能充分使用NCC的功能。'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: '重要性',
				unknown: '未知状态',
				start: '开始收获',
				harvesting: '正在收获',
				stop: '停止收获',
				description: 'NEM帐户重要性(PoI)',
				remoteHarvest: {
					title: '委托收获',
					activate: '激活委托收获',
					activating: '正在激活委托收获...',
					active: '委托收获已激活',
					deactivate: '取消激活委托收获',
					deactivating: '委托收获激活取消中...',
					startRemoteHarvesting: '开启委托收获',
					remotelyHarvesting: '远程收获',
					stopRemoteHarvesting: '停止委托收获',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: '最近的交易',
				sendNem: '发送XEM',
				signMultisig: '签署',
				balance: '目前余额',
				loading: '加载中的余额',
				accountCosignatories: '多重签名账户',
				accountCosignatoriesView: '查看共同签署人',
				vestedBalance: '账户当前余额',
				syncStatus: '(现区块{{1}}{{#2}} : 估计{{3}}落后{{/2}}天)',
				notSynced: 'NIS可能尚未完成同步。',
				unknown: '未知',
				columns: [
					'',
					'时间',
					'发送人/收件人',
					'信息',
					'',
					'细节',
					'确认',
					'费用',
					'金额'
				],
				noMessage: '无信息',
				encrypted: '消息被加密',
				view: '查看',
				confirmationsUnknown: '未知',
				pending: '待定',
				seeAll: '查看所有交易',
				noTransactions: '无交易'
			},
			nemValue: {
				title: 'XEM 价值统计'
			},
			messages: {
				titleTooltip: '留言'
			},
			news: {
				titleTooltip: '新闻'
			},
			notAvailable: 'beta版本尚未开放该功能'
		},
		transactions: {
			title: '交易',
			sendNem: '发送 XEM',
			balance: '目前余额',
			filters: {
				confirmed: '已确认交易',
				unconfirmed: '未确认交易',
				incoming: '接受中',
				outgoing: '发送中'
			},
			table: {
				columns: [
					'',
					'时间',
					'发送人/接收人',
					'留言',
					'',
					'细节',
					'确认',
					'费用',
					'金额'
				],
				noMessage: '无留言',
				encrypted: '消息被加密',
				view: '查看',
				confirmationsUnknown: '未知',
				pending: '待定中',
				noTransactions: '无交易',
				loading: '载入更多的交易...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: '目前余额',
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
			title: '收获区块',
			feeEarned: '最新挖出的25个区块的报酬',
			unknown: '未知',
			table: {
				columns: [
					'高',
					'时间',
					'块难度',
					'费用'
				],
				noBlocks: '不存在已收获区块',
				loading: '查看更多'
			},
			harvesting: {
				unknown: '未知状态',
				start: '开始收获',
				harvesting: '正在收获',
				stop: '停止收获',
				remoteHarvest: {
					startRemoteHarvesting: '开启委托收获',
					stopRemoteHarvesting: '停止委托收获'
				}
			}
		},
		addressBook: {
			title: '地址簿',
			addContact: '添加联系人',
			table: {
				columns: [
					'账户地址',
					'个人标签',
					'公共标签'
				],
				noContacts: '您的地址簿中无联系人'
			},
			noLabel: '无标签',
			sendNem: '发送XEM',
			edit: '编辑',
			remove: '删除'
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
				amount: '金额',
				price: 'Price',
				time: '时间',
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
				amount: '金额',
				price: 'Price',
				perOne: 'per 1',
				createdOn: 'Created on',
				type: 'Type',
				noOrders: 'You haven\'t placed any orders yet.',
				strategy: 'Strategy',
				remove: '删除'
			},
			graphChart: {
				title: 'Graph Chart',
				step: 'Step',
				steps: {
					fifteenMinutes: '15 minutes',
					oneHour: '1 hour',
					oneDay: '一天'
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
					confirmed: '已确认交易',
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
				title: '设置',
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
				senderOrRecipient: '发送人/接收人',
				message: '留言',
				confirmations: '确认',
				fee: '费用',
				amount: '金额',
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
					time: '时间',
					sender: '发件人',
					sendAmount: 'Sent',
					recipient: '收件人',
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
			title: '设置',
			settings: [{
				name: '语言'
			}],
			save: '保存更改',
			saveSuccess: '设置已保存成功'
		}
	}
});