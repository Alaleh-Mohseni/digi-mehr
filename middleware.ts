import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const { cookies } = request
	const login = cookies.get('login')
	
	if (!login) {
		const url = new URL('/login', request.url)
		url.searchParams.set('redirectTo', request.nextUrl.pathname)
		return NextResponse.redirect(url)
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/user/:path*', '/project/:id/create-referal'],
}
