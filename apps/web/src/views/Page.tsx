// import { useTranslation } from '@pancakeswap/localization'
// import { ChainId } from '@pancakeswap/sdk'
import { PageMeta } from 'components/Layout/Page'
// import { useActiveChainId } from 'hooks/useActiveChainId'
import { EXCHANGE_HELP_URLS } from 'config/constants'
import { Card, Flex, Text, Balance, Button, Heading } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'

const Page: React.FC<
  React.PropsWithChildren<{
    removePadding?: boolean
    hideFooterOnDesktop?: boolean
    noMinHeight?: boolean
    helpUrl?: string
  }>
> = ({
  children,
  removePadding = false,
  hideFooterOnDesktop = false,
  noMinHeight = false,
  helpUrl = EXCHANGE_HELP_URLS,
  ...props
}) => {
  // const { t } = useTranslation()
  // const { chainId } = useActiveChainId()
  // const isBSC = chainId === ChainId.BSC
  // const externalText = isBSC ? t('Bridge assets to BNB Chain') : ''
  // const externalLinkUrl = isBSC ? 'https://bridge.pancakeswap.finance/' : ''
  const { t } = useTranslation()

  return (
    <>
      <PageMeta />
      {children}
    </>
  )
}

export default Page
