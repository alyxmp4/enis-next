'use client'

import React, { type FC, useMemo, useState } from 'react'
import { type ReportCard as ReportCardType, type Reports } from '@/shared/types'
import { useReportCard } from '@/shared/hooks/useReportCard'
import { Select } from 'antd'
import classes from '@/components/Reports/reports.module.scss'
import ReportCard from '@/components/Reports/ReportCard'
import ReportNoInfo from '@/components/Reports/ReportNoInfo'

type ReportProps = {
  report: Reports
}
const Report: FC<ReportProps> = ({ report }) => {
  const yearOptions = report.map((report: ReportCardType) => ({
    label: report.schoolYear.name.ru,
    value: report.schoolYear.id,
  }))

  const [selectedYear, setSelectedYear] = useState<string>(
    report.find((report) => report.schoolYear.isCurrent)?.schoolYear.id ??
      report[0]?.schoolYear.id ??
      '',
  )

  const transformedReport = useMemo(
    () =>
      useReportCard(
        report.find((report) => report.schoolYear.id === selectedYear)!,
      ),
    [report, selectedYear],
  )

  return (
    <div className={classes.container}>
      <Select
        options={yearOptions}
        value={selectedYear}
        onChange={setSelectedYear}
        className={classes.yearSelect}
        size="large"
      />

      <main className={classes.main}>
        {transformedReport.length > 0 ? (
          transformedReport.map((card) => (
            <ReportCard card={card} key={card.subjectId} />
          ))
        ) : (
          <ReportNoInfo />
        )}
      </main>
    </div>
  )
}

export default Report
