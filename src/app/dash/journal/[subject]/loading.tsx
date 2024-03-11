import React from 'react'
import SkeletonAvatar from 'antd/es/skeleton/Avatar'
import { Skeleton } from 'antd'
import SkeletonButton from 'antd/es/skeleton/Button'
import classes from '@/app/dash/journal/[subject]/subject.module.scss'

const Loading = () => {
  return (
    <div style={{ alignItems: 'center' }} className={classes.wrapper}>
      <div className={classes.navSkeleton}>
        <SkeletonAvatar
          active
          shape="square"
          style={{ borderRadius: 6 }}
          size="large"
        />

        <Skeleton
          active
          paragraph={false}
          title={{ width: 100, style: { height: 25 } }}
          style={{ width: 'fit-content' }}
        />

        <SkeletonButton active style={{ width: 150 }} />
      </div>

      <SkeletonButton active block style={{ marginTop: '0.75rem' }} />

      <div style={{ marginTop: '1rem' }}>
        <SkeletonButton
          active
          block
          style={{ height: 50, marginBottom: '0.5rem' }}
        />
        <SkeletonButton
          active
          block
          style={{ height: 50, marginBottom: '0.5rem' }}
        />
        <SkeletonButton
          active
          block
          style={{ height: 50, marginBottom: '0.5rem' }}
        />
      </div>
    </div>
  )
}

export default Loading
