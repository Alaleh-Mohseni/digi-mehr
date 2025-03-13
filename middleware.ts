import { NextRequest, NextResponse } from 'next/server'

export const middleware = (request: NextRequest) => {
	const { cookies } = request
	const login = cookies.get('login')?.value || null

	if (!login) {
		const url = new URL('/login', request.url)
		url.searchParams.set('redirectTo', request.nextUrl.pathname)
		return NextResponse.redirect(url)
	}

	const response = NextResponse.next()
	response.headers.set('login', login)

	return response
}

export const config = {
	matcher: ['/user/:path*', '/project/:id/create-referral'],
}
