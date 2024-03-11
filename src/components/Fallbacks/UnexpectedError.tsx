import React, { type FC } from 'react'
import classes from '@/components/Fallbacks/fallbacks.module.scss'
import Image from 'next/image'
import ScaredEmoji from '@/shared/assets/emoji/ScaredEmoji.png'
import { Button } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRotateRight } from '@fortawesome/free-solid-svg-icons'

const UnexpectedError: FC<{ reset: () => void; digest?: string }> = ({
  reset,
  digest,
}) => {
  return (
    <div className={classes.error}>
      <Image
        src={ScaredEmoji}
        alt={'scared'}
        width={150}
        height={150}
        placeholder={'blur'}
        className={classes.image}
      />

      <h2 className={classes.head}>Ошибка!</h2>
      <p className={classes.desc}>
        На стороне сервера или НИШ произошла непредвиденная ошибка. Пожалуйста,
        попробуйте позже
      </p>

      {digest && <p className={classes.digest}>Код ошибки: {digest}</p>}

      <Button
        type="primary"
        block
        size="large"
        onClick={() => reset()}
        icon={<FontAwesomeIcon icon={faRotateRight} />}
        className={classes.back}
      >
        Попробовать снова
      </Button>
    </div>
  )
}

export default UnexpectedError
