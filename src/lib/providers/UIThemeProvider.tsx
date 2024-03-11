'use client'

import React, { type FC, type PropsWithChildren } from 'react'
import { ThemeProvider } from 'next-themes'

const UIThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>
}

export default UIThemeProvider
