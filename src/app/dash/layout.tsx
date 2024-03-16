import React, { Suspense } from 'react'
import classes from '@/app/dash/dash.module.scss'
import AuthGate from '@/lib/AuthGate'
import NavBar from '@/components/Nav/NavBar'
import NavBarSkeleton from '@/components/Nav/Skeleton'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={classes.container}>
      <AuthGate>
        <Suspense fallback={<NavBarSkeleton />}>
          <div className={classes.nav}>
            <NavBar />
          </div>
        </Suspense>
        <main className={classes.main}>{children}</main>
      </AuthGate>
    </div>
  )
}

export default Layout
