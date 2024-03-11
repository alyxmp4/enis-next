'use client'

import React, { type FC, useState } from 'react'
import { Progress, Segmented } from 'antd'
import classes from '@/components/Subject/subject.module.scss'
import { type RubricInfo } from '@/shared/types'
import SubjectRubric from '@/components/Subject/SubjectRubric'
import SubjectNoInfo from '@/components/Subject/SubjectNoInfo'

type SubjectInfoProps = {
  subjectInfo: RubricInfo
}

const SubjectInfo: FC<SubjectInfoProps> = ({ subjectInfo }) => {
  const [segment, setSegment] = useState<'Chapter' | 'Quarter'>('Chapter')

  const renderRubricsAndSummary = (
    criteria: RubricInfo['sumChapterCriteria' | 'sumQuarterCriteria'] | null,
    markSum: number,
    maxMarkSum: number,
  ) => {
    if (!criteria || criteria?.length == 0) return <SubjectNoInfo />

    return (
      <>
        <div>
          {criteria.map((rubric, index) => (
            <SubjectRubric
              rubricInfo={rubric}
              key={`rubric-${segment.toLowerCase()}-${index}`}
            />
          ))}
        </div>
        <div className={classes.summary}>
          <Progress
            type="circle"
            percent={Math.round((markSum / maxMarkSum) * 100)}
            format={() => `${markSum}/${maxMarkSum}`}
            size={200}
            status="success"
          />
          <p className={classes.desc}>
            В итоге вся секция {segment === 'Chapter' ? 'СОР' : 'СОЧ'} составит{' '}
            {Math.round((markSum / maxMarkSum) * 100)}%
            <br />
            От четвертной оценки: {Math.round((markSum / maxMarkSum) * 50)}%
          </p>
        </div>
      </>
    )
  }

  const chapterCriteria = subjectInfo.sumChapterCriteria
  const quarterCriteria = subjectInfo.sumQuarterCriteria

  const chapterMarkSum = chapterCriteria
    ? chapterCriteria.reduce((sum, rubric) => sum + rubric.mark, 0)
    : 0
  const chapterMaxMarkSum = chapterCriteria
    ? chapterCriteria.reduce((sum, rubric) => sum + rubric.maxMark, 0)
    : 0

  const quarterMarkSum = quarterCriteria
    ? quarterCriteria.reduce((sum, rubric) => sum + rubric.mark, 0)
    : 0
  const quarterMaxMarkSum = quarterCriteria
    ? quarterCriteria.reduce((sum, rubric) => sum + rubric.maxMark, 0)
    : 0

  return (
    <main className={classes.main}>
      <Segmented
        options={[
          { label: 'СОР', value: 'Chapter' },
          { label: 'СОЧ', value: 'Quarter' },
        ]}
        block
        size="large"
        value={segment}
        onChange={setSegment}
      />
      <div className={classes.rubrics}>
        {segment === 'Chapter' &&
          renderRubricsAndSummary(
            chapterCriteria,
            chapterMarkSum,
            chapterMaxMarkSum,
          )}
        {segment === 'Quarter' &&
          renderRubricsAndSummary(
            quarterCriteria,
            quarterMarkSum,
            quarterMaxMarkSum,
          )}
      </div>
    </main>
  )
}

export default SubjectInfo
