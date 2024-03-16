'use client'

import React, { type FC, type PropsWithChildren } from 'react'
import { AppProgressBar } from 'next-nprogress-bar'
import { UIThemeConfig } from '@/shared/themeConfig'

const ProgressProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <AppProgressBar
        options={{ showSpinner: false }}
        color={UIThemeConfig?.colorPrimary}
        showOnShallow
        nonce={'nporgress'}
      />

      {children}
    </>
  )
}

export default ProgressProvider
