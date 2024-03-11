import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const cookies = request.cookies

  if (!cookies.get('Access')?.value && !cookies.get('Refresh')?.value)
    return NextResponse.redirect(new URL('/login', request.url))

  if (
    request.nextUrl.pathname.startsWith('/dash/journal/') &&
    (!request.nextUrl.searchParams.get('quarter') ||
      Number(request.nextUrl.searchParams.get('quarter')) > 4) &&
    /^\/dash\/journal\/[^\/]+$/.test(request.nextUrl.pathname)
  ) {
    return NextResponse.redirect(
      new URL(
        request.nextUrl.pathname +
          '?quarter=1' +
          `${request.nextUrl.searchParams.get('subject') ? `&subject=${request.nextUrl.searchParams.get('subject')}` : ''}`,
        request.url,
      ),
    )
  }
}

export const config = {
  matcher: '/dash/:path*',
}
