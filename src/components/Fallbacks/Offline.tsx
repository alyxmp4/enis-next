import React from 'react'
import classes from '@/components/Fallbacks/fallbacks.module.scss'

const Offline = () => {
  return (
    <div className={classes.error}>
      <h2 className={classes.head}>Подключение оборвано</h2>
      <p className={classes.desc}>
        Нет подключения к интернету. Для работы приложения необходим интернет.
        Пожалуйста, подключитесь к сети
      </p>
    </div>
  )
}

export default Offline
