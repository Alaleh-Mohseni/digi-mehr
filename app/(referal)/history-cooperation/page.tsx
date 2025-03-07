import ReferalAside from '@/components/ReferalAside'
import Image from 'next/image'

export default function History() {
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
	const data = {
		heading: ' همکاری با مهر شما در یک نگاه',
		roules: [
			{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'از دعوت شما مهرورزیده شده است' },
			{ id: 2, value: '۱۲۳ کالا', description: 'به واسطه شما برای کارهای نیک خریداری شده است' },
			{ id: 3, value: '۴۲ نفر', description: 'دعوت شما به مهر را پذیرفته اند' },
		],
	}
	return (
		<section className='flex w-full flex-col gap-[36px] px-[36px] py-xl'>
			<h3 className='text-[18px] font-bold'>تاریخچه همکاری در فروش</h3>
			<div className='flex gap-[20px]'>
				<div className='flex w-[85%] flex-col gap-[10px]'>
					<div className='border-gray-ice flex flex-col gap-md rounded-[12px] border px-[24px] pb-[6px] pt-[28px]'>
						<ul className='flex flex-col divide-y-2 divide-solid'>
							<li className='grid grid-cols-7 pb-[22px] text-[14px] font-bold'>
								<span className='text-right'>نام پروژه</span>
								<span className='text-center'>تعداد کلیک</span>
								<span className='text-center'>تعداد فروش</span>
								<span className='text-center'>میزان فروش</span>
								<span className='text-center'>کمیسیون</span>
								<span className='text-center'>تاریخ شروع</span>
								<span className='text-center'>لینک اختصاصی</span>
							</li>
							{dataHistory?.map(item => (
								<li key={item.id} className='border-gray-ice grid grid-cols-7 py-[22px] text-[14px] font-normal'>
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
					<div className='border-gray-ice flex justify-center rounded-[12px] border bg-meher-lightest px-[24px] py-[28px]'>
						<div className='grid w-full grid-cols-2 items-center'>
							<h3 className='text-[14px] font-bold text-ref-blue'>دریافت هدیه از دیجی کالا</h3>
							<p className='flex justify-end'>
								<Image src='/svg/angle-left.svg' alt='angle-left' className='text-ref-blue' width={15} height={0} />
							</p>
						</div>
					</div>
				</div>
				<ReferalAside data={data} />
			</div>
		</section>
	)
}
