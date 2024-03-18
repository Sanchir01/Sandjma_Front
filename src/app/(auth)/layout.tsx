'use client'
import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { FC } from 'react'

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
	// const refreshToken = AuthServiceTokens.getRefreshToken()
	// const { replace } = useRouter()
	// const user = useStoreZustand(useUser, state => state.user)
	// console.log(refreshToken)
	// if (refreshToken) {
	// 	replace('/catalog')
	// }
	// if (user) {
	// 	replace('/catalog')
	// }
	const pa = ''
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
