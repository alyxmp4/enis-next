'use client'

import React, { useRef } from 'react'
import { Button, Form, Input, type InputRef, message } from 'antd'
import classes from '@/app/login/login.module.scss'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Link from 'next/link'
import { FormItem } from 'react-hook-form-antd'
import { login } from '@/actions/login'
import Image from 'next/image'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Icon from '@/shared/assets/icon.svg'
import { useRouter } from 'next-nprogress-bar'

const LoginFormSchema = z.object({
  iin: z
    .string({
      invalid_type_error: 'ИИН должен состоять из цифр',
      required_error: 'ИИН обязателен',
    })
    .length(12, {
      message: 'ИИН должен состоять из 12 цифр',
    })
    .refine(
      (iin) => {
        if (isNaN(parseInt(iin))) return false

        const year = parseInt(iin.slice(0, 2))
        const month = parseInt(iin.slice(2, 4))
        const day = parseInt(iin.slice(4, 6))

        if (month > 12 || month < 1) {
          return false
        }

        if (day < 1 || day > 31) {
          return false
        }

        if (month === 2) {
          const isLeapYear =
            (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
          if (isLeapYear && day > 29) {
            return false
          } else if (!isLeapYear && day > 28) {
            return false
          }
        }

        const monthsWith30Days = [4, 6, 9, 11]
        return !(monthsWith30Days.includes(month) && day > 30)
      },
      {
        message: 'Некорректный ИИН',
      },
    ),
  password: z
    .string({
      invalid_type_error: 'Пароль должен быть строкой',
      required_error: 'Пароль обязателен',
    })
    .min(8, { message: 'Пароль должен быть не менее 8 символов' }),
})

const Page = () => {
  const {
    control,
    handleSubmit,
    setError,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof LoginFormSchema>>({
    resolver: zodResolver(LoginFormSchema),
  })

  const router = useRouter()
  const [messageApi, contextHolder] = message.useMessage()

  const passwordInputRef = useRef<InputRef>()

  const onSubmit: SubmitHandler<z.infer<typeof LoginFormSchema>> = async (
    data,
  ) => {
    await login(data.iin, data.password).then((res) => {
      if (res.errors?.iin) setError('iin', { message: res.errors.iin })
      if (res.errors?.password)
        setError('password', { message: res.errors.password })

      if (res.success) {
        void messageApi.success('Вход выполнен')
        void router.push('/dash')
      }
    })
  }

  return (
    <>
      {contextHolder}
      <div className={classes.login}>
        <Form className={classes.form} onFinish={handleSubmit(onSubmit)}>
          <Image
            src={Icon}
            alt={'logo'}
            width={60}
            height={60}
            className={classes.logo}
            priority
          />

          <h1 className={classes.head}>Вход</h1>
          <p className={classes.tip}>
            Используйте ИИН и пароль для входа в дневник
          </p>

          <FormItem
            control={control}
            name="iin"
            className={classes.input}
            disabled={isSubmitting}
          >
            <Input
              placeholder="ИИН"
              size="large"
              autoComplete="username"
              id="iin"
              onKeyPress={(e) => {
                if (e.key == 'Enter') {
                  passwordInputRef.current?.focus({ cursor: 'start' })
                }
              }}
            />
          </FormItem>

          <FormItem
            control={control}
            name="password"
            className={classes.input}
            disabled={isSubmitting}
          >
            <Input.Password
              placeholder="Пароль"
              size="large"
              autoComplete="current-password"
              id="password"
              // @ts-ignore
              ref={passwordInputRef}
            />
          </FormItem>

          <Button
            type="primary"
            block
            size="large"
            className={classes.submit}
            htmlType="submit"
            loading={isSubmitting}
            icon={<FontAwesomeIcon icon={faArrowRight} />}
          >
            Продолжить
          </Button>
        </Form>
      </div>
    </>
  )
}

export default Page
