import React from 'react'
import classes from '@/components/Journal/journal.module.scss'
import Image from 'next/image'
import SleepyEmoji from '@/shared/assets/emoji/SleepyEmoji.png'

const JournalEmpty = () => {
  return (
    <div className={classes.empty}>
      <Image src={SleepyEmoji} alt={'sleepy-emoji'} width={120} height={120} />

      <h1>Журнал не найден</h1>
      <p className={classes.description}>
        Четверть еще не началась или данные не успели включить в СУШ
      </p>
    </div>
  )
}

export default JournalEmpty
