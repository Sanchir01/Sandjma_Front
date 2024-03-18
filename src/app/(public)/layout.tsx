'use client'
import { useUser } from '@/Providers/store/useUser'
import { AuthServiceTokens } from '@/shared/utils/Tokens.service'
import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { useEffect } from 'react'
export default function Layout({ children }: { children: React.ReactNode }) {
	const refreshToken = AuthServiceTokens.getRefreshToken()

	const updateUser = useUser(state => state.resetUser)
	console.log(refreshToken)
	useEffect(() => {
		refreshToken === undefined && updateUser()
	}, [refreshToken, updateUser])
	return (
		<>
			<Header variant={HeaderProfileEnum.PUBLIC} />
			<main className='main'>{children}</main>
			<Footer />
		</>
	)
}
