'use client'
import { useFilters } from '@/Providers/store/useFilters'
import { Button, SheetClose, SheetFooter } from '@/shared/ui'
import { FC, useState } from 'react'
import CategoryFilters from './CategoryFilters'
import ColorsFilters from './ColorsFilters'
import InsulationsFilters from './InsulationFilters'

const ContentFilters: FC = () => {
	const [category, resetFilters] = useFilters(state => [
		state.category,
		state.resetFilters
	])
	const [categoryValue, setCategoryValue] = useState<string>('')
	const [colorValue, setColorValue] = useState<string>('')
	const [insulationValue, setInsulationValue] = useState<string>('')

	const [changeCategory, changeColors, changeInsulation] = useFilters(state => [
		state.changeCategory,
		state.changeColors,
		state.changeInsulation
	])

	const submitFilters = ({
		categoryProps,
		colorProps,
		insulationProps
	}: {
		categoryProps: string
		colorProps: string
		insulationProps: string
	}) => (
		changeCategory(categoryProps),

		changeColors(colorProps),
		changeInsulation(insulationProps)
	)

	return (
		<>
			<CategoryFilters
				filterSetValue={setCategoryValue}
				filterValue={categoryValue}
			/>
			<ColorsFilters filterSetValue={setColorValue} filterValue={colorValue} />
			<InsulationsFilters
				filterSetValue={setInsulationValue}
				filterValue={insulationValue}
			/>

			<SheetFooter>
				<div className='w-full flex flex-col gap-2'>
					<SheetClose asChild>
						<Button
							onClick={() =>
								submitFilters({
									categoryProps: categoryValue,
									colorProps: colorValue,
									insulationProps: insulationValue
								})
							}
						>
							Применить фильтры
						</Button>
					</SheetClose>
					<SheetClose asChild>
						<Button className='w-full' onClick={resetFilters}>
							Сбросить фильтры
						</Button>
					</SheetClose>
				</div>
			</SheetFooter>
		</>
	)
}

export default ContentFilters
