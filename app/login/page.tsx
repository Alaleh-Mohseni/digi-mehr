import Image from 'next/image'

export default function Login() {
	return (
		<form className='flex w-fit flex-col gap-md rounded-md border p-lg'>
			<div className='flex items-center justify-center'>
				<Image src='/login-logo.svg' alt='digikala-mehr-logo' width={100} height={0} />
			</div>
			<h1 className='pt-4 font-bold'>ورود | ثبت نام</h1>
			<span className='text-xs'>سلام!</span>
			<p className='pb-lg text-xs'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
			<input type='text' className='h-12 rounded-md border border-solid border-red-600 px-lg py-sm outline-none' />
			<span className='pb-lg text-xs text-red-600'>لطفا این قسمت را خالی نگذارید</span>
			<button className='mb-sm h-12 rounded-md border border-solid border-red-600 bg-red-600 px-lg py-sm text-white outline-none'>ورود</button>
			<p className='text-xs'>ورود شما به معنای پذیرش شرایط دیجی کالا و قوانین حریم خصوصی است</p>
		</form>
	)
}
