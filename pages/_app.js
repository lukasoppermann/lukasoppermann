import Navigation from '@components/navigation'
import '@styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
