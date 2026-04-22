import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const canonicalHost = 'nexgenautodetail.com'
const alternateHost = 'www.nexgenautodetail.com'

export function proxy(request: NextRequest) {
  const host = request.headers.get('host')

  if (host === alternateHost) {
    const redirectUrl = request.nextUrl.clone()
    redirectUrl.host = canonicalHost
    return NextResponse.redirect(redirectUrl, 308)
  }

  return NextResponse.next()
}

export default proxy

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}