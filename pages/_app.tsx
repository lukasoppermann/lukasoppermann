import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useRouter } from 'next/router'
import { Footer } from '@components/Footer/Footer'
import '@styles/globals.scss'
import dynamic from 'next/dynamic'
import splitbee from '@splitbee/web'
import { useEffect } from 'react'

const Header = dynamic(
  () => import('@components/Header/Header'),
  { loading: () => <p></p> }
)

function MyApp ({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  // analytics
  useEffect((): void => {
    splitbee.init({
      apiUrl: '/_hive',
      scriptUrl: '/bee.js',
      // To use Splitbee on another subdomain.
      // Token can be found in project settings
      token: 'QDBC8O2WAN5J',
      // Enable cookie-less mode. Defaults to `false`
      disableCookie: false
    });
  }, [])
  
  return (
    <>
      <Head>
        <title>Lukas Oppermann — Lead UI/UX Design &amp; Creative Technologist</title>
        <meta property="og:title" content="Lukas Oppermann — Lead UI/UX Design &amp; Creative Technologist — vea.re" key="title" />
      </Head>
      <Header />
      <TransitionGroup>
        <CSSTransition
          key={asPath}
          classNames='Page-animation__fade'
          timeout={1000}
        >
          <Component {...pageProps} />
        </CSSTransition>
      </TransitionGroup>
      <Footer />
    </>
  )
}

export default MyApp
