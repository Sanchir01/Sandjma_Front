import Provider from '@/Providers/Provider'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Toaster } from 'react-hot-toast'
import './globals.css'

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body>
				<Toaster
					position='top-center'
					reverseOrder={false}
					toastOptions={{
						className: 'dark:bg-[#333] dark:text-white',
						style: {
							borderRadius: '10px'
						}
					}}
				/>
				<SpeedInsights />
				<Analytics />
				<Provider>
					<div className='wrapper'>{children}</div>
				</Provider>
			</body>
		</html>
	)
}
