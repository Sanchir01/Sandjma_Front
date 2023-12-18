import { useFilters } from '@/app/store/useFilters'
import { SortingArray } from '@/shared/constants/SortingArray'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui'
import { FC } from 'react'

export const Sorting: FC = () => {
	const changeSorting = useFilters(state => state.changeSorting)
	return (
		<div className='min-w-[200px] flex gap-2 items-center'>
			<div className=' flex gap-2'>
				<span>Сортировка </span>
				<span>по:</span>
			</div>
			<Select onValueChange={value => changeSorting(value)}>
				<SelectTrigger>
					<SelectValue placeholder='выберите сортировку' />
				</SelectTrigger>
				<SelectContent className='bg-white rounded-lg cursor-pointer'>
					{SortingArray.map(item => (
						<SelectGroup className='' key={item.id}>
							<SelectItem value={item.value}>{item.name}</SelectItem>
						</SelectGroup>
					))}
				</SelectContent>
			</Select>
		</div>
	)
}
