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
		<section className='horizontal-pad w-full'>
			<h3 className='pb-11 text-2xl font-bold'>{mockData.heading}</h3>
			<div className='flex gap-lg'>
				<div className='flex grow flex-col gap-xl'>
					<p className='text-sm'>{mockData.description}</p>
					<ol className='flex list-none flex-col gap-lg' style={{ counterReset: 'list' }}>
						{mockData.rules.map(rule => (
							<li
								className='before:bg-blueIce before:text-primary flex gap-md text-sm before:flex before:size-7 before:items-center before:justify-center before:rounded-full before:font-iranYekan before:font-bold before:content-[counter(list)]'
								style={{ counterIncrement: 'list' }}
								key={rule.id}
							>
								{rule.text}
							</li>
						))}
					</ol>

					{!showLinkBox ? (
						<>
							<label className='flex items-center gap-md'>
								<input type='checkbox' name='check-rule' id='check-rule' checked={isChecked} onChange={handleCheckboxChange} />
								<p>
									با{' '}
									<Link href='digikala.com' className='text-primary hover:text-blue-500'>
										شرایط و قوانین همکاری در فروش
									</Link>{' '}
									موافقم.
								</p>
							</label>
							<div>
								<button
									type='button'
									disabled={!isChecked}
									className={`btn text-white ${isChecked ? 'btn-primary hover:bg-blue-500' : 'bg-gray cursor-not-allowed'}`}
									onClick={handleButtonClick}
								>
									ساخت لینک اختصاصی
								</button>
							</div>
						</>
					) : (
						<div className='round bg-blueLight mt-5 flex items-center justify-between border px-4 py-6'>
							<p>
								<Link href='https://example.com' className='text-primary underline'>
									https://mehr.digikala.com/project/80/farnooshjml{' '}
								</Link>
							</p>
							<button className='btn border-primary text-primary border text-sm'>کپی کردن</button>
						</div>
					)}
				</div>
				<ReferalAside />
			</div>
		</section>
	)
}

export default CreateReferal
