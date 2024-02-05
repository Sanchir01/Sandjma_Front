'use client'
import { useFilters } from '@/Providers/store/useFilters'
import { SortingArray } from '@/shared/constants/SortingArray'
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui/select'
import { useQueryClient } from '@tanstack/react-query'
import { FC } from 'react'
const Sorting: FC = () => {
	const client = useQueryClient()
	const sorting = useFilters(state => state.changeSorting)
	return (
		<Select onValueChange={value => sorting(value)}>
			<SelectTrigger className='rounded'>
				<SelectValue placeholder={'выберите сортировку'} />
			</SelectTrigger>
			<SelectContent>
				{SortingArray.map(item => (
					<SelectGroup
						defaultChecked
						defaultValue={'hight-price'}
						key={item.id}
					>
						<SelectItem className='cursor-pointer' value={item.value}>
							<div className='flex gap-2 items-center'>
								<div>{item.name} </div>
							</div>
						</SelectItem>
					</SelectGroup>
				))}
			</SelectContent>
		</Select>
	)
}

export default Sorting
