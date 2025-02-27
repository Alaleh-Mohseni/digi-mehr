import Image from 'next/image'
import Link from 'next/link'

export default function Login() {
	return (
		<div className='relative h-screen'>
			<div className='w-100 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
				<form className='round flex w-full flex-col border p-xl'>
					<div className='flex items-center justify-center pb-xl'>
						<Image src='/svg/login-logo.svg' alt='digikala-mehr-logo' width={100} height={0} />
					</div>
					<h1 className='text-black pb-xl text-lg font-bold'>ورود | ثبت نام</h1>
					<span className='text-blueMidnight pb-sm text-xs'>سلام!</span>
					<p className='text-blueMidnight pb-lg text-xs'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
					<input type='text' className='border-redDark round h-12 border px-md py-sm outline-none' />
					<span className='text-redDark pb-xl pt-sm text-xs'>لطفا این قسمت را خالی نگذارید</span>
					<Link href='/create-referal' className='border-redLight bg-redLight round mb-sm h-12 border px-md py-sm text-center text-white outline-none'>
						ورود
					</Link>
					<p className='text-blueMidnight pt-md text-[11px]'>
						ورود شما به معنای پذیرش <span className='text-blueAqua'>شرایط دیجی کالا</span> و <span className='text-blueAqua'> حریم قوانین خصوصی </span>
						است
					</p>
				</form>
			</div>
		</div>
	)
}
