import { Header, HeaderProfileEnum } from '@/widgets/header/Header'

export default async function Layout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header variant={HeaderProfileEnum.PUBLIC} />
			{children}
		</>
	)
}
