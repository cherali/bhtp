import type { FC, ReactNode } from 'react'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'
import { prefixer } from 'stylis'

interface EmotionCacheProviderProps {
  children: ReactNode;
}


// Create cache
const cacheRtl = createCache({
  key: 'css',
  stylisPlugins: [prefixer],
  prepend: true,
})

const EmotionCacheProvider: FC<EmotionCacheProviderProps> = ({ children }) => {
  return (
    <CacheProvider value={cacheRtl}>
      {children}
    </CacheProvider>
  )
}

export default EmotionCacheProvider