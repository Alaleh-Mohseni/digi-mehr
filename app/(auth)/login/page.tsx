'use client'

import Image from 'next/image'
import { useState } from 'react'
import { handleLogin } from '@/lib/utils/actions/user.actions'
import { useSearchParams, useRouter } from 'next/navigation'

export default function Login() {
	const [valueInput, setValueInput] = useState<string>('')
	const searchParams = useSearchParams()
	const router = useRouter()
	const redirectTo = searchParams.get('redirectTo') || '/' // مقدار پیش‌فرض

	const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValueInput(e.target.value)
	}

	return (
		<div className='relative h-screen'>
			<div className='absolute left-1/2 top-1/2 w-full max-w-sm -translate-x-1/2 -translate-y-1/2'>
				<form className='flex flex-col rounded-lg border border-gray-ice p-8'>
					<div className='flex items-center justify-center pb-8'>
						<Image src='/svg/login-logo.svg' alt='digikala-mehr-logo' width={100} height={0} />
					</div>
					<h1 className='pb-8 text-lg font-bold text-black'>ورود | ثبت نام</h1>
					<span className='pb-2 text-xs text-[#3f4064]'>سلام!</span>
					<p className='pb-4 text-xs text-[#3f4064]'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</p>
					<input type='text' className='rounded-md border border-[#b2001a] p-2' value={valueInput} onChange={handleInput} />
					<span className='pb-8 pt-2 text-xs text-[#b2001a]'>لطفا این قسمت را خالی نگذارید</span>
					<button
						type='button'
						onClick={async e => {
							e.preventDefault()
							await handleLogin(valueInput)
							router.push(redirectTo) // مقدار `redirectTo` اکنون امن است
						}}
						className='mb-2 block rounded-md border border-[#ef4056] bg-[#ef4056] p-3 text-center text-white'
					>
						ورود
					</button>

					<p className='pt-4 text-[11px] text-[#3f4064]'>
						ورود شما به معنای پذیرش <span className='text-[#008eb2]'>شرایط دیجی کالا</span> و <span className='text-[#008eb2]'> حریم قوانین خصوصی </span>
						است
					</p>
				</form>
			</div>
		</div>
	)
}
