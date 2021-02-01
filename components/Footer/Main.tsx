import styles from '@styles/components/Footer.main.module.scss'
import FooterNavigation from './Navigation'

interface FooterProps extends DetailedHTMLProps{
  darkmode?: string;
}

const Footer = () => {
  return (
    // @ts-ignore
    <footer className={styles.container} darkmode='true'>
      <section className='Footer__read-and-write'>
        <h6 className='Footer__read__headline'>Writing</h6>
        <ol className='Footer__read__articles'>
          {/* ${repeat(articles, (article) => html`<li itemprop="blogPost" itemscope itemtype="http://schema.org/BlogPosting">${articlePreview(article.fields)}</li>`)} */}
          <li>
            <a className='link-show-all' href='/blog/'>See all →</a>
          </li>
        </ol>
        <div className='Footer__contact'>
          <h6 className='Footer__contact__headline'>Get in touch</h6>
          <h2 className='Footer__contact__lukas'>Lukas Oppermann</h2>
          <h3 className={styles.contact__job_title}>Creative Director &<br /> Lead UI/UX Designer</h3>

          <h6 className='Footer__contact__say-hi'>Schedule a call or say&nbsp;hi&nbsp;<span className='smilie'>👋</span></h6>
          <a className='Footer__contact__email' target='_blank' rel='noreferrer' href='mailto:lukas@vea.re?subject=Hey 👋,%20what&apos;s%20up?&body=Great%20to%20hear%20from%20you,%20how%20can%20I%20help?'>lukas@vea.re</a>

          <a className='Footer__contact__cv' target='_blank' rel='noreferrer' href='https://drive.google.com/open?id=10K9F9o0hokq4iPAbF5mseKJn_yflt19k'>Download my full CV (pdf)</a>
        </div>
      </section>
      <section className='Footer__connect'>
        <hr />
        <div className='Footer__connect__block'>
          <h6>Business</h6>
          <p>For networking connect on <a href='https://www.linkedin.com/in/lukasoppermann' rel='noreferrer' target='_blank'>LinkedIn</a></p>
        </div>
        <div className='Footer__connect__block'>
          <h6>Design</h6>
          <p>Find my latest work on <a href='https://dribbble.com/lukasoppermann' rel='noreferrer' target='_blank'>Dribbble</a> and <a href='https://www.behance.net/lukasoppermann' rel='noreferrer' target='_blank'>Behance</a></p>
        </div>
        <div className='Footer__connect__block'>
          <h6>Thoughts</h6>
          <p>Explore my thoughts on <a href='https://twitter.com/lukasoppermann' rel='noreferrer' target='_blank'>Twitter</a></p>
        </div>
        <div className='Footer__connect__block'>
          <h6>Code</h6>
          <p>$ git checkout my code projects on <a href='https://github.com/lukasoppermann' rel='noreferrer' target='_blank'>Github</a></p>
        </div>
      </section>
      <FooterNavigation />
    </footer>
  )
}

export default Footer
