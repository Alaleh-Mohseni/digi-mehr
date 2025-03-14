'use client'

import Image from 'next/image'
import Button from './Button'
import { useState, useEffect } from 'react'
import Panel from '@/components/Panel'
import { getLoginCookie } from '@/lib/utils/actions/user.actions'
import Link from 'next/link'

const Header = () => {
	const [isLogin, setIsLogin] = useState(false)
	const [dropDown, setDropDown] = useState(false)

	useEffect(() => {
		const fetchLoginStatus = async () => {
			const response = await getLoginCookie()
			if (response) {
				setIsLogin(!!response)
			}
		}

		fetchLoginStatus()
	}, [])

	return (
		<>
			<header className='header'>
				<Link href='/'>
					<Image src='/header-logo.png' alt='logo' width={150} height={0} priority />
				</Link>
				{isLogin ? (
					<div className='relative flex items-center gap-md'>
						<div
							className={`flex cursor-pointer items-center gap-sm rounded-md px-sm py-xs transition-all ${dropDown ? 'bg-red-100' : ''}`}
							onClick={() => setDropDown(state => !state)}
						>
							<Image src='/svg/user-alt.svg' alt='user' width={25} height={20} />
							<Image src='/svg/down-arrow.svg' alt='arrow' width={10} height={1} />
						</div>
						{dropDown && <Panel />}
						<span className='text-gray-ice'>|</span>
						<Image src='/svg/shopping-basket.svg' alt='cart' width={24} height={24} />
					</div>
				) : (
					<Button href='/login' className='flex gap-2 border-gray-300 font-bold text-gray-700 hover:border-gray-300 hover:text-gray-700'>
						<Image src='/svg/sign-in.svg' alt='sign-in' width={20} height={20} />
						ورود | ثبت نام
					</Button>
				)}
			</header>
			<div className='h-16 w-full lg:h-16'></div>
		</>
	)
}

export default Header
