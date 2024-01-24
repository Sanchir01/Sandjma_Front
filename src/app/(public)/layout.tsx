import { Header } from '@/widgets/header/Header'

export default async function Layout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header>{children}</Header>
		</>
	)
}
