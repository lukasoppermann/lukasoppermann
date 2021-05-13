import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='en'>
        <Head>
          <link href='https://fonts.googleapis.com/css?family=Montserrat:700|Noto+Serif:400,400i,400b|Source+Sans+Pro:400,600|Source+Code+Pro:700&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <script src='noflash.js' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
