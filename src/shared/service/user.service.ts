import {
	GetUserFavoritesIdArrayDocument,
	ToggleFavoritesProfileDocument
} from 'gql/gql/graphql'
import { GraphQLClient } from 'graphql-request'
import Cookies from 'js-cookie'
import { EnumTokens } from '../constants/Enum.Tokens'
const token = Cookies.get(EnumTokens.REFRESH_TOKEN)

export const myRequest = new GraphQLClient(
	process.env.SERVER_GRAPHQL as string,
	{
		headers: {
			authorization: token ? `Bearer ${token}` : ''
		}
	}
)
export const userService = {
	async getAllFavoritesArray() {
		return myRequest.request(GetUserFavoritesIdArrayDocument)
	},
	async addToFavorites(id: number) {
		return myRequest.request(ToggleFavoritesProfileDocument, { productId: id })
	}
}
