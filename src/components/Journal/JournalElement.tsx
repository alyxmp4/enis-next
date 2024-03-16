import React, { type FC } from 'react'
import classes from '@/components/Journal/journal.module.scss'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import useSettingsStore from '@/lib/store/settings'
import { type Settings } from '@/lib/store/settings'

type JournalElementProps = {
  name: string
  score: number
  mark?: number
  path: string
}

const getRange = (
  score: number,
  ranges: Settings['ranges'],
): keyof Settings['ranges'] => {
  if (score >= ranges.good.from && score <= ranges.good.to) {
    return 'good'
  } else if (score >= ranges.average.from && score <= ranges.average.to) {
    return 'average'
  } else if (score >= ranges.bad.from && score <= ranges.bad.to) {
    return 'bad'
  } else {
    return 'bad'
  }
}

const JournalElement: FC<JournalElementProps> = ({
  name,
  score,
  mark,
  path,
}) => {
  const userSettings = useSettingsStore((state) => state.ranges)

  const getColorByPercent = (percent: number) => {
    const per = Math.round(percent)

    const range = getRange(per, userSettings)

    if (range == 'good') return `var(--good-color)`
    if (range == 'average') return `var(--average-color)`
    if (range == 'bad') return `var(--bad-color)`
  }

  return (
    <Link href={path} className={classes.journalItem}>
      <div className={classes.content}>
        <div className={classes.subject}>
          {name}{' '}
          <FontAwesomeIcon
            icon={faArrowRight}
            size={'sm'}
            className={classes.angle}
          />
          <div className={classes.score}>
            <p
              className={classes.percent}
              style={{ color: getColorByPercent(score) }}
            >
              {score}%
            </p>
            {mark && (
              <p className={classes.mark}>
                <span>оценка: </span>
                {mark}
              </p>
            )}
          </div>
        </div>
      </div>

      <div
        className={classes.progress}
        style={{
          background: `linear-gradient(to right, ${getColorByPercent(score)} ${score}%, transparent ${score}%)`,
        }}
      ></div>
    </Link>
  )
}

export default JournalElement
