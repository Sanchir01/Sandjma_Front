import { useFilters } from '@/app/store/useFilters'
import { IPropsSelectContent, MySelect } from '@/features'
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
import { useQuery } from '@apollo/client'
import {
	GetAllCategoriesDocument,
	GetAllColorsDocument,
	GetAllInsolationDocument
} from 'gql/gql/graphql'
import { SlidersHorizontal } from 'lucide-react'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'

const Filters: FC = () => {
	const [changeCategory, changeColors, changeInsulation] = useFilters(
		useShallow(state => [
			state.changeCategory,
			state.changeColors,
			state.changeInsulation
		])
	)
	const { data: categories } = useQuery(GetAllCategoriesDocument)
	const { data: colors } = useQuery(GetAllColorsDocument)
	const { data: insulation } = useQuery(GetAllInsolationDocument)
	return (
		<Sheet>
			<SheetTrigger className='flex gap-2'>
				<SlidersHorizontal className='hover:cursor-pointer' />
				<span className='text-sm'>Фильтры</span>
			</SheetTrigger>
			<SheetContent side={'left'} className='bg-white'>
				<SheetHeader>
					<SheetTitle>Filters</SheetTitle>
					<SheetDescription>
						This action cannot be undone. This will permanently delete your
						account and remove your data from our servers.
					</SheetDescription>
				</SheetHeader>

				<div className='flex flex-col gap-2'>
					<MySelect
						content={
							categories?.getAllCategories.map(({ id, name }) => ({
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
					<MySelect
						content={
							colors?.getAllColors.map(({ id, name, imageCss }) => ({
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
				</div>

				<SheetFooter>
					<SheetClose asChild>
						<Button type='submit'>Применить Фильтры</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default Filters
