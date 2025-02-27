import React from 'react'

const ReferalAside = () => {
	const data = [
		{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'خریداری شده' },
		{ id: 2, value: '۱۲۳ کالا', description: 'هدیه شده است' },
		{ id: 3, value: '۴۲ نفر', description: 'دیگران را به این پروژه دعوت کرده‌اند' },
	]

	return (
		<aside className='round max-h-fit max-w-[700px] border border-solid p-5'>
			<h3>تاریخچه همکاری در فروش این پروژه</h3>

			<ul className='divide-y-2 divide-solid'>
				{data.map(item => (
					<li key={item.id} className='relative flex items-center gap-5 py-5'>
						<div className='bg-blueLight relative -top-3 min-h-10 min-w-10 rounded-full'></div>{' '}
						<div>
							<p>{item.value}</p>
							<span>{item.description}</span>
						</div>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default ReferalAside
