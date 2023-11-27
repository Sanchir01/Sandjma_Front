import type { AppProps } from 'next/app'
import { ApolloWrapper } from './apollo'
import './globals.scss'

export function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloWrapper>
			<Component {...pageProps} />
		</ApolloWrapper>
	)
}
