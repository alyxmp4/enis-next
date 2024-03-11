import React from 'react'
import classes from '@/components/Subject/subject.module.scss'
import ThinkingEmoji from '@/shared/assets/emoji/ThinkingEmoji.png'
import Image from 'next/image'

const SubjectNoInfo = () => {
  return (
    <div className={classes.error}>
      <Image
        src={ThinkingEmoji}
        alt={'thinking'}
        width={150}
        height={150}
        placeholder={'blur'}
        className={classes.image}
      />

      <h2 className={classes.head}>Данные о секции не найдены</h2>
      <p className={classes.desc}>
        Секцию еще не добавили в систему, попробуйте позже
      </p>
    </div>
  )
}

export default SubjectNoInfo
