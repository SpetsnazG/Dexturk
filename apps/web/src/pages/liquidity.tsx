import { CHAIN_IDS } from 'utils/wagmi'
import Liquidity from '../views/Pool'
import LiquidityNew from '../views/PoolNew'

const LiquidityPage = () => <LiquidityNew />

LiquidityPage.chains = CHAIN_IDS

export default LiquidityPage
