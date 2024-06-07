import * as React from 'react'
import styled from 'styled-components'
import { symbolName } from 'typescript'

type PriceInfoProps = {
  name: string
  symbol: string
  price: string
  change: string
  logoSrc: string
  changeIconSrc: string
  positiveChange: boolean
}

const PriceInfo: React.FC<PriceInfoProps> = ({
  name,
  symbol,
  price,
  change,
  logoSrc,
  changeIconSrc,
  positiveChange,
}) => {
  const ChangeWrapper = positiveChange ? PositiveChangeWrapper : NegativeChangeWrapper
  const ChangeIconWrapper = positiveChange ? PositiveChangeIcon : ChangeIcon

  return (
    <Article>
      <ImageWrapper>
        <Image loading="lazy" src={logoSrc} />
      </ImageWrapper>
      <CryptoInfo>
        <CryptoNames>
          <Strong>{name}</Strong> <Symbol>{symbol}</Symbol>
        </CryptoNames>
        <PriceChangeWrapper>
          <Price>{price}</Price>
          <ChangeWrapper>
            <ChangeIconWrapper loading="lazy" src={changeIconSrc} />
            <Change>{change}</Change>
          </ChangeWrapper>
        </PriceChangeWrapper>
      </CryptoInfo>
    </Article>
  )
}

const PriceInfoList = () => {
  const data = [
    {
      name: 'Bitcoin',
      symbol: 'BTC',
      price: '$61,429',
      change: '2.57%',
      logoSrc: 'screenshot-2024-05-14-201015-removebg-preview-1.png',
      changeIconSrc: '/arrow-down.svg',
      positiveChange: false,
    },
    {
      name: 'Ethereum',
      symbol: 'ETH',
      price: '$2,889.55',
      change: '2.18%',
      logoSrc: 'screenshot-2024-05-14-201015-removebg-preview-1-6.png',
      changeIconSrc: '/arrow-down.svg',
      positiveChange: false,
    },
    {
      name: 'Solana',
      symbol: 'SOL',
      price: '$143.89',
      change: '3.119%',
      logoSrc: 'screenshot-2024-05-14-201015-removebg-preview-1-7.png',
      changeIconSrc: '/arrow-down.svg',
      positiveChange: false,
    },
    {
      name: 'APTOS',
      symbol: 'APT',
      price: '$7.88',
      change: '5.59%',
      logoSrc: 'screenshot-2024-05-14-201015-removebg-preview-1-8.png',
      changeIconSrc: '/arrow-up.svg',
      positiveChange: true,
    },
    {
      name: 'Arbitrum',
      symbol: 'ARB',
      price: '$0.95',
      change: '0.00%',
      logoSrc: 'screenshot-2024-05-14-201015-removebg-preview-1-1.png',
      changeIconSrc: '/arrow-up.svg',
      positiveChange: true,
    },
    {
      name: 'Binance Coin',
      symbol: 'BNB',
      price: '$0.95',
      change: '0.00%',
      logoSrc: 'screenshot-2024-05-14-201015-removebg-preview-1-1.png',
      changeIconSrc: '/arrow-up.svg',
      positiveChange: true,
    },
  ]

  return (
    <Section>
      {data.map((info, index) => (
        <PriceInfo key={index} {...info} />
      ))}
    </Section>
  )
}

const Section = styled.section`
  background-color: #181c1d;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 80px;
  align-items: start;
  padding: 47px 60px 80px;
  @media (max-width: 991px) {
    padding: 0 20px;
  }
`

const Article = styled.article`
  display: flex;
  margin-left: 102px;
  gap: 20px;
  min-width: 250px;
  justify-content: center;
  @media (max-width: 991px) {
    margin-left: 10px;
  }
`

const ImageWrapper = styled.figure`
  background-color: #181c1d;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 69px;
  height: 69px;
  padding: 12px;
`

const Image = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 45px;
`

const CryptoInfo = styled.div`
  align-self: start;
  display: flex;
  margin-top: 17px;
  flex-direction: column;
`

const CryptoNames = styled.div`
  color: rgba(255, 255, 255, 0.5);
  font: 400 15px Sen, sans-serif;
`

const Strong = styled.strong`
  font-weight: 700;
`

const Symbol = styled.span`
  color: rgba(255, 255, 255, 1);
`

const PriceChangeWrapper = styled.div`
  display: flex;
  margin-top: 17px;
  gap: 20px;
  white-space: nowrap;
  @media (max-width: 991px) {
    white-space: initial;
  }
`
const PositivePriceChange = styled.div`
  color: #72fb70;
  margin-top: 36px;
  font: 400 14px 'Sen', sans-serif;
`

const Price = styled.div`
  color: #fff;
  font: 700 19px Sen, sans-serif;
`

const NegativeChangeWrapper = styled.div`
  display: flex;
  gap: 7px;
  font-size: 14px;
  color: #ff6767;
  font-weight: 400;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`
const PositiveChangeWrapper = styled.div`
  display: flex;
  gap: 7px;
  font-size: 14px;
  color: #72fb70;
  font-weight: 400;
  flex: 1;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const ChangeIcon = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 22px;
  border-color: rgba(255, 103, 103, 1);
  border-style: solid;
  border-width: 1px;
  background-color: #ec1b1b;
  border-radius: 50%;
  height: 22px;
`

const PositiveChangeIcon = styled.img`
  aspect-ratio: 1;
  object-fit: cover;
  width: 22px;
  border-color: #72fa70;
  border-style: solid;
  border-width: 1px;
  background-color: #13a110;
  border-radius: 50%;
  height: 22px;
`

const Change = styled.span`
  font-family: Sen, sans-serif;
  margin: auto 0;
`

export default PriceInfoList
