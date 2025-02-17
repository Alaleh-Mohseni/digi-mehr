'use client'

import { useState } from 'react'
import ReferalAside from '@/components/ReferalAside'
import Link from 'next/link'

export const mockData = {
	heading: 'همکاری در فروش به تحصیل کودکان کار افرک',
	description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است...',
	rules: [
		{ id: 1, text: 'تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه‌ای...' },
		{ id: 2, text: 'این متن برای بررسی و شبیه‌سازی طراحی رابط کاربری استفاده می‌شود.' },
		{ id: 3, text: 'قوانین همکاری را مطالعه کرده و با شرایط موافقت کنید.' },
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
		<section className='w-full px-24'>
			<h3 className='pb-11 text-2xl font-bold'>{mockData.heading}</h3>
			<div className='flex gap-5'>
				<div className='flex grow flex-col gap-10'>
					<p>{mockData.description}</p>
					<ol className='flex list-none flex-col gap-5' style={{ counterReset: 'list' }}>
						{mockData.rules.map(rule => (
							<li
								className='before:font-iranYekan flex gap-3 before:flex before:size-7 before:items-center before:justify-center before:rounded-full before:bg-blue-200 before:font-bold before:text-white before:content-[counter(list)]'
								style={{ counterIncrement: 'list' }}
								key={rule.id}
							>
								{rule.text}
							</li>
						))}
					</ol>

					{!showLinkBox ? (
						<>
							<label className='flex items-center gap-3'>
								<input type='checkbox' name='check-rule' id='check-rule' checked={isChecked} onChange={handleCheckboxChange} />
								<p>
									با{' '}
									<Link href='digikala.com' className='text-blue-400 hover:text-blue-600'>
										شرایط و قوانین همکاری در فروش
									</Link>{' '}
									موافقم.
								</p>
							</label>
							<div>
								<button
									type='button'
									disabled={!isChecked}
									className={`rounded-md px-4 py-2 text-white ${isChecked ? 'bg-blue-600 hover:bg-blue-700' : 'cursor-not-allowed bg-gray-400'}`}
									onClick={handleButtonClick}
								>
									ساخت لینک اختصاصی
								</button>
							</div>
						</>
					) : (
						<div className='mt-5 flex items-center justify-between rounded-lg border border-gray-300 bg-blue-50 px-4 py-6'>
							<p>
								<Link href='https://example.com' className='text-blue-600 underline'>
									https://mehr.digikala.com/project/80/farnooshjml{' '}
								</Link>
							</p>
							<button className='rounded-lg border border-blue-600 px-5 py-2 text-sm text-blue-700'>کپی کردن</button>
						</div>
					)}
				</div>
				<ReferalAside />
			</div>
		</section>
	)
}

export default CreateReferal
