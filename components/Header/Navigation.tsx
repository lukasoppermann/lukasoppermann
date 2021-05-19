import { ActivatableLink } from '../ActivatableLink'
import { css } from '@emotion/css'

const style = css`
  & nav {
    display: flex;
    justify-content: flex-end;
  }
  & nav > a {
    color: var(--on-background__high-emphasis);
    font-size: var(--font-size--default);
    font-weight: var(--font-weight--bold);
    text-transform: uppercase;
    letter-spacing: .2px;
    padding: 8px 0 8px 24px;
  }
`

const Navigation = () => {
  return (
    <menu className={style}>
      <a className='Menu__icon' />
      <nav className='Menu__items'>
        <ActivatableLink href='/'>
          <a>Index</a>
        </ActivatableLink>
        <a
          href='//images.ctfassets.net/5dfliyp93yzg/cjGKGKXUMxAaOVJg53FHI/f3d3c9a2a176335affec167154b6881c/resume_lukas_oppermann_01.4.pdf'
          target='_blank'
          rel='noreferrer'
          className='Menu__link'
        >
          <span className='Menu__link-text'>Resume</span>
        </a>
        <ActivatableLink href='/blog'>
          <a>Writing</a>
        </ActivatableLink>
        <a
          href='mailto:lukas@vea.re?subject=Hey 👋,%20what&apos;s%20up?&body=Great%20to%20hear%20from%20you,%20how%20can%20I%20help?'
          className='Menu__link'
          target='_blank'
          rel='noreferrer'
        >
          <span className='Menu__link-text'>Contact</span>
        </a>
      </nav>
    </menu>
  )
}

export { Navigation }
