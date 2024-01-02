import { useFilters } from '@/app/store/useFilters'
import { IPropsSelectContent, MySelect } from '@/features'
import { useGetAllQueriesData } from '@/shared/api/react-query.hooks'
import { filtersService } from '@/shared/service/filters.service'
import {
	Button,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/ui'
import {
	GetAllCategoriesQuery,
	GetAllColorsQuery,
	GetAllInsolationQuery
} from 'gql/gql/graphql'
import { SlidersHorizontal } from 'lucide-react'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'

const Filters: FC = () => {
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
		<Sheet>
			<SheetTrigger className='flex gap-2'>
				<SlidersHorizontal className='hover:cursor-pointer' />
				<span className='text-sm'>Фильтры</span>
			</SheetTrigger>
			<SheetContent side={'left'} className='bg-white max-[650px]:w-full'>
				<SheetHeader>
					<SheetTitle>Filters</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>
				<div className='flex flex-col gap-2'>
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

				<SheetFooter className='mt-5'>
					<SheetClose asChild>
						<Button
							type='submit'
							onClick={resetFilters}
							className='w-full bg-[#232323] text-white p-3 mt-3 hover:bg-[#333333] max-[650px]:hover:hidden'
						>
							Сбросить фильтры
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default Filters
