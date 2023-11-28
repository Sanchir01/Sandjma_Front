import { client } from '@/shared/api/apollo-client'
import { ApolloProvider } from '@apollo/client'
import { ReactNode } from 'react'

export function ApolloWrapper({ children }: { children?: ReactNode }) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>
}
