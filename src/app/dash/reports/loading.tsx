import React from 'react'
import classes from '@/app/dash/reports/reports.module.scss'
import SkeletonButton from 'antd/es/skeleton/Button'

const Loading = () => {
  return (
    <div className={classes.table}>
      <SkeletonButton block active size="large" />

      <SkeletonButton
        block
        active
        size="large"
        style={{ height: 160, marginTop: '1rem' }}
      />

      <SkeletonButton
        block
        active
        size="large"
        style={{ height: 160, marginTop: '1rem' }}
      />

      <SkeletonButton
        block
        active
        size="large"
        style={{ height: 160, marginTop: '1rem' }}
      />

      <SkeletonButton
        block
        active
        size="large"
        style={{ height: 160, marginTop: '1rem' }}
      />
    </div>
  )
}

export default Loading
