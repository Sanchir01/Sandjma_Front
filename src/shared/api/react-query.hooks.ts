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
	const { data, isLoading } = useQuery<T>({
		queryKey: [key],
		queryFn: query
	})
	return { data, isLoading }
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
		mutationKey: key,
		mutationFn: mutation,
		onSettled: () => {
			client.refetchQueries({
				queryKey: invalidateQueryKey
			})
		}
	})

	return { mutateAsync, data, isPending, isSuccess }
}
