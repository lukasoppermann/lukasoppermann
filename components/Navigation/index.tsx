import ActivatableLink from '@components/ActivatableLink'
import Logo from '@components/Logo'
import styles from '@styles/components/Navigatin.module.scss'
import DarkModeToggle from '@components/Navigation/DarkModeToggle'

const Navigation = () => {
  return (
    <>
      <Logo />
      <menu className='Menu__overlay'>
        <a className='Menu__icon' />
        <nav className='Menu__items'>
          <ActivatableLink href='/'>
            <a>Index</a>
          </ActivatableLink>
          <ActivatableLink href='/about-lukas-oppermann'>
            <a>About</a>
          </ActivatableLink>
          <a href='//images.ctfassets.net/5dfliyp93yzg/cjGKGKXUMxAaOVJg53FHI/f3d3c9a2a176335affec167154b6881c/resume_lukas_oppermann_01.4.pdf' target='_blank' rel='noreferrer' className='Menu__link'><span className='Menu__link-text'>Resume</span></a>
          <ActivatableLink href='/blog'>
            <a>Writing</a>
          </ActivatableLink>
          {/* <a href='/' class="Menu__link${activePath === '' ? ' is-active' : ''}"><span class='Menu__link-text'>Index</span></a>
        <a href='/about-lukas-oppermann/' class="Menu__link${activePath === '/about-lukas-oppermann' ? ' is-active' : ''}"><span class='Menu__link-text'>About</span></a>

        <a href='/blog/' class="Menu__link${activePath === '/blog' ? ' is-active' : ''}"><span class='Menu__link-text'>Writing</span></a> */}
          {/* <a class='Menu__link' target='_blank' rel='noopener' href='mailto:lukas@vea.re?subject=Hey 👋,%20what&apos;s%20up?&body=Great%20to%20hear%20from%20you,%20how%20can%20I%20help?'><span class='Menu__link-text'>Contact</span></a> */}
        </nav>
        <DarkModeToggle />
      </menu>
    </>
  )
}

export default Navigation
