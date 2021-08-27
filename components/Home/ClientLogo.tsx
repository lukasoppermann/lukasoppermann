import daimler from '@svgs/clients/client-daimler.svg'
import bosch from '@svgs/clients/client-bosch.svg'
import telekom from '@svgs/clients/client-telekom.svg'
import bertelsmann from '@svgs/clients/client-bertelsmann.svg'
import rtl from '@svgs/clients/client-rtl.svg'
import eyeem from '@svgs/clients/client-eyeem.svg'
import republica from '@svgs/clients/client-republica.svg'
import aperto from '@svgs/clients/client-aperto.svg'
import tlgg from '@svgs/clients/client-tlgg.svg'
import swisscom from '@svgs/clients/client-swisscom.svg'
import redbull from '@svgs/clients/client-redbull.svg'
import kb from '@svgs/clients/client-kb.svg'
import zalando from '@svgs/clients/client-zalando.svg'
import vodafone from '@svgs/clients/client-vodafone.svg'
import congstar from '@svgs/clients/client-congstar.svg'
import bmw from '@svgs/clients/client-bmw.svg'
import eon from '@svgs/clients/client-eon.svg'
import lufthansa from '@svgs/clients/client-lufthansa.svg'
import { css } from '@emotion/css'

const companies = {
  daimler: daimler,
  bosch: bosch,
  telekom: telekom,
  bertelsmann: bertelsmann,
  rtl: rtl,
  eyeem: eyeem,
  republica: republica,
  aperto: aperto,
  tlgg: tlgg,
  swisscom: swisscom,
  redbull: redbull,
  kb: kb,
  zalando: zalando,
  vodafone: vodafone,
  congstar: congstar,
  bmw: bmw,
  eon: eon,
  lufthansa: lufthansa
}

export type CompanyType = 
  'daimler' |
  'bosch' |
  'telekom' |
  'bertelsmann'|
  'rtl' |
  'eyeem' |
  'republica' |
  'aperto' |
  'tlgg' |
  'swisscom' |
  'redbull' |
  'kb' |
  'zalando' |
  'vodafone' |
  'congstar' |
  'bmw' |
  'eon' |
  'lufthansa'

const style = css`
  path {
    fill: inherit;
  }
`

type IconProps = {
  company: CompanyType
}

const ClientLogo = ({company}: IconProps) => {
  // with props
  let Icon = companies[company]
  // return icon
  return <Icon className={`svg-client-logo`} />
}

export { ClientLogo }