import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
import { Footer } from '@/widgets/footer/Footer'
export default async function Layout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header variant={HeaderProfileEnum.PUBLIC} />
			{children}
			<Footer />
		</>
	)
}
