import { Html, Head, Main, NextScript } from 'next/document'

function Document() {
  return (
    <Html lang='en' dir='ltr'>
      <Head>
        <link href='https://fonts.googleapis.com/css?family=Nunito&display=swap' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
