define({
	id: 'pt',
	name: 'Português',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'A carteira não existe.',
			102: 'A carteira não foi criada.',
			103: 'O arquivo da carteira está corrompido. Por favor, recupere-o de um back-up que você deveria ter feito.',
			104: 'A senha fornecida para essa carteira não está correta.',
			105: 'Não foi fornecido nenhuma senha para a carteira.',
			106: 'Antes que você possa utilizar essa carteira, você terá que abri-lá. Para assegurar que você tem acesso a essa carteira, você terá que fornecer a senha dessa carteira.',
			107: 'A carteira não contém essa conta.',
			108: 'A conta não pode ser removida. Provavelmente ela tem saldo maior que 0 XEMs ou é a conta primária.',
			109: 'Já existe uma conta com o mesmo nome. Por favor, escolha outro.',
			110: 'A carteira já contém essa conta.',
			111: 'O nome da carteira é um diretório.',
			112: 'A extensão do arquivo da carteira está incorreto.',
			113: 'A carteira não pode ser deletada.',
			121: 'O arquivo de contatos não existe.',
			122: 'O arquivo de contatos não foi criado.',
			123: 'O arquivo de contatos está corrompido. Por favor, recupere-o de um back-up que você deveria ter feito.',
			124: 'A senha para o arquivo de contatos não incorreta.',
			125: 'Não foi fornecido nenhuma senha para o arquivo de contatos.',
			127: 'Não existe esse endereço nos arquivos.',
			128: 'O endereço fornecido não é válido.',
			129: 'Outro arquivo de contatos já existe com esse nome. Por favor, escolha outro nome para esse arquivo.',
			130: 'Já existe esse contato nos arquivos.',
			131: 'O nome do arquivo de contatos é um diretório.',
			132: 'A extensão do arquivo de contatos está incorreta.',
			133: 'Não foi possível deletar o arquivo de contatos.',
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
			202: 'Não é possível enviar mensagem, porque o destinatário ainda não possui chave pública.',
			203: 'A conta não pode ser convertida em MultiSig, pois nem todos os consignatários são conhecidos. Eles ainda precisarão estarem na mesma carteira ou terem realizado pelo menos uma transação.',
			305: 'O NIS não está disponível. Tente reiniciar o cliente Nem. Se você estiver utilizando um NIS remoto, verifique se a configuração do hospedeiro e procure por erros de digitação ou utiliize outro NIS remoto.',
			306: 'Ocorreu um erro desconhecido. Talvez uma nova nova tentativa ou reiniciar o cliente/servidor dê certo; caso contrário, informe aos desenvolvedores do NEM no fórum oficial forum.ournem.com.',
			400: 'Está faltando algum parâmetro ou os dados estão incorretos.',
			401: 'Esta operação não pode ser completada, ela pode expor a chave privada enviando-a para um NIS remoto.',
			404: 'O arquivo solicitado não foi encontrado..',
			500: 'Ocorreu um erro desconhecido. Por favor, reinicie o programa, caso não resolva, contate os desenvolvedores através do fórum forum.ournem.com.',
			600: 'NCC requer que o NIS seja inicializado. Por favor, vá em cliente NCC para inicializar o nó local via menu superior direito.',
			601: 'O NIS já foi inicializado.',
			602: 'Quase pronto. O cliente NEM está carregando os blocos. A carteira se tornará funcional quando tiver o banco de dados completamente carregado.',
			699: 'O número de máximo de colheitadores no servidor foi atingido.',
			700: 'Falha na colheita. Geralmente esse problema está relacionado com o saldo de NEMs na conta. Para colheitar são necessários,  pelo menos, 10000 adquirido XEMs.',
			901: 'Erro na configuração do modo off-line.',
			1000: 'Chave privada e pública não combinam.',
			1001: 'Chave publica e endereço não combinam.',
			1002: 'O endereço não pertence a rede principal de peers.',
			1110: 'Specified broker storage is not open',
			1111: 'Specified trading storage is not open',
			1112: 'Wallet containing your trading account is not open',
			1203: 'O prazo final fornecido está no passado. O prazo limite deve estar dentro do período de um dia.',
			1204: 'O prazo final fornecido está no futuro. O prazo limite deve estar dentro do período de um dia.',
			1205: 'A sua conta não tem o saldo suficiente para realizar essa transação.',
			1206: 'Texto muito longo. Por favor, reduza o tamanho da mensagem.',
			1207: 'O Hash de transação já existe no banco de dados, na lista de transações não confirmadas.',
			1208: 'A assinatura da transação não pôde ser verificada.',
			1209: 'A data da ID de transação está muito no passado.',
			1210: 'A data da ID de transação está muito no futuro.',
			1219: 'A transação foi rejeitada pois o cache está muito cheio. Aumentando a taxa de transação, aumenta a possibilidade dessa transação  ser aceita.',
			1262: 'A conta de colheita segura não possue saldo igual a zero e não pode ser utilizada.',
			1263: 'Transferencia de importância foi rejeitada. Já existe uma operação de transferencia de importancia em andamento.',
			1264: 'Colheita delegada já está ativa.',
			1265: 'Colheita delegada NÃO está ativa e não pode ser desativada.',
			1266: 'Transação de transferência de importância (Colheita delegada) conflita com uma transação existente.',
			1271: 'Assinatura Multisig rejeitada. A conta atual não é uma conta consignatária de uma conta tipo Multisig.',
			1273: 'Assinatura de transação de conta Multisig rejeitada. Transaçao Multisig associada não é reconhecida pela rede Nem.',
			1274: 'Não é permitido transação para contas Multisig.',
			1275: 'Modificação de conta do tipo Multisig foi rejeitada. Uma das contas adicionadas já é consignatária.',
			1321: 'Conta desconhecida, Por favor, faça uma transação para conseguir uma chave pública.',
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
			success: 'Successo',
			unknown: 'Status desconhecido',
			unknownMessage: 'Ncc não conseguiu resposta em tempo hábil. A transacção pode ter sido enviada para a rede.<br /><br />Por favor, cheque as transações antes de tentar de novo.',
			appStatus: {
				nccUnknown: 'Estado do NCC desconhecido',
				nccUnavailable: 'NCC não inicializado',
				nccStarting: 'NCC está inicializando...',
				nisUnknown: 'Estado do NIS desconhecido',
				nisUnavailable: 'NIS não inicializado',
				nisStarting: 'NIS está inicializando...',
				notBooted: 'NIS requere inicialização. Por favor, abra a carteira para ativar o auto-boot ou inicialize o nó manualmente.',
				loading: 'Carregando blocos do banco de dados, no bloco: ',
				booting: 'NIS inicializando...',
				nisInfoNotAvailable: 'Informações do NIS não disponível. Recuperando informações...',
				synchronizing: 'NIS está sincronizando com o bloco {{1}}, encontrado {{2}} atrás.',
				daysBehind: {
					0: 'Menos de um dia',
					1: '1 dia',
					many: '{{1}} dias'
				},
				brokerUnavailable: 'The broker engine is not reachable',
				tradeSocketStopped: 'Trading updates unavailable.',
				synchronized: 'NIS está sincronizado!!',
				noRemoteNisAvailable: 'Não foi encontrado servidor NIS na rede. Você está conectado à internet?'
			},
			addressBook: 'Arquivo de contatos',
			password: 'Senha',
			passwordValidation: 'A senha não pode ser em branco ou vazia',
			address: 'Endereço',
			privateLabel: 'Identificação',
			publicLabel: 'Identificação pública',
			noCharge: 'A conta atual <b>NÃO</b> pode receber taxas de transações, uma conta do tipo Multisig a acoberta',
			fee: 'Taxa',
			multisigFee: 'Taxa do Multisig',
			useMinimumFee: 'Usar taxa minima',
			feeValidation: 'A taxa de transação não deve ser inferior a taxa mínima',
			justUse: 'Usar apenas',
			dueBy: 'Tempo de espera',
			minutes: 'minuto(s)',
			hours: 'hora(s)',
			hoursDue: 'Tempo para desativar',
			hoursDueExplanation: 'Se a transação não estiver incluida até a data limite, ela será rejeitada.',
			amount: 'Amount',
			price: 'Price',
			escrowAccount: 'Escrow account',
			withdrawalAccount: 'Withdrawal account',
			escrowAddress: 'Escrow address',
			notAuthorized: 'You should first setup User details.',
			pleaseSelect: 'Please select',
			closeButton: 'Fechar',
			saveButton: 'Save',
			cancelButton: 'Cancelar',
			sendButton: 'Enviar',
			account: 'Conta',
			thisAccount: 'Esta conta',
			warning: 'Aviso',
			newBuild: 'Nova BUILD',
			newBuildNumber: 'Há uma nova versão {{1}} disponivel para download. Acesse <a class="hyperlink--default", href="http://blog.nem.io">blog.nem.io</a> para detalhes',

		},
		transactionTypes: {
			20: 'TRANSAÇÕES DE VALORES',
			21: 'TRANSFERÊNCIAS DE IMPORTÂNCIA',
			22: 'MODIFICAÇÃO DE UMA CONTA MULTISIG',
			23: 'PROVISION NAMESPACE',
			24: 'MOSAIC CREATION',
			25: 'MOSAIC SUPPLY',
			40: 'ASSINATURA MULTISIG',
			50: 'TRANSAÇÃO MULTISIG',
			51: 'TRANSAÇÃO MULTISIG',
			52: 'TRANSAÇÃO MULTISIG',
			53: 'TRANSAÇÃO MULTISIG',
			54: 'TRANSAÇÃO MULTISIG',
			55: 'TRANSAÇÃO MULTISIG',

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
			pending: 'Pendente',
			outgoing: 'Enviada',
			incoming: 'Recebida',
			self: 'Enviada para si mesmo',
			importance: 'Transação de importância',
			modification: 'Agregação de modificação Multisig',
			provision: 'Provision Namespace',
			mosaicCreation: 'Mosaic Creation',
			mosaicSupply: 'Mosaic Supply'
		},
		modals: {
			error: {
				title: 'Oopa!',
				caption: 'ERRO {{1}}'
			},
			yikes: {
				title: 'Eita vidona!!!!!',
				caption: 'Codigo de informação {{1}}'
			},
			confirmDefault: {
				yes: 'Sim',
				no: 'Não'
			},
			initialBackup: {
				title: "Seja BEM VINDO ao Nem",
				content: "Você pode criar um arquivo de back-up no menu a sua extrema direita, no lado superior da tela. Para sua segurança, realize um back-up!"
			},
			settings: {
				title: 'Configurações',
				language: {
					label: 'Idioma'
				},
				remoteServer: {
					tabTitle: 'Servidor remoto',
					protocol: 'Protocolo',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Endereço do NIS',
					port: 'Porta',
					defaultPort: 'Usar a porta padrão.'
				},
				autoBoot: {
					tabTitle: 'Inicialização automática',
					name: 'Nome do nó',
					primaryAccount: 'Conta primária',
					auto: 'Inicialização automática quando abrir a carteira'
				},
				save: 'Salvar',
				saveSuccess: 'As configurações foram salvas!'
			},
			signToken: {
				title: "Registe um token usando a conta",
				label: "Token (url, frase, etc.)",
				signature: "Token registrado",
				sign: "Registrar"
			},
			multisig: {
				title: 'Converter conta para Multisig',
				multisigAccount: 'Conta Multisig',
				cosignatories: 'Endereços dos consignatários',
				labelDesc: 'Esta conta está identificada como {{1}}',
				nullLabelDesc: 'Esta conta não tem uma identificação',
				addCosignatory: '+ Adicinar um consignatário',
				convert: 'Converter',
				txConfirm: {
					title: 'Confirmar Conversão para conta Multisig',
					total: 'Total'
				},
				warning: 'A conta do tipo Multisig está na lista dos consignatários. Isso resultará no corte de acesso ao dinheiro da conta. Muito provavelmente você <b>NÃO QUER</b> fazer isso.',
				minCosignatoriesDefaultLabel: 'Usar número co-signatários padrão',
				minCosignatoriesRelativeLabel: 'relative change',
				minCosignatoriesLabel: 'Minimum number of cosignatories',
				minCosignatoriesZero: 'A utilização de zero fará com que seja registrados todos os co-signatários',
				minCosignatoriesOverflow: 'O número informado é superior ao máximo existente'
			},
			signMultisig: {
				title: 'Assinar transação Multisig',
				original: {
					from: 'Conta Multisig',
					to: 'Destinatário',
					amount: 'Quantidade',
					fee: 'Taxa',
					deadline: 'Prazo final'
				},
				multisigFees: 'Taxas Multisig',
				multisigTotal: 'Total',
				sender: 'Cosignatário',
				passwordValidation: 'A senha não deve ser vazia',
				sending: 'Enviando...',
				txConfirm: {
					title: 'Confirmar transação Multisig',
					message: 'Mensagem',
					encrypted: 'Mensagem criptografada',
					noMessage: 'Sem mensagem',

				}
			},
			sendNem: {
				title: 'Enviar XEM',
				sender: 'Remetente',
				thisAccount: 'Esta conta',
				labelDesc: 'Esta conta está identificada como {{1}}',
				nullLabelDesc: 'Esta conta não tem uma identificação',
				amount: 'Total',
				escrow: 'Escrow',
				other: 'Other',
				recipient: 'Destinatário',
				recipientValidation: 'Endereços de contas devem ter pelo menos 40 caracteres, excluindo o caractere - .',
				message: 'Mensagem',
				encrypt: 'Criptografar mensagem',
				sending: 'Enviando...',
				successMessage: 'Your transaction has been sent successfully! <br><br>Transaction hash: {{1}}',
				txConfirm: {
					title: 'Confirmar Transação',
					amount: 'Quantidade',
					to: 'Para',
					total: 'Total',
					message: 'Mensagem',
					encrypted: 'Mensagem está criptografada',
					noMessage: 'Sem mensagem',
					confirm: 'Confirmar',
					sending: 'Enviando...'
				},
				notBootedWarning: {
					title: 'O nó não foi inicializado!',
					message: 'O nó local precisa ser inicializado para poder realizar transações!'
				},
				bootingWarning: {
					title: 'O Nó está sendo inicializado',
					message: 'Por favor, espere até o nó inicializar completamente para poder enviar sua transação.'
				},
				loadingWarning: {
					title: 'Carregando blocos'
				},

			},
			clientInfo: {
				title: 'Informações do programa',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signatário',
				remoteServer: 'Servidor Remoto',
				local: 'Local',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Sincronizado',
				notSync: 'Não sincronizado',
				notConnected: 'Desconectado da nuvem de peers',
				loading: 'Carregando...'
			},
			transactionDetails: {
				title: 'Detalhes da transação',
				id: 'ID',
				hash: 'Hash',
				type: 'Tipo de transação',
				direction: 'Direção da transação',
				pending: 'Pendente',
				outgoing: 'Enviado',
				incoming: 'Recebido',
				self: 'Enviado para si mesmo',
				sender: 'Remetente',
				multisigAccount: 'Conta Multisig',
				issuer: 'Emissor',
				recipient: 'Destinatário',
				remote: 'Remoto',
				multisigMessage: 'Assinatura atual',
				message: 'Mensagem',
				noMessage: 'Sem mensagem',
				encrypted: 'Mensagem Criptografada',
				time: 'Data e hora',
				confirmations: 'Confirmações',
				confirmationsUnknown: 'Desconhecida(o)',
				amount: 'Quantidade',
				multiplier: 'Multiplier',
				innerFee: 'Taxas internas',
				multisigFees: 'Taxas Multisig',
				cosignatory: 'Cosignatário',
				namespace: 'Namespace',
				rentalFee: 'Rental fee',
				mosaicName: 'Mosaic Name',
				mosaicQuantity: 'Mosaic quantity',
				mosaicLevy: 'Mosaic levy',
				description: 'descrição',
				propertiesLabel: 'Propriedades',
				properties: {
					divisibility: 'Divisibilidade',
					initialSupply: 'Initial supply',
					supplyMutable: 'Is supply mutable',
					transferable: 'É trasferível'
				},
				supplyType: 'Supply type',
				supplyAmount: 'Supply amount',

			},
			accountDetails: {
				title: 'Detalhes da conta',
				label: 'Identificação',
				noLabel: 'Sem identificação',
				add: 'Adicionar ao arquivo de contatos',
				remove: 'Remover do arquivo de contatos',
				balance: 'Balanço',
				vested: 'Adquirido',
				importance: 'Importancia',
				publicKey: 'Chave Publica',
				noPublicKey: 'Sem chave públida',
				harvestedBlocks: 'Blocos colheitados'
			},
			bootLocalNode: {
				title: 'Inicializar nó local',
				account: 'Conta do nó local',
				noLabel: '<span class=\'null\'>&lt;Sem identificação&gt;</span>',
				wallet: 'Nome da Carteira',
				node: 'Nome para o nó',
				boot: 'Inicializar',
				booting: 'Inicializando...',
				warning: 'Aviso de inicialização',
				warningText: 'Você está tentando inicializar um nó <u>{{2}}</u><br/><br/>Inicializar um nó remoto é atualmente impossível com esse NCC.',
				warningStatement: 'Seu auto-inicializar está indicando verdadeiro e você está utilizando um nó remoto {{3}}.<br/><br/>Inicializar um nó remoto é atualmente impossível com esse NCC',
				warningQuestion: 'Você tem certeza que quer inicializar o nó <u>{{3}}</u> usando a chave privada da conta  {{1}} ({{2}} XEM)?<br><br> Isto revelará a <span class="sublabelWarning">chave privada</span> dessa conta  para o nó: <u>{{3}}</u>.'
			},
			closeWallet: {
				title: 'Fechar carteira',
				message: 'Confirmar o fechamento da carteira e o retorno à página inicial?'
			},
			createAccount: {
				title: 'Criar nova conta',
				label: 'Identificação',
				wallet: 'Carteira',
				successMessage: 'A conta {{1}} {{#2}}({{2}}){{/2}} foi criada! Por favor, guarde uma cópia em um local seguro.',
				create: 'Criar'
			},
			showPrivateKey: {
				title: 'Mostrar a chave PRIVADA da conta',
				message: 'Será exibido a chave privada dessa conta na tela, como texto. \nNo caso do seu sistema ter algum tipo de Malware, essa operação pode ser muito perigosa. \nVocê realmente tem certeza que quer exibir a chave privada?',
				publicKey: 'Chave Pública',
				privateKey: 'Chave Privada',
				show: 'Mostrar a chave'
			},
			showRemotePrivateKey: {
				title: 'Mostrar a chave PRIVADA da conta remota',
				message: 'Será exibido a chave privada da conta remota na tela, como texto. No caso de qualquer tipo de infecção digital presente no sistema, essa ação poderá  ser perigosa. Você tem certeza que você quer mesmo fazer isso?',

			},
			addAccount: {
				title: 'Adicionar uma Carteira existente',
				privateKey: 'Chave privada',
				wallet: 'Carteira',
				successMessage: 'A conta {{1}} {{#2}}({{2}}){{/2}} foi criada! Por favor, realize um backup e guarde-o em local seguro!',
				add: 'Criar',
				label: 'Identificação'
			},
			setPrimary: {
				title: 'Definir como conta primária',
				account: 'Conta que será definida como primária',
				noLabel: '<span class=\'null\'>&lt;Sem identificação&gt;</span>',
				wallet: 'Carteira',
				successMessage: 'Conta {{1}} {{#2}}({{2}}){{/2}} foi definida como primária!',
				set: 'Definir como conta primária'
			},
			changeWalletName: {
				title: 'Renomear Carteira',
				wallet: 'Nome atual',
				newName: 'Novo nome',
				successMessage: 'O nome <em>{{1}}</em> foi alterado para <em>{{2}}</em>',
				change: 'Renomear'
			},
			changeWalletPassword: {
				title: 'Trocar a senha',
				wallet: 'Nome da carteira',
				password: 'Senha atual',
				newPassword: 'Nova senha',
				confirmPassword: 'Confirmar nova senha',
				successMessage: 'Nova senha definida',
				change: 'Trocar',
				passwordNotMatchTitle: 'Oopa!',
				passwordNotMatchMessage: 'As senhas não conferem. Por favor, tente novamente.'
			},
			changeAccountLabel: {
				title: 'Trocar identificação da conta',
				label: 'Nova identificação',
				wallet: 'Carteira',
				successMessage: 'A Identificação {{1}} foi alterada para {{2}}',
				change: 'Trocar'
			},
			removeAccount: {
				title: 'Remover conta',
				label: 'Nova identificação',
				wallet: 'Carteira',
				warning: 'Esta operacao não pode ser desfeita.',
				successMessage: 'A conta {{1}} {{#2}}({{2}}){{/2}} foi removida!',
				remove: 'Remover'
			},
			nisUnavailable: {
				title: 'NIS não está disponível',
				message: 'NIS não está respondendo, aguardando conexão'
			},
			shutdown: {
				title: 'Fechar programa',
				message: 'Tem certeza que quer fechar o programa (NCC)?'
			},
			activateDelegated: {
				title: 'Ativar colheita remota',
				wallet: 'Carteira',
				activate: 'Ativar',
				warningText: 'A ativação leverá 6 houras (360 blocos). A ativação não vaiiniciar automaticamente à colheita.',
				delegatedAccount: 'Chave pública da conta remota',
				builtIn: 'Está agragada à carteira',

			},
			deactivateDelegated: {
				title: 'Desativar colheita remota',
				wallet: 'Carteira',
				deactivate: 'Desativar',
				warningText: 'A Desativação levará 6 horas (360 blocos).'
			},
			startRemote: {
				title: 'Começar colheita remota',
				wallet: 'Carteira',
				start: 'Iniciar'
			},
			stopRemote: {
				title: 'Parar colheita remota',
				wallet: 'Carteira',
				stop: 'Parar'
			},
			logoutWarning: {
				leavePage: "Você está saindo da carteira. \nSe você deixá-la assim, outras pessoas ainda poderão acessá-lá por esse computador. Para sair da conta, por favor, clique em \'Fechar carteira\' no menu superior direito, antes de você fechar a aba de seu navegador"
			},
			addContact: {
				title: 'Adicionar contato',
				add: 'Criar'
			},
			editContact: {
				title: 'Editar contato',
				saveChanges: 'Salvar modificações'
			},
			removeContact: {
				title: 'Remover contato',
				remove: 'Remover'
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
			importSuccess: 'Carteira importada!',
			nav: {
				start: 'Início',
				about: 'Sobre NEM',
				settings: 'Configurações'
			},
			main: {
				leftTitle: 'Primeira vez?<br>Crie uma carteira <em>NEM</em>!',
				leftButton: 'Criar nova carteira',
				walletNamePlh: 'Nome para a carteira',
				passwordPlh: 'Senha',
				confirmPasswordPlh: 'Confirmar senha',
				create: 'Criar',
				creating: 'Criando...',
				rightTitle: 'Já possui uma carteira?',
				rightButton: 'Abrir carteira existente',
				openButton: 'Abrir',
				walletsFound: 'Encontrada(s) <strong>{{1}}</strong> <em>carteira(s)</em>',
				copyright: 'Fotografado por <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'Como o NCC funciona?',
					description: '<em>Segurança</em> baseada em forte criptografia para evitar roubo de moedas &amp; ativos.'
				}, {
					title: 'NEM infraestrutura de servidores remotos',
					description: 'Utilizando um NIS remotor, você não precisa sicronizar o blockchain na inicialização.',

				}, {
					title: 'Colheita Remota',
					description: 'Com a colheita Remota, você pode colheitar de servidores NIS remotos!',

				}, {
					title: 'Transações de multi assinatura',
					description: 'Assegure seu Xem e seus investimentos via transações de multi assinaturas do blockchain.',

				}, {
					title: 'Suporte a sua Linguagem nativa',
					description: 'A interface do usuário do NEM suporta multiplas linguagens. Veja em "Opções".'
				}, {
					title: 'Voce tem alguma pergunta ou quer realizar um feedback ?',
					description: '<a href="http://forum.ournem.com">forum.ournem.com</a> | #ournem no freenode.org | Telegram',

				}]
			},
			about: {
				sections: [{
					title: 'Como o NCC funciona?',
					paragraphs: [
						'<strong>NCC</strong> providencia acesso aos seus ativos e moedas como uma carteira de moeda digital tradicional faz. Você pode',
						'<strong>NCC</strong> requerer acesso a um servidor <strong>NIS</strong> para operar. O padrão é ter um servidor local ativo (está instalado junto com o <strong>NCC</strong>)',
						'Você também pode configurar acesso a um servidor remoto <strong>NIS</strong>.'
					],
					listItems: [
						'Tenha múltiplas carteiras',
						'Defina múltiplas carteiras para serem incluídas em uma carteira'
					]
				}, {
					title: 'O que é &#42;NIS?',
					paragraphs: [
						'Este componente é responsável por manter a nuvem <strong>NEM</strong> viva.',
						'Quanto mais servidores<strong>NIS</strong>, melhor será a segurança da rede.',
						'<strong>NIS</strong> é o ponto de acesso a nuvem <strong>NEM</strong> de servidores.'
					],
					legend: '<strong>&#42;NIS</strong> significa <strong>NEM Infraestrutura de Servidores</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2015. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'Aproximadamente {{1}} dia(s) atrás',
			lastAccessJustNow: 'Agora a pouco',
			lastAccessTooltip: 'Ultimo acesso em {{1}}',
			primary: 'primário',
			primaryShort: '1º',
			noLabel: '<Sem identificação>',
			copiedToClipboard: 'Endereço copiado para a área de transfêrencia!',
			actions: {
				refreshInfo: 'Atualizar informações',
				bootLocalNode: 'Inicializar nó',
				changeWalletName: 'Trocar o nome da carteira',
				changeWalletPassword: 'Trocar a senha da carteira',
				mergeWallets: 'Mesclar carteiras',
				exportWallet: 'Exportar carteira',
				createAccount: 'Criar uma nova Conta',
				createRealAccountData: 'Criar dados da conta real',
				verifyRealAccountData: 'Verificar dados da conta Verdadeira',
				showPrivateKey: 'Mostrar a chave PRIVADA da conta',
				showRemotePrivateKey: 'Mostrar a chave PRIVADA da conta Remota',
				getXemInExchangeForFiat: 'Get XEM in exchange for Fiat',
				viewDetails: 'Ver detalhes da conta',
				addAccount: 'Adicionar uma conta existente',
				changeAccountLabel: 'Renomear carteira',
				setPrimary: 'Definir como conta primária',
				removeAccount: 'Remover Conta',
				clientInfo: 'Informações do Programa',
				closeWallet: 'Fechar carteira',
				closeProgram: 'Fechar programa',
				copyClipboard: 'Copiar para a área de transferência',
				copyDisabled: 'Para copiar um endereço, é necessári oter o Adobre Flash instalado.',
				convertMultisig: 'Converter outra conta para o tipo Multisig',
				bootBroker: 'Boot broker'
			},
			nav: [
				'Painel Administrativo',
				'Mensagens',
				'Arquivo de contatos',
				'Transações',
				'Blocos colhidos',
				'Trading',
				'Financial transactions',
				'Fiat panel',
				'Exchange de ativos',
				'Novidades',
				'Aplicações',
				'Contas',
				'Configurações',
				'Fechar programa',
			],
			bootNodeWarning: 'Um nó local precisa ser inicializado para poder utilizar o NIS.'
		},
		dashboard: {
			assets: {
				title: 'Your Mosaics'
			},
			importance: {
				title: 'Pontuação de importância',
				unknown: 'Status desconhecido',
				start: 'Começar colheita local',
				harvesting: 'colheitando',
				stop: 'Parar colheita local',
				description: 'Importância para a nuvem de peers',
				remoteHarvest: {
					title: 'Colheita Delegada',
					activate: 'Ativar colheita delegada',
					activating: 'Ativando a colheita delegada...',
					active: 'A colheita delegada está ativa',
					deactivate: 'Desativar a colheita delegada',
					deactivating: 'Desativando a colheita delegada...',
					startRemoteHarvesting: 'Iniciar a colheita delegada',
					remotelyHarvesting: 'Colheitando remotamente!',
					stopRemoteHarvesting: 'Parar a colheita delegada',
					multisigInfo: 'Activation or deactivation of a delegated harvesting for a multisig account must be done from one of cosignatory accounts',

				}
			},
			transactions: {
				title: 'Transações recentes',
				sendNem: 'Enviar XEM',
				signMultisig: 'ASSINAR',
				balance: 'Saldo atual',
				loading: 'Carregando balanço',
				accountCosignatories: 'Conta Multisig',
				accountCosignatoriesView: 'ver cosignatários',
				vestedBalance: 'Quantidade investida',
				syncStatus: '(no bloco {{1}}{{#2}} : encontrado a {{3}} dias atrás{{/2}})',
				notSynced: 'Pode estar impreciso, NIS aind não está sincronizado',
				unknown: 'Desconhecido',
				columns: [
					'',
					'Data',
					'Destinatário',
					'Mensagem',
					'',
					'Detalhes',
					'Confirmações',
					'Taxa',
					'Quantidade'
				],
				noMessage: 'Sem mensagem',
				encrypted: 'Mensagem criptografada',
				view: 'Detalhes',
				confirmationsUnknown: 'Desconhecido(a)',
				pending: 'Pendente',
				seeAll: 'Ver todas as transações',
				noTransactions: 'Nenhuma transação realizada ainda.'
			},
			nemValue: {
				title: 'Estatísticas desta carteira'
			},
			messages: {
				titleTooltip: 'Mensagens'
			},
			news: {
				titleTooltip: 'Novidades'
			},
			notAvailable: 'Não disponível na versão Alfa'
		},
		transactions: {
			title: 'Transações',
			sendNem: 'Enviar XEM',
			balance: 'Saldo',
			filters: {
				confirmed: 'Confirmadas',
				unconfirmed: 'Não confirmadas',
				incoming: 'Recebidas',
				outgoing: 'Enviadas'
			},
			table: {
				columns: [
					'',
					'Tempo',
					'Remetente/Destinatário',
					'Mensagem',
					'',
					'Detalhes',
					'Confirmações',
					'Taxa',
					'Quantidade'
				],
				noMessage: 'Sem mensagem',
				encrypted: 'Mensagem criptografada',
				view: 'Detalhes',
				confirmationsUnknown: 'Desconhecido(a)',
				pending: 'Pendente',
				noTransactions: 'Nenhuma transação realizada.',
				loading: 'Carregando mais transações...'
			}
		},
		namespacesmosaics: {
			title: 'Namespaces & Mosaics',
			newNamespace: 'New Namespace',
			newMosaic: 'New Mosaic',
			balance: 'Saldo',
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
			title: 'Blocos colhidos',
			feeEarned: 'Taxas ganhas com a colheita dos últimos 25 blocos',
			unknown: '...',
			table: {
				columns: [
					'Altura do bloco',
					'Hora',
					'Dificuldade do bloco',
					'Taxa'
				],
				noBlocks: 'Não há blocos colhidos',
				loading: 'Ver blocos colhidos anteriormente'
			},
			harvesting: {
				unknown: 'Status desconhecido',
				start: 'Iniciar a colheita',
				harvesting: 'Colheitando',
				stop: 'Parar de colheitar',
				remoteHarvest: {
					startRemoteHarvesting: 'Iniciar a colheita delegada',
					stopRemoteHarvesting: 'Parar a colheita delegada'
				}
			}
		},
		addressBook: {
			title: 'Lista de contatos',
			addContact: 'Adicinar contatos',
			table: {
				columns: [
					'Endereço do contato',
					'Identificação privada',
					'Identificação pública'
				],
				noContacts: 'Não existem contatos na sua lista de contatos...'
			},
			noLabel: 'Sem identificação',
			sendNem: 'Enviar XEM',
			edit: 'Editar',
			remove: 'Remover'
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
			title: 'Opções',
			settings: [{
				name: 'Idioma'
			}],
			save: 'Salvar modificações',
			saveSuccess: 'Modificações salvas'
		}
	}
});