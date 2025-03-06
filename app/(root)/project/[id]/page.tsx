import UniqueLink from '@/components/UniqueLink'
import styles from '@/app/ui/project.module.css'

function Project() {
	return (
		<div className='flex w-full flex-col gap-xl'>
			<div className={styles.gray_container}></div>
			<div className='flex flex-col gap-lg px-lg'>
				<h1>توضیحات پروژه</h1>
				<p>
					لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
					که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
					آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
					فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی
					دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
				</p>
			</div>
			<div className='grid grid-cols-5 gap-xl px-lg'>
				<div className={`${styles.gray_container_big} col-span-4`}></div>
				<div className='col-span-1 flex w-full flex-col gap-md'>
					<div className={styles.gray_container_small}></div>
					<UniqueLink />
				</div>
			</div>
			<div className={styles.gray_container}></div>
		</div>
	)
}

export default Project
