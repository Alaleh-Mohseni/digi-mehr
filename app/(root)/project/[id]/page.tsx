import UniqueLink from '@/components/UniqueLink'

function Project() {
	return (
		<div className='flex w-full flex-col gap-xl'>
			<div className='h-[378px] w-full bg-gray-300'></div>
			<div className='flex flex-col gap-lg px-lg'>
				<h1 className='text-2xl font-bold'>توضیحات پروژه</h1>
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
					که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
					آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
					فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
					دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
				</p>
			</div>
			<div className='grid grid-cols-5 gap-xl px-lg'>
				<div className='col-span-4 h-[1000px] w-full bg-gray-300'></div>
				<div className='sticky top-[80px] col-span-1 flex w-full flex-col gap-md'>
					<div className='h-[300px] w-full bg-gray-300'></div>

					<UniqueLink />
				</div>
			</div>
			<div className='h-[378px] w-full bg-gray-300'></div>
		</div>
	)
}

export default Project
