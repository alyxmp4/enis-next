'use client'

import React, { type FC, useState } from 'react'
import { type RubricInfo } from '@/shared/types'
import classes from '@/components/Subject/subject.module.scss'
import { Carousel, Modal } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import RubricDetail from '@/components/Subject/RubricDetail'

type SubjectRubricProps = {
  rubricInfo: RubricInfo['sumQuarterCriteria' | 'sumChapterCriteria'][number]
}

const SubjectRubric: FC<SubjectRubricProps> = ({ rubricInfo }) => {
  if (rubricInfo.details.length !== 0)
    return <SubjectRubricWithDetails rubricInfo={rubricInfo} />
  return <SubjectRubricWithoutDetails rubricInfo={rubricInfo} />
}

const SubjectRubricWithDetails: FC<{
  rubricInfo: RubricInfo['sumQuarterCriteria' | 'sumChapterCriteria'][number]
}> = ({ rubricInfo }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <>
      <RubricCard
        title={rubricInfo.title.ru}
        mark={rubricInfo.mark}
        maxMark={rubricInfo.maxMark}
        isDetailed={true}
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        centered
        footer={(_, { CancelBtn }) => (
          <>
            <CancelBtn />
          </>
        )}
        cancelText={'Закрыть'}
        className={classes.modal}
        title={
          <h3
            className={classes.modalTitle}
          >{`Критерии по секции: ${rubricInfo.title.ru}`}</h3>
        }
      >
        <>
          <Carousel
            className={classes.carousel}
            dots={{ className: classes.dots }}
          >
            {rubricInfo.details.map((detail, index) => (
              <RubricDetail detail={detail} key={`rubric-detail-${index}`} />
            ))}
          </Carousel>
        </>
      </Modal>
    </>
  )
}

const SubjectRubricWithoutDetails: FC<{
  rubricInfo: RubricInfo['sumQuarterCriteria' | 'sumChapterCriteria'][number]
}> = ({ rubricInfo }) => {
  return (
    <RubricCard
      title={rubricInfo.title.ru}
      mark={rubricInfo.mark}
      maxMark={rubricInfo.maxMark}
      isDetailed={false}
    />
  )
}

type RubricCardProps = {
  title: string
  mark: number
  maxMark: number
  isDetailed?: boolean
  onClick?: () => void
}

const RubricCard: FC<RubricCardProps> = ({
  title,
  maxMark,
  mark,
  isDetailed,
  onClick,
}) => {
  return (
    <div className={classes.rubric} onClick={onClick}>
      <div className={classes.meta}>
        <p className={classes.title}>{title} </p>
        {isDetailed && (
          <FontAwesomeIcon icon={faArrowRight} className={classes.icon} />
        )}
      </div>
      <div className={classes.score}>
        <p className={classes.mark}>{mark}</p>
        <p className={classes.maxMark}>/{maxMark}</p>
      </div>
    </div>
  )
}

export default SubjectRubric
