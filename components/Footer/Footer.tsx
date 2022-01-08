import { css } from '@emotion/css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Newsletter = dynamic(
  () => import('@components/Footer/Newsletter'),
  { loading: () => <p></p> }
)


const style = css`
  margin-top: 64px;
  align-items: center;
  align-self: center;
  nav {
    height: 100%;
    grid-row: 1;
    grid-column: columns;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    a, span {
      display: inline-block;
      color: var(--on-background__medium-emphasis);
      font-size: var(--font-size--caption);
      display: flex;
      height: 64px;
      padding-left: 32px;
      align-items: center;
    }
    .copyright {
      color: var(--on-background__low-emphasis);
    }
    a:hover {
      color: var(--on-background__high-emphasis);
      text-decoration: underline;
      cursor: pointer;
    }
    a:first-child {
      padding-left: 0 !important;
    }
  }
  @media (max-width: 992px) {
    padding-bottom: 24px;
    .logo {
      display: none;
    }
    nav {
      grid-column: columns;
      justify-content: center;
      a, span {
        font-size: var(--font-size--default);
        height: 48px;
        padding: 0 16px;
      }
    }
  }
`

const Footer = () =>{
  return (<footer className={`${style} Grid`}>
    <Newsletter />
    <nav>
      <a href='https://dribbble.com/lukasoppermann' rel='noreferrer' target="_blank">Dribbble</a>
      <a href="https://www.linkedin.com/in/lukasoppermann" rel='noreferrer' target="_blank">LinkedIn</a>
      <a href='https://twitter.com/lukasoppermann' rel='noreferrer' target="_blank">Twitter</a>
      <a href='https://github.com/lukasoppermann' rel='noreferrer' target="_blank">GitHub</a>
      <Link href="/imprint">
        <a>Imprint & privacy policy</a>
      </Link>
      <span className="copyright">Copyright 2021 — Lukas Oppermann</span>
    </nav>
  </footer>)
}

export { Footer }