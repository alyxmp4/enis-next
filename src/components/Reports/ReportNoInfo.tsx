import React from 'react'
import classes from '@/components/Reports/reports.module.scss'
import ThinkingEmoji from '@/shared/assets/emoji/ThinkingEmoji.png'
import Image from 'next/image'

const ReportNoInfo = () => {
  return (
    <div className={classes.notfound}>
      <Image
        src={ThinkingEmoji}
        alt={'thinking'}
        width={150}
        height={150}
        placeholder={'blur'}
        className={classes.image}
      />

      <h2 className={classes.head}>Табель не найден</h2>
      <p className={classes.desc}>
        Данные отсутствуют. Попробуйте выбрать другой учебный год
      </p>
    </div>
  )
}

export default ReportNoInfo
