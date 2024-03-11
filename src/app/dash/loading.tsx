import React from 'react'
import SkeletonButton from 'antd/es/skeleton/Button'
import classes from '@/components/Journal/journal.module.scss'
import { Skeleton } from 'antd'

const Page = () => {
  return (
    <div className={classes.journal}>
      <SkeletonButton block active />

      <Skeleton
        paragraph={false}
        active
        title={{ style: { width: '100%', marginTop: '1.5rem', height: 120 } }}
      />

      <Skeleton
        paragraph={false}
        active
        title={{ style: { width: '100%', marginTop: '1rem', height: 120 } }}
      />

      <Skeleton
        paragraph={false}
        active
        title={{ style: { width: '100%', marginTop: '1rem', height: 120 } }}
      />

      <Skeleton
        paragraph={false}
        active
        title={{
          style: {
            width: '100%',
            marginTop: '1rem',
            height: 120,
          },
        }}
      />

      <Skeleton
        paragraph={false}
        active
        title={{
          style: {
            width: '100%',
            marginTop: '1rem',
            height: 120,
          },
        }}
      />
    </div>
  )
}

export default Page
