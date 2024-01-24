import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
export const ReactQuery = ({ children }: { children?: ReactNode }) => {
	const [value] = useState(
		() =>
			new QueryClient({
				defaultOptions: { queries: { refetchOnWindowFocus: false } },
			})
	)
	return <QueryClientProvider client={value}>{children}</QueryClientProvider>
}
