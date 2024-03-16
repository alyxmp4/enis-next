'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const logout = async () => {
  cookies().set('Access', '', {
    expires: new Date(0),
  })

  cookies().set('Refresh', '', {
    expires: new Date(0),
  })

  redirect('/')
}
