'use client'

import React, { type FC, useEffect, useMemo, useState } from 'react'
import { Segmented } from 'antd'
import { type Journal } from '@/shared/types'
import classes from '@/components/Journal/journal.module.scss'
import getCurrentQuarter, {
  type Quarter,
} from '@/shared/utils/misc/getCurrentQuarter'
import JournalElement from '@/components/Journal/JournalElement'
import JournalEmpty from '@/components/Journal/JournalEmpty'
import useSettingsStore from '@/lib/store/settings'

const JournalComponent: FC<{ journal: Journal }> = ({ journal }) => {
  const [current, setCurrent] = useState<Quarter>(() => getCurrentQuarter())

  const sortingMethod = useSettingsStore((store) => store.sort)

  useEffect(() => {
    setCurrent(getCurrentQuarter())
  }, [])

  const currentQuarterIndex = current - 1
  const currentQuarterSubjects = useMemo(
    () => journal[currentQuarterIndex]?.subjects ?? [],
    [journal, currentQuarterIndex],
  )

  const sortedSubjects = useMemo(() => {
    const compareFunction = (
      a: (typeof currentQuarterSubjects)[number],
      b: (typeof currentQuarterSubjects)[number],
    ) => {
      switch (sortingMethod) {
        case 'alphabetical':
          return a.name.ru.localeCompare(b.name.ru)
        case 'score-up':
          return a.currScore - b.currScore
        default:
          return b.currScore - a.currScore
      }
    }
    return [...currentQuarterSubjects].sort(compareFunction)
  }, [currentQuarterSubjects, sortingMethod])

  const isJournalEmpty = currentQuarterSubjects.length === 0

  return (
    <div className={classes.journal}>
      <Segmented
        options={[
          { label: 'I', value: 1 },
          { label: 'II', value: 2 },
          { label: 'III', value: 3 },
          { label: 'IV', value: 4 },
        ]}
        block
        size="large"
        onChange={setCurrent}
        value={current}
      />

      <div className={classes.container}>
        {isJournalEmpty && <JournalEmpty />}
        <div className={classes.journalItems}>
          {sortedSubjects.map((subject) => (
            <JournalElement
              name={subject.name.ru}
              score={subject.currScore}
              mark={subject.mark}
              path={`/dash/journal/${subject.id}?quarter=${current}&subject=${subject.name.ru}`}
              key={`journal-element-${subject.id}-${current}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default JournalComponent
