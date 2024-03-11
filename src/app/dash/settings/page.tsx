import React from 'react'
import classes from '@/app/dash/settings/settings.module.scss'
import SettingsNav from '@/components/Settings/SettingsNav'
import Settings from '@/components/Settings/Settings'

export const generateMetadata = async () => {
  return {
    title: 'enis next | настройки',
  }
}

const Page = () => {
  return (
    <div className={classes.wrapper}>
      <SettingsNav />
      <Settings />
    </div>
  )
}

export default Page
