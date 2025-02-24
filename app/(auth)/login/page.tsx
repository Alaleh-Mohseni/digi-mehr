import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
	return (
		<div className='relative h-screen'>
			<div className='w-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
				<form className='flex w-full flex-col rounded-md border p-xl'>
					<div className='flex items-center justify-center pb-xl'>
						<Image src='/svg/login-logo.svg' alt='digikala-mehr-logo' width={100} height={0} />
					</div>
					<h1 className='pb-xl text-lg font-bold text-black'>ورود | ثبت نام</h1>
					<span className='text-black-50 pb-sm text-xs'>سلام!</span>
					<p className='text-black-50 pb-lg text-xs'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
					<input type='text' className='h-12 rounded-md border border-solid border-red-200 px-md py-sm outline-none' />
					<span className='pb-xl pt-sm text-xs text-red-200'>لطفا این قسمت را خالی نگذارید</span>
					<Link
						href='/create-referal'
						className='mb-sm h-12 rounded-md border border-solid border-red-100 bg-red-100 px-md py-sm text-center text-white outline-none'
					>
						ورود
					</Link>
					<p className='text-black-50 pt-md text-[11px]'>
						ورود شما به معنای پذیرش <span className='text-blue-500'>شرایط دیجی کالا</span> و <span className='text-blue-500'> حریم قوانین خصوصی </span>
						است
					</p>
				</form>
			</div>
		</div>
	)
}
