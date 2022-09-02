import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import EmotionCacheProvider from 'theme/EmotionCacheProvider'
import ThemeProvider from 'theme/ThemeProvider'
import { store } from 'store'
import MainStyles from 'theme/MainStyles'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <EmotionCacheProvider>
        <ThemeProvider>
          <MainStyles />
          <Component {...pageProps} />
        </ThemeProvider>
      </EmotionCacheProvider>
    </Provider>
  )
}

export default MyApp
