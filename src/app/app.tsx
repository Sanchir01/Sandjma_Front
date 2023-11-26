import type { AppProps } from 'next/app'
import './globals.css'

export function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}
