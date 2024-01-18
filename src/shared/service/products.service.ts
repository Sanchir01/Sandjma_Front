import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import { myRequest } from './user.service'
const url = process.env.SERVER_GRAPHQL as string
export interface IProductServicePropsGetAll {
	page?: string
	sort?: string
	colorId?: number
	categoryId?: string
	getProductByInsulation?: number
	newProduct?: boolean
	seller?: boolean
}
export const productService = {
	async getAllProducts({
		page,
		sort,
		colorId,
		categoryId,
		getProductByInsulation,
		newProduct,
		seller
	}: IProductServicePropsGetAll) {
		return myRequest.request({
			document: GetAllProductsDashboardDocument,
			variables: {
				getAllProductInput: {
					page,
					sort,
					colorId,
					categoryId,
					getProductByInsulation,
					newProduct,
					seller
				}
			}
		})
	}
	
}

