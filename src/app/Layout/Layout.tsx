import { Footer, Header } from '@/widgets'
import { FC, ReactNode } from 'react'
import { Toaster } from 'react-hot-toast'
export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Toaster />
			<Footer />
		</>
	)
}
