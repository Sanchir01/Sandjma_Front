import type { AppProps } from 'next/app'
import { Layout } from './Layout/Layout'
import { ApolloWrapper } from './apollo/ApolloWrapper'
import './globals.scss'
export function App({ Component, pageProps }: AppProps) {
	return (
		<ApolloWrapper>
			<div className={'wrapper'}>
				<Layout>
					<main className={'main'}>
						<Component {...pageProps} />
					</main>
				</Layout>
			</div>
		</ApolloWrapper>
	)
}
