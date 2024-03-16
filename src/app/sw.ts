import { defaultCache } from '@serwist/next/browser'
import type { PrecacheEntry } from '@serwist/precaching'
import { installSerwist } from '@serwist/sw'
import { v4 } from 'uuid'

declare const self: ServiceWorkerGlobalScope & {
  // Change this attribute's name to your `injectionPoint`.
  __SW_MANIFEST: (PrecacheEntry | string)[] | undefined
}

const revision = v4()

installSerwist({
  precacheEntries: self.__SW_MANIFEST,
  skipWaiting: true,
  clientsClaim: true,
  navigationPreload: true,
  runtimeCaching: defaultCache,
  fallbacks: {
    entries: [
      {
        url: '/~offline',
        revision,
        matcher({ request }) {
          return request.destination === 'document'
        },
      },
    ],
  },
})
