import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui/Select/select'

import { FC } from 'react'

export const Sorting: FC = () => {
	return (
		<div className='min-w-[200px] flex gap-2 items-center'>
			<div className=' flex gap-2'>
				<span>Сортировка </span>
				<span>по:</span>
			</div>

			<Select>
				<SelectTrigger>
					<SelectValue placeholder='выберите категорию' />
				</SelectTrigger>
				<SelectContent className='bg-white'>
					<SelectItem value='light'>Light</SelectItem>
					<SelectItem value='dark'>Dark</SelectItem>
					<SelectItem value='system'>System</SelectItem>
				</SelectContent>
			</Select>
		</div>
	)
}
