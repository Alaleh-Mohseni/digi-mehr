import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
	return (
		<div className='relative h-screen'>
			<div className='absolute left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2'>
				<form className='border-gray-ice flex flex-col rounded-lg border p-8'>
					<div className='flex items-center justify-center pb-8'>
						<Image src='/svg/login-logo.svg' alt='digikala-mehr-logo' width={100} height={0} />
					</div>
					<h1 className='pb-8 text-lg font-bold text-black'>ورود | ثبت نام</h1>
					<span className='pb-2 text-xs text-[#3f4064]'>سلام!</span>
					<p className='pb-4 text-xs text-[#3f4064]'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
					<input type='text' className='rounded-md border border-[#b2001a] p-2' />
					<span className='pb-8 pt-2 text-xs text-[#b2001a]'>لطفا این قسمت را خالی نگذارید</span>
					<Link href='/create-referal' className='mb-2 block rounded-md border border-[#ef4056] bg-[#ef4056] p-3 text-center text-white'>
						ورود
					</Link>
					<p className='pt-4 text-[11px] text-[#3f4064]'>
						ورود شما به معنای پذیرش <span className='text-[#008eb2]'>شرایط دیجی کالا</span> و <span className='text-[#008eb2]'> حریم قوانین خصوصی </span>
						است
					</p>
				</form>
			</div>
		</div>
	)
}
