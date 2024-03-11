import React from 'react'
import classes from '@/components/Nav/nav.module.scss'
import { Skeleton } from 'antd'
import SkeletonButton from 'antd/es/skeleton/Button'

const NavBarSkeleton = async () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.header}>
        <SkeletonButton
          shape="circle"
          active
          size="large"
          style={{ marginRight: '0.5rem' }}
        />

        <div className={classes.meta}>
          <Skeleton
            title={{ width: 250 }}
            paragraph={false}
            style={{ marginBottom: '0.35rem' }}
          />
          <Skeleton title={false} paragraph={{ rows: 1, width: 330 }} />
        </div>
      </div>
      <div className={classes.nav}>
        <SkeletonButton className={classes.navButton} active size="large" />
        <SkeletonButton className={classes.navButton} active size="large" />
        <SkeletonButton className={classes.navButton} active size="large" />
        <SkeletonButton
          className={classes.navButton}
          active
          size="large"
          shape="square"
        />
      </div>
    </div>
  )
}

export default NavBarSkeleton
