import Document, { Html, Head, Main, NextScript } from 'next/document'
import { renderStatic } from '@lib/renderStatic'
import * as React from 'react'
class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const page = await ctx.renderPage()
    const { css, ids } = await renderStatic(page.html)
    const initialProps = await Document.getInitialProps(ctx)
    return { 
      ...initialProps,
      styles: (
        <React.Fragment>
          {initialProps.styles}
          <style
            data-emotion={`css ${ids.join(' ')}`}
            dangerouslySetInnerHTML={{ __html: css }}
          />
        </React.Fragment>
      ),
    }
  }

  
  render () {
    return (
      <Html lang='en'>
        <Head>
          <link href='https://fonts.googleapis.com/css?family=Montserrat:700|Noto+Serif:400,400i,400b|Source+Sans+Pro:400,600|Source+Code+Pro:700&display=swap' rel='stylesheet' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
