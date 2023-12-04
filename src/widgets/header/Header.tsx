import styles from '@/shared/styles/Header.module.scss'
import { IconCart } from '@/shared/ui/icons/cart'
import { FavoritesLogo } from '@/shared/ui/icons/favorites'

import { Logo } from '@/shared/ui/icons/logo'
import { ProfileLogo } from '@/shared/ui/icons/profile'
import { IconSearch } from '@/shared/ui/icons/search'
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
