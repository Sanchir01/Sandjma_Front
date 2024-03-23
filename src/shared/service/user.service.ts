import { GetUserProfileDocument } from 'gql/gql/graphql'
import { GraphQLClient } from 'graphql-request'
import { AuthServiceTokens } from '../utils/Tokens.service'
const refreshToken = AuthServiceTokens.getRefreshToken()
export const myRequest = new GraphQLClient(process.env.SERVER_URL ?? '', {
	credentials: 'include',
	headers: {
		Cookie: refreshToken ? `refreshToken=${refreshToken}` : ''
	},
	mode: 'cors'
})

export const userService = {
	async getProfile() {
		return myRequest.request(GetUserProfileDocument)
	}
}
