import {
	GetAllCategoriesDocument,
	GetAllColorsDocument,
	GetAllInsolationDocument
} from 'gql/gql/graphql'
import { myRequest } from './user.service'

export const filtersService = {
	async getAllCategory() {
		return myRequest.request(GetAllCategoriesDocument)
	},
	async getAllColors() {
		return myRequest.request(GetAllColorsDocument)
	},
	async getAllInsolation() {
		return myRequest.request(GetAllInsolationDocument)
	}
}
