import Image from 'next/image'
import React from 'react'

function Header() {
	return (
		<header className='px-md h-18 flex w-full items-center justify-between border-b-4 border-gray-700/10'>
			<Image src='/header-logo.png' alt='digikala-mehr-logo' width={200} height={0} />
			<button className='px-lg py-sm rounded-md border border-solid border-gray-200'>ورود | ثبت نام</button>
		</header>
	)
}

export default Header
