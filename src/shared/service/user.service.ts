import { AuthServiceTokens } from '@/shared/utils/Tokens.service'
import {
	GetAllFavoritesDocument,
	GetUserFavoritesIdArrayDocument,
	ToggleFavoritesProfileDocument,
} from 'gql/gql/graphql'
import { GraphQLClient } from 'graphql-request'

const token = AuthServiceTokens.getRefreshToken()

export const myRequest = new GraphQLClient(
	process.env.SERVER_GRAPHQL as string,
	{
		headers: {
			authorization: token ? `Bearer ${token}` : '',
		},
		next: { revalidate: 600 },
		credentials: 'include',
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
	},
}
