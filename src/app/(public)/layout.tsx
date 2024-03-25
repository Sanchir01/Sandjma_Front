/* eslint-disable react-hooks/rules-of-hooks */
import { useUser } from '@/Providers/store/useUser'
import { EnumTokens } from '@/shared/utils/Tokens.service'
import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { cookies } from 'next/headers'
export default function Layout({ children }: { children: React.ReactNode }) {
	const accessToken = cookies().get(EnumTokens.ACCESS_TOKEN)?.value

	accessToken === undefined && useUser().logout()

	return (
		<>
			<Header variant={HeaderProfileEnum.PUBLIC} />
			<main className='main'>{children}</main>
			<Footer />
		</>
	)
}
