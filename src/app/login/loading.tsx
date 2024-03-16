import React from 'react'
import { Skeleton } from 'antd'
import classes from '@/app/login/login.module.scss'
import SkeletonInput from 'antd/es/skeleton/Input'
import SkeletonButton from 'antd/es/skeleton/Button'

const Loading = () => {
  return (
    <div className={classes.login}>
      <div className={classes.form}>
        <SkeletonButton
          size="large"
          active
          shape="circle"
          style={{ width: 60, height: 60, marginBottom: '1.5rem' }}
        />

        <Skeleton
          paragraph={false}
          title={{ width: 100, style: { height: 25 } }}
          active
          className={classes.head}
          style={{ marginBottom: 3 }}
        />
        <Skeleton
          title={false}
          paragraph={{ rows: 1, width: 245, style: { minWidth: 0 } }}
          active
          className={classes.tip}
        />

        <SkeletonInput size="large" className={classes.input} block active />

        <SkeletonInput size="large" className={classes.input} block active />

        <SkeletonButton
          block
          size="large"
          className={classes.submit}
          style={{ marginTop: 0 }}
          active
        />

        <Skeleton title={false} paragraph={{ rows: 1, width: 200 }} active />
      </div>
    </div>
  )
}

export default Loading
