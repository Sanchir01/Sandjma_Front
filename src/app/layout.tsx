import Provider from '@/Providers/Provider'
import { SITE_NAME } from '@/shared/constants/Seo.constants'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import type { Metadata } from 'next'
import { Toaster } from 'react-hot-toast'
import './globals.css'
export const metadata: Metadata = {
	title: SITE_NAME,
	description: `${SITE_NAME} - Super Magazin`
}
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<head>
				<link
					rel='stylesheet'
					href='https://cdn.direct.i-dgtl.ru/VerifyWidget.css'
				/>
				<script
					async
					src='https://cdn.direct.i-dgtl.ru/VerifyWidget.umd.min.js'
				/>
			</head>
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
