import Link from 'next/link'

// ${embedFile('./public/svgs/veare-wordmark.svg')}
export default function AppMenu () {
  return (
    <>
      <menu class='Menu__overlay'>
        <a class='Menu__icon' />
        <nav class='Menu__items'>
          <Link href='/'>
            <a>Index</a>
          </Link>
          {/* <a href='/' class="Menu__link${activePath === '' ? ' is-active' : ''}"><span class='Menu__link-text'>Index</span></a>
        <a href='/about-lukas-oppermann/' class="Menu__link${activePath === '/about-lukas-oppermann' ? ' is-active' : ''}"><span class='Menu__link-text'>About</span></a>
        <a href='//images.ctfassets.net/5dfliyp93yzg/cjGKGKXUMxAaOVJg53FHI/f3d3c9a2a176335affec167154b6881c/resume_lukas_oppermann_01.4.pdf' rel='noopener' target='_blank' class='Menu__link'><span class='Menu__link-text'>Resume</span></a>
        <a href='/blog/' class="Menu__link${activePath === '/blog' ? ' is-active' : ''}"><span class='Menu__link-text'>Writing</span></a> */}
          <a class='Menu__link' target='_blank' rel='noopener' href='mailto:lukas@vea.re?subject=Hey 👋,%20what&apos;s%20up?&body=Great%20to%20hear%20from%20you,%20how%20can%20I%20help?'><span class='Menu__link-text'>Contact</span></a>
        </nav>
      </menu>
    </>
  )
}
