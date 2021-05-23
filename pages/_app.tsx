import type { AppProps /*, AppContext */ } from 'next/app'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useRouter } from 'next/router'
import useDarkMode from 'use-dark-mode'
import { Header } from 'components/Header/Header'
import { Footer } from 'components/Footer/Footer'
import '@styles/globals.scss'


function MyApp ({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  // @ts-ignore
  const darkMode = useDarkMode(false)
  
  return (
    <>
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
