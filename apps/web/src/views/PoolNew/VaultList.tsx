import React from 'react'
import styled from 'styled-components'

interface VaultData {
  imgSrc: string
  name: string
  balance: string
  performance: string
  apr: string
  stake: string
  earnings: string
}

const vaults: VaultData[] = [
  {
    imgSrc: '/images/bnb-bnb-logo-17.png',
    name: 'BNB',
    balance: '7.7M',
    performance: 'Unavailable',
    apr: 'View',
    stake: '0.00',
    earnings: '0.00',
  },
  {
    imgSrc: '/images/bnb-bnb-logo-18.png',
    name: 'Pyth',
    balance: '1.2M',
    performance: 'Unavailable',
    apr: 'View',
    stake: '0.00',
    earnings: '0.00',
  },
  {
    imgSrc: '/images/bnb-bnb-logo-19.png',
    name: 'TIA',
    balance: '897K',
    apr: 'View',
    performance: 'Unavailable',
    stake: '0.00',
    earnings: '0.00',
  },
  {
    imgSrc: '/images/bnb-bnb-logo-20.png',
    name: 'ARB',
    balance: '555.4K',
    apr: 'View',
    performance: 'Unavailable',
    stake: '0.00',
    earnings: '0.00',
  },
  {
    imgSrc: '/images/bnb-bnb-logo-21.png',
    name: 'SOL',
    balance: '345K',
    apr: 'View',
    performance: 'Unavailable',
    stake: '0.00',
    earnings: '0.00',
  },
  {
    imgSrc: '/images/bnb-bnb-logo-22.png',
    name: 'APT',
    balance: '16K',
    performance: 'Unavailable',
    apr: 'View',
    stake: '0.00',
    earnings: '0.00',
  },
  {
    imgSrc: '/images/bnb-bnb-logo-23.png',
    name: 'ETH',
    apr: 'View',
    balance: '10K',
    performance: 'Unavailable',
    stake: '0.00',
    earnings: '0.00',
  },
  {
    imgSrc: '/images/bnb-bnb-logo-24.png',
    name: 'BTC',
    balance: '10.4',
    performance: 'Unavailable',
    apr: 'View',
    stake: '0.00',
    earnings: '0.00',
  },
]

const Vault: React.FC<VaultData> = ({ imgSrc, name, balance, performance, stake, earnings }) => (
  <section className="vault">
    <div className="vault-details">
      {imgSrc ? <img loading="lazy" src={imgSrc} alt={`Icon of ${name}`} className="vault-icon" /> : <></>}
      <p className="vault-name">{name}</p>
    </div>
    <p className="vault-balance">{balance}</p>
    <div className="vault-performance">
      <p className="performance-status">{performance}</p>
      <a className="performance-link" href="#">
        View
      </a>
    </div>
    <div className="vault-stake">
      <img loading="lazy" src={imgSrc} alt="" className="vault-icon-small" />
      <p>{stake}</p>
    </div>
    <div className="vault-earnings">
      <img loading="lazy" src={imgSrc} alt="" className="vault-icon-small" />
      <p>{earnings}</p>
    </div>
    <div className="vault-actions">
      <button className="action-button unstake">Unstake</button>
      <button className="action-button stake">Stake</button>
    </div>
  </section>
)

const MyComponent: React.FC = () => (
  <main className="vault-container">
    <header className="vault-header">
      <h1>All Insurance fund Vaults</h1>
    </header>
    {/* <Header /> */}
    <section className="vault-table-header1">
      <div className="vault-details">
        <p></p>
        <p className="vault-name">Vault</p>
      </div>
      <div className="vault-balance">
        <p>Vault Balance</p>
      </div>
      <div className="vault-performance">
        <p className="performance-status">APR</p>
        <a className="performance-link" href="#">
          Performance
        </a>
      </div>

      <div className="vault-stake">
        <p>Your Stake</p>
      </div>
      <div className="vault-earnings">
        <p>Your Earnings</p>
        <p></p>
      </div>
      <div className="vault-actions">
        <p>Actions</p>
        <p></p>
      </div>
    </section>
    {vaults.map((vault, idx) => (
      <React.Fragment key={idx}>
        {idx > 0 && <hr className="divider" />}
        <Vault {...vault} />
      </React.Fragment>
    ))}
  </main>
)

const GlobalStyles = styled.div`
  .vault-container {
    display: flex;
    flex-direction: column;
    font-size: 20px;
    font-weight: 700;
    padding: 0 20px;
  }

  .vault-header h1 {
    color: #fff;
    font-family: 'Sen', sans-serif;
    margin: 50px 10px 60px 0px;
  }

  .vault-table-header {
    display: flex;
    background-color: #26727b;
    border-radius: 30px 30px 0px 0px;
    padding: 38px 55px;
    gap: 20px;
    color: #fff;
    font-family: 'Sen', sans-serif;
    gap: 75px;
  }

  @media (max-width: 991px) {
    .vault-table-header {
      padding: 0 20px;
      flex-wrap: wrap;
    }

    .vault-table-header p {
      flex-basis: 50%;
      flex-grow: 1;
    }
  }
  .vault-table-header1 {
    display: flex;
    padding: 38px 55px;
    background-color: #26727b;
    border-radius: 30px 30px 0px 0px;
    justify-content: space-between;
    align-items: center;
    padding: 40px 40px;
    color: #fff;
    font-family: 'Sen', sans-serif;
  }

  .vault {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    color: #fff;
    font-family: 'Sen', sans-serif;
  }

  .vault-details,
  .vault-performance,
  .vault-stake,
  .vault-earnings,
  .vault-actions {
    display: flex;
    align-items: center;
    gap: 35px;
  }

  .vault-details .vault-icon,
  .vault-performance .vault-icon,
  .vault-stake .vault-icon-small,
  .vault-earnings .vault-icon-small {
    width: 38px;
  }
  .vault-details {
  }
  .vault-actions .action-button {
    font-family: 'Sen', sans-serif;
    border-radius: 8px;
    padding: 12px 21px;
  }

  .action-button.unstake {
    background-color: #26727b;
  }

  .action-button.stake {
    background-color: #26727b;
  }

  .divider {
    border: 1px solid rgba(59, 54, 54, 1);
    background-color: #3b3636;
    height: 2px;
    margin: 20px 0;
  }
`

const App = () => (
  <GlobalStyles>
    <MyComponent />
  </GlobalStyles>
)

export default App
