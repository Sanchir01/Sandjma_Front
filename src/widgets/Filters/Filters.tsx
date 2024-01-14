import { useFilters } from '@/app/store/useFilters'
import { IPropsSelectContent, MySelect } from '@/features'
import { useGetAllQueriesData } from '@/shared/api/react-query.hooks'
import { filtersService } from '@/shared/service/filters.service'
import { Button } from '@/shared/ui'
import { Modal } from '@/shared/ui/Modal'
import { FiltersIcon } from '@/shared/ui/icons/Filters'
import {
	GetAllCategoriesQuery,
	GetAllColorsQuery,
	GetAllInsolationQuery
} from 'gql/gql/graphql'

import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'

export const Filters: FC = () => {
	const [changeCategory, changeColors, changeInsulation, resetFilters] =
		useFilters(
			useShallow(state => [
				state.changeCategory,
				state.changeColors,
				state.changeInsulation,
				state.resetFilters
			])
		)
	const { data: categories, isLoading: loadingCategory } =
		useGetAllQueriesData<GetAllCategoriesQuery>({
			key: 'category',
			query: () => filtersService.getAllCategory()
		})
	const { data: colors, isLoading: loadingColors } =
		useGetAllQueriesData<GetAllColorsQuery>({
			key: 'colors',
			query: () => filtersService.getAllColors()
		})

	const { data: insulation, isLoading: loadingInsulation } =
		useGetAllQueriesData<GetAllInsolationQuery>({
			key: 'insulation',
			query: () => filtersService.getAllInsolation()
		})
	return (
		<Modal
			Icon={<FiltersIcon />}
			side={'left'}
			title={<div className=''>Фильтры</div>}
			Button={
				<Button
					type='submit'
					className='w-full h-10 mt-5 bg-buttonBg text-white'
					onClick={resetFilters}
				>
					Сбросить фильтры
				</Button>
			}
		>
			<div className='flex flex-col gap-2 mt-[30px]'>
				{loadingCategory
					? 'Loading'
					: categories && (
							<MySelect
								content={
									categories.getAllCategories.map(({ id, name }) => ({
										id,
										value: id.toString(),
										name
									})) as IPropsSelectContent[]
								}
								placeholder='выберитe категорию'
								onChange={changeCategory}
							>
								<span className='text-xl'>Категории</span>
							</MySelect>
					  )}
				{loadingColors
					? 'Loading'
					: colors && (
							<MySelect
								content={
									colors.getAllColors.map(({ id, name, imageCss }) => ({
										id,
										name,
										value: id.toString(),
										color: imageCss
									})) as IPropsSelectContent[]
								}
								placeholder='выберите цвет'
								onChange={changeColors}
							>
								<span className='text-xl'>Цвета</span>
							</MySelect>
					  )}
				{loadingInsulation
					? 'Loading'
					: insulation && (
							<MySelect
								content={
									insulation?.getAllInsolation.map(({ id, name }) => ({
										id,
										name,
										value: id.toString()
									})) as IPropsSelectContent[]
								}
								placeholder='выберите толщину'
								onChange={changeInsulation}
							>
								<span className='text-xl'>Толщина</span>
							</MySelect>
					  )}
			</div>
		</Modal>
	)
}
