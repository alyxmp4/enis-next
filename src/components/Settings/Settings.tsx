'use client'

import React from 'react'
import classes from '@/components/Settings/settings.module.scss'
import {
  Button,
  ConfigProvider,
  Divider,
  Popconfirm,
  Segmented,
  Select,
} from 'antd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer, faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from 'next-themes'
import useSettingsStore from '@/lib/store/settings'
import { env } from '@/env'
import { logout } from '@/actions/logout'

const Settings = () => {
  const { setTheme, theme } = useTheme()
  const sort = useSettingsStore((store) => store.sort)
  const updateSort = useSettingsStore((state) => state.updateSort)

  return (
    <main className={classes.main}>
      <div className={classes.setting}>
        <p className={classes.name}>Тема</p>
        <Segmented
          options={[
            {
              icon: <FontAwesomeIcon icon={faSun} />,
              value: 'light',
            },
            {
              icon: <FontAwesomeIcon icon={faComputer} />,
              value: 'system',
            },
            {
              icon: <FontAwesomeIcon icon={faMoon} />,
              value: 'dark',
            },
          ]}
          size={'large'}
          style={{ height: 'fit-content' }}
          onChange={setTheme}
          defaultValue={theme}
        />
      </div>

      <div className={classes.setting}>
        <div>
          <p className={classes.name}>Сортировка</p>
          <p className={classes.description}>
            Сортировка предметов на главной странице
          </p>
        </div>

        <Select
          options={[
            {
              label: 'По алфавиту',
              value: 'alphabetical',
            },
            {
              label: 'По возрастанию',
              value: 'score-up',
            },
            {
              label: 'По убыванию',
              value: 'score-down',
            },
          ]}
          defaultValue={sort}
          onChange={updateSort}
          size={'large'}
          style={{ width: 150 }}
        />
      </div>
      <div className={classes.setting}>
        <p className={classes.name}>Выйти из аккаунта</p>
        <ConfigProvider theme={{ token: { colorPrimary: 'red' } }}>
          <Popconfirm
            title="Выход из аккаунта"
            description="Вы уверены, что хотите выйти?"
            okText="Да"
            cancelText="Нет"
            onConfirm={() => logout()}
          >
            <Button size="large" type="primary">
              Выйти
            </Button>
          </Popconfirm>
        </ConfigProvider>
      </div>

      <Divider dashed>О приложении</Divider>

      <div className={classes.setting}>
        <p>Версия</p>
        <p>{env.NEXT_PUBLIC_APP_VERSION}</p>
      </div>
      <div className={classes.setting}>
        <p>Канал</p>
        <p>{env.NEXT_PUBLIC_APP_CHANNEL}</p>
      </div>
      <div className={classes.setting}>
        <p>Разработчик</p>
        <a href={'https://alyxmp4.pro'} target={'_blank'} rel={'noreferrer'}>
          alyxmp4
        </a>
      </div>

      <p style={{ marginTop: '2rem' }}>
        Исходный код приложения является открытым и доступен по{' '}
        <a href={env.NEXT_PUBLIC_REPO_URL} target={'_blank'} rel={'noreferrer'}>
          по этой ссылкe
        </a>
        . Приложение не имеет никакого отношения к АОО НИШ. Все данные берутся
        из их{' '}
        <a
          href="https://ru.wikipedia.org/wiki/API"
          target={'_blank'}
          rel={'noreferrer'}
        >
          API
        </a>{' '}
        сервисов, никуда не передаются, нигде не хранятся.
      </p>
    </main>
  )
}

export default Settings
