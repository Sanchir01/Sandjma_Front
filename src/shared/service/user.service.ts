import { GetUserProfileDocument } from 'gql/gql/graphql'
import { GraphQLClient } from 'graphql-request'
import { AuthServiceTokens } from '../utils/Tokens.service'

// const refreshToken = AuthServiceTokens.getAccessToken()
export const myRequest = new GraphQLClient(
	process.env.NODE_ENV === 'development'
		? 'http://localhost:5000'
		: process.env.SERVER_URL ?? '',
	{
		credentials: 'include',
		headers: {
			'Content-Type': 'application/json'
		},
		mode: 'cors'
	}
)

export const userService = {
	async getProfile() {
		return myRequest.request(GetUserProfileDocument)
	}
}
