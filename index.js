const rpcUri = 'https://api.mtpelerin.com/rpc/'
const coingeckoUri = 'https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids='
const offrampEthAddress = '0x7fb610713c8404e21676c01c271bb662df6eb63c'
const automateEthAddress = '0x4f15818dc2Ae5FA84D519D88Cb2CAAe9cd18EE6d'
const offrampBtcAddress = '3LgdKdB9x42m4ujae78NcwUXjYW3z45KrX'
const automateBtcAddress = 'bc1q6e8d0vqketn9p7t9nkukcfz4aupereap3r7j6x'
const basicAbi = ["function name() view returns (string)","function symbol() view returns (string)","function balanceOf(address) view returns (uint)"]
const jFiatsAbiV20 = [{"inputs":[{"components":[{"internalType":"contract ISynthereumFinder","name":"finder","type":"address"},{"internalType":"uint8","name":"version","type":"uint8"},{"internalType":"contract IStandardERC20","name":"collateralToken","type":"address"},{"internalType":"contract IMintableBurnableERC20","name":"syntheticToken","type":"address"},{"components":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"address","name":"maintainer","type":"address"},{"internalType":"address","name":"liquidityProvider","type":"address"}],"internalType":"struct ISynthereumLiquidityPoolStorage.Roles","name":"roles","type":"tuple"},{"internalType":"uint256","name":"overCollateralization","type":"uint256"},{"components":[{"components":[{"internalType":"uint256","name":"rawValue","type":"uint256"}],"internalType":"struct FixedPoint.Unsigned","name":"feePercentage","type":"tuple"},{"internalType":"address[]","name":"feeRecipients","type":"address[]"},{"internalType":"uint32[]","name":"feeProportions","type":"uint32[]"}],"internalType":"struct ISynthereumLiquidityPoolStorage.FeeData","name":"feeData","type":"tuple"},{"internalType":"bytes32","name":"priceIdentifier","type":"bytes32"},{"internalType":"uint256","name":"collateralRequirement","type":"uint256"},{"internalType":"uint256","name":"liquidationReward","type":"uint256"}],"internalType":"struct SynthereumLiquidityPool.ConstructorParams","name":"params","type":"tuple"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"claimer","type":"address"},{"indexed":false,"internalType":"uint256","name":"feeAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalRemainingFees","type":"uint256"}],"name":"ClaimFee","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateralRemoved","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalCollateral","type":"uint256"}],"name":"DecreaseCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"finalCollateral","type":"uint256"}],"name":"EmergencyShutdown","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"destPool","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokensSent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"destNumTokensReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feePaid","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"Exchange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateralAdded","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newTotalCollateral","type":"uint256"}],"name":"IncreaseCollateral","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"liquidator","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokensLiquidated","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralExpected","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardReceived","type":"uint256"}],"name":"Liquidate","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateralSent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"numTokensReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feePaid","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokensSent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"feePaid","type":"uint256"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"Redeem","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"feePercentage","type":"uint256"}],"name":"SetFeePercentage","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address[]","name":"feeRecipients","type":"address[]"},{"indexed":false,"internalType":"uint32[]","name":"feeProportions","type":"uint32[]"}],"name":"SetFeeRecipients","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"liquidationReward","type":"uint256"}],"name":"SetLiquidationReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"overCollateralization","type":"uint256"}],"name":"SetOverCollateralization","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":false,"internalType":"uint256","name":"numTokensSettled","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralExpected","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralSettled","type":"uint256"}],"name":"Settle","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":false,"internalType":"uint256","name":"liquidityWithdrawn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"remainingLiquidity","type":"uint256"}],"name":"WithdrawLiquidity","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"LIQUIDITY_PROVIDER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAINTAINER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimFee","outputs":[{"internalType":"uint256","name":"feeClaimed","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collateralCoverage","outputs":[{"internalType":"bool","name":"","type":"bool"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateralRequirement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateralToken","outputs":[{"internalType":"contract IERC20","name":"collateralCurrency","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"collateralToDecrease","type":"uint256"},{"internalType":"uint256","name":"collateralToWithdraw","type":"uint256"}],"name":"decreaseCollateral","outputs":[{"internalType":"uint256","name":"newTotalCollateral","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyShutdown","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"price","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyShutdownPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"emergencyShutdownTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"contract ISynthereumLiquidityPoolGeneral","name":"destPool","type":"address"},{"internalType":"uint256","name":"numTokens","type":"uint256"},{"internalType":"uint256","name":"minDestNumTokens","type":"uint256"},{"internalType":"uint256","name":"expiration","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"internalType":"struct ISynthereumLiquidityPool.ExchangeParams","name":"exchangeParams","type":"tuple"}],"name":"exchange","outputs":[{"internalType":"uint256","name":"destNumTokensMinted","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"collateralAmount","type":"uint256"},{"internalType":"uint256","name":"numTokens","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"name":"exchangeMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"feePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feeRecipientsInfo","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint32[]","name":"","type":"uint32[]"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"syntheticTokens","type":"uint256"},{"internalType":"contract ISynthereumLiquidityPoolGeneral","name":"destinationPool","type":"address"}],"name":"getExchangeTradeInfo","outputs":[{"internalType":"uint256","name":"destSyntheticTokensReceived","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"inputCollateral","type":"uint256"}],"name":"getMintTradeInfo","outputs":[{"internalType":"uint256","name":"synthTokensReceived","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPriceFeedIdentifier","outputs":[{"internalType":"bytes32","name":"identifier","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"syntheticTokens","type":"uint256"}],"name":"getRedeemTradeInfo","outputs":[{"internalType":"uint256","name":"collateralAmountReceived","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"collateralToTransfer","type":"uint256"},{"internalType":"uint256","name":"collateralToIncrease","type":"uint256"}],"name":"increaseCollateral","outputs":[{"internalType":"uint256","name":"newTotalCollateral","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"numSynthTokens","type":"uint256"}],"name":"liquidate","outputs":[{"internalType":"uint256","name":"synthTokensLiquidated","type":"uint256"},{"internalType":"uint256","name":"collateralReceived","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidationReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"minNumTokens","type":"uint256"},{"internalType":"uint256","name":"collateralAmount","type":"uint256"},{"internalType":"uint256","name":"expiration","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"internalType":"struct ISynthereumLiquidityPool.MintParams","name":"mintParams","type":"tuple"}],"name":"mint","outputs":[{"internalType":"uint256","name":"syntheticTokensMinted","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"overCollateralization","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"numTokens","type":"uint256"},{"internalType":"uint256","name":"minCollateral","type":"uint256"},{"internalType":"uint256","name":"expiration","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"internalType":"struct ISynthereumLiquidityPool.RedeemParams","name":"redeemParams","type":"tuple"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"collateralRedeemed","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"components":[{"internalType":"uint256","name":"rawValue","type":"uint256"}],"internalType":"struct FixedPoint.Unsigned","name":"feePercentage","type":"tuple"},{"internalType":"address[]","name":"feeRecipients","type":"address[]"},{"internalType":"uint32[]","name":"feeProportions","type":"uint32[]"}],"internalType":"struct ISynthereumLiquidityPoolStorage.FeeData","name":"_feeData","type":"tuple"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_feePercentage","type":"uint256"}],"name":"setFeePercentage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"feeRecipients","type":"address[]"},{"internalType":"uint32[]","name":"feeProportions","type":"uint32[]"}],"name":"setFeeRecipients","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_liquidationReward","type":"uint256"}],"name":"setLiquidationReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_overCollateralization","type":"uint256"}],"name":"setOverCollateralization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"settleEmergencyShutdown","outputs":[{"internalType":"uint256","name":"synthTokensSettled","type":"uint256"},{"internalType":"uint256","name":"collateralSettled","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"synthereumFinder","outputs":[{"internalType":"contract ISynthereumFinder","name":"finder","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syntheticToken","outputs":[{"internalType":"contract IERC20","name":"syntheticCurrency","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syntheticTokenSymbol","outputs":[{"internalType":"string","name":"symbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAvailableLiquidity","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCollateralAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFeeAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSyntheticTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"typology","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"userFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint8","name":"poolVersion","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"name":"withdrawLiquidity","outputs":[{"internalType":"uint256","name":"remainingLiquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"}]
const jFiatsAbiV21 = [{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"}],"name":"ActivatedLP","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateralSent","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralDeposited","type":"uint256"}],"name":"DepositedLiquidity","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":false,"internalType":"uint256","name":"synthTokensInLiquidation","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bonusAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralReceived","type":"uint256"}],"name":"Liquidated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"components":[{"internalType":"uint256","name":"totalCollateral","type":"uint256"},{"internalType":"uint256","name":"exchangeAmount","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"},{"internalType":"uint256","name":"numTokens","type":"uint256"}],"indexed":false,"internalType":"struct ISynthereumMultiLpLiquidityPoolEvents.MintValues","name":"mintvalues","type":"tuple"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"Minted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"lendingModuleId","type":"string"}],"name":"NewLendingModule","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"components":[{"internalType":"uint256","name":"numTokens","type":"uint256"},{"internalType":"uint256","name":"exchangeAmount","type":"uint256"},{"internalType":"uint256","name":"feeAmount","type":"uint256"},{"internalType":"uint256","name":"collateralAmount","type":"uint256"}],"indexed":false,"internalType":"struct ISynthereumMultiLpLiquidityPoolEvents.RedeemValues","name":"redeemvalues","type":"tuple"},{"indexed":false,"internalType":"address","name":"recipient","type":"address"}],"name":"Redeemed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"}],"name":"RegisteredLp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"previousAdminRole","type":"bytes32"},{"indexed":true,"internalType":"bytes32","name":"newAdminRole","type":"bytes32"}],"name":"RoleAdminChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleGranted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"role","type":"bytes32"},{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"RoleRevoked","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newFee","type":"uint256"}],"name":"SetFeePercentage","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newLiquidationReward","type":"uint256"}],"name":"SetLiquidationReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":false,"internalType":"uint256","name":"overCollateralization","type":"uint256"}],"name":"SetOvercollateralization","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":false,"internalType":"uint256","name":"collateralWithdrawn","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"collateralReceived","type":"uint256"}],"name":"WithdrawnLiquidity","type":"event"},{"inputs":[],"name":"DEFAULT_ADMIN_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAINTAINER_ROLE","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_collateralAmount","type":"uint256"},{"internalType":"uint128","name":"_overCollateralization","type":"uint128"}],"name":"activateLP","outputs":[{"internalType":"uint256","name":"collateralDeposited","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_collateralAmount","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"collateralDeposited","type":"uint256"},{"internalType":"uint256","name":"newLpCollateralAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"collateralRequirement","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateralToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collateralTokenDecimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"feePercentage","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getActiveLPs","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_collateralAmount","type":"uint256"}],"name":"getMintTradeInfo","outputs":[{"internalType":"uint256","name":"synthTokensReceived","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_syntTokensAmount","type":"uint256"}],"name":"getRedeemTradeInfo","outputs":[{"internalType":"uint256","name":"collateralAmountReceived","type":"uint256"},{"internalType":"uint256","name":"feePaid","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRegisteredLPs","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleAdmin","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"getRoleMember","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"}],"name":"getRoleMemberCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"grantRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"hasRole","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"contract ISynthereumFinder","name":"finder","type":"address"},{"internalType":"uint8","name":"version","type":"uint8"},{"internalType":"contract IStandardERC20","name":"collateralToken","type":"address"},{"internalType":"contract IMintableBurnableERC20","name":"syntheticToken","type":"address"},{"components":[{"internalType":"address","name":"admin","type":"address"},{"internalType":"address","name":"maintainer","type":"address"}],"internalType":"struct ISynthereumMultiLpLiquidityPool.Roles","name":"roles","type":"tuple"},{"internalType":"uint64","name":"fee","type":"uint64"},{"internalType":"bytes32","name":"priceIdentifier","type":"bytes32"},{"internalType":"uint128","name":"overCollateralRequirement","type":"uint128"},{"internalType":"uint64","name":"liquidationReward","type":"uint64"},{"internalType":"string","name":"lendingModuleId","type":"string"}],"internalType":"struct ISynthereumMultiLpLiquidityPool.InitializationParams","name":"_params","type":"tuple"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"name":"isActiveLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"name":"isRegisteredLP","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"forwarder","type":"address"}],"name":"isTrustedForwarder","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lendingProtocolInfo","outputs":[{"internalType":"string","name":"lendingId","type":"string"},{"internalType":"address","name":"bearingToken","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"},{"internalType":"uint256","name":"_numSynthTokens","type":"uint256"}],"name":"liquidate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"liquidationReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxTokensCapacity","outputs":[{"internalType":"uint256","name":"maxCapacity","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"migrateStorage","outputs":[{"internalType":"uint8","name":"poolVersion","type":"uint8"},{"internalType":"uint256","name":"price","type":"uint256"},{"internalType":"bytes","name":"storageBytes","type":"bytes"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"}],"name":"migrateTotalFunds","outputs":[{"internalType":"uint256","name":"migrationAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"minNumTokens","type":"uint256"},{"internalType":"uint256","name":"collateralAmount","type":"uint256"},{"internalType":"uint256","name":"expiration","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"internalType":"struct ISynthereumMultiLpLiquidityPool.MintParams","name":"_mintParams","type":"tuple"}],"name":"mint","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"name":"positionLPInfo","outputs":[{"components":[{"internalType":"uint256","name":"actualCollateralAmount","type":"uint256"},{"internalType":"uint256","name":"tokensCollateralized","type":"uint256"},{"internalType":"uint256","name":"overCollateralization","type":"uint256"},{"internalType":"uint256","name":"capacity","type":"uint256"},{"internalType":"uint256","name":"utilization","type":"uint256"},{"internalType":"uint256","name":"coverage","type":"uint256"},{"internalType":"uint256","name":"mintShares","type":"uint256"},{"internalType":"uint256","name":"redeemShares","type":"uint256"},{"internalType":"uint256","name":"interestShares","type":"uint256"},{"internalType":"bool","name":"isOvercollateralized","type":"bool"}],"internalType":"struct ISynthereumMultiLpLiquidityPool.LPInfo","name":"info","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceFeedIdentifier","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"numTokens","type":"uint256"},{"internalType":"uint256","name":"minCollateral","type":"uint256"},{"internalType":"uint256","name":"expiration","type":"uint256"},{"internalType":"address","name":"recipient","type":"address"}],"internalType":"struct ISynthereumMultiLpLiquidityPool.RedeemParams","name":"_redeemParams","type":"tuple"}],"name":"redeem","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_lp","type":"address"}],"name":"registerLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_collateralAmount","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"collateralRemoved","type":"uint256"},{"internalType":"uint256","name":"collateralReceived","type":"uint256"},{"internalType":"uint256","name":"newLpCollateralAmount","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"renounceRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"role","type":"bytes32"},{"internalType":"address","name":"account","type":"address"}],"name":"revokeRole","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_newFee","type":"uint64"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint64","name":"_newLiquidationReward","type":"uint64"}],"name":"setLiquidationReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract ISynthereumFinder","name":"_finder","type":"address"},{"internalType":"uint8","name":"_oldVersion","type":"uint8"},{"internalType":"bytes","name":"_storageBytes","type":"bytes"},{"internalType":"uint8","name":"_newVersion","type":"uint8"},{"internalType":"bytes","name":"_extraInputParams","type":"bytes"},{"internalType":"uint256","name":"_sourceCollateralAmount","type":"uint256"},{"internalType":"uint256","name":"_actualCollateralAmount","type":"uint256"},{"internalType":"uint256","name":"_price","type":"uint256"}],"name":"setMigratedStorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint128","name":"_overCollateralization","type":"uint128"}],"name":"setOvercollateralization","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_lendingId","type":"string"},{"internalType":"address","name":"_bearingToken","type":"address"}],"name":"switchLendingModule","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"synthereumFinder","outputs":[{"internalType":"contract ISynthereumFinder","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syntheticToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"syntheticTokenSymbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalCollateralAmount","outputs":[{"internalType":"uint256","name":"usersCollateral","type":"uint256"},{"internalType":"uint256","name":"lpsCollateral","type":"uint256"},{"internalType":"uint256","name":"totalCollateral","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSyntheticTokens","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bearingAmount","type":"uint256"}],"name":"transferToLendingManager","outputs":[{"internalType":"uint256","name":"bearingAmountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"typology","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"updatePositions","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"}]

const coingeckoTickers = {
	"ageur": {"ticker": "ageur", "price": 0},
	"avax": {"ticker": "avalanche-2", "price": 0},
	"bnb": {"ticker": "binancecoin", "price": 0},
	"btc": {"ticker": "bitcoin", "price": 0},
	"btcb": {"ticker": "binance-bitcoin", "price": 0},
	"busd": {"ticker": "binance-usd", "price": 0},
	"dai": {"ticker": "dai", "price": 0},
	"eth": {"ticker": "ethereum", "price": 0},
	"eurs": {"ticker": "stasis-eurs", "price": 0},
	"eurt": {"ticker": "tether-eurt", "price": 0},
	"ftm": {"ticker": "fantom", "price": 0},
	"frax": {"ticker": "frax", "price": 0},
	"jchf": {"ticker": "jarvis-synthetic-swiss-franc", "price": 0},
	"jeur": {"ticker": "jarvis-synthetic-euro", "price": 0},
	"jgbp": {"ticker": "jarvis-synthetic-british-pound", "price": 0},
	"matic": {"ticker": "matic-network", "price": 0},
	"mai": {"ticker": "mimatic", "price": 0},
	"rbtc": {"ticker": "rootstock", "price": 0},
	"rif": {"ticker": "rif-token", "price": 0},
	"usdc": {"ticker": "usd-coin", "price": 0},
	"usdt": {"ticker": "tether", "price": 0},
	"ust": {"ticker": "terrausd", "price": 0},
	"wbtc": {"ticker": "wrapped-bitcoin", "price": 0},
	"weth": {"ticker": "weth", "price": 0},
	"xdai": {"ticker": "xdai", "price": 0},
	"xtz": {"ticker": "tezos", "price": 0},

	// MANUAL
	"eurl": {"price": 0.970090},
	"jaud": {"price": 0.6740},
	"jcad": {"price": 0.7622},
	"jjpy": {"price": 0.0070},
	"jsek": {"price": 0.0931},
	"jsgd": {"price": 0.7117},
	"jzar": {"price": 0.0572},
	"rdoc": {"price": 1},
	"thdx": {"price": 3},
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
			"jNZD": "0x4FDA1B4b16f5F2535482b91314018aE5A2fda602",
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
	"avalanche_mainnet" : {
		"version": "2.0",
		"tokens": {
			"jCHF": "0x9fbad00ae18fae064c728e6b535a6cb950c8c40a",
			"jEUR": "0x0aA7e2A631198ba957f8335a6FAC6F3B8F53bD0E",
		},
	},
	/*
	"optimism_mainnet" : {
		"version": "2.1",
		"tokens": {
			"jEUR": "0xECFc0ED8Ed6b2F16E3035d6f4F9C8F864B7a2110",
		},
	},*/
}

function forceRecalculateBitcoin() {
	// Balances
	let offrampBalance = Number($("#002 span.offramp_balance").text())
	let automateBalance = Number($("#002 span.automate_balance").text())
	let totalBalance = offrampBalance + automateBalance
	$("#002 span.total_balance").text(totalBalance)

	// Values
	let offrampValue = Number($("#002 span.offramp_value").text())
	let automateValue = Number($("#002 span.automate_value").text())
	let totalValue = offrampValue + automateValue
	$("#002 span.crypto_value").text(totalValue.toFixed(2))
}

function parseBitcoinBlockchain(btcAddress) {
	fetch("https://blockchain.info/q/addressbalance/" + btcAddress)
	.then(function(response) {
		return response.json()
	})
	.then(function(json) {
		const balance = parseInt(json, 10) / 100000000

		if (btcAddress === offrampBtcAddress) {
			let offrampBalance = balance.toFixed(4)
			let offrampValue = offrampBalance * coingeckoTickers["btc"].price

			$("#002 span.offramp_balance").text(offrampBalance)
			$("#002 span.offramp_value").text(offrampValue.toFixed(2))
		} else {
			let automateBalance = balance.toFixed(4)
			let automateValue = automateBalance * coingeckoTickers["btc"].price

			$("#002 span.automate_balance").text(automateBalance)
			$("#002 span.automate_value").text(automateValue.toFixed(2))

			forceRecalculateBitcoin()
		}
	})
}

const getBitcoinBalance = async () => {
	await parseBitcoinBlockchain(offrampBtcAddress)
	await parseBitcoinBlockchain(automateBtcAddress)
}

const getCoingeckoPrice = async () => {
	let tokenIds = []

	for(ticker in coingeckoTickers) {
		tokenIds.push(coingeckoTickers[ticker].ticker)
	}

	const response = await fetch(coingeckoUri + tokenIds.join(","))
	const prices = await response.json()

	// Hydrate tickers array to add price
	for (symbol in coingeckoTickers) {
		if (prices[coingeckoTickers[symbol].ticker]) {
			coingeckoTickers[symbol].price = prices[coingeckoTickers[symbol].ticker].usd
		}
	}
}

const getTokensBalance = async (token, i) => {
	if (token.network === 'bitcoin_mainnet') {
		getBitcoinBalance()
	} else {
		let endpoint = rpcUri + token.network

		// Fix Gnosis RPC
		if (token.network === 'xdai_mainnet') {endpoint = 'https://rpc.gnosischain.com/realt'}

		const provider = new ethers.providers.JsonRpcProvider(endpoint)

		let offrampBalanceFormatted = 0
		let automateBalanceFormatted = 0

		let toFixed = 4
		if (token.isStable) {toFixed = 2}

		if (token.address === '0x0000000000000000000000000000000000000000') {
			const offrampBalance = await provider.getBalance(offrampEthAddress)
			const automateBalance = await provider.getBalance(automateEthAddress)

			offrampBalanceFormatted = Number(ethers.utils.formatEther(offrampBalance))
			automateBalanceFormatted = Number(ethers.utils.formatEther(automateBalance))
		} else {
			const contract = new ethers.Contract(token.address, basicAbi, provider)

			const offrampBalance = await contract.balanceOf(offrampEthAddress)
			const automateBalance = await contract.balanceOf(automateEthAddress)

			offrampBalanceFormatted = Number(ethers.utils.formatUnits(offrampBalance, token.decimals))
			automateBalanceFormatted = Number(ethers.utils.formatUnits(automateBalance, token.decimals))
		}

		const totalBalance = offrampBalanceFormatted + automateBalanceFormatted
		const totalBalanceFormatted = totalBalance.toFixed(toFixed)

		// Values
		if (coingeckoTickers[token.symbol.toLowerCase()] === undefined) {
			console.log("DEBUG::coingeckoTickers[token.symbol.toLowerCase()]::" + token.symbol.toLowerCase(), coingeckoTickers[token.symbol.toLowerCase()])
		}
		const offrampValue = coingeckoTickers[token.symbol.toLowerCase()].price * offrampBalanceFormatted
		const automateValue = coingeckoTickers[token.symbol.toLowerCase()].price * automateBalanceFormatted
		const totalValue = offrampValue + automateValue

		const offrampValueFormatted = offrampValue.toFixed(2)
		const automateValueFormatted = automateValue.toFixed(2)
		const totalValueFormatted = totalValue.toFixed(2)

		$("#" + i +" span.offramp_balance").text(offrampBalanceFormatted.toFixed(toFixed))
		$("#" + i +" span.automate_balance").text(automateBalanceFormatted.toFixed(toFixed))
		$("#" + i +" span.total_balance").text(totalBalanceFormatted)

		$("#" + i +" span.offramp_value").text(offrampValueFormatted)
		$("#" + i +" span.automate_value").text(automateValueFormatted)

		if (token.isStable) {
			$("#" + i +" span.stable_value").text(totalValueFormatted)
		} else {
			$("#" + i +" span.crypto_value").text(totalValueFormatted)
		}
	}
}

const getTokens = async () => {
	// Get Coingecko tickers
	getCoingeckoPrice()

	// Get MtP tokens
	const response = await fetch('https://api.mtpelerin.com/currencies/tokens')
	const tokens = await response.json()

	for (i in tokens) {
		// Fill basic informations
		document.getElementsByTagName("tbody")[0].innerHTML += '<tr id="' + i + '" class="row_crypto">'
		+ '<td class="network hidden">' + tokens[i].network + '</td>'
		+ '<th scope="row">' + i + '</th>'
		+ '<td class="symbol">' + tokens[i].symbol + '</td>'
		+ '<td><span class="offramp_balance"></span> (<span class="offramp_value"></span> $)</td>'
		+ '<td><span class="automate_balance"></span> (<span class="automate_value"></span> $)</td>'
		+ '<td><span class="total_balance"></span></td>'
		+ '<td><span class="stable_value" class="right">0</span> $</td>'
		+ '<td><span class="crypto_value" class="right">0</span> $</td></tr>'

		// Kick tezos blockchain
		if (tokens[i].network !== 'tezos_mainnet') {
			// Fill tokens balance
			getTokensBalance(tokens[i], i)
		}

		// TODO : Limit debug trace
		//if (i == '003') {break}
    }
}

function calculateLiquidity() {
    let total = totalValue = stableTotal = cryptoTotal = 0

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
	})
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

const checkMintingCollateralLiquidity = async () => {
	for (network in collateralJarvis) {
		// Clean table
		$("." + network).empty()

		let endpoint = rpcUri + network
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

		for (token in collateralJarvis[network].tokens) {
			let contractAddress = collateralJarvis[network].tokens[token]
			const contract = new ethers.Contract(contractAddress, abi, provider)

			switch (collateralJarvis[network].version) {
				case "2.0":
					var collateralAmountFormatted = 0
					var totalAvailableLiquidity = await contract.totalAvailableLiquidity()
					var overCollateralization = await contract.overCollateralization()

					var mintableValue = totalAvailableLiquidity / overCollateralization
					var mintableAmount = mintableValue / coingeckoTickers[token.toLowerCase()].price
					break
				case "2.1":
					var collateralAmount = await contract.maxTokensCapacity()
					var mintableAmount = Number(ethers.utils.formatEther(collateralAmount))
					break
				default:
			}

			$("." + network).append('<div class="col center borderLine"><span id="' + network + '_' +  token + '" class="right"></span>' + mintableAmount.toFixed(2) + ' ' + token + '</div>')
		}
	}
}

// Init
getTokens()

// Document ready functions
$(function(){
	$('#button_value_update').on('click', function () {
		calculateLiquidity()
		colorizeRows()
	})

	$('#button_check_collateral_liquidity').on('click', function () {
		checkMintingCollateralLiquidity()
	})
})
