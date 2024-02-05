import { LogoIcon } from '@/shared/icons/logo'
import Link from 'next/link'
import { FC } from 'react'

const HeaderLogo: FC = () => (
	<Link href={'/'}>
		<LogoIcon />
	</Link>
)

export default HeaderLogo
