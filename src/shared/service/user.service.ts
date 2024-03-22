import { GetUserProfileDocument } from 'gql/gql/graphql'
import { GraphQLClient } from 'graphql-request'

export const myRequest = new GraphQLClient(process.env.SERVER_URL ?? '', {
	credentials: 'include',
	mode:'cors'
})

export const userService = {
	async getProfile() {
		return myRequest.request(GetUserProfileDocument)
	}
}
