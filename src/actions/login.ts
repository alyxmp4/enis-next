'use server'

import { LOGIN } from '@/shared/constants/endpoints'
import { v4 } from 'uuid'
import http from '@/shared/http'
import { cookies } from 'next/headers'
import { isAxiosError } from 'axios'
import { type LoginHttpResponse } from '@/shared/types'
import { issueTokensPair } from '@/shared/utils/tokens/tokenIssuer'
import { getAdditionalUserInfo } from '@/features/viewer/getAdditionalUserInfo'
import { getCityByJceUrl } from '@/shared/utils/misc/getCityByServiceUrl'

type LoginResponse = {
  errors?: {
    iin?: string
    password?: string
  }
  success: boolean
}

export const login = async (
  iin: string,
  password: string,
): Promise<LoginResponse> => {
  try {
    const generatedDeviceInfo = 'SM-G950F'
    const { accessToken, refreshToken, applications } = await http
      .request<LoginHttpResponse>({
        url: LOGIN,
        data: {
          action: 'v1/Users/Authenticate',
          operationId: v4(),
          username: iin,
          password,
          deviceInfo: generatedDeviceInfo,
        },
        method: 'POST',
      })
      .then((res) => res.data)

    const {
      school: { gid: UserSchoolGid },
    } = await getAdditionalUserInfo(accessToken)

    const schoolOrganization = applications.find((application) => {
      return (
        // type 52 in here means JCE API endpoints, so we can presume the url is going to start with https://sms.(city).nis.edu.kz/jce/Api
        application.organizationGid === UserSchoolGid && application.type === 52
      )
    })

    if (!schoolOrganization)
      return {
        errors: {
          iin: 'Вы найдены в базе, но не зачислены ни в один из филиалов НИШ. Вероятно, вы используете аккаунт родителя',
        },
        success: false,
      }

    const city = getCityByJceUrl(schoolOrganization.url)

    await issueTokensPair(accessToken, refreshToken, cookies(), city)

    return { success: true }
  } catch (e) {
    if (isAxiosError(e) && e.response?.status === 400) {
      return { errors: { password: 'Неверный пароль или ИИН' }, success: false }
    }
    throw e
  }
}
