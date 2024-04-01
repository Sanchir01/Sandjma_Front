import { Footer } from '@/widgets/footer/Footer'
import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header variant={HeaderProfileEnum.PUBLIC} />
			<main className='main pb-[50px] '>{children}</main>
			<Footer />
		</>
	)
}
