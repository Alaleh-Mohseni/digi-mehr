import { cn } from '@/lib/utils/utils'
import { ReactNode } from 'react'

type CardProps = {
	children: ReactNode
	className?: string
}

const Card = ({ children, className }: CardProps) => {
	return <div className={cn('w-full rounded-xl border px-8 py-7', className)}>{children}</div>
}

export default Card
