import { useBurger } from '@/Providers/store/useBurger'
import { ToggleTheme } from '@/features/themesToggle/toggle-theme'
import { header } from '@/shared/constants/header'

import styles from '@/shared/styles/Header.module.scss'

import FavoritesLogo from '@/shared/icons/Favorites/FavoritesLogo'
import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'
import HeaderAdmin from './HeaderAdmin'
import { HeaderProfile } from './HeaderProfile'

export const BurgerMenu: FC = () => {
	const [burger, toggleBurger] = useBurger(
		useShallow(state => [state.toggleBurger, state.setToggleBurger])
	)
	return (
		<div
			className={cn(styles.menu, burger ? styles.menu__active : 'lg:hidden')}
			onClick={toggleBurger}
		>
			<div className={styles.menu__content} onClick={e => e.stopPropagation()}>
				<nav>
					<ul className={styles.menu__text}>
						{header.map(content => (
							<li onClick={toggleBurger} key={content.id}>
								<Link href={content.href}>{content.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className={styles.menu__footer}>
				<div className='py-2 flex items-center justify-evenly'>
					<FavoritesLogo />
					<ToggleTheme />
					<HeaderAdmin />
					<HeaderProfile />
				</div>
			</div>
		</div>
	)
}
