import Card from '@/components/Card'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

const User = () => {
	return (
		<div className='flex w-full flex-col gap-xl'>
			<div className='mt-4 flex w-full gap-5 px-5'>
				<aside className='flex w-2/6 flex-col gap-4'>
					<Card className='flex flex-col gap-md'>
						<div>
							<h2>فرنوش جمالی</h2>
							<p className='font-sm pt-3 text-grayMd'>09385709936</p>
						</div>
						<hr />
						<Button type='link' href='digikala.com' className='text-gray-500'>
							رفتن به دیجی کالا
						</Button>
					</Card>
					<Card className='flex flex-col gap-md'>
						<h2>تاریخچه مهربانی شما خالی است.</h2>
						<p className='font-sm text-grayMd'>تاکنون به هیچ پروژه ای یاری نرسانده اید.</p>
					</Card>
					<Card className='flex flex-col gap-md'>
						<h2>دیگران را به مهر دعوت کن!</h2>
						<p className='font-sm text-grayMd'>هنوز کسی دعوت شما را نپذیرفته است.</p>
						<div className='flex justify-center'>
							<Button href={`/user/history-cooperation`}>مشاهده جزئیات</Button>
						</div>
					</Card>
					<Card className='flex flex-col gap-md'>
						<h2>قدر دانی از مهربانی شما.</h2>
						<p className='font-sm text-grayMd'>شما هنوز از مهر هدیه ای دریافت نکرده اید.</p>
						<div className='flex justify-center'>
							<Button href={`/user/appreciate`} className='inline-block'>
								مشاهده جزئیات
							</Button>
						</div>
					</Card>
				</aside>
				<section className='flex w-full flex-col gap-4'>
					<Link href='/user/order-history'>
						<Card className='bg-greenMd flex items-center justify-between text-greenLight'>
							<p className='text-greenLight'>تاریخچه یارهای گذشته شما در دیجی کالامهر</p>
							<Image src='/svg/angle-left.svg' alt='' width={10} height={10} />
						</Card>
					</Link>
					<Card className='flex flex-col gap-4'>
						<h2>تاریخچه یاری شما</h2>
						<div className='flex gap-4'>
							<span className='text-grayMd'>در انتظار پرداخت</span>
							<span className='text-greenLight'>جاری</span>
							<span className='text-grayMd'>تحویل شده</span>
						</div>
						<span>هنوز سفارشی ندارید</span>
					</Card>
				</section>
			</div>
			<div className='h-[378px] w-full bg-gray-200'></div>
		</div>
	)
}

export default User
