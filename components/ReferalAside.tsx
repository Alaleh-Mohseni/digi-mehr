import React from 'react'

const ReferalAside = () => {
	const data = [
		{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'خریداری شده' },
		{ id: 2, value: '۱۲۳ کالا', description: 'هدیه شده است' },
		{ id: 3, value: '۴۲ نفر', description: 'دیگران را به این پروژه دعوت کرده‌اند' },
	]

	return (
		<aside className='round max-h-fit max-w-[700px] border border-solid p-lg'>
			<h3>تاریخچه همکاری در فروش این پروژه</h3>
			<ul className='divide-y-2 divide-solid'>
				{data.map(item => (
					<li key={item.id} className='border-grayIce relative flex items-center gap-lg py-lg'>
						<div className='bg-blueLight relative -top-3 min-h-10 min-w-10 rounded-full'></div>{' '}
						<div className='flex flex-col gap-md'>
							<p className='font-bold'>{item.value}</p>
							<span className='text-gray text-sm'>{item.description}</span>
						</div>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default ReferalAside
