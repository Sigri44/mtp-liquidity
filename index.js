const mtpTickers = {}
const mtpRpcUri = 'https://api.mtpelerin.com/rpc/'
const mtpTokensUri = 'https://api.mtpelerin.com/currencies/tokens'
const mtpCurrenciesUri = 'https://api.mtpelerin.com/currency_rates/last'
const oldOfframpEthAddress = '0x7fb610713c8404e21676c01c271bb662df6eb63c'
const newOfframpEthAddress = '0x9a760aa1fe631fd9ac0aee0965736121c7c132cc'
const automateEthAddress = '0x4f15818dc2Ae5FA84D519D88Cb2CAAe9cd18EE6d'
const automateThdxAddress = '0xe94799184dfe9a61016c43643029de61b347064c'
const offrampBtcAddress = '3LgdKdB9x42m4ujae78NcwUXjYW3z45KrX'
const automateBtcAddress = 'bc1q6e8d0vqketn9p7t9nkukcfz4aupereap3r7j6x'
const offrampXtzAddress = 'tz1X59JYm8fSFPo3H18wh7VxiRgDCPXMttPM'
const automateXtzAddress = 'tz1RmwCe94mBkbnwK8nBd5PHNmy6Q38kSx3u'
const basicAbi = ["function name() view returns (string)","function symbol() view returns (string)","function balanceOf(address) view returns (uint)"]
const jFiatsAbiV20 = [{"inputs":[],"name":"totalAvailableLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"overCollateralization","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokensCapacity","outputs":[{"internalType":"uint256","name":"maxCapacity","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"syntheticTokens","type":"uint256"}],"name":"getRedeemTradeInfo","outputs":[{"internalType":"uint256","name":"collateralAmountReceived","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"view","type":"function"}]
const jFiatsAbiV21 = [{"inputs":[],"name":"maxTokensCapacity","outputs":[{"internalType":"uint256","name":"maxCapacity","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_syntTokensAmount","type":"uint256"}],"name":"getRedeemTradeInfo","outputs":[{"internalType":"uint256","name":"collateralAmountReceived","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"view","type":"function"}]
const automateCheckLiquidityValue = 4000

const rpcUris = {
    "mainnet" : {
        "type" : "custom",
        "uri" : "https://rpc.ankr.com/eth"
    },
    "xdai_mainnet" : {
        "type" : "custom",
        "uri" : "https://gnosis.drpc.org"
    },
    "bsc_mainnet" : {
        "type" : "mtp",
        "uri" : "https://bsc-dataseed2.defibit.io"
    },
    "matic_mainnet" : {
        "type" : "mtp",
        "uri" : "https://rpc.ankr.com/polygon"
    },
    "arbitrum_mainnet" : {
        "type" : "custom",
        "uri" : "https://arbitrum.llamarpc.com"
    },
    "optimism_mainnet" : {
        "type" : "custom",
        "uri" : "https://1rpc.io/op"
    },
    "avalanche_mainnet" : {
        "type" : "mtp",
        "uri" : "https://rpc.ankr.com/avalanche"
    },
    "fantom_mainnet" : {
        "type" : "mtp",
        "uri" : "https://rpcapi.fantom.network"
    },
    "rsk_mainnet" : {
        "type" : "mtp",
        "uri" : "https://mycrypto.rsk.co"
    },
    "tezos_mainnet" : {
        "type" : "custom",
        "uri" : "https://api.tzkt.io/v1"
    },
}

const collateralJarvis = {
	"matic_mainnet" : {
		"version": "2.1",
		"tokens": {
			"jAUD": "0x36572797Cc569A74731E0738Ef56e3b8ce3F309c",
			"jGBP": "0x36d6D1d6249fbC6EBd0fC28fd46C846fB69b9074",
			"jCAD": "0x06440a2DA257233790B5355322dAD82C10F0389A",
			"jCHF": "0x8734CF40A402D4191BD4D7a64bEeF12E4c452DeF",
			"jEUR": "0x65a7b4Ff684C2d08c115D55a4B089bf4E92F5003",
			"jJPY": "0xAEc757BF73cc1f4609a1459205835Dd40b4e3F29",
			"jSEK": "0xc8442072CF1E131506eaC7df33eA8910e1d5cFDd",
			"jSGD": "0xBE813590e1B191120f5df3343368f8a2F579514C",
		},
	},
	"bsc_mainnet" : {
		"version": "2.0",
		"tokens": {
			"jCHF": "0x50b38c49bda93f10a66a3139e8de6495bff4a6ac",
			"jEUR": "0x6b4ad695f63a290479448fdd1d3be83c62d5a2cc",
			"jGBP": "0x91faa2c24ad3a7272e7bc693dee628b175470266",
			"jZAR": "0x3b95929f1718654b9338490abbe26f53f56c28d0",
		},
	},
	"xdai_mainnet" : {
		"version": "2.0",
		"tokens": {
			"jCHF": "0x9fbaD00ae18FAe064C728E6B535a6cB950c8C40A",
			"jEUR": "0x0aA7e2A631198ba957f8335a6FAC6F3B8F53bD0E",
		},
	},
	// "avalanche_mainnet" : {
	// 	"version": "2.0",
	// 	"tokens": {
	// 		"jCHF": "0x9fbad00ae18fae064c728e6b535a6cb950c8c40a",
	// 		"jEUR": "0x0aA7e2A631198ba957f8335a6FAC6F3B8F53bD0E",
	// 	},
	// },
	"avalanche_mainnet" : {
		"version": "2.1",
		"tokens": {
			"jCHF": "0xBAe7aD32CB5bb34416D98971e68f3693B0fa7787",
			"jEUR": "0x8E10F9df88d7C89B8f468D1aA3D3867dae79d155",
		},
	},
	"optimism_mainnet" : {
		"version": "2.1",
		"tokens": {
			"jEUR": "0xb145fb1ef8e3b0202af4012f6bebc00e6882a10d",
		},
	},
	// "arbitrum_mainnet" : {
	// 	"version": "2.1",
	// 	"tokens": {
	// 		"jEUR": "0xdb97f7a816e91a94ef936145e1b9faee14b8c25c",
	// 	},
	// },
}

/*
function forceRecalculateBitcoin() {
	// Balances
	let offrampBalance = Number($("#002 span.old_offramp_balance").text())
	let automateBalance = Number($("#002 span.automate_balance").text())
	let totalBalance = offrampBalance + automateBalance
	$("#002 span.total_balance").text(totalBalance.toFixed(4))

	// Values
	let oldOfframpValue = Number($("#002 span.old_offramp_value").text())
	let automateValue = Number($("#002 span.automate_value").text())
	let totalValue = oldOfframpValue + automateValue
	$("#002 span.crypto_value").text(totalValue.toFixed(2))
}
*/

function parseBitcoinBlockchain(btcAddress) {
	return fetch("https://blockchain.info/q/addressbalance/" + btcAddress)
	.then(function(response) {
		return response.json()
	})
	.then(function(json) {
		const balance = parseInt(json, 10) / 100000000

		if (btcAddress === offrampBtcAddress) {
			let oldOfframpBalance = balance.toFixed(4)
			let oldOfframpValue = oldOfframpBalance * mtpTickers["BTCEUR"] * mtpTickers["EURUSD"]

			$("#002 span.old_offramp_balance").text(oldOfframpBalance)
			$("#002 span.old_offramp_value").text(oldOfframpValue.toFixed(2))
		} else {
			let automateBalance = balance.toFixed(4)
			let automateValue = automateBalance * mtpTickers["BTCEUR"] * mtpTickers["EURUSD"]

			$("#002 span.automate_balance").text(automateBalance)
			$("#002 span.automate_value").text(automateValue.toFixed(2))

			// Optimize
			//forceRecalculateBitcoin()

            // Balances
            let oldOfframpBalance = Number($("#002 span.old_offramp_balance").text())
            let totalBalance = oldOfframpBalance + Number(automateBalance)
            $("#002 span.total_balance").text(totalBalance.toFixed(4))

            // Values
            let oldOfframpValue = Number($("#002 span.old_offramp_value").text())
            let totalValue = oldOfframpValue + Number(automateValue)
            $("#002 span.crypto_value").text(totalValue.toFixed(2))
            $("#002 span.total_value").text(totalValue.toFixed(2))
		}
	})
}

const getBitcoinBalance = async () => {
	await parseBitcoinBlockchain(offrampBtcAddress)
	await parseBitcoinBlockchain(automateBtcAddress)
}

const getTokensBalance = async (token, i) => {
	if (token.network === 'bitcoin_mainnet') {
		await getBitcoinBalance()
	} else {
		let oldOfframpBalanceFormatted = 0
		let newOfframpBalanceFormatted = 0
		let automateBalanceFormatted = 0

		let toFixed = 4
		if (token.isStable) {toFixed = 2}

		if (token.network === "tezos_mainnet") {
		    let endpoint = rpcUris[token.network]["uri"]

		    if (token.address === '0x0000000000000000000000000000000000000000') {
				var oldOfframpBalance = await fetch(endpoint + '/accounts/' + offrampXtzAddress + "/balance")
				.then(function(response) {return response.json()})
				var automateBalance = await fetch(endpoint + '/accounts/' + automateXtzAddress + "/balance")
				.then(function(response) {return response.json()})
		    } else {
				var oldOfframpBalance = await fetch(endpoint + '/tokens/balances?account=' + offrampXtzAddress + '&token.contract=' + token.address)
				.then(function(response) {return response.json()})
				var automateBalance = await fetch(endpoint + '/tokens/balances?account=' + automateXtzAddress + '&token.contract=' + token.address)
				.then(function(response) {return response.json()})

				oldOfframpBalance = oldOfframpBalance[0].balance
				automateBalance = automateBalance[0].balance
		    }

		    oldOfframpBalanceFormatted = Number(oldOfframpBalance / 1000000)
		    automateBalanceFormatted = Number(automateBalance / 1000000)
		} else {
		    let endpoint = getRpcEndpoint(token.network)

		    const provider = new ethers.providers.JsonRpcProvider(endpoint)

		    if (token.address === '0x0000000000000000000000000000000000000000') {
				const oldOfframpBalance = await provider.getBalance(oldOfframpEthAddress)
				const newOfframpBalance = await provider.getBalance(newOfframpEthAddress)
				const automateBalance = await provider.getBalance(automateEthAddress)

				oldOfframpBalanceFormatted = Number(ethers.utils.formatEther(oldOfframpBalance))
				newOfframpBalanceFormatted = Number(ethers.utils.formatEther(newOfframpBalance))
				automateBalanceFormatted = Number(ethers.utils.formatEther(automateBalance))
		    } else {
				const contract = new ethers.Contract(token.address, basicAbi, provider)

				const oldOfframpBalance = await contract.balanceOf(oldOfframpEthAddress)
				const newOfframpBalance = await contract.balanceOf(newOfframpEthAddress)
				const automateBalance = await contract.balanceOf(automateEthAddress)

				// THDX
				/*if (token.address === "0x89d71DfbDD6ebeCd0dfe27D55189F903169d2991") {
				    automateBalance = await contract.balanceOf(automateThdxAddress)
				}*/

				oldOfframpBalanceFormatted = Number(ethers.utils.formatUnits(oldOfframpBalance, token.decimals))
				newOfframpBalanceFormatted = Number(ethers.utils.formatUnits(newOfframpBalance, token.decimals))
				automateBalanceFormatted = Number(ethers.utils.formatUnits(automateBalance, token.decimals))
		    }
		}

		const totalBalance = oldOfframpBalanceFormatted + newOfframpBalanceFormatted + automateBalanceFormatted
		const totalBalanceFormatted = totalBalance.toFixed(toFixed)
		
		tickerValue = oldOfframpValue = newOfframpValue = automateValue = 0

		// Values
		if (mtpTickers[token.symbol + "EUR"] === undefined) {
			console.log("DEBUG::mtpTickers[token.symbol]::" + token.symbol, mtpTickers[token.symbol])
			oldOfframpValue = Number(-1)
			newOfframpValue = Number(-1)
			automateValue = Number(-1)
		} else {
			tickerValue = mtpTickers[token.symbol + "EUR"]
			
			oldOfframpValue = tickerValue * oldOfframpBalanceFormatted * mtpTickers["EURUSD"]
			newOfframpValue = tickerValue * newOfframpBalanceFormatted * mtpTickers["EURUSD"]
			automateValue = tickerValue * automateBalanceFormatted * mtpTickers["EURUSD"]
		}

		const totalValue = oldOfframpValue + newOfframpValue + automateValue

		const oldOfframpValueFormatted = oldOfframpValue.toFixed(2)
		const newOfframpValueFormatted = newOfframpValue.toFixed(2)
		const automateValueFormatted = automateValue.toFixed(2)
		const totalValueFormatted = totalValue.toFixed(2)

		$("#" + i +" span.old_offramp_balance").text(oldOfframpBalanceFormatted.toFixed(toFixed))
		$("#" + i +" span.new_offramp_balance").text(newOfframpBalanceFormatted.toFixed(toFixed))
		$("#" + i +" span.automate_balance").text(automateBalanceFormatted.toFixed(toFixed))
		$("#" + i +" span.total_balance").text(totalBalanceFormatted)

		$("#" + i +" span.old_offramp_value").text(oldOfframpValueFormatted)
		$("#" + i +" span.new_offramp_value").text(newOfframpValueFormatted)
		$("#" + i +" span.automate_value").text(automateValueFormatted)
		$("#" + i +" span.total_value").text(totalValueFormatted)

		if (token.isStable) {
			$("#" + i +" span.stable_value").text(totalValueFormatted)
		} else {
			$("#" + i +" span.crypto_value").text(totalValueFormatted)
		}
	}
}

const getTokens = async () => {
	// Get MtP tickers
	await getCurrencyRates()

	// Get MtP tokens
	const response = await fetch(mtpTokensUri)
	const tokens = await response.json()

	for (i in tokens) {
		// Remove LN network
		if (i != '080' && i < '083') {
			// Fill basic informations
			document.getElementsByTagName("tbody")[0].innerHTML += '<tr id="' + i + '" class="row_crypto">'
			+ '<td class="network hidden">' + tokens[i].network + '</td>'
			+ '<th scope="row">' + i + '</th>'
			+ '<td class="symbol">' + tokens[i].symbol + '</td>'
			+ '<td><span class="old_offramp_balance"></span> (<span class="old_offramp_value"></span> $)</td>'
			+ '<td><span class="new_offramp_balance"></span> (<span class="new_offramp_value"></span> $)</td>'
			+ '<td><span class="automate_balance"></span> (<span class="automate_value"></span> $)</td>'
			+ '<td><span class="total_balance"></span> (<span class="total_value"></span> $)</td>'
			+ '<td><span class="stable_value" class="right">0</span> $</td>'
			+ '<td><span class="crypto_value" class="right">0</span> $</td></tr>'

			// Fill tokens balance
			getTokensBalance(tokens[i], i)

			// TODO : Limit debug trace
			// if (i == '001') {break}
		}
    }

	// Add filter menu
	addFilterMenu();
}

function getRpcEndpoint(network) {
    if (rpcUris[network]["type"] === "custom") {
        return rpcUris[network]["uri"]
    } else {
        return mtpRpcUri + network
    }
}

function calculateLiquidity() {
    let total = totalValue = stableTotal = cryptoTotal = totalOldOfframp = totalNewOfframp = totalAutomate = 0

    // Reset total liquidity
    $(".total_liquidity span").each(function(i, span) {
    	$(span).empty()
    })

	$(".row_crypto").each(function(i, row) {
		totalValue = stableValue = cryptoValue = 0

		stableValue = Number($(this).find(".stable_value")[0].innerHTML)
		stableTotal += stableValue

		cryptoValue = Number($(this).find(".crypto_value")[0].innerHTML)
		cryptoTotal += cryptoValue

		totalValue = stableValue + cryptoValue

		let network = $(this).find(".network").text()
		let oldNetwork = $("#total_" + network)
		let oldNetworkValue = Number(oldNetwork[0].innerHTML)

		let newNetworkValue = oldNetworkValue + totalValue
		oldNetwork.text(newNetworkValue.toFixed(2))
		total += totalValue
		
		// Wallet value
		oldOfframpValue = Number($(this).find(".old_offramp_value")[0].innerHTML) 
		totalOldOfframp += oldOfframpValue
		
		newOfframpValue = Number($(this).find(".new_offramp_value")[0].innerHTML) 
		totalNewOfframp += newOfframpValue
		
		automateValue = Number($(this).find(".automate_value")[0].innerHTML) 
		totalAutomate += automateValue
	})

    $('#total_old_offramp').text(totalOldOfframp.toFixed(2))
    $('#total_new_offramp').text(totalNewOfframp.toFixed(2))
    $('#total_automate').text(totalAutomate.toFixed(2))

    $('#total_stable').text(stableTotal.toFixed(2))
    $('#total_crypto').text(cryptoTotal.toFixed(2))
    $('#total').text(total.toFixed(2))
}

function colorizeRows() {
	// Colorize network
	$(".network").each(function(i,item) {
		let network = item.innerHTML

		switch (network) {
			case "arbitrum_mainnet":
				$(this).parent().addClass("arbitrum")
				break
			case "avalanche_mainnet":
				$(this).parent().addClass("avalanche")
				break
			case "bitcoin_mainnet":
				$(this).parent().addClass("bitcoin")
				break
			case "bsc_mainnet":
				$(this).parent().addClass("bsc")
				break
			case "fantom_mainnet":
				$(this).parent().addClass("fantom")
				break
			case "mainnet":
				$(this).parent().addClass("ethereum")
				break
			case "matic_mainnet":
				$(this).parent().addClass("polygon")
				break
			case "optimism_mainnet":
				$(this).parent().addClass("optimism")
				break
			case "rsk_mainnet":
				$(this).parent().addClass("rsk")
				break
			case "tezos_mainnet":
				$(this).parent().addClass("tezos")
				break
			case "xdai_mainnet":
				$(this).parent().addClass("gnosis")
				break
			default:
		}
    })
}

function colorizeValues() {
	// Get max value in stable and crypto
	let averageStable = Math.max.apply(Math, $(".stable_value").map(function(){ return $(this).text(); }).get()) / 2
	let averageCrypto = Math.max.apply(Math, $(".crypto_value").map(function(){ return $(this).text(); }).get()) / 2

	// Colorize stable values
	$(".stable_value").each(function(i,item) {
		let value = Number(item.innerHTML)
		let rgb = setRgbGradient(value, averageStable)
		$(this).parent().css("background-color", "rgb(" + rgb + ")")
	})

	// Colorize crypto values
	$(".crypto_value").each(function(i,item) {
		let value = Number(item.innerHTML)
		let rgb = setRgbGradient(value, averageCrypto)
		$(this).parent().css("background-color", "rgb(" + rgb + ")")
	})
}

function colorizeAutomate() {
	// For each id "automate_value", if amount is > 1000, colorize cell in red color
	$(".automate_value").each(function(i,item) {
		let value = Number(item.innerHTML)
		if (value < automateCheckLiquidityValue) {
			// $(this).parent().css("background-color", "rgb(255,124,0)")
			$(this).css({
                "animation": "blinking 2s infinite",
				"font-weight": "bold"
            })
		}
	})
}

function colorizeTotalBalance() {
    // For each id "automate_value", if amount is < automateCheckLiquidityValue, blink text in black and red
    $(".total_value").each(function(i,item) {
        let value = Number(item.innerHTML)
        if (value > automateCheckLiquidityValue) {
			//$(this).parent().css("background-color", "rgb(0,255,0,0.5)")
            $(this).css({
				"animation": "blinking2 2s infinite",
				"font-weight": "bold"
            })
        }
    })
}

function setRgbGradient(value, average) {
	value--;

	var r,g,b;

	if (value < average) {
		// green to yellow
		r = Math.floor(255 * (value / average));
		g = 255;
	} else {
		// yellow to red
		r = 255;
		g = Math.floor(255 * ((average - value % average) / average));
	}
	b = 0;

	return r + "," + g + "," + b;
}

const checkMintingCollateralLiquidity = async () => {
	for (const network in collateralJarvis) {
		// Clean table
		$("." + network).empty()

		let endpoint = getRpcEndpoint(network)
		const provider = new ethers.providers.JsonRpcProvider(endpoint)

		var abi = undefined

		switch (collateralJarvis[network].version) {
			case "2.0":
				abi = jFiatsAbiV20
				break
			case "2.1":
				abi = jFiatsAbiV21
				break
			default:
		}
  
		// Create an array to hold the promises
		const promises = []

		Object.keys(collateralJarvis[network].tokens).forEach(async (token) => {
			let contractAddress = collateralJarvis[network].tokens[token]
			const contract = new ethers.Contract(contractAddress, abi, provider)

			let promise
			switch (collateralJarvis[network].version) {
				case "2.0":
					promise = contract.totalAvailableLiquidity().then(async (totalAvailableLiquidity) => {
						const overCollateralization = await contract.overCollateralization();

                        let mintableValue = totalAvailableLiquidity / overCollateralization
                        let mintableAmount = mintableValue / mtpTickers[token + "EUR"]

                        return { mintableAmount, token, network }
					})
					break
				case "2.1":
					promise = contract
						.maxTokensCapacity()
						.then((collateralAmount) => {
							let mintableAmount = Number(ethers.utils.formatEther(collateralAmount))

							return { mintableAmount, token, network }
						})
					break
				default:
			}

			promises.push(promise);
		});

		const result = await Promise.all(promises);

		result.forEach(({ mintableAmount, token, network }) => {
			$("." + network).append(
				'<div class="col center borderLine">Mint : <span id="minting_' +
				network +
				"_" +
				token +
				'" class="left">' +
				mintableAmount.toFixed(2) +
				'</span><br>' +
				'Burn : <span id="burning_' +
				network +
				"_" +
				token +
				'" class="right"></span><br>' +
				" " +
				token +
				'</div>'
			)
		})
	}
};

function fetchBurnableAmountWithRetry(contract, burnableAmount, token, network, decimals, retryCount = 12) {
    return new Promise((resolve, reject) => {
        function attemptFetch(retriesLeft) {
            contract.getRedeemTradeInfo(ethers.utils.parseEther(burnableAmount.toString()))
                .then((getRedeemTradeInfo) => {
                    let collateralAmountReceived = Number(ethers.utils.formatUnits(getRedeemTradeInfo.collateralAmountReceived, decimals));
                    // console.log("Network - Token:", network + " - " + token);
                    // console.log("collateralAmountReceived:", collateralAmountReceived);

                    resolve({ burnableAmount, collateralAmountReceived, token, network });
                })
                .catch((error) => {
                    // console.error("Error fetching redeem trade info:", error);
                    if (retriesLeft > 0) {
                        // console.log(`Retrying... ${retriesLeft} retries left.`);
                        // Réduit burnableAmount de moitié
                        burnableAmount /= 2;
                        attemptFetch(retriesLeft - 1);
                    } else {
                        console.error("Max retry attempts reached for " + token + " on " + network + ". Unable to fetch burnableAmount.");
                        reject(error);
                    }
                });
        }

        attemptFetch(retryCount);
    });
}

const checkBurningCollateralLiquidity = async () => {
	for (const network in collateralJarvis) {
		let endpoint = getRpcEndpoint(network)
		const provider = new ethers.providers.JsonRpcProvider(endpoint)

		var abi = undefined

		switch (collateralJarvis[network].version) {
			case "2.0":
				abi = jFiatsAbiV20
				break
			case "2.1":
				abi = jFiatsAbiV21
				break
			default:
		}
  
		// Create an array to hold the promises
		const promises = []

		Object.keys(collateralJarvis[network].tokens).forEach(async (token) => {
			let contractAddress = collateralJarvis[network].tokens[token]
			const contract = new ethers.Contract(contractAddress, abi, provider)

			let promise
			const burnableAmount = 10000;
			switch (collateralJarvis[network].version) {
				case "2.0":
					decimals = 18
					promise = fetchBurnableAmountWithRetry(contract, burnableAmount, token, network, decimals)
						.catch((error) => {
							// console.error("Error fetching redeem trade info after retries:", error);
							return { burnableAmount: -1, collateralAmountReceived: -1, token, network };
						});
					break
				case "2.1":
					decimals = 6
					promise = fetchBurnableAmountWithRetry(contract, burnableAmount, token, network, decimals)
						.catch((error) => {
							// console.error("Error fetching redeem trade info after retries:", error);
							return { burnableAmount: -1, collateralAmountReceived: -1, token, network };
						});
					break
				default:
			}

			promises.push(promise);
		});

		const result = await Promise.all(promises);

		result.forEach(({ burnableAmount, collateralAmountReceived, token, network }) => {
			$("#burning_" + network + "_" + token).text(burnableAmount.toFixed(2) + '('+collateralAmountReceived.toFixed(2)+'$)')
		})
	}
};

// Get MtP currencies rate
const getCurrencyRates = async () => {
	const response = await fetch(mtpCurrenciesUri)
	const apiCurrencies = await response.json()

	for (currency in apiCurrencies) {
		mtpTickers[apiCurrencies[currency].currency_pair_id] = apiCurrencies[currency].rate
	}
}

// Init
getTokens()

// Document ready functions
$(function(){
	$('#button_value_update').on('click', function () {
		calculateLiquidity()
		colorizeRows()
		colorizeValues()
		colorizeAutomate()
		colorizeTotalBalance()
	})

	$('#button_check_collateral_liquidity').on('click', function () {
		checkMintingCollateralLiquidity().then(() => {
			return checkBurningCollateralLiquidity();
		});
	})
})

function addFilterMenu() {
	const table = document.querySelector('table');
	const rows = table.querySelectorAll('tr');
	const input = document.createElement('input');
  
	input.type = 'text';
	input.style.width = '500px';
	input.style.display = 'block';
	input.style.margin = '20px auto';
	input.placeholder = 'Filter';
  
	document.body.insertBefore(input, table);
  
	input.addEventListener('input', function() {
	  const filterValue = this.value.toLowerCase();
  
	  for (let i = 1; i < rows.length; i++) {
		let rowVisible = false;

		for (let j = 0; j < 3; j++) {
			const cell = rows[i].cells[j];
			const cellText = cell.textContent.toLowerCase();

			if (cellText.indexOf(filterValue) > -1) {
				rowVisible = true;
				break;
			}
		}

		if (rowVisible) {
			rows[i].style.display = '';
		} else {
			rows[i].style.display = 'none';
		}
		}
	});
};
