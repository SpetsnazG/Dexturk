import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'
const footerLinksOld: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: '#',
        isHighlighted: true,
      },
      {
        label: t('Whitepaper'),
        href: '#',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: '#',
      },
      {
        label: t('Guides'),
        href: '#',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: '#',
      },
      {
        label: t('Documentation'),
        href: '#',
      },
      
    ],
  },
];
export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('Company'),
    items: [
      {
        label: t('Blog'),
        href: '#',
        isHighlighted: true,
      },
      {
        label: t('About'),
        href: '#',
      },
    ],
  },
  {
    label: t('Legal'),
    items: [
      {
        label: t('Privacy Policy'),
        href: '#',
      },
      {
        label: t('Terms and Conditions'),
        href: '#',
      },
    ],
  } ,
]
