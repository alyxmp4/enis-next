import React, { type FC } from 'react'
import SubjectNavBar from '@/components/Subject/SubjectNavBar'
import SubjectInfo from '@/components/Subject/SubjectInfo'
import { cookies } from 'next/headers'
import { decompressToken } from '@/shared/utils/tokens/tokenCompressor'
import { decode } from '@/shared/utils/tokens/JWT'
import type { Userinfo } from '@/shared/types'
import { getRubricInfo } from '@/features/journal/getRubricInfo'
import { type Quarter } from '@/shared/utils/misc/getCurrentQuarter'
import { resolveAccessToken } from '@/shared/utils/misc/accessTokenResolver'
import { isAxiosError } from 'axios'
import SubjectNotFound from '@/components/Subject/SubjectNotFound'
import classes from '@/app/dash/journal/[subject]/subject.module.scss'

export const generateMetadata = async ({
  searchParams,
}: {
  searchParams: Record<string, string>
}) => {
  return {
    title: searchParams.subject
      ? `enis next | ${searchParams.subject.toLowerCase()}`
      : 'enis next',
  }
}

const Page: FC<{
  params: { subject: string }
  searchParams: Record<string, string>
}> = async ({ params, searchParams }) => {
  const [compressedAccessToken, city] = resolveAccessToken(cookies())

  const accessToken = await decompressToken(compressedAccessToken!)

  const { UserInfo: stringifiedUserInfo } = await decode<{ UserInfo: string }>(
    accessToken,
  )
  const UserInfo = JSON.parse(stringifiedUserInfo) as unknown as Userinfo

  try {
    const rubrics = await getRubricInfo(
      accessToken,
      city!,
      UserInfo.PersonGid,
      Number(searchParams.quarter) as Quarter,
      params.subject,
    )

    return (
      <div className={classes.wrapper}>
        <SubjectNavBar />
        <SubjectInfo subjectInfo={rubrics} />
      </div>
    )
  } catch (e) {
    if (
      isAxiosError(e) &&
      e.response?.data.message.startsWith('предмет не найден')
    ) {
      return (
        <div className={classes.wrapper}>
          <SubjectNavBar disabled />
          <SubjectNotFound />
        </div>
      )
    }
  }
}

export default Page
