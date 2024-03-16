import React, { type FC } from 'react'
import type { Rubric } from '@/shared/types'
import classes from '@/components/Subject/subject.module.scss'

type RubricDetailProps = {
  detail: Rubric['details'][number]
}

// TODO fix this color mess, use css variables

const RubricDetail: FC<RubricDetailProps> = ({ detail }) => {
  return (
    <div className={classes.rubricInfo}>
      <p className={classes.name}>{detail.name}</p>

      <div className={classes.rubricDetails}>
        <div
          className={classes.rubricDetail}
          style={
            detail.goodChecked
              ? {
                  backgroundColor: 'rgb(13, 229, 107, 0.2)',
                  border: '1px solid rgb(13, 229, 107, 0.4)',
                }
              : {
                  opacity: 0.5,
                }
          }
        >
          {detail.good}
        </div>
        <div
          className={classes.rubricDetail}
          style={
            detail.normalChecked
              ? {
                  backgroundColor: 'rgb(234, 173, 64, 0.2)',
                  border: `1px solid rgb(234, 173, 64, 0.4)`,
                }
              : {
                  opacity: 0.5,
                }
          }
        >
          {detail.normal}
        </div>
        <div
          className={classes.rubricDetail}
          style={
            detail.badChecked
              ? {
                  backgroundColor: 'rgb(239, 40, 40, 0.2)',
                  border: `2px solid rgb(239, 40, 40, 0.4)`,
                }
              : {
                  opacity: 0.5,
                }
          }
        >
          {detail.bad}
        </div>
      </div>
    </div>
  )
}

export default RubricDetail
