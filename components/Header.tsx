'use client'

import Image from 'next/image'
import Link from 'next/link'

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
					<Link href='/login' className='border-gray-ice flex items-center gap-md border'>
						<Image src='/svg/sign-in.svg' alt='sign-in' width={20} height={0} />
						<p>ورود | ثبت نام</p>
					</Link>
				)}
			</header>
			<div className='h-16 w-full lg:h-16'></div>
		</>
	)
}

export default Header
