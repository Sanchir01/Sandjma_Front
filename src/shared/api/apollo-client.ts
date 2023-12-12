import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import Cookies from 'js-cookie'
import { EnumTokens } from '../constants/Enum.Tokens'

const link = createHttpLink({
	uri: process.env.SERVER_GRAPHQL,
	credentials: 'include'
})

const authLink = setContext((_, { headers }) => {
	const token = Cookies.get(EnumTokens.REFRESH_TOKEN)
	return {
		headers: {
			...headers,
			Authorization: token ? `Bearer ${token}` : ''
		}
	}
})

export const client = new ApolloClient({
	link: authLink.concat(link),
	cache: new InMemoryCache(),
	credentials: 'include',
	connectToDevTools: true,
	defaultOptions: {
		watchQuery: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'ignore'
		},
		query: {
			fetchPolicy: 'no-cache',
			errorPolicy: 'all'
		}
	}
})
