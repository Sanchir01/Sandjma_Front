import {
	MutationFunction,
	QueryFunction,
	useMutation,
	useQuery,
	useQueryClient
} from '@tanstack/react-query'
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

export const useGetAllQueriesData = <T>({
	query,
	key
}: {
	key: string
	query: QueryFunction<T>
}) => {
	const { data, isLoading, isFetching } = useQuery<T>({
		queryKey: [key],
		queryFn: query
	})
	return { data, isLoading, isFetching }
}

export const useAllMutation = <T>({
	key,
	mutation,
	invalidateQueryKey
}: {
	key: string[]
	mutation: MutationFunction<T>
	invalidateQueryKey?: string[]
	Query?: string[]
}) => {
	const client = useQueryClient()
	const { mutateAsync, data, isPending, isSuccess } = useMutation({
		mutationFn: mutation,
		onSettled: () => {
			client.invalidateQueries({ exact: true, queryKey: ['favoritesArray'] })
			invalidateQueryKey?.map(item =>
				client.invalidateQueries({ exact: true, queryKey: [`${item}`] })
			)
		}
	})

	return { mutateAsync, data, isPending, isSuccess }
}

export const useGetAllFavorites = () => {
	const { data, isFetching } = useQuery({
		queryFn: () => userService.getAllFavorites(),
		queryKey: ['favoritesArray'],
		select: data => data.getProfile.favorites
	})

	return { data, isFetching }
}
