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
					<span className='pb-sm text-xs text-[#3f4064]'>سلام!</span>
					<p className='pb-lg text-xs text-[#3f4064]'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
					<input type='text' className='h-12 rounded-md border border-solid border-[#b2001a] px-md py-sm outline-none' />
					<span className='pb-xl pt-sm text-xs text-[#b2001a]'>لطفا این قسمت را خالی نگذارید</span>
					<Link
						href='/create-referal'
						className='mb-sm h-12 rounded-md border border-solid border-[#ef4056] bg-[#ef4056] px-md py-sm text-center text-white outline-none'
					>
						ورود
					</Link>
					<p className='pt-md text-[11px] text-[#3f4064]'>
						ورود شما به معنای پذیرش <span className='text-[#008eb2]'>شرایط دیجی کالا</span> و <span className='text-[#008eb2]'> حریم قوانین خصوصی </span>
						است
					</p>
				</form>
			</div>
		</div>
	)
}
