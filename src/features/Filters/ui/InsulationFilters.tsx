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
import { IPropsFilters } from './CategoryFilters'

const InsulationsFilters: FC<IPropsFilters> = ({
	filterSetValue,
	filterValue
}) => {
	const { data, isLoading } = useQuery({
		queryKey: ['insulations'],
		queryFn: () => filtersService.getAllInsolation()
	})
	const ref = useRef(null)

	const insulationValue = useStoreZustand(useFilters, state => state.insulation)

	const isExistInsulation =
		insulationValue &&
		data?.getAllInsolation.find(item => item.id.toString() === insulationValue)
	return (
		<Select onValueChange={value => filterSetValue(value)}>
			<SelectTrigger>
				<SelectValue placeholder='выберите толщину одежды' />
			</SelectTrigger>
			<SelectContent
				defaultValue={
					isExistInsulation ? isExistInsulation.name : 'выберите толщину'
				}
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
					data?.getAllInsolation.map(item => (
						<SelectItem key={item.id} value={item.id.toString()}>
							{item.name}
						</SelectItem>
					))
				)}
			</SelectContent>
		</Select>
	)
}

export default InsulationsFilters
