'use client'
import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { FC } from 'react'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => (
	<>
		<Header variant={HeaderProfileEnum.AUTH} />
		<div className='flex items-center justify-center min-w-screen min-h-screen'>
			{children}
		</div>
		<Footer />
	</>
)

export default Layout
