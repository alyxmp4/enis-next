import React from 'react'
import classes from '@/components/Subject/subject.module.scss'
import ThinkingEmoji from '@/shared/assets/emoji/ThinkingEmoji.png'
import Image from 'next/image'

const SubjectNotFound = () => {
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

      <h2 className={classes.head}>Предмет не найден</h2>
      <p className={classes.desc}>Проверьте правильность запроса</p>
    </div>
  )
}

export default SubjectNotFound
