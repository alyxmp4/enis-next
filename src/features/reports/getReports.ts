import http from '@/shared/http'
import { v4 } from 'uuid'
import { REPORT_CARD } from '@/shared/constants/endpoints'
import { type Reports } from '@/shared/types'

export const getReports = async (accessToken: string, studentId: string) => {
  return await http
    .request<Reports>({
      url: REPORT_CARD,
      method: 'POST',
      data: {
        action: 'v1/ReportCard/GetAllReportCardsAsync',
        operationId: v4(),
        studentId,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((res) => res.data)
}
