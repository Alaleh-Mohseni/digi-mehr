import { cn } from '@/lib/utils/utils'
import { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
}

const Card: React.FC<CardProps> = ({ children, className }) => {
	return <div className={cn('mt-5 rounded-xl border px-8 py-7', className)}>{children}</div>
}

export default Card
