import { type FC, type PropsWithChildren } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const AuthGate: FC<PropsWithChildren> = ({ children }) => {
  const accessToken = cookies().get('Access')?.value!

  if (!accessToken && !cookies().get('Refresh')?.value) {
    redirect('/login')
  }

  if (!accessToken) {
    throw new Error('UNAUTHORIZED')
  } else if (accessToken.split('::').length !== 2) {
    redirect('/login')
  }

  return children
}

export default AuthGate
