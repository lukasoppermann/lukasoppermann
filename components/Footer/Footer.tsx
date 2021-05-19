import { Logo } from 'components/Logo'
import { css } from '@emotion/css'
import Link from 'next/link'

const style = css`
  height: 64px;
  align-items: center;
  align-self: flex-end;
  & .logo {
    grid-column: columns / span 2;
  }
  nav {
    height: 100%;
    grid-column: column 3 / span 10;
    display: flex;
    justify-content: flex-end;
  }
  a, span {
    float: left;
    color: var(--on-background__medium-emphasis);
    font-size: var(--font-size--caption);
    display: flex;
    height: 100%;
    padding-left: 32px;
    align-items: center;
  }
  a:hover {
    color: var(--on-background__high-emphasis);
    cursor: pointer;
  }
`

const Footer = () =>{
  return (<footer className={`${style} Grid`}>
    <Logo small />
    <nav>
      <a href='https://dribbble.com/lukasoppermann' rel='noreferrer' target="_blank">Dribbble</a>
      <a href="https://www.linkedin.com/in/lukasoppermann" rel='noreferrer' target="_blank">LinkedIn</a>
      <a href='https://twitter.com/lukasoppermann' rel='noreferrer' target="_blank">Twitter</a>
      <a href='https://github.com/lukasoppermann' rel='noreferrer' target="_blank">GitHub</a>
      <Link href="/imprint">
        <a>Imprint & privacy policy</a>
      </Link>
      <span>Copyright 2021 — Lukas Oppermann</span>
    </nav>
  </footer>)
}

export { Footer }