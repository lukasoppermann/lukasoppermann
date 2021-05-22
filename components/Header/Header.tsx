import { Navigation } from './Navigation'
import { Logo } from 'components/Logo'
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
    }
  }
`

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMobileMenu = () => setMenuOpen(false)

  return (
    <header className={`${style} Grid`}>
      <Logo homepageLink />
      <Navigation closeMenu={closeMobileMenu} active={menuOpen} />
      <div className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? (
          "X"
        ) : (
          "="
        )}
      </div>
    </header>
  )
}

const Header2 = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">ABOUT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">CONTACT</a>
          </li>
          <li className="option" onClick={closeMobileMenu}>
            <a href="#">BLOG</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Header }
