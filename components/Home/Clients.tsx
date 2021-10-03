
import { css } from '@emotion/css'
import { Headline } from '@components/Headline'
import { mq } from 'config/mediaQueries'
import { ClientLogo, CompanyType } from '@components/Home/ClientLogo'


const clients = [
  'daimler',
  'bosch',
  'telekom',
  'bertelsmann',
  'rtl',
  'eyeem',
  'republica',
  'aperto',
  'tlgg',
  'swisscom',
  'redbull',
  'kb',
  'zalando',
  'vodafone',
  'congstar',
  'bmw',
  'eon',
  'lufthansa'
]

const style = css`
  .Headline {
    grid-column: columns;
    margin-top: 96px;
  }
  .svg-client-logo {
    grid-column-end: span 4;
    margin-bottom: 16px;
    &:nth-child(3n+2) { /* offset by one (+2 instead of +1 ) to ignore headline*/
      grid-column-start: columns;
    }
    &:nth-child(3n+3) {
      grid-column-start: column 5;
    }
    &:nth-child(3n+1) {
      grid-column-start: column 9;
    }
    path {
      fill: var(--on-background__medium-emphasis);
      transition: fill .5s ease;
    }
    &:hover {
      path {
        fill: var(--on-background__high-emphasis);
      }
    }
  }
  ${mq.is.tablet} {
    .svg-client-logo {
      grid-column-end: span 6;
      &:nth-child(2n+2) { /* offset by one (+2 instead of +1 ) to ignore headline*/
        grid-column-start: columns;
      }
      &:nth-child(2n+3) {
        grid-column-start: column 7;
      }
    }
  }
  ${mq.is.mobile} {
    .svg-client-logo {
      grid-column-end: span 3;
      &:nth-child(2n+2) { /* offset by one (+2 instead of +1 ) to ignore headline*/
        grid-column-start: columns;
      }
      &:nth-child(2n+3) {
        grid-column-start: column 4;
      }
    }
  }
`

export default function Clients() {

  return (
    <section className={`${style} Grid`}>
      <Headline level="2" style="3" center>Clients & Partners</Headline>
      {clients.map((client: CompanyType) => {
        return <ClientLogo company={client} key={client} />
      })}
    </section>
  )
}