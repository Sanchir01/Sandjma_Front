import { Header } from '@/widgets/header'
import { FC, ReactNode } from 'react'
import { Footer } from '@/widgets/footer'
export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	)
}
