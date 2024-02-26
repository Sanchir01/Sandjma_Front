import { cn } from '@/shared/utils/utils'
import { FC } from 'react'
export interface ICircleColor {
	imageCss: string
	onClick?: () => void
	className?: string
}

const CircleColor: FC<ICircleColor> = ({ imageCss, onClick, className }) =>
	imageCss ? (
		<span
			onClick={onClick}
			className={cn(
				className,
				'w-3 h-3 rounded-full dark:border-white border-2',
				{
					'border-2 border-[#999999] ': imageCss === '#fff'
				}
			)}
			style={{ backgroundColor: imageCss }}
		/>
	) : (
		<></>
	)

export default CircleColor
