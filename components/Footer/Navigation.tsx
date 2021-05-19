import { Logo } from '../Logo'
import styles from '@styles/components/Footer.navigation.module.scss'
import { Separator } from 'components/Separator'
import Link from 'next/link'

const Navigation = () => {
  return (
    <section className={styles.container}>
      <Separator />
      <Logo homepageLink small />
      <menu>
        <Link href='/'><a>Index</a></Link>
        <Link href='/about-lukas-oppermann'><a>About</a></Link>
        <Link href='/now'><a>Now</a></Link>
        <Link href='/blog'><a>Writing</a></Link>
        <Link href='/privacy'><a>Imprint & privacy policy</a></Link>
        <small>Copyright {new Date().getFullYear()} — Lukas&nbsp;Oppermann</small>
      </menu>
    </section>
  )
}

export default Navigation
