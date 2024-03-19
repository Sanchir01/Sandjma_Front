import { useQuery } from '@tanstack/react-query'
import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'
import { useDeferredValue } from 'react'
import {
	IProductServicePropsGetAll,
	productService
} from '../service/products.service'
import { userService } from '../service/user.service'

export interface IUseGetAllProductsQuery extends IProductServicePropsGetAll {
	initialData?: GetAllProductsDashboardQuery
	enabled?: boolean
}

export const useGetAllProductsQuery = ({
	page,
	sort,
	colorId,
	categoryId,
	getProductByInsulation,
	initialData,
	enabled
}: IUseGetAllProductsQuery) => {
	const pageNumber = useDeferredValue(page)
	const sorting = useDeferredValue(sort)
	const insulations = useDeferredValue(getProductByInsulation)
	const category = useDeferredValue(categoryId)
	const color = useDeferredValue(colorId)
	const { data, isLoading, isFetching } = useQuery({
		queryKey: [
			'products',
			{ pageNumber, sort, colorId, getProductByInsulation, category }
		],
		queryFn: () =>
			productService.getAllProducts({
				page: pageNumber,
				sort: sorting,
				getProductByInsulation: insulations,
				categoryId: category,
				colorId: color
			}),
		initialData,
		enabled
	})

	return { data, isLoading, isFetching }
}
export const useUserProfile = () => {
	const { data, isFetching } = useQuery({
		queryFn: () => userService.getProfile(),
		queryKey: ['profile']
	})
	return { data, isFetching }
}

export const useGetSimilar = ({ categoryId }: { categoryId: string }) => {
	const { data, isFetching } = useQuery({
		queryFn: () => productService.getAllProducts({ categoryId, page: '1' }),
		queryKey: ['similar'],
		enabled: !!categoryId
	})
	return { data, isFetching }
}
