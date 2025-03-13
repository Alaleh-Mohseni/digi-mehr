import Card from '@/components/Card'
import Button from '@/components/Button'

const User = () => {
	return (
		<div className='flex'>
			<aside className='flex flex-col gap-4'>
				<Card className='divide-y-2'>
					<div>
						<h2>فرنوش جمالی</h2>
						<p>09385709936</p>
					</div>
					<Button type='link' href='digikala.com'>
						رفتن به دیجی کالا
					</Button>
				</Card>
				<Card>
					<h2>تاریخ چه مهرباین شما خالی است</h2>
					<p>تاکنون به هیچ پروژه ای یاری نرساندید.</p>
				</Card>
				<Card>
					<h2>دیگران را به مهر دعوت کن!</h2>
					<p className='text-center'>هنوز کسی دعوت شما را نپذیرفته</p>
					<Button href={`/user/history-cooperation`}>مشاهده جزئیات</Button>
				</Card>
				<Card>
					<h2>قدر دانی از مهربانی شما.</h2>
					<p>شما هنوز از مهر هدیه ای دریافت نکرده اید.</p>
					<Button href={`/user/appreciate`}>مشاهده جزئیات</Button>
				</Card>
			</aside>
			<section>
				<Card className='bg-mehr-lightest text-greenLight'>
					<p className='text-greenLight'>تاریخچه یارهای گذشته در دیجی کالامهر</p>
					<span>{'<'}</span>
				</Card>
				<Card>
					<h2>تاریخچه یاری شما</h2>
					<div>
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
