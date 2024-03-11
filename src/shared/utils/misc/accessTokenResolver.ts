import { type ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'

export const resolveAccessToken = (cookies: ReadonlyRequestCookies) => {
  const accessToken = cookies.get('Access')?.value

  if (!accessToken) {
    throw new Error('UNAUTHORIZED')
  }

  const [compressedAccessToken, city] = accessToken.split('::')

  return [compressedAccessToken, city]
}
