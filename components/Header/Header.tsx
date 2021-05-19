import { Navigation } from './Navigation'
import { Logo } from 'components/Logo'
import { css } from '@emotion/css'
import DarkModeToggle from './DarkModeToggle'

const style = css`
  height: 64px;
  align-items: center;
  & .logo {
    grid-column: columns / span 2;
  }
  & menu {
    grid-column: column 7 / column 12;
  }
  & button {
    grid-column: column 12;
  }
`

const Header = () => {
  return (
    <header className={`${style} Grid`}>
      <Logo homepageLink />
      <Navigation />
      <DarkModeToggle />
    </header>
  )
}

export { Header }
