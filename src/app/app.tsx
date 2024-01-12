import type { AppProps } from 'next/app'
import AuthProvider from './Auth_Provider/AuthProvider'
import { TypeComponentsAuthFields } from './Auth_Provider/types'
import { Layout } from './Layout/Layout'
import ReactQueryProvider from './ReactQuery_Provider/ReactQueryProvider'
import './globals.scss'
export function App({
	Component,
	pageProps
}: AppProps & TypeComponentsAuthFields) {
	return (
		<ReactQueryProvider>
			<AuthProvider Component={{ isOnlyUser: Component.isOnlyUser }}>
				<div className={'wrapper'}>
					<Layout>
						<main className={'main'}>
							<Component {...pageProps} />
						</main>
					</Layout>
				</div>
			</AuthProvider>
		</ReactQueryProvider>
	)
}
