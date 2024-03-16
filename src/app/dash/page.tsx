import React from 'react'
import Journal from '@/components/Journal/Journal'
import { cookies } from 'next/headers'
import { decode } from '@/shared/utils/tokens/JWT'
import { type Userinfo } from '@/shared/types'
import { getJournal } from '@/features/journal/getJournal'
import { decompressToken } from '@/shared/utils/tokens/tokenCompressor'
import { type Metadata } from 'next'
import { resolveAccessToken } from '@/shared/utils/misc/accessTokenResolver'
import JournalEmpty from '@/components/Journal/JournalEmpty'

export const metadata: Metadata = {
  title: 'enis next | дневник',
}

const Page = async () => {
  const [compressedAccessToken, city] = resolveAccessToken(cookies())

  const accessToken = await decompressToken(compressedAccessToken!)

  const { UserInfo: stringifiedUserInfo } = await decode<{ UserInfo: string }>(
    accessToken,
  )
  const UserInfo = JSON.parse(stringifiedUserInfo) as unknown as Userinfo

  try {
    const journal = await getJournal(accessToken, city!, UserInfo.PersonGid)

    return (
      <div>
        <Journal journal={journal} />
      </div>
    )
  } catch (e) {
    return <JournalEmpty />
  }
}

export default Page
