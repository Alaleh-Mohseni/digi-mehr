'use client'

import Image from 'next/image'
import Link from 'next/link'

function Header() {
	return (
		<header className='flex h-18 w-full items-center justify-between border border-b-4 px-md'>
			<Image src='/header-logo.png' alt='digikala-mehr-logo' width={200} height={0} />
			<Link href='/login'>
				<button className='round border border-solid border-gray-200 px-lg py-sm'>ورود | ثبت نام</button>
			</Link>
		</header>
	)
}

export default Header
