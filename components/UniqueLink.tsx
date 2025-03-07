import Image from 'next/image'
import Link from 'next/link'
import styles from '@/app/ui/uniqueLink.module.css'

function UniqueLink() {
	return (
		<div className={`${styles.container} flex w-full flex-col gap-md rounded-lg p-md`}>
			<div className='flex flex-col gap-base'>
				<div className='mx-auto'>
					<Image src='/svg/online-connection.svg' alt='online-connection' width={180} height={0} loading='lazy' />
				</div>
				<p className='text-primary text-[14px] font-bold'>دیگران را به مهربانی دعوت کن!</p>
				<p className='text-grayMd text-[12px] font-medium leading-[21px]'>
					با اشتراک‌گذاری لینک اختصاصی خود، دیگران را به نیکوکاری در این پروژه دعوت کن و از مهر هدیه بگیر.
				</p>
			</div>
			<div className='bg-primary flex w-full items-center justify-center rounded-lg py-sm text-xs text-white'>
				<Link href='/login'>
					<button>دریافت لینک اختصاصی</button>
				</Link>
			</div>
		</div>
	)
}

export default UniqueLink
