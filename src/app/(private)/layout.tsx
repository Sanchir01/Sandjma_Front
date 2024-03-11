/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import { useUser } from '@/Providers/store/useUser'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { AuthServiceTokens } from '@/shared/utils/Tokens.service'
import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { ReactNode, useEffect } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
	const refreshToken = AuthServiceTokens.getRefreshToken()
	const checkAuth = useUser(state => state.checkAuth)
	const user = useStoreZustand(useUser, state => state.user)
	const logout = useUser(state => state.logout)
	useEffect(() => {
		refreshToken === undefined && checkAuth()
	}, [checkAuth, refreshToken])
	useEffect(() => {
		user === null && logout()
	}, [logout, user])

	return (
		<>
			<Header variant={HeaderProfileEnum.PUBLIC} />
			<main className='main'>{children}</main>
			<Footer />
		</>
	)
}

export default layout
