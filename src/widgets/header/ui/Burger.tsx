import { useBurger } from '@/Providers/store/useBurger'
import { ToggleTheme } from '@/features/themesToggle/toggle-theme'
import { header } from '@/shared/constants/header'
import { FavoritesLogo } from '@/shared/icons/favorites'
import { ProfileLogo } from '@/shared/icons/profile'
import styles from '@/shared/styles/Header.module.scss'

import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'

export const BurgerMenu: FC = () => {
	const [burger, toggleBurger] = useBurger(
		useShallow(state => [state.toggleBurger, state.setToggleBurger])
	)

	return (
		<div
			className={cn(styles.menu, burger ? styles.menu__active : '')}
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
				<div className='px-10 py-2 flex items-center justify-around'>
					<FavoritesLogo color='white' href={'/favorites'} />
					<ToggleTheme />
					<ProfileLogo color='#fff' href={'/profile'} />
				</div>
			</div>
		</div>
	)
}
