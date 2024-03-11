import '@/app/globals.scss'

import { Inter } from 'next/font/google'
import UIThemeProvider from '@/lib/providers/UIThemeProvider'
import AntdProvider from '@/lib/providers/AntdProvider'
import React from 'react'
import ProgressProvider from '@/lib/providers/ProgressProvider'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { GoogleAnalytics } from '@next/third-parties/google'
import { env } from '@/env'

config.autoAddCss = false

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
})

export const metadata = {
  title: 'enis next',
  metadataBase: new URL('https://enis.alyxmp4.pro'),
  icons: [{ rel: 'icon', url: '/favicon.ico' }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={inter.className}>
        <UIThemeProvider>
          <AntdProvider>
            <ProgressProvider>{children}</ProgressProvider>
          </AntdProvider>
        </UIThemeProvider>
      </body>

      <GoogleAnalytics gaId={env.GA_THREAD_ID} />
    </html>
  )
}
