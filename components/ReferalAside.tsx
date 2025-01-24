import React from 'react'

const ReferalAside = () => {
	const data = [
		{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'خریداری شده' },
		{ id: 2, value: '۱۲۳ کالا', description: 'هدیه شده است' },
		{ id: 3, value: '۴۲ نفر', description: 'دیگران را به این پروژه دعوت کرده‌اند' },
	]

	return (
		<aside className='max-h-fit w-[400px] rounded-xl border border-solid p-5'>
			<h3>تاریخچه همکاری در فروش این پروژه</h3>

			<ul className='divide-y-2 divide-solid'>
				{data.map(item => (
					<li key={item.id} className='py-5'>
						<p>{item.value}</p>
						<span>{item.description}</span>
					</li>
				))}
			</ul>
		</aside>
	)
}

export default ReferalAside
