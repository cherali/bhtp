import type { AppProps } from 'next/app'
import EmotionCacheProvider from 'theme/EmotionCacheProvider'
import ThemeProvider from 'theme/ThemeProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </EmotionCacheProvider>
  )
}

export default MyApp
