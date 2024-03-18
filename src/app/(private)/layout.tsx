'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import { useUser } from '@/Providers/store/useUser'
import { AuthServiceTokens } from '@/shared/utils/Tokens.service'
import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { ReactNode, useEffect } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
	const refreshToken = AuthServiceTokens.getRefreshToken()

	const updateUser = useUser(state => state.resetUser)
	console.log()
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

export default layout
