import styles from '@styles/components/Footer.sociallinks.module.scss'
import { Separator } from '@components/Separator'

const SocialLinks = () => {
  return (
    <section className={styles.container}>
      <Separator />
      <div className={styles.column}>
        <h6>Business</h6>
        <p>For networking connect on <a href='https://www.linkedin.com/in/lukasoppermann' rel='noreferrer' target='_blank'>LinkedIn</a></p>
      </div>
      <div className={styles.column}>
        <h6>Design</h6>
        <p>Find my latest work on <a href='https://dribbble.com/lukasoppermann' rel='noreferrer' target='_blank'>Dribbble</a> and <a href='https://www.behance.net/lukasoppermann' rel='noreferrer' target='_blank'>Behance</a></p>
      </div>
      <div className={styles.column}>
        <h6>Thoughts</h6>
        <p>Explore my thoughts on <a href='https://twitter.com/lukasoppermann' rel='noreferrer' target='_blank'>Twitter</a></p>
      </div>
      <div className={styles.column}>
        <h6>Code</h6>
        <p>$ git checkout my code projects on <a href='https://github.com/lukasoppermann' rel='noreferrer' target='_blank'>Github</a></p>
      </div>
    </section>
  )
}

export default SocialLinks
