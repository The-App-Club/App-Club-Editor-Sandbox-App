// pages/_middleware.js
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { SearchQueryParamsSchema } from '@/features/search/domains/searchQueryParams'
// https://github.com/vercel/next.js/discussions/34430
export function middleware(req: NextRequest) {
  const { href, searchParams } = req.nextUrl
  if (!!href.match('/search')) {
    const query: Record<string, unknown> = {}
    searchParams.forEach((value, key) => {
      query[key] = value
    })
    const parsed = SearchQueryParamsSchema.safeParse(query)
    if (!parsed.success) {
      return NextResponse.rewrite(`/404`)
    }
    let params = ''
    Object.entries(parsed.data).forEach(([key, value]) => {
      params = `${params ? `${params}&` : '?'}${key}=${value}`
    })
    console.log(params)
    return NextResponse.rewrite(`${href}${params}`)
  }
  return NextResponse.next()
}

// https://nextjs.org/docs/advanced-features/middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
