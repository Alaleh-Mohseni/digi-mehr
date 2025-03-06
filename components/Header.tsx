'use client'

import Image from 'next/image'
import Link from 'next/link'

function Header() {
	return (
		<>
			<header className='header'>
				<Image src='/header-logo.png' alt='digikala-mehr-logo' width={150} height={0} />
				<Link href='/login'>
					<button className='btn border'>ورود | ثبت نام</button>
				</Link>
			</header>
			<div className='h-16 w-full lg:h-16'></div>
		</>
	)
}

export default Header
