import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import EmotionCacheProvider from 'theme/EmotionCacheProvider'
import ThemeProvider from 'theme/ThemeProvider'
import { store } from 'store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <EmotionCacheProvider>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </EmotionCacheProvider>
    </Provider>
  )
}

export default MyApp
