import { Navigation } from './Navigation'
import { Logo } from 'components/Logo'
import { Icon } from 'components/Icon'
import { css } from '@emotion/css'
import { useState} from 'react'
import { useWindowScroll, useThrottledFn } from 'beautiful-react-hooks'; 
import { mq } from 'config/mediaQueries'

const style = css`
  --header-height: 64px;
  --mobile-menu-height: calc(100vh - var(--header-height));
  height: var(--header-height);
  align-items: center;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--background);
  &.is-scrolled {
    box-shadow: 1px 0 15px rgba(0,0,0,.02);
    background: var(--surface);
  }
  .logo {
    grid-column: columns / span 2;
    z-index: 2;
  }
  .Navigation {
    z-index: 1;
    grid-column: column 8 / span 5;
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
  // const [scrollDirection, setScrollDirection] = useState({
  //   direction: null,
  //   y: 0
  // })
  const [isScrolled, setIsScrolled] = useState(false)
  const closeMobileMenu = () => setMenuOpen(false)
  
  useWindowScroll(useThrottledFn(() => {
    if(window.scrollY > 0) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
    // setScrollDirection({
    //   direction: window.scrollY > scrollDirection.y ? 'down' : 'up',
    //   y: window.scrollY
    // })
  }))

  return (
    <header className={`${style} Grid ${isScrolled ? 'is-scrolled' : ''}`}>
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
