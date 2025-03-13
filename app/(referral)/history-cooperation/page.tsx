import ReferralAside from '@/components/ReferralAside'
import Image from 'next/image'
import Link from 'next/link'

const History = () => {
	const dataHistory = [
		{
			id: 1,
			name: 'کمک به تحصیل کودکان',
			clicks: 12,
			sales: 5,
			revenue: ' تومان 1,200,456',
			commission: '???',
			startDate: '2 مهر 1402',
			link: '/svg/link.svg',
		},
		{
			id: 2,
			name: 'مهارت آموزی گلدوزی',
			clicks: 57,
			sales: 3,
			revenue: '345,000 تومان',
			commission: '???',
			startDate: '5 اردیبهشت 1402',
			link: '/svg/link.svg',
		},
		{
			id: 3,
			name: 'تجهیز کتابخانه روستا',
			clicks: 103,
			sales: 7,
			revenue: '3,567,453 تومان',
			commission: '???',
			startDate: '31 بهمن 1402',
			link: '/svg/link.svg',
		},
	]
	const heading = ' همکاری با مهر شما در یک نگاه'
	const roles = [
		{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'از دعوت شما مهرورزیده شده است', icon: '/svg/money-bill.svg' },
		{ id: 2, value: '۱۲۳ کالا', description: 'به واسطه شما برای کارهای نیک خریداری شده است', icon: '/svg/shopping-bag.svg' },
		{ id: 3, value: '۴۲ نفر', description: 'دعوت شما به مهر را پذیرفته اند', icon: '/svg/building.svg' },
	]

	return (
		<section className='flex w-full flex-col gap-[36px] px-[36px] py-xl'>
			<h2 className='text-lg font-bold'>تاریخچه همکاری در فروش</h2>
			<div className='flex gap-[20px]'>
				<div className='flex w-[85%] flex-col gap-base'>
					<div className='flex flex-col gap-md rounded-[12px] border border-gray-ice px-lg pb-[6px] pt-[28px]'>
						<ul className='flex flex-col divide-y-2 divide-solid'>
							<li className='grid grid-cols-7 pb-[22px] text-sm font-bold'>
								<span className='text-right'>نام پروژه</span>
								<span className='text-center'>تعداد کلیک</span>
								<span className='text-center'>تعداد فروش</span>
								<span className='text-center'>میزان فروش</span>
								<span className='text-center'>کمیسیون</span>
								<span className='text-center'>تاریخ شروع</span>
								<span className='text-center'>لینک اختصاصی</span>
							</li>
							{dataHistory?.map(item => (
								<li key={item.id} className='grid grid-cols-7 border-gray-ice py-[22px] text-sm font-normal'>
									<span className='text-right'>{item.name}</span>
									<span className='text-center'>{item.clicks}</span>
									<span className='text-center'>{item.sales}</span>
									<span className='text-center'>{item.revenue}</span>
									<span className='text-center'>{item.commission}</span>
									<span className='text-center'>{item.startDate}</span>
									<span className='flex items-center justify-center'>
										<Image src={item.link} alt='link' width={25} height={0} />
									</span>
								</li>
							))}
						</ul>
					</div>
					<Link href='/appreciate' className='flex justify-center rounded-[12px] border border-gray-ice bg-mehr-lightest px-[24px] py-[28px]'>
						<div className='grid w-full grid-cols-2 items-center'>
							<h3 className='text-sm font-bold text-ref-blue'>دریافت هدیه از دیجی کالا</h3>
							<p className='flex justify-end'>
								<Image src='/svg/chevron-left.svg' alt='angle-left' width={24} height={24} />
							</p>
						</div>
					</Link>
				</div>
				<ReferralAside heading={heading} roles={roles} />
			</div>
		</section>
	)
}
export default History
