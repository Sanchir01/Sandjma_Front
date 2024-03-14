import { GraphQLClient } from 'graphql-request'

export const myRequest = new GraphQLClient(process.env.SERVER_URL ?? '', {
	credentials: 'include'
})
