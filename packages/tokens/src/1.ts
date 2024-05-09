import { ChainId, WETH9 } from '@pancakeswap/sdk'
import { USDC_ETH, USDT, WBTC_ETH } from '@pancakeswap/tokens'

export const ethereumTokens = {
  weth: WETH9[ChainId.ETHEREUM],
  usdt: USDT[ChainId.ETHEREUM],
  usdc: USDC_ETH[ChainId.ETHEREUM],
  wbtc: WBTC_ETH,
}
