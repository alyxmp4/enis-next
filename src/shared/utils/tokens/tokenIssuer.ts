import { type ReadonlyRequestCookies } from 'next/dist/server/web/spec-extension/adapters/request-cookies'
import { compressToken } from '@/shared/utils/tokens/tokenCompressor'
import { decode } from '@/shared/utils/tokens/JWT'

/*
   This module is used to issue tokens to the client. It compresses the tokens and sets them as cookies.

   The need of compression is explained in tokenCompressor.ts
 */

export async function issueTokensPair(
  accessToken: string,
  refreshToken: string,
  cookies: ReadonlyRequestCookies,
  city: string,
) {
  const generatedDeviceInfo = 'SM-G950F'

  const [compressedAccessToken, compressedRefreshToken] = await Promise.all([
    compressToken(accessToken),
    compressToken(refreshToken),
  ])

  const [
    { exp: accessTokenExpiration, UserInfo },
    { exp: refreshTokenExpiration },
  ] = await Promise.all([
    await decode<{ UserInfo: string; exp: number }>(accessToken),
    await decode<{ exp: number }>(refreshToken),
  ])

  // The access token format is (encrypted NIS issued JWT token)::(city)

  cookies.set('Access', `${compressedAccessToken}::${city}`, {
    maxAge: 60 * 60,
    path: '/',
    sameSite: 'lax',
    expires: new Date(accessTokenExpiration * 1000),
  })

  // The refresh token format is (encrypted NIS issued JWT token)::(device code used to refresh tokens)

  cookies.set('Refresh', `${compressedRefreshToken}::${generatedDeviceInfo}`, {
    maxAge: 60 * 60 * 24 * 30,
    path: '/',
    sameSite: 'lax',
    expires: new Date(refreshTokenExpiration * 1000),
  })
}
