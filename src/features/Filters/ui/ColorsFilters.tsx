'use client'
import { filtersService } from '@/shared/service/filters.service'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '@/shared/ui/select'

import { useQuery } from '@tanstack/react-query'
import { FC, useRef } from 'react'
import { IPropsFilters } from './CategoryFilters'

const ColorsFilters: FC<IPropsFilters> = ({ filterSetValue, filterValue }) => {
	const { data, isLoading } = useQuery({
		queryKey: ['colors'],
		queryFn: () => filtersService.getAllColors()
	})
	const ref = useRef(null)

	const isExistColor = data?.getAllColors.find(
		item => item.id.toString() === filterValue
	)

	return (
		<Select onValueChange={value => filterSetValue(value)}>
			<SelectTrigger>
				<SelectValue
					placeholder={isExistColor ? isExistColor.name : 'выберите цвет'}
				/>
			</SelectTrigger>
			<SelectContent
				ref={ref => {
					if (!ref) return
					ref.ontouchstart = e => {
						e.preventDefault()
					}
				}}
			>
				{isLoading ? (
					<>Loading</>
				) : (
					data?.getAllColors.map(item => (
						<SelectItem key={item.id} value={item.id.toString()}>
							{item.name}
						</SelectItem>
					))
				)}
			</SelectContent>
		</Select>
	)
}

export default ColorsFilters
