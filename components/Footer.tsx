import { css } from '@emotion/css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Newsletter = dynamic(
  () => import('@components/Newsletter'),
  { loading: () => <p></p> }
)


const style = css`
  margin-top: 96px;
  align-items: center;
  align-self: self-end;
  .Newsletter {
    grid-row: 1;
    grid-column: full-bleed;
  }
  nav {
    background: var(--footer--background, var(--surface-alternative));
    height: 100%;
    grid-row: 2;
    grid-column: full-bleed;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    a, span {
      display: inline-block;
      color: var(--on-dark__medium-emphasis);
      font-size: var(--font-size--caption);
      display: flex;
      height: 64px;
      padding-left: 32px;
      align-items: center;
    }
    .copyright {
      color: var(--on-dark__low-emphasis);
    }
    a:hover {
      color: var(--on-dark__high-emphasis);
      text-decoration: underline;
      cursor: pointer;
    }
    a:first-child {
      padding-left: 0 !important;
    }
  }
  @media (max-width: 992px) {
    .logo {
      display: none;
    }
    nav {
      justify-content: center;
      a, span {
        font-size: var(--font-size--default);
        height: 48px;
        padding: 8px 16px;
        margin: 0;
      }
    }
  }
`

const Footer = () =>{
  return (<footer className={`${style} Grid`}>
    <Newsletter />
    <nav>
      <a href='https://dribbble.com/lukasoppermann' rel='noreferrer' target="_blank" data-splitbee-event="Social Profile" data-splitbee-event-destination="Dribbble">Dribbble</a>
      <a href="https://www.linkedin.com/in/lukasoppermann" rel='noreferrer' target="_blank" data-splitbee-event="Social Profile" data-splitbee-event-destination="LinkedIn">LinkedIn</a>
      <a href='https://twitter.com/lukasoppermann' rel='noreferrer' target="_blank" data-splitbee-event="Social Profile" data-splitbee-event-destination="Twitter">Twitter</a>
      <a href='https://github.com/lukasoppermann' rel='noreferrer' target="_blank" data-splitbee-event="Social Profile" data-splitbee-event-destination="GitHub">GitHub</a>
      <Link href="/imprint">
        <a>Imprint & privacy policy</a>
      </Link>
      <span className="copyright">Copyright {new Date().getFullYear()} — Lukas Oppermann</span>
    </nav>
  </footer>)
}

export { Footer }