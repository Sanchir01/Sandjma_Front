import { AuthServiceTokens } from '@/shared/utils/Tokens.service'
import {
	GetAllFavoritesDocument,
	GetUserFavoritesIdArrayDocument,
	ToggleFavoritesProfileDocument
} from 'gql/gql/graphql'
import { GraphQLClient } from 'graphql-request'

export const myRequest = new GraphQLClient(
	process.env.NEXT_PUBLIC_SERVER_GRAPHQL ?? '',
	{
		credentials: 'include'
	}
)

export const userService = {
	async getAllFavoritesArray() {
		return myRequest.request(GetUserFavoritesIdArrayDocument)
	},
	async addToFavorites(id: number) {
		return myRequest.request(ToggleFavoritesProfileDocument, { productId: id })
	},
	async getAllFavorites() {
		return myRequest.request(GetAllFavoritesDocument)
	}
}
