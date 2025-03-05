import React from 'react'

const ReferalAside = () => {
	const data = [
		{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'خریداری شده' },
		{ id: 2, value: '۱۲۳ کالا', description: 'هدیه شده است' },
		{ id: 3, value: '۴۲ نفر', description: 'دیگران را به این پروژه دعوت کرده‌اند' },
	]

	return (
		<aside className='max-h-fit min-w-[315px] rounded-[12px] border border-solid px-lg pt-[28px]'>
			<h3 className='text-md font-bold'>تاریخچه همکاری در فروش این پروژه</h3>
			<ul className='divide-y-2 divide-solid'>
				{data.map(item => (
					<li key={item.id} className='relative flex flex-col border-grayIce py-lg'>
						<div className='flex gap-[12px]'>
							<div className='relative -top-3 min-h-10 min-w-10 rounded-full bg-blueLight'></div>
							<p className='text-[18px] font-extrabold'>{item.value}</p>
						</div>
						<p className='ps-[47px] text-[14px] font-medium text-[#81858A]'>{item.description}</p>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default ReferalAside
