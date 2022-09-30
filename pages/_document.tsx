import { Html, Head, Main, NextScript } from 'next/document'
import * as React from 'react'
  
export default function Document() {
    return (
      <Html lang='en'>
        <Head>
          {/* <link href='https://fonts.googleapis.com/css?family=Montserrat:700|Noto+Serif:400,400i,400b|Source+Sans+Pro:400,600|Source+Code+Pro:700&display=swap' rel='stylesheet' /> */}
          <meta name="color-scheme" content="light dark" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }