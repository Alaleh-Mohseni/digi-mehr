'use client'

import Image from 'next/image'
import Button from './Button'

function Header() {
	const login = localStorage.getItem('login')
	return (
		<>
			<header className='header'>
				<Image src='/header-logo.png' alt='digikala-mehr-logo' width={150} height={0} />

				{login ? (
					<div className='flex items-center gap-md'>
						<Image src='/svg/user.svg' alt='user' width={20} height={0} />
						<span className='text-gray-ice'>|</span>
						<Image src='/svg/shopping-cart.svg' alt='shopping-cart' width={20} height={0} />
					</div>
				) : (
					<Button className='border-gray-300 font-bold text-gray-700 hover:border-gray-300 hover:text-gray-700'>
						ورود | ثبت نام | <Image src='/svg/sign-in.svg' alt='sign-in' width={20} height={0} />
					</Button>
				)}
			</header>
			<div className='h-16 w-full lg:h-16'></div>
		</>
	)
}

export default Header
