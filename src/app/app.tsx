import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { AppProps } from 'next/app'
import React from 'react'
import { Layout } from './Layout/Layout'
import './globals.scss'
export function App({ Component, pageProps }: AppProps) {
	const [queryClient] = React.useState(() => new QueryClient())
	return (
		<QueryClientProvider client={queryClient}>
			<div className={'wrapper'}>
				<Layout>
					<main className={'main'}>
						<Component {...pageProps} />
					</main>
				</Layout>
			</div>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
