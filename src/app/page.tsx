import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Home() {
  const accessToken = cookies().get('Access')?.value

  if (accessToken && accessToken.split('::').length == 2) redirect('/dash')
  else redirect('/login')
}
