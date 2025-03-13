'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export const handleLogin = (valueInput: string, redirectTo: string) => {
	if (valueInput !== '') {
		const cookieStore = cookies()
		cookieStore.set({
			name: 'login',
			value: 'true',
			httpOnly: true,
			path: '/',
		})
		redirect(redirectTo)
	}
}
