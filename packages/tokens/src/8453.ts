import { ChainId, ERC20Token, WETH9 } from '@pancakeswap/sdk'
import { USDC_BASE } from './common'

export const baseTokens = {
    weth: WETH9[ChainId.BASE],
    usdc: USDC_BASE,
}
