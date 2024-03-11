'use client'

import React, { type FC, type PropsWithChildren } from 'react'
import { AntdRegistry } from '@ant-design/nextjs-registry'
import { ConfigProvider, theme } from 'antd'
import { useTheme } from 'next-themes'
import { UIThemeConfig } from '@/shared/themeConfig'

const AntdProvider: FC<PropsWithChildren> = ({ children }) => {
  const { resolvedTheme } = useTheme()

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: UIThemeConfig,
          algorithm:
            resolvedTheme == 'dark'
              ? theme.darkAlgorithm
              : theme.defaultAlgorithm,
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  )
}

export default AntdProvider
