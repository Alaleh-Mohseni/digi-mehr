'use client'

import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/ui/uniqueLink.module.css'

function UniqueLink() {
	const login = localStorage.getItem('login')
	return (
		<div className={`${styles.container} flex w-full flex-col gap-md rounded-lg p-md`}>
			<div className='flex flex-col gap-base'>
				<div className='mx-auto'>
					<Image src='/svg/online-connection.svg' alt='online-connection' width={180} height={0} loading='lazy' />
				</div>
				<h3>دیگران را به مهربانی دعوت کن!</h3>
				<p className='text-xs text-grayMd'>با اشتراک‌گذاری لینک اختصاصی خود، دیگران را به نیکوکاری در این پروژه دعوت کن و از مهر هدیه بگیر.</p>
			</div>
			<div className='flex w-full items-center justify-center rounded-lg bg-ref-blue py-sm text-xs text-white'>
				<Link href={login ? '/create-referal' : '/login'}>
					<button>دریافت لینک اختصاصی</button>
				</Link>
			</div>
		</div>
	)
}

export default UniqueLink
