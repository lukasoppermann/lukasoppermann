import SVGWordmark from '@svgs/veare-wordmark.svg'
import styles from '@styles/components/Logo.module.scss'
import Link from 'next/link'

const Logo = ({ homepageLink = false, ...props }) => {
  if (homepageLink) {
    return (
      <Link href='/'>
        <a className='veare-wordmark' href='/' aria-label='Go to homepage' {...props}>
          <SVGWordmark className={styles.logo} />
        </a>
      </Link>
    )
  }
  return <SVGWordmark className={styles.logo} {...props} />
}

export default Logo
