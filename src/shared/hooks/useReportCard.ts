import { type ReportCard } from '@/shared/types'

export type TransformedReportCard = {
  subject: string
  subjectId: string
  firstQuarter: string | null
  secondQuarter: string | null
  thirdQuarter: string | null
  fourthQuarter: string | null
  firstHalfYearMark: string | null
  secondHalfYearMark: string | null
  yearMark: string | null
  examMark: string | null
  resultMark: string | null
}
export const useReportCard = (
  reportCard: ReportCard,
): TransformedReportCard[] => {
  return reportCard.reportCard.map((entry) => ({
    subject: `${entry.subject.name.ru}`,
    subjectId: entry.subject.id,
    firstQuarter: entry.firstPeriod ? entry.firstPeriod.ru : null,
    secondQuarter: entry.secondPeriod ? entry.secondPeriod.ru : null,
    thirdQuarter: entry.thirdPeriod ? entry.thirdPeriod.ru : null,
    fourthQuarter: entry.fourthPeriod ? entry.fourthPeriod.ru : null,
    firstHalfYearMark: entry.firstHalfYearMark
      ? entry.firstHalfYearMark.ru
      : null,
    secondHalfYearMark: entry.secondHalfYearMark
      ? entry.secondHalfYearMark.ru
      : null,
    yearMark: entry.yearMark ? entry.yearMark.ru : null,
    examMark: entry.examMark ? entry.examMark.ru : null,
    resultMark: entry.resultMark ? entry.resultMark.ru : null,
  }))
}
