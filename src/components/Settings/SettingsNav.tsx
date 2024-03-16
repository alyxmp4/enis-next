'use client'

import React from 'react'
import classes from '@/components/Settings/settings.module.scss'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next-nprogress-bar'

const SettingsNav = () => {
  const router = useRouter()

  return (
    <nav className={classes.nav}>
      <Button
        icon={<FontAwesomeIcon icon={faArrowLeft} />}
        size="large"
        onClick={() => router.back()}
      />
      <h2>Настройки</h2>
    </nav>
  )
}

export default SettingsNav
