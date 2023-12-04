import { header } from '@/shared/constants/header'
import styles from '@/shared/styles/Header.module.scss'
import { FavoritesLogo } from '@/shared/ui/icons/favorites'
import { ProfileLogo } from '@/shared/ui/icons/profile'
import cn from 'clsx'
import Link from 'next/link'
import { FC } from 'react'
export interface IBurgerMenu {
	active: boolean
	setActive: () => void
}

export const BurgerMenu: FC<IBurgerMenu> = ({ active, setActive }) => {
	return (
		<div
			className={cn(styles.menu, active ? styles.menu__active : '')}
			onClick={setActive}
		>
			<div className={styles.menu__content} onClick={e => e.stopPropagation()}>
				<nav>
					<ul className={styles.menu__text}>
						{header.map(content => (
							<li key={content.id}>
								<Link href={content.href}>{content.title}</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
			<div className={styles.menu__footer}>
				<div className='px-10 py-2 flex items-end justify-around'>
					<FavoritesLogo color='white' href={'/favorites'} />
					<ProfileLogo color='#fff' href={'/profile'} />
				</div>
			</div>
		</div>
	)
}
