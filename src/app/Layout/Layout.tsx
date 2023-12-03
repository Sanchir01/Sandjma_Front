import { Header } from '@/widgets/header'
import { FC, ReactNode } from 'react'
export const Layout: FC<{ children?: ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			{/* <Footer /> */}
		</>
	)
}
