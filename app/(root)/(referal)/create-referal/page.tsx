'use client'

import { useState } from 'react'
import ReferalAside from '@/components/ReferalAside'
import Link from 'next/link'
import ListNumber from '@/components/ListNumber'

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
		{ id: 1, value: '۵,۰۰۴,۰۰۰ تومان', description: 'خریداری شده' },
		{ id: 2, value: '۱۲۳ کالا', description: 'هدیه شده است' },
		{ id: 3, value: '۴۲ نفر', description: 'دیگران را به این پروژه دعوت کرده‌اند' },
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
		<section className='py-xl flex w-full flex-col gap-[36px] px-[36px]'>
			<h3 className='heading'>{mockData.heading}</h3>
			<div className='gap-2xl flex'>
				<div className='gap-lg flex w-[85%] flex-col'>
					<p className='text14Medium text-justify'>{mockData.description}</p>
					<ListNumber data={mockData.rules} />

					{!showLinkBox ? (
						<div className='flex flex-col gap-[20px]'>
							<label className='gap-md flex items-center'>
								<input type='checkbox' name='check-rule' id='check-rule' checked={isChecked} onChange={handleCheckboxChange} />
								<p className='text-[14px] font-medium'>
									با{' '}
									<Link href='digikala.com' className='text-ref-blue hover:text-blue-500'>
										شرایط و قوانین همکاری در فروش
									</Link>{' '}
									موافقم.
								</p>
							</label>
							<div>
								<button
									type='button'
									disabled={!isChecked}
									className={`btn text-[12px] text-white ${isChecked ? 'bg-ref-blue hover:bg-blue-500' : 'bg-gray cursor-not-allowed'}`}
									onClick={handleButtonClick}
								>
									ساخت لینک اختصاصی
								</button>
							</div>
						</div>
					) : (
						<div className='bg-ref-lighter mt-5 flex items-center justify-between border px-4 py-6'>
							<p>
								<Link href='https://example.com' className='text-ref-blue underline'>
									https://mehr.digikala.com/project/80/farnooshjml{' '}
								</Link>
							</p>
							<button className='text-ref-blue border-ref-blue text-sm'>کپی کردن</button>
						</div>
					)}
				</div>
				<ReferalAside data={data} />
			</div>
		</section>
	)
}

export default CreateReferal
