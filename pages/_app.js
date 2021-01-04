import AppMenu from '@components/appmenu'
import '@styles/globals.scss'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <AppMenu />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
