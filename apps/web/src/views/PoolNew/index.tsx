import EarnedStats from './EarnedStats'
import Vaults from './Vaults'
import VaultList from './VaultList'
import styled from 'styled-components'

const LiquidityPage = () => (
  <LiquidityContent>
    <EarnedStats />
    <Vaults />
    <div style={{ width: '80%', maxWidth: '1500px' }}>
      <VaultList />
    </div>
  </LiquidityContent>
)
const LiquidityContent = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 1px;
`
export default LiquidityPage
