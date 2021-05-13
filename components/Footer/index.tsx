import styles from '@styles/components/Footer.main.module.scss'
import FooterNavigation from './Navigation'
import SocialLinks from './SocialLinks'

const Footer = () => {
  return (
    // @ts-ignore
    <footer className={styles.container} darkmode='true'>
      <section className={styles.info}>
        <div className={styles.column}>
          <h6>Writing</h6>
          <p>I am writing about design, technology, methods and learnings from my personal experience.</p>
          <a className='link-show-all' href='/blog/'>See all →</a>
        </div>
        <div className={styles.column}>
          <h6>Projects</h6>
        </div>
        <div className={styles.column}>
          <h6 className='Footer__contact__headline'>Get in touch</h6>
          <h2 className='Footer__contact__lukas'>Lukas Oppermann</h2>
          <h3 className={styles.contact__job_title}>Creative Director &<br /> Lead UI/UX Designer</h3>

          <h6 className='Footer__contact__say-hi'>Schedule a call or say&nbsp;hi&nbsp;<span className='smilie'>👋</span></h6>
          <a className='Footer__contact__email' target='_blank' rel='noreferrer' href='mailto:lukas@vea.re?subject=Hey 👋,%20what&apos;s%20up?&body=Great%20to%20hear%20from%20you,%20how%20can%20I%20help?'>lukas@vea.re</a>

          <a className='Footer__contact__cv' target='_blank' rel='noreferrer' href='https://drive.google.com/open?id=10K9F9o0hokq4iPAbF5mseKJn_yflt19k'>Download my full CV (pdf)</a>
        </div>
      </section>
      <SocialLinks />
      <FooterNavigation />
    </footer>
  )
}

export default Footer
