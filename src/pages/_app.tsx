import type { AppProps } from 'next/app'
import EmotionCacheProvider from 'theme/EmotionCacheProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmotionCacheProvider>
      <Component {...pageProps} />
    </EmotionCacheProvider>
  )
}

export default MyApp
