'use client'
import { useFilters } from '@/Providers/store/useFilters'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/shared/ui/pagination'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'
export interface IPaginationCatalog {
	length: number
}
const PaginationCatalog: FC<IPaginationCatalog> = ({ length }) => {
	const [setPage, pagination] = useFilters(
		useShallow(state => [state.changePagination, state.pagination])
	)
	const countPage = Math.ceil(length / 10)
	return (
		<Pagination>
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious
						onClick={
							countPage === 1
								? () => {}
								: () => setPage((+pagination - 1).toString())
						}
					/>
				</PaginationItem>
				{Array.from({ length: countPage }).map((_, i) => {
					const pageNumber = i + 1
					return (
						<PaginationItem key={i}>
							<PaginationLink
								isActive={pageNumber.toString() === pagination}
								onClick={() => setPage(pageNumber.toString())}
							>
								{pageNumber}
							</PaginationLink>
						</PaginationItem>
					)
				})}

				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext
						onClick={
							countPage === +pagination
								? () => {}
								: () => setPage((+pagination + 1).toString())
						}
					/>
				</PaginationItem>
			</PaginationContent>
		</Pagination>
	)
}

export default PaginationCatalog
