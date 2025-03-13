'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'
import Button from '@/components/Button' // مسیر مناسب را وارد کنید

const UniqueLink = () => {
	const params = useParams()

	return (
		<div className='flex h-[364px] w-full flex-col gap-md rounded-lg p-md shadow-[0_0_8px_0_rgba(57,56,56,0.1)]'>
			<div className='flex flex-col gap-base'>
				<div className='mx-auto'>
					<Image src='/svg/online-connection.svg' alt='online-connection' width={180} height={0} loading='lazy' />
				</div>
				<h3>دیگران را به مهربانی دعوت کن!</h3>
				<p className='text-xs leading-[21px] text-grayMd'>با اشتراک‌گذاری لینک اختصاصی خود، دیگران را به نیکوکاری در این پروژه دعوت کن و از مهر هدیه بگیر.</p>
			</div>
			<Button type='primary' href={`/project/${params.id}/create-referral`} className='flex w-full items-center justify-center rounded-lg py-sm text-xs'>
				دریافت لینک اختصاصی
			</Button>
		</div>
	)
}

export default UniqueLink
