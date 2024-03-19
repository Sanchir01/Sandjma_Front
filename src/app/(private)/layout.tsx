'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import { useUser } from '@/Providers/store/useUser'
import { useUserProfile } from '@/shared/api/react-query.hooks'
import { AuthServiceTokens } from '@/shared/utils/Tokens.service'
import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { ReactNode, useEffect } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
	const refreshToken = AuthServiceTokens.getRefreshToken()
	const updateUser = useUser(state => state.resetUser)
	const setUser = useUser(state => state.setUser)
	const { data } = useUserProfile()

	useEffect(() => {
		if (refreshToken == undefined) {
			updateUser()
		} else {
			data !== undefined && setUser(data?.getProfile)
		}
	}, [data, refreshToken, setUser, updateUser])

	return (
		<>
			<Header variant={HeaderProfileEnum.PUBLIC} />
			<main className='main'>{children}</main>
			<Footer />
		</>
	)
}

export default layout
