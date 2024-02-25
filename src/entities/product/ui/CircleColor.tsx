import { cn } from '@/shared/utils/utils'
import { FC } from 'react'

const CircleColor: FC<{ imageCss: string }> = ({ imageCss }) =>
	imageCss && (
		<span
			className={cn('w-3 h-3 rounded-full dark:border-white border-2', {
				'border-2 border-[#999999] ': imageCss === '#fff'
			})}
			style={{ backgroundColor: imageCss }}
		/>
	)

export default CircleColor
