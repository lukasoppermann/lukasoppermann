import Image from 'next/image'

const companies = {
  daimler: '/svgs/clients/client-daimler.svg',
  bosch: '/svgs/clients/client-bosch.svg',
  telekom: '/svgs/clients/client-telekom.svg',
  bertelsmann: '/svgs/clients/client-bertelsmann.svg',
  rtl: '/svgs/clients/client-rtl.svg',
  eyeem: '/svgs/clients/client-eyeem.svg',
  republica: '/svgs/clients/client-republica.svg',
  aperto: '/svgs/clients/client-aperto.svg',
  tlgg: '/svgs/clients/client-tlgg.svg',
  swisscom: '/svgs/clients/client-swisscom.svg',
  redbull: '/svgs/clients/client-redbull.svg',
  kb: '/svgs/clients/client-kb.svg',
  zalando: '/svgs/clients/client-zalando.svg',
  vodafone: '/svgs/clients/client-vodafone.svg',
  congstar: '/svgs/clients/client-congstar.svg',
  bmw: '/svgs/clients/client-bmw.svg',
  eon: '/svgs/clients/client-eon.svg',
  lufthansa: '/svgs/clients/client-lufthansa.svg'
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

type IconProps = {
  company: CompanyType
}


const ClientLogo = ({company}: IconProps) => {
  return <img src={companies[company]} className={`svg-client-logo`} tabIndex={0} alt={company} loading="lazy" />
  // return <object type="image/svg+xml" data={companies[company]} className={`svg-client-logo`} tabIndex={0} title={company}>
  //     {company}
  //   </object>
}

export { ClientLogo }