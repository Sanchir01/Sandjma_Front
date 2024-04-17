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
	initialData,
	page
}: IUseGetAllProducts) =>
	useQuery({
		queryKey: [
			'products',
			page,
			sort,
			seller,
			categoryId,
			colorId,
			newProduct,
			getProductByInsulation
		],
		queryFn: () =>
			productService.getAllProducts({
				page,
				sort,
				seller,
				categoryId,
				colorId,
				newProduct,
				getProductByInsulation
			}),
		initialData
	})
