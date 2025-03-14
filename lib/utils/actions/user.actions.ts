'use server'

import { cookies } from 'next/headers'

export const handleLogin = async (valueInput: string) => {
	if (valueInput !== '') {
		const cookieStore = cookies()

		cookieStore.set({
			name: 'login',
			value: 'true',
			httpOnly: true,
			path: '/',
		})
	}
}

export const getLoginCookie = async () => {
	const cookieStore = cookies()
	const loginCookie = cookieStore.get('login')

	if (loginCookie) {
		return loginCookie.value
	}

	return null
}
