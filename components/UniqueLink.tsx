import Image from 'next/image'
import Link from 'next/link'

function UniqueLink() {
	return (
		<div className='flex h-[364px] w-full flex-col gap-md rounded-lg p-md shadow-[0_0_8px_0_rgba(57,56,56,0.1)]'>
			<div className='flex flex-col gap-base'>
				<div className='mx-auto'>
					<Image src='/svg/online-connection.svg' alt='online-connection' width={180} height={0} loading='lazy' />
				</div>
				<p className='text-sm font-bold text-blue-500'>دیگران را به مهربانی دعوت کن!</p>
				<p className='text-xs font-medium leading-[21px] text-gray-500'>
					با اشتراک‌گذاری لینک اختصاصی خود، دیگران را به نیکوکاری در این پروژه دعوت کن و از مهر هدیه بگیر.
				</p>
			</div>
			<div className='flex w-full items-center justify-center rounded-lg bg-blue-500 py-sm text-xs text-white'>
				<Link href='/login'>
					<button>دریافت لینک اختصاصی</button>
				</Link>
			</div>
		</div>
	)
}

export default UniqueLink
