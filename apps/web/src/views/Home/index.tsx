import { useTranslation } from '@pancakeswap/localization'
import { Currency } from '@pancakeswap/sdk'
import { BottomDrawer, Flex, Modal, ModalV2, useMatchBreakpoints, Heading, Text } from '@pancakeswap/uikit'
import { AppBody } from 'components/App'
import { useContext } from 'react'
import Image from 'next/image'
import { useSwapHotTokenDisplay } from 'hooks/useSwapHotTokenDisplay'
import { useCurrency } from '../../hooks/Tokens'
import { Field } from '../../state/swap/actions'
import { useSingleTokenSwapInfo, useSwapState } from '../../state/swap/hooks'
import Page from '../Page'
import PriceChartContainer from './components/Chart/PriceChartContainer'
import BackgroundObject from './components/BackgroundObject'
import Landing_Feature from './components/Landing_Feature'
import { SwapFeaturesContext } from './SwapFeaturesContext'
import styled from 'styled-components'
import HotTokenList from './components/HotTokenList'

export default function Swap() {
  const { isMobile } = useMatchBreakpoints()
  const { isChartExpanded, isChartDisplayed, setIsChartDisplayed, setIsChartExpanded, isChartSupported } =
    useContext(SwapFeaturesContext)
  const [isSwapHotTokenDisplay, setIsSwapHotTokenDisplay] = useSwapHotTokenDisplay()
  const { t } = useTranslation()

  // swap state & price data
  const {
    [Field.INPUT]: { currencyId: inputCurrencyId },
    [Field.OUTPUT]: { currencyId: outputCurrencyId },
  } = useSwapState()
  const inputCurrency = useCurrency(inputCurrencyId)
  const outputCurrency = useCurrency(outputCurrencyId)

  const currencies: { [field in Field]?: Currency } = {
    [Field.INPUT]: inputCurrency ?? undefined,
    [Field.OUTPUT]: outputCurrency ?? undefined,
  }

  const singleTokenPrice = useSingleTokenSwapInfo(inputCurrencyId, inputCurrency, outputCurrencyId, outputCurrency)

  return (
    <Page removePadding={isChartExpanded} hideFooterOnDesktop={isChartExpanded}>
      {!isMobile && isChartSupported && (
        <PriceChartContainer
          inputCurrencyId={inputCurrencyId}
          inputCurrency={currencies[Field.INPUT]}
          outputCurrencyId={outputCurrencyId}
          outputCurrency={currencies[Field.OUTPUT]}
          isChartExpanded={isChartExpanded}
          setIsChartExpanded={setIsChartExpanded}
          isChartDisplayed={isChartDisplayed}
          currentSwapPrice={singleTokenPrice}
        />
      )}
      {isChartSupported && (
        <BottomDrawer
          content={
            <PriceChartContainer
              inputCurrencyId={inputCurrencyId}
              inputCurrency={currencies[Field.INPUT]}
              outputCurrencyId={outputCurrencyId}
              outputCurrency={currencies[Field.OUTPUT]}
              isChartExpanded={isChartExpanded}
              setIsChartExpanded={setIsChartExpanded}
              isChartDisplayed={isChartDisplayed}
              currentSwapPrice={singleTokenPrice}
              isMobile
            />
          }
          isOpen={isChartDisplayed}
          setIsOpen={setIsChartDisplayed}
        />
      )}
      {!isMobile && isSwapHotTokenDisplay && isChartSupported && <HotTokenList />}

      <ModalV2
        isOpen={isMobile && isSwapHotTokenDisplay && isChartSupported}
        onDismiss={() => setIsSwapHotTokenDisplay(false)}
      >
        <Modal
          style={{ padding: 0 }}
          title={t('Top Token')}
          onDismiss={() => setIsSwapHotTokenDisplay(false)}
          bodyPadding="0px"
        >
          <HotTokenList />
        </Modal>
      </ModalV2>

      <AppBody>
        <Flex {...styles.sub}>
          <Flex {...styles.sub1}>
            <Flex
              id="cryptoText1"
              display="flex"
              flexDirection="column"
              alignItems="start"
              flex={1}
              justifyContent="space-between"
              backgroundColor="#181c1d"
              flexWrap="wrap"
            >
              <Div>
                <Div2>NEW</Div2>
                <Div3>CryptoGraphy to Secure Transactions</Div3>
              </Div>
              <Text {...styles.subText1}>
                {t('Everything you really want in')}
                <Text {...styles.subText1} color="#31EAF6">
                  {t('Crypto')}
                </Text>
                <Text {...styles.subText1}>{t('Improved')}</Text>
              </Text>
              <Flex
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="baseline"
              >
                <DivT1>Trade Now</DivT1>
                <DivC1>
                  <DivC2>
                    <DivC3 />
                  </DivC2>
                  <DivC4>Created by Dexturk</DivC4>
                </DivC1>
              </Flex>
            </Flex>
            <Image src={'/background.png'} width={750} height={794} alt="" />
          </Flex>
          <DivTR1>
            <Div2TR1>Transforming crypto trading for you.</Div2TR1>
            <Div3TR1>
              Trade with confidence on DexTurk, where speed meets security <br />
              for your digital asset investments
            </Div3TR1>
            <Div4TR1>Trade Now</Div4TR1>
          </DivTR1>
          <Flex marginTop="100px">
            <Image src={'/landing_limit_ss.png'} width={1200} height={1000} alt="" />
          </Flex>
          <Flex display="flex" flexDirection="row" marginTop="100px">
            <BackgroundObject />
            <Flex display="flex" flexDirection="column" alignItems="center" marginLeft="240px">
              <DivGrid>
                <Landing_Feature
                  src="account-abstraction.png"
                  title="Account Abstraction"
                  definition="Trade directly from your wallet without the need to deposit any assets into a central account."
                />
                <Landing_Feature
                  src="leverage.png"
                  title="Upto 100x Leverage"
                  definition="Our unique pool-to-peer model facilitates trading with up to 100x leverage on all your favorite cryptocurrencies."
                />
                <Landing_Feature
                  src="zero-price-impact.png"
                  title="Zero Price Impact"
                  definition="Trade any asset of any size with zero price impact and minimal spread."
                />
                <Landing_Feature
                  src="asset-perpetuals.png"
                  title="Asset Backed Perpetuals"
                  definition="All margin positions are fully backed by assets in Flash's liquidity pool."
                />
              </DivGrid>
              <Landing_Feature
                src="isolated
                <Landing_Feature
                src="isolated-margin.png"
                title="Isolated Margin"
                definition="Trade directly from your wallet without the need to deposit any assets into a central account."
              />
              </Flex>
              </Flex>
              </Flex>
              </AppBody>
              </Page>
              )
              }
              
              const Img = styled.img`
                aspect-ratio: 1;
                object-fit: auto;
                object-position: center;
                width: 26px;
                padding: 5px;
                margin-right: 10px;
                border-radius: 50%;
                align-self: start;
                box-sizing: border-box;
                background: #3DBF52;
                border: 4px solid #0D821F;
                width: 36px;
                height: 36px;
              }
              `
              
              const DivG1 = styled.div`
                display: flex;
                max-width: 810px;
                flex-direction: column;
                padding: 0 20px;
                margin-top: 50px;
              `
              
              const Div2G1 = styled.div`
                color: #ffffff;
                width: 100%;
                font: 700 50px Sen, sans-serif;
                @media (max-width: 991px) {
                  max-width: 100%;
                  font-size: 40px;
                }
              `
              
              const Div3G1 = styled.div`
                color: #fff;
                margin-top: 60px;
                width: 100%;
                font: 400 25px Sen, sans-serif;
                @media (max-width: 991px) {
                  max-width: 100%;
                  margin-top: 40px;
                }
              `
              
              const DivGrid = styled.div`
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                grid-template-rows: repeat(2, 1fr);
                grid-column-gap: 50px;
                grid-row-gap: 50px;
                margin-bottom: 50px;
              `
              const DivTR1 = styled.div`
                display: flex;
                max-width: 100%;
                flex-direction: column;
                align-items: center;
                color: #fff;
                padding: 0 20px;
              `
              
              const Div2TR1 = styled.div`
                align-self: stretch;
                width: 100%;
                font: 700 56px Sen, sans-serif;
                @media (max-width: 991px) {
                  max-width: 100%;
                  font-size: 40px;
                }
              `
              
              const Div3TR1 = styled.div`
                color: #31eaf6;
                text-align: center;
                margin-top: 59px;
                opacity: 40%;
                font: 400 30px Sen, sans-serif;
                @media (max-width: 991px) {
                  max-width: 100%;
                  margin-top: 40px;
                }
              `
              
              const Div4TR1 = styled.div`
                border-radius: 45px;
                background-color: #25aed0;
                margin-top: 53px;
                justify-content: center;
                padding: 20px 40px;
                font: 800 28px Sen, sans-serif;
                @media (max-width: 991px) {
                  margin-top: 40px;
                  padding: 0 20px;
                }
              `
              
              const DivC1 = styled.div`
                display: flex;
                gap: 2px;
                padding: 0 20px;
                margin-left: 60px;
              `
              
              const DivC2 = styled.div`
                filter: blur(2px);
                background-color: #31eaf6;
                border-radius: 50%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                padding: 0 10px;
                margin-right: 10px;
              `
              
              const DivC3 = styled.div`
                background-color: #181c1d;
                border-radius: 50%;
                width: 18px;
                height: 18px;
              `
              
              const DivC4 = styled.div`
                color: #fff;
                margin: auto 0;
                font: 400 10px Sen, sans-serif;
              `
              
              const DivT1 = styled.div`
                margin-top: 60px;
                border-radius: 45px;
                background-color: #25aed0;
                color: #fff;
                padding: 20px 40px;
                font: 800 28px Sen, sans-serif;
              `
              
              const Div = styled.div`
                border-radius: 40px;
                border-color: rgba(52, 112, 123, 1);
                border-style: solid;
                border-width: 4px;
                display: flex;
                gap: 20px;
                font-size: 20px;
                color: #fff;
                padding: 13px 12px;
                max-width: 600px;
                align-self: start;
                margin-bottom: 40px;
              `
              
              const Div2 = styled.div`
                font-family: Sen, sans-serif;
                border-radius: 20px;
                background-color: #40cdd4;
                font-weight: 700;
                white-space: nowrap;
                justify-content: center;
                padding: 15px 19px;
                @media (max-width: 491px) {
                  white-space: initial;
                }
              `
              
              const Div3 = styled.div`
                font-family: Sen, sans-serif;
                font-weight: 400;
                flex-grow: 1;
                flex-basis: auto;
                margin: auto 0;
                color: #a3a4a5;
                font-size: 20px;
              `
              const styles = {
                sub: {
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#181c1d',
                  border: 'none',
                  borderRadius: '0px',
                },
                sub2: {
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gridTemplateRows: 'repeat(3, 1fr)',
                  gridColumnGap: '30px',
                  gridRowGap: '30px',
                },
                sub1: {
                  display: 'flex',
                  flexDirection: 'row', 
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  backgroundColor: '#181c1d',
                  border: 'none',
                  borderRadius: '0px',
                },
                subText1: {
                  fontFamily: 'Sen',
                  fontSize: '50px',
                  fontWeight: 800,
                  lineHeight: '60.16px',
                  textAlign: 'left',
                  color: '#34707B',
                },
              }
              