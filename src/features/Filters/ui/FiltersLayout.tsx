'use client'
import { useFilters } from '@/Providers/store/useFilters'
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '@/shared/ui'
import { SlidersHorizontal } from 'lucide-react'
import { FC, ReactNode } from 'react'
export interface IFiltersLayout {
	sorting?: ReactNode
	content?: ReactNode
}
const FiltersLayout: FC<IFiltersLayout> = ({ sorting, content }) => {
	const resetFilters = useFilters(state => state.resetFilters)
	return (
		<Sheet>
			<SheetTrigger asChild>
				<SlidersHorizontal className='cursor-pointer' />
			</SheetTrigger>

			<SheetContent
				side={'left'}
				className={'p-0 max-[650px]:w-full min-[640px]:max-w-[600px]'}
			>
				<SheetHeader className='w-full p-4 border-b border-black  dark:border-white'>
					Фильтры
				</SheetHeader>
				<div className='flex flex-col gap-5 px-5 my-5'>
					{sorting}
					{content}
				</div>
			</SheetContent>
		</Sheet>
	)
}

export default FiltersLayout
