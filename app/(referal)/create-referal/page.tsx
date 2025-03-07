'use client'

import { useState } from 'react'
import ReferalAside from '@/components/ReferalAside'
import ListNumber from '@/components/ListNumber'
import Button from '@/components/Button'

export const mockData = {
	heading: 'همکاری در فروش به تحصیل کودکان کار افرک',
	description:
		'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد.',
	rules: [
		{ id: 1, text: 'تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه‌ای...' },
		{ id: 2, text: 'این متن برای بررسی و شبیه‌سازی طراحی رابط کاربری استفاده می‌شود.' },
		{ id: 3, text: 'قوانین همکاری را مطالعه کرده و با شرایط موافقت کنید.' },
	],
}
const data = {
	heading: ' تاریخچه همکاری در فروش این پروژه',
	roules: [
		{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'خریداری شده', icon: '/svg/money-bill.svg' },
		{ id: 2, value: '۱۲۳ کالا', description: 'هدیه شده است', icon: '/svg/shopping-bag.svg' },
		{ id: 3, value: '۴۲ نفر', description: 'دیگران را به این پروژه دعوت کرده‌اند', icon: '/svg/building.svg' },
	],
}
const CreateReferal = () => {
	const [isChecked, setIsChecked] = useState(false)
	const [showLinkBox, setShowLinkBox] = useState(false)

	const handleCheckboxChange = () => setIsChecked(prev => !prev)

	const handleButtonClick = () => {
		if (isChecked) setShowLinkBox(true)
	}

	return (
		<section className='flex w-full flex-col gap-[36px] px-[36px] py-xl'>
			<h3 className='heading'>{mockData.heading}</h3>
			<div className='flex gap-2xl'>
				<div className='flex w-[85%] flex-col gap-lg'>
					<p className='text14Medium text-justify'>{mockData.description}</p>
					<ListNumber data={mockData.rules} />

					{!showLinkBox ? (
						<div className='flex flex-col gap-[20px]'>
							<label className='flex items-center gap-sm'>
								<input
									type='checkbox'
									id='check-rule'
									checked={isChecked}
									onChange={handleCheckboxChange}
									className='size-4 rounded-full border-2 border-blue-500 checked:border-transparent checked:bg-blue-500 focus:ring-2 focus:ring-blue-300'
								/>
								<p className='text14Medium'>
									با{' '}
									<Button type='link' href='/terms'>
										شرایط و قوانین همکاری در فروش
									</Button>{' '}
									موافقم.
								</p>
							</label>
							<div>
								<Button type='primary' disabled={!isChecked} onClick={handleButtonClick}>
									ساخت لینک اختصاصی
								</Button>
							</div>
						</div>
					) : (
						<div className='mt-5 flex items-center justify-between rounded-xl border bg-ref-lighter px-8 py-7'>
							<Button type='link' href='/history-cooperation'>
								https://mehr.digikala.com/project/80/farnooshjml{' '}
							</Button>
							<Button>کپی کردن</Button>
						</div>
					)}
				</div>
				<ReferalAside data={data} />
			</div>
		</section>
	)
}

export default CreateReferal
