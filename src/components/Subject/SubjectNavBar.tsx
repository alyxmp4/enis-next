'use client'

import React, { type FC, useCallback } from 'react'
import classes from '@/components/Subject/subject.module.scss'
import { usePathname, useSearchParams } from 'next/navigation'
import { Button, Select } from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next-nprogress-bar'

const quarterSelectOptions = [
  { value: 1, label: 'I четверть' },
  { value: 2, label: 'II четверть' },
  { value: 3, label: 'III четверть' },
  { value: 4, label: 'IV четверть' },
]

type SubjectNavBarProps = {
  disabled?: boolean
}

const SubjectNavBar: FC<SubjectNavBarProps> = ({ disabled }) => {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()

  const setSearchParams = useCallback(
    (name: string, value: number) => {
      const newSearchParams = new URLSearchParams(searchParams.toString())
      newSearchParams.set(name, String(value))

      return newSearchParams.toString()
    },
    [searchParams],
  )

  return (
    <div className={classes.nav}>
      <Button
        icon={<FontAwesomeIcon icon={faArrowLeft} />}
        size="large"
        onClick={() => router.push('/dash')}
      />
      <h2
        className={classes.head}
        title={searchParams.get('subject') ?? 'О предмете'}
      >
        {searchParams.get('subject') ?? 'О предмете'}
      </h2>
      <Select
        size="large"
        options={quarterSelectOptions}
        defaultValue={
          quarterSelectOptions[(Number(searchParams.get('quarter')) ?? 1) - 1]
            ?.value
        }
        style={{ width: 130 }}
        onChange={(change: number) => {
          void router.push(pathname + '?' + setSearchParams('quarter', change))
        }}
        disabled={disabled}
      />
    </div>
  )
}

export default SubjectNavBar
