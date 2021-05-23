import { Navigation } from './Navigation'
import { Logo } from 'components/Logo'
import { Icon } from 'components/Icon'
import { css } from '@emotion/css'
import { useState} from 'react'
import { mq } from 'config/mediaQueries'

const style = css`
  --header-height: 64px;
  --mobile-menu-height: calc(100vh - var(--header-height));
  height: var(--header-height);
  align-items: center;
  .logo {
    grid-column: columns / span 2;
    z-index: 2;
  }
  .Navigation {
    z-index: 1;
    grid-column: column 7 / column 12;
  }
  .mobile-menu-button {
    z-index: 2;
    display: none;
    color: var(--on-background__high-emphasis);
    height: 64px;
    width: 64px;
    position: absolute;
    right: 0;
    top: 0;
    justify-content: center;
    align-items: center;
  }
  ${mq.isMobile} {
    .Navigation {
      top: var(--header-height) !important;
    }
    .mobile-menu-button {
      display: flex;
      .svg-icon {
        path {
          fill: var(--on-background__high-emphasis);
        }
      }
    }
  }
`

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMobileMenu = () => setMenuOpen(false)

  return (
    <header className={`${style} Grid`}>
      <Logo homepageLink />
      <Navigation closeMenu={closeMobileMenu} active={menuOpen} />
      <div className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          <Icon type="close" />
        ) : (
          <Icon type="menu" />
        )}
      </div>
    </header>
  )
}
