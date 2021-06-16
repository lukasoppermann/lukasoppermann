import { ActivatableLink } from '../ActivatableLink'
import DarkModeToggle from './DarkModeToggle'
import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'

type NavigationProps = {
  closeMenu: any,
  active?: boolean
}

const style = css`
  nav {
    display: flex;
    justify-content: flex-end;
    a {
      color: var(--on-background__high-emphasis);
      font-size: var(--font-size--default);
      font-weight: var(--font-weight--bold);
      text-transform: uppercase;
      letter-spacing: .2px;
      padding: 8px 0 8px 24px;
      span {
        transition: none;
      }
    }
    .dark-mode-toggle {
      margin-left: 32px;
    }
  }
  ${mq.is.mobile} {
    position: absolute;
    left: 0;
    top: 0;
    height: 0px;
    width: 100vw;
    overflow: hidden;
    background: var(--background);
    transition: height .75s ease .5s;
    nav {
      display: flex;
      justify-content: flex-start;
      flex-direction: column;
      a {
        font-size: var(--font-size--headline);
        opacity: 0;
        transform: translate(0, -25%);
        transition: opacity .75s ease .25s, transform .75s ease .25s, color .25s ease;
        height: 64px;
        display: flex;
        align-items: center;
      }
      .dark-mode-toggle {
        margin-left: 0px;
        position: absolute;
        width: 64px;
        height: 64px;
        bottom: 16px;
        right: 16px;
        opacity: 0;
        transform: translate(100%, 100%);
        transition: opacity .75s ease 0s, transform .75s ease 0s;
      }
    }
    &.is-active {
      height: var(--mobile-menu-height, 100vh);
      transition: height .75s ease 0s;
      nav {
        a {
          opacity: 1;
          transform: translate(0, 0);
          transition: opacity .75s ease .25s, transform .75s ease .25s, color .25s ease;
        }
        .dark-mode-toggle {
          opacity: 1;
          transform: translate(0, 0);
          transition: opacity .75s ease .75s, transform .75s ease .75s;
        }
      }
    }
  }
`

const Navigation = ({closeMenu, active}: NavigationProps) => {
  return (
    <menu className={`Navigation ${style} ${active ? 'is-active' : ''}`}>
      <a className='Menu__icon' />
      <nav className='Menu__items'>
        <ActivatableLink href='/'>
          <a onClick={closeMenu}>Home</a>
        </ActivatableLink>
        <a
          href='//images.ctfassets.net/5dfliyp93yzg/cjGKGKXUMxAaOVJg53FHI/f3d3c9a2a176335affec167154b6881c/resume_lukas_oppermann_01.4.pdf'
          target='_blank'
          rel='noreferrer'
          className='Menu__link'
          onClick={closeMenu}
        >
          <span className='Menu__link-text'>Resume</span>
        </a>
        <ActivatableLink href='/blog'>
          <a onClick={closeMenu}>Writing</a>
        </ActivatableLink>
        <a
          href='mailto:lukas@vea.re?subject=Hey 👋,%20what&apos;s%20up?&body=Great%20to%20hear%20from%20you,%20how%20can%20I%20help?'
          className='Menu__link'
          target='_blank'
          rel='noreferrer'
          onClick={closeMenu}
        >
          <span className='Menu__link-text'>Contact</span>
        </a>
        <DarkModeToggle />
      </nav>
    </menu>
  )
}

export { Navigation }
