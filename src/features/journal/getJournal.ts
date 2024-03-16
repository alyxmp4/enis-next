import http from '@/shared/http'
import { GET_JOURNAL } from '@/shared/constants/endpoints'
import { v4 } from 'uuid'
import { type Journal } from '@/shared/types'
import type CITIES from '@/shared/constants/cities'

export const getJournal = async (
  token: string,
  city: (typeof CITIES)[keyof typeof CITIES],
  studentId: string,
): Promise<Journal> => {
  return await http
    .request<Journal>({
      url: GET_JOURNAL(city),
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        action: 'Api/GetSubjectsAndPeriods',
        operationId: v4(),
        studentId,
      },
    })
    .then((res) => res.data)
}
