/* eslint-disable react-hooks/exhaustive-deps */
import { AuthServiceTokens } from '@/shared/utils'
import dynamic from 'next/dynamic'
import { usePathname } from 'next/navigation'
import { FC, PropsWithChildren, useEffect } from 'react'
import { useUser } from '../store/useUser'
import { TypeComponentsAuthFields } from './types'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<PropsWithChildren<TypeComponentsAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const [user, logout, checkAuth] = useUser(state => [
		state.user,
		state.logout,
		state.checkAuth
	])
	const pathname = usePathname()

	useEffect(() => {
		const accessToken = AuthServiceTokens.getAccessToken()
		if (!accessToken) checkAuth()
	}, [])

	useEffect(() => {
		const refreshToken = AuthServiceTokens.getRefreshToken()
		if (!refreshToken && user) logout()
	}, [pathname])

	return isOnlyUser ? (
		<DynamicCheckRole
			Component={{
				isOnlyUser
			}}
		>
			{children}
		</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}

export default AuthProvider
