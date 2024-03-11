import http from '@/shared/http'
import { GET_DIARY_RUBRIC } from '@/shared/constants/endpoints'
import { v4 } from 'uuid'
import { type RubricInfo } from '@/shared/types'
import type CITIES from '@/shared/constants/cities'
import { type Quarter } from '@/shared/utils/misc/getCurrentQuarter'

export const getRubricInfo = async (
  token: string,
  city: (typeof CITIES)[keyof typeof CITIES],
  studentId: string,
  quarter: Quarter,
  subject: string,
): Promise<RubricInfo> => {
  return await http
    .request<RubricInfo>({
      url: GET_DIARY_RUBRIC(city),
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        action: 'Api/GetDataBySectionAndByPeriod',
        operationId: v4(),
        studentId,
        periodIndex: quarter,
        subjectId: subject,
      },
    })
    .then((res) => res.data)
}
