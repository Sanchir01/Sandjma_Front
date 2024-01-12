import { usePathname, useRouter } from 'next/navigation'
import { FC, PropsWithChildren } from 'react'
import { useUser } from '../store/useUser'
import { TypeComponentsAuthFields } from './types'

const CheckRole: FC<PropsWithChildren<TypeComponentsAuthFields>> = ({
	Component: { isOnlyUser },
	children
}) => {
	const user = useUser(state => state.user)
	const pathname = usePathname()
	const { replace } = useRouter()
	if (user && isOnlyUser) return <>{children}</>
	if (!user) {
		pathname !== '/auth' && replace('/auth')
		return null
	}
}

export default CheckRole
