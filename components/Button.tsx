import { cn } from '@/utils/utils'
import Link from 'next/link'
import React, { ReactNode } from 'react'

type ButtonProps = {
	children: ReactNode
	className?: string
	type?: 'default' | 'primary' | 'link'
	href?: string
	disabled?: boolean
	variant?: 'solid' | 'outlined'
	onClick?: () => void
}

function Button({ children, className, type = 'default', href, disabled, variant, onClick }: ButtonProps) {
	const baseClasses = 'px-6 py-2 rounded-lg text-sm font-medium transition duration-200'

	const selectedVariant = variant || (type === 'primary' ? 'solid' : 'outlined')

	const variantClasses = {
		solid: 'bg-ref-blue text-white hover:bg-ref-blue/80',
		outlined: 'border border-ref-blue text-ref-blue hover:text-ref-blue/70 hover:border-ref-blue/70',
	}

	const disabledClasses = 'cursor-not-allowed bg-gray-500 text-gray-300'

	const classes = cn(baseClasses, disabled ? disabledClasses : variantClasses[selectedVariant], className)

	if (type === 'primary' && href) {
		return (
			<Link href={href} className={classes}>
				{children}
			</Link>
		)
	} else if (type === 'link' && href) {
		return (
			<Link href={href} className='text-ref-blue hover:border-ref-blue/70 hover:text-ref-blue/70'>
				{children}
			</Link>
		)
	}

	return (
		<button className={classes} disabled={disabled} onClick={onClick}>
			{children}
		</button>
	)
}

export default Button
