import type { AppProps /*, AppContext */ } from 'next/app'
import Head from 'next/head'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useRouter } from 'next/router'
// import { Header } from '@components/Header/Header'
import { Footer } from '@components/Footer/Footer'
import '@styles/globals.scss'
import dynamic from 'next/dynamic'

const Header = dynamic(
  () => import('@components/Header/Header'),
  { loading: () => <p></p> }
)

function MyApp ({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter()
  // const [scroll, setScroll] = useState(false)

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     if (window.scrollY < 5) {
  //       setScroll(false)
  //     }
  //     setScroll(true)
  //   })
  // })
  
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
