import React from 'react'
import Report from '@/components/Reports/Report'
import classes from '@/app/dash/reports/reports.module.scss'
import { type Userinfo } from '@/shared/types'
import { resolveAccessToken } from '@/shared/utils/misc/accessTokenResolver'
import { cookies } from 'next/headers'
import { decompressToken } from '@/shared/utils/tokens/tokenCompressor'
import { decode } from '@/shared/utils/tokens/JWT'
import { getReports } from '@/features/reports/getReports'

export const generateMetadata = async () => {
  return {
    title: 'enis next | табель',
  }
}

const Page = async () => {
  const [compressedAccessToken] = resolveAccessToken(cookies())

  const accessToken = await decompressToken(compressedAccessToken!)

  const { UserInfo: stringifiedUserInfo } = await decode<{ UserInfo: string }>(
    accessToken,
  )
  const UserInfo = JSON.parse(stringifiedUserInfo) as unknown as Userinfo

  const reports = await getReports(accessToken, UserInfo.PersonGid)

  return (
    <div className={classes.table}>
      <Report report={reports} />
    </div>
  )
}

export default Page
