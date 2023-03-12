import '@/styles/index.scss'

import type { AppPropsWithLayout } from 'next/app'

import { EmotionCache } from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { enableMapSet } from 'immer'
import NextNProgress from 'nextjs-progressbar'
import { RecoilRoot } from 'recoil'

import createEmotionCache from '@/config/createEmotionCache'
import { queryClient } from '@/libs/queryClient'

import '@fontsource/inter'
import '@fontsource/noto-sans-jp'
import '@/styles/globals.css'

// https://immerjs.github.io/immer/installation#pick-your-immer-version
enableMapSet()

interface BebopAppProps extends AppPropsWithLayout {
  emotionCache?: EmotionCache
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = createEmotionCache(),
}: BebopAppProps) => {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider value={emotionCache}>
        {getLayout(<Component {...pageProps} />)}
      </CacheProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

const BebopApp = (props: BebopAppProps) => {
  return (
    <RecoilRoot>
      <NextNProgress
        color={`#4338ca`}
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow={true}
      />
      <MyApp {...props} />
    </RecoilRoot>
  )
}

export default BebopApp
