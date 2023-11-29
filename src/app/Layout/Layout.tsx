import { Footer, Header } from '@/widgets'
import { FC, ReactNode } from 'react'
export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
