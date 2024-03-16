import React from 'react'
import classes from '@/components/Journal/journal.module.scss'
import Image from 'next/image'
import SleepyEmoji from '@/shared/assets/emoji/SleepyEmoji.png'

const JournalEmpty = () => {
  return (
    <div className={classes.error}>
      <Image
        src={SleepyEmoji}
        alt={'sleepy-emoji'}
        width={120}
        height={120}
        className={classes.image}
      />

      <h1 className={classes.head}>Журнал не найден</h1>
      <p className={classes.desc}>
        Четверть еще не началась или данные не успели включить в СУШ
      </p>
    </div>
  )
}

export default JournalEmpty
