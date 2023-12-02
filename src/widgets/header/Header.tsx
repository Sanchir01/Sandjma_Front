import styles from '@/shared/styles/Header.module.scss'
import { IconCart } from '@/shared/ui/cart'
import { FavoritesLogo } from '@/shared/ui/favorites'

import { Logo } from '@/shared/ui/logo'
import { ProfileLogo } from '@/shared/ui/profile'
import { IconSearch } from '@/shared/ui/search'
import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__content}>
					<nav className={styles.header__left}>
						<Link href={'/catalog'}>каталог</Link>
						<Link href={'/lookbook'}>лукбук</Link>
						<Link href={'/help '}>помощ</Link>
					</nav>
					<Logo />
					<div className={styles.header__right}>
						<IconSearch href={'/catalog/search'} />
						<FavoritesLogo href={'/favorites'} />
						<IconCart href={'/cart'} />
						<ProfileLogo href={'/profile'} />
					</div>
				</div>
			</div>
		</header>
	)
}
