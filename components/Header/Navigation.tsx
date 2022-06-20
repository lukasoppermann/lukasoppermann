import { ActivatableLink } from '../ActivatableLink'
import DarkModeToggle from './DarkModeToggle'
import { css } from '@emotion/css'
import { mq } from 'config/mediaQueries'

type NavigationProps = {
  closeMenu: any,
  active?: boolean
}

const style = css`
  .Menu__items {
    display: flex;
    justify-content: flex-end;
    a {
      position: relative;
      color: var(--on-background__high-emphasis);
      font-size: var(--font-size--default);
      font-weight: var(--font-weight--bold);
      text-transform: uppercase;
      letter-spacing: .2px;
      padding: 8px;
      margin-left: 8px;
      span {
        transition: none;
      }
      &:after {
        content: "";
        display: inline;
        position: absolute;
        width: 4px;
        height: 4px;
        background: currentColor;
        border-radius: 100%;
        left: 50%;
        transform: translate(-50%, 0);
        opacity: 0;
        transition: opacity .3s ease, bottom .3s ease, width .3s ease, background .3s ease;
        bottom: 8px;
      }
      &.is-active, &:hover {
        &:after {
          bottom: 0;
          opacity: 1;
        }
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
        letterspacing: .5px;
        opacity: 0;
        transform: translate(0, -25%);
        transition: opacity .75s ease .25s, transform .75s ease .25s, color .25s ease;
        height: 64px;
        padding-left: 32px;
        display: flex;
        align-items: center;
        &:after {
          bottom: auto;
          top: calc(50% - 2px);
          left: 16px;
        }
      }
      .dark-mode-toggle {
        margin-left: 0px;
        position: fixed;
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
    <nav className={`Navigation ${style} ${active ? 'is-active' : ''}`}>
      <div className='Menu__items' suppressHydrationWarning={true}>
        <ActivatableLink href='/'>
          <a onClick={closeMenu}>Home</a>
        </ActivatableLink>
        <a
          download
          href='/resume_lukas_oppermann.pdf'
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
      </div>
    </nav>
  )
}

export { Navigation }
