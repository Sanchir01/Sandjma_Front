'use client'
import {
	IProductServicePropsGetAll,
	productService
} from '@/shared/service/products.service'
import { useQuery } from '@tanstack/react-query'
import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'

export interface IUseGetAllProducts extends IProductServicePropsGetAll {
	initialData?: GetAllProductsDashboardQuery
}

export const useGetAllProducts = ({
	sort,
	seller,
	categoryId,
	colorId,
	newProduct,
	getProductByInsulation,
	initialData
}: IUseGetAllProducts) =>
	useQuery({
		queryKey: [
			'products',
			sort,
			seller,
			categoryId,
			colorId,
			newProduct,
			getProductByInsulation
		],
		queryFn: () =>
			productService.getAllProducts({
				page: '1',
				sort,
				seller,
				categoryId,
				colorId,
				newProduct,
				getProductByInsulation
			}),
		initialData
	})
