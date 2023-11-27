import { client } from '@/app/apollo'
import { ApolloProvider } from '@apollo/client'
import type { AppProps } from 'next/app'
import './globals.scss'

export function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	)
}
