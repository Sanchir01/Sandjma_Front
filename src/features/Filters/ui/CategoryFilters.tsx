'use client'
import { useFilters } from '@/Providers/store/useFilters'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
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
export interface IPropsFilters {
	filterSetValue: (value: string) => void
	filterValue: string
}
const CategoryFilters: FC<IPropsFilters> = ({
	filterSetValue,
	filterValue
}) => {
	const { data, isLoading } = useQuery({
		queryKey: ['category'],
		queryFn: () => filtersService.getAllCategory()
	})
	const ref = useRef(null)

	const categoryValue = useStoreZustand(useFilters, state => state.category)
	const isExistCategory = data?.getAllCategories.find(
		item => item.id.toString() === filterValue
	)

	return (
		<Select onValueChange={value => filterSetValue(value)}>
			<SelectTrigger>
				<SelectValue
					placeholder={
						isExistCategory ? isExistCategory.name : 'выберите категорию'
					}
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
					data?.getAllCategories.map(item => (
						<SelectItem key={item.id} value={item.id.toString()}>
							{item.name}
						</SelectItem>
					))
				)}
			</SelectContent>
		</Select>
	)
}

export default CategoryFilters
