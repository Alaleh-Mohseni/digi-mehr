'use client'

import Image from 'next/image'
import Button from './Button'
import { useEffect, useState } from 'react'

const Header = () => {
	const [isLogin, setIsLogin] = useState(false)
	useEffect(() => {
		const login = localStorage.getItem('login')
		setIsLogin(!!login)
	}, [])

	return (
		<>
			<header className='header'>
				<Image src='/header-logo.png' alt='digikala-mehr-logo' width={150} height={0} />

				{isLogin ? (
					<div className='flex items-center gap-md'>
						<Image src='/svg/user.svg' alt='user' width={20} height={0} />
						<span className='text-gray-ice'>|</span>
						<Image src='/svg/shopping-basket.svg' alt='shopping-cart' width={24} height={24} />
					</div>
				) : (
					<Button href='/login' className='flex gap-2 border-gray-300 font-bold text-gray-700 hover:border-gray-300 hover:text-gray-700'>
						<Image src='/svg/sign-in.svg' alt='sign-in' width={20} height={0} />
						ورود | ثبت نام
					</Button>
				)}
			</header>
			<div className='h-16 w-full lg:h-16'></div>
		</>
	)
}

export default Header
