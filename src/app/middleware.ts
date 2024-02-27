import { NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
    if (req.nextUrl.pathname === '/') {
  try {
    // now time to create anything we want mr API to do

    analytics.track('tracking', {
        page: '/',
        country: req.geo?.country,
        city: req.geo?.city,
    })

  } catch (error) {
    //dont want this to affect useage
    console.error(error)
  }
}


 return NextResponse.next()
}
export const matcher = {
    matcher: ['/'],
}