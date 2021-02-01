import Logo from '@components/Logo'
import styles from '@styles/components/Footer.navigation.module.scss'
import Separator from '@components/Separator'

const Navigation = () => {
  return (
    <section className={styles.container}>
      <Separator />
      <Logo homepageLink className={styles.logo} />
      <menu>
        <a href='/'>Index</a>
        <a href='/about-lukas-oppermann'>About</a>
        <a href='/now'>Now</a>
        <a href='/blog'>Writing</a>
        <a href='/privacy'>Imprint & privacy policy</a>
        <small>Copyright {new Date().getFullYear()} — Lukas&nbsp;Oppermann</small>
      </menu>
    </section>
  )
}

export default Navigation
