import React from 'react'
import classes from '@/components/Fallbacks/fallbacks.module.scss'
import ThinkingEmoji from '@/shared/assets/emoji/ThinkingEmoji.png'
import Image from 'next/image'
import { Button } from 'antd'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

const NotFound = () => {
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

      <h2 className={classes.head}>Страница не найдена</h2>
      <p className={classes.desc}>Этой страницы не существует</p>
      <Link href={'/'}>
        <Button
          icon={<FontAwesomeIcon icon={faArrowLeft} />}
          block
          className={classes.back}
          size="large"
          type="primary"
        >
          На главную
        </Button>
      </Link>
    </div>
  )
}

export default NotFound
