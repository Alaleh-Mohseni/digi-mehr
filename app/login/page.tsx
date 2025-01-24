import Image from 'next/image'

export default function Login() {
	return (
		<div className='relative h-screen'>
			<div className='absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2'>
				<form className='flex w-fit flex-col rounded-md border p-xl'>
					<div className='flex items-center justify-center pb-lg'>
						<Image src='/svg/login-logo.svg' alt='digikala-mehr-logo' width={100} height={0} />
					</div>
					<h1 className='pb-lg text-xl font-bold'>ورود | ثبت نام</h1>
					<span className='pb-sm text-xs'>سلام!</span>
					<p className='pb-lg text-xs'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
					<input type='text' className='h-12 rounded-md border border-solid border-red-600 px-lg py-sm outline-none' />
					<span className='pb-xl pt-sm text-xs text-red-600'>لطفا این قسمت را خالی نگذارید</span>
					<button className='mb-sm h-12 rounded-md border border-solid border-red-600 bg-red-600 px-lg py-sm text-white outline-none'>ورود</button>
					<p className='pt-sm text-xs'>ورود شما به معنای پذیرش شرایط دیجی کالا و قوانین حریم خصوصی است</p>
				</form>
			</div>
		</div>
	)
}
