'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { decompressToken } from '@/shared/utils/tokens/tokenCompressor'
import http from '@/shared/http'
import { REFRESH_TOKEN } from '@/shared/constants/endpoints'
import { v4 } from 'uuid'
import { type LoginHttpResponse } from '@/shared/types'
import { issueTokensPair } from '@/shared/utils/tokens/tokenIssuer'
import { getAdditionalUserInfo } from '@/features/viewer/getAdditionalUserInfo'
import { getCityByJceUrl } from '@/shared/utils/misc/getCityByServiceUrl'

export const refresh = async () => {
  const refreshToken = cookies().get('Refresh')?.value

  if (!refreshToken || refreshToken.split('::').length !== 2) {
    redirect('/login')
  }

  try {
    const [compressedToken, device] = refreshToken.split('::') || ''

    const token = await decompressToken(compressedToken!)

    await http
      .request<LoginHttpResponse>({
        url: REFRESH_TOKEN,
        method: 'POST',
        data: {
          action: 'v1/Users/ReissueTokens',
          operationId: v4(),
          refreshToken: token,
          deviceInfo: device,
        },
      })
      .then(async (res) => {
        const { applications, refreshToken, accessToken } = res.data

        const {
          school: { gid: UserSchoolGid },
        } = await getAdditionalUserInfo(accessToken)

        const schoolOrganization = applications.find((application) => {
          return (
            application.organizationGid === UserSchoolGid &&
            application.type === 52
          )
        })

        // if the user has already logged in, he is definitely enrolled to any of NIS schools, free to presume

        const city = getCityByJceUrl(schoolOrganization?.url!)

        await issueTokensPair(accessToken, refreshToken, cookies(), city)
      })
  } catch (e) {
    cookies().set('Refresh', '', { maxAge: 0 })
    cookies().set('Access', '', { maxAge: 0 })
    redirect('/login')
  }
}
