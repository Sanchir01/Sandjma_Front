import { ISize } from '@/shared/types/Slider.interface'
import { Button } from '@/shared/ui'
import cn from 'clsx'
import { FC } from 'react'
export interface ISizePickerProps {
	size: ISize[]
	setActiveSize: (i: number) => void
	activeSize: number
}
export const SizePicker: FC<ISizePickerProps> = ({
	size,
	setActiveSize,
	activeSize
}) => {
	return (
		<>
			{size?.map((item, i) => (
				<Button
					onClick={() => setActiveSize(i)}
					className={cn(
						'items-center h-8 w-8 p-2 justify-center flex',
						activeSize === i ? 'bg-[#383838] text-white' : 'bg-[#D9D9D9]'
					)}
					key={item.id}
				>
					<div>{item.name}</div>
				</Button>
			))}
		</>
	)
}
