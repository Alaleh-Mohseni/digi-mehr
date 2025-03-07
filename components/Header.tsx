'use client'

import Image from 'next/image'
import Button from './Button'

function Header() {
	return (
		<>
			<header className='header'>
				<Image src='/header-logo.png' alt='digikala-mehr-logo' width={150} height={0} />
				<Button className='border-gray-300 font-bold text-gray-700 hover:border-gray-300 hover:text-gray-700'>ورود | ثبت نام</Button>
			</header>
			<div className='h-16 w-full lg:h-16'></div>
		</>
	)
}

export default Header
