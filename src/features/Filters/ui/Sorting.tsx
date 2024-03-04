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

import { FC, useRef } from 'react'

const Sorting: FC = () => {
	const setSorting = useFilters(state => state.changeSorting)
	const ref = useRef(null)

	return (
		<Select onValueChange={value => setSorting(value)}>
			<SelectTrigger>
				<SelectValue placeholder={'сортировка'} />
			</SelectTrigger>
			<SelectContent
				ref={ref => {
					if (!ref) return
					ref.ontouchstart = e => {
						e.preventDefault()
					}
				}}
			>
				<SelectGroup>
					{SortingArray.map(item => (
						<SelectItem key={item.id} value={item.value}>
							{item.name}
						</SelectItem>
					))}
				</SelectGroup>
			</SelectContent>
		</Select>
	)
}

export default Sorting
