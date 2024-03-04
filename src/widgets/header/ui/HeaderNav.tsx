import { header } from '@/shared/constants/header'
import styles from '@/shared/styles/Header.module.scss'
import Link from 'next/link'
import type { FC } from 'react'
const HeaderNav: FC = () => (
	<nav className='max-[1024px]:hidden'>
		<ul className={styles.header__left}>
			{header.map(content => (
				<li key={content.id}>
					<Link href={content.href}>{content.title}</Link>
				</li>
			))}
		</ul>
	</nav>
)

export default HeaderNav
