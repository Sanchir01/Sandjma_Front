'use client'
import { useUser } from '@/Providers/store/useUser'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { AuthServiceTokens } from '@/shared/utils/Tokens.service'
import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { redirect } from 'next/navigation'
import { FC } from 'react'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	const refreshToken = AuthServiceTokens.getRefreshToken()
	const user = useStoreZustand(useUser, state => state.user)
	if (refreshToken) {
		redirect('/catalog')
	}
	if (user) {
		redirect('/catalog')
	}
	return (
		<>
			<Header variant={HeaderProfileEnum.AUTH} />
			<div className='flex items-center justify-center min-w-screen min-h-screen'>
				{children}
			</div>
			<Footer />
		</>
	)
}

export default Layout
