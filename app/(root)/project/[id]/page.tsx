import Image from 'next/image'
import Link from 'next/link'

function Project() {
	return (
		<div className='flex w-full flex-col gap-xl'>
			<div className='card-gray h-[378px] w-full'></div>
			<div className='horizontal-pad flex flex-col gap-lg'>
				<h1 className='text-2xl font-bold'>توضیحات پروژه</h1>
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
					که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
					آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
					فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
					دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
				</p>
			</div>
			<div className='horizontal-pad grid grid-cols-5 gap-xl'>
				<div className='card-gray col-span-4 min-h-screen w-full'></div>
				<div className='col-span-1 flex min-h-screen w-full flex-col gap-md'>
					<div className='card-gray h-[300px] w-full'></div>

					{/* Receive link */}
					<div className='round flex h-[364px] w-full flex-col gap-md p-md shadow-[0_0_8px_0_rgba(57,56,56,0.1)]'>
						<div className='flex flex-col gap-[10px]'>
							<div className='mx-auto'>
								<Image src='/svg/online-connection.svg' alt='online-connection' width={180} height={0} />
							</div>
							<p className='text-primary text-sm font-bold'>دیگران را به مهربانی دعوت کن!</p>
							<p className='text-gray text-xs font-medium leading-[21px]'>
								با اشتراک‌گذاری لینک اختصاصی خود، دیگران را به نیکوکاری در این پروژه دعوت کن و از مهر هدیه بگیر.
							</p>
						</div>
						<div className='btn btn-primary flex w-full items-center justify-center text-sm text-white'>
							<Link href='/login'>
								<button>دریافت لینک اختصاصی</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Project
