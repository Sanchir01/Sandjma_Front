import type { AppProps } from 'next/app'
import { ApolloWrapper } from './apollo/ApolloWrapper'
import './globals.scss'

export function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloWrapper>
			<div className='wrapper'>
				<Component {...pageProps} />
			</div>
		</ApolloWrapper>
	)
}
