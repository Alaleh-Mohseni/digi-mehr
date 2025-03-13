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
