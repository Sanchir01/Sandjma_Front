import { GetUserProfileDocument } from 'gql/gql/graphql'
import { GraphQLClient } from 'graphql-request'
import { AuthServiceTokens } from '../utils/Tokens.service'
const refreshToken = AuthServiceTokens.getRefreshToken()
export const myRequest = new GraphQLClient(
	process.env.NODE_ENV === 'production'
		? (process.env.SERVER_URL as string)
		: 'http://localhost:5000/graphql',
	{
		credentials: 'same-origin',
		mode: 'cors',
		cache: 'default'
	}
)

export const userService = {
	async getProfile() {
		return myRequest.request(GetUserProfileDocument)
	}
}
