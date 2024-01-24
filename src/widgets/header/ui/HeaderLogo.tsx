import Link from 'next/link'
import { FC } from 'react'
import { LogoIcon } from '@/shared/icons/logo'

const HeaderLogo: FC = () => (
		<Link href={'/'}>
			<LogoIcon />
		</Link>
	)

export default HeaderLogo
