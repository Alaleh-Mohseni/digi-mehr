import Card from '@/components/Card'
import Button from '@/components/Button'
import Image from 'next/image'
import Link from 'next/link'

const User = () => {
	return (
		<div className='mt-4 flex w-full gap-5 px-5'>
			<aside className='flex w-2/6 flex-col gap-4'>
				<Card className='flex flex-col'>
					<div>
						<h2>فرنوش جمالی</h2>
						<p>09385709936</p>
					</div>
					<hr />
					<Button type='link' href='digikala.com' className='text-gray-500'>
						رفتن به دیجی کالا
					</Button>
				</Card>
				<Card>
					<h2>تاریخ چه مهرباین شما خالی است</h2>
					<p className='text-center'>تاکنون به هیچ پروژه ای یاری نرساندید.</p>
				</Card>
				<Card>
					<h2>دیگران را به مهر دعوت کن!</h2>
					<p className='text-center'>هنوز کسی دعوت شما را نپذیرفته</p>
					<div className='flex justify-center'>
						<Button href={`/user/history-cooperation`}>مشاهده جزئیات</Button>
					</div>
				</Card>
				<Card>
					<h2>قدر دانی از مهربانی شما.</h2>
					<p>شما هنوز از مهر هدیه ای دریافت نکرده اید.</p>
					<div className='flex justify-center'>
						<Button href={`/user/appreciate`} className='inline-block'>
							مشاهده جزئیات
						</Button>
					</div>
				</Card>
			</aside>
			<section className='flex w-full flex-col gap-4'>
				<Link href='/user/order-history'>
					<Card className='flex items-center justify-between bg-mehr-lightest text-greenLight'>
						<p className='text-greenLight'>تاریخچه یارهای گذشته در دیجی کالامهر</p>
						<Image src='/svg/angle-left.svg' alt='' width={10} height={0} />
					</Card>
				</Link>
				<Card className='flex flex-col gap-4'>
					<h2>تاریخچه یاری شما</h2>
					<div className='flex gap-4'>
						<span>در انتظار پرداخت</span>
						<span>جاری</span>
						<span>تحویل شده</span>
					</div>
					<span>هنوز سفارشی ندارید</span>
				</Card>
			</section>
		</div>
	)
}

export default User
