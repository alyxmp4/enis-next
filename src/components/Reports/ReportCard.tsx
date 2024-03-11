import React, { type FC } from 'react'
import classes from '@/components/Reports/reports.module.scss'
import { type TransformedReportCard } from '@/shared/hooks/useReportCard'
import { Divider } from 'antd'
import Star from '@/components/Icons/Star'

type ReportCardProps = {
  card: TransformedReportCard
}

const getColor = (value?: string | null) => {
  if (isNaN(Number(value)) || !value) {
    return 'var(--foreground)'
  }

  const number = Number(value)

  if (number <= 2) {
    return 'var(--bad-color)'
  } else if (number == 3) {
    return 'var(--average-color)'
  } else if (number >= 4) {
    return 'var(--good-color)'
  }

  return 'var(--foreground)'
}

const ReportCard: FC<ReportCardProps> = ({ card }) => {
  return (
    <div className={classes.card}>
      <div className={classes.cardHeader}>
        <div className={classes.subject}>
          <p>{card.subject}</p>
        </div>
        {(card.resultMark ?? card.examMark ?? card.yearMark) && (
          <p className={classes.finalMark}>
            {card.resultMark?.toUpperCase() ??
              card.examMark?.toUpperCase() ??
              card.yearMark?.toUpperCase()}
          </p>
        )}
      </div>

      <Divider className={classes.divider} />
      <div className={classes.marks}>
        <Mark value={card.firstQuarter} period="I ч." />
        <Divider type="vertical" className={classes.divider} />
        <Mark value={card.secondQuarter} period="II ч." />
        <Divider type="vertical" className={classes.divider} />
        <Mark value={card.thirdQuarter} period="III ч." />
        <Divider type="vertical" className={classes.divider} />
        <Mark value={card.fourthQuarter} period="IV ч." />
      </div>
    </div>
  )
}

const Mark: FC<{ period: string; value: string | null }> = ({
  period,
  value,
}) => {
  return (
    <div className={classes.mark}>
      <p className={classes.period}>{period}</p>
      <p className={classes.value} style={{ color: getColor(value) }}>
        {value?.toUpperCase() ?? '-'}
      </p>
    </div>
  )
}

export default ReportCard
