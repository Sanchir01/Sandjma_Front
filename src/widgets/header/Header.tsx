import { useBurger } from '@/app/store/useBurger'
import { header } from '@/shared/constants/header'
import { useMediaQuery } from '@/shared/hooks'
import styles from '@/shared/styles/Header.module.scss'
import { BurgerIcon } from '@/shared/ui/icons/burger'
import { IconCart } from '@/shared/ui/icons/cart'
import { FavoritesLogo } from '@/shared/ui/icons/favorites'
import { Logo } from '@/shared/ui/icons/logo'
import { ProfileLogo } from '@/shared/ui/icons/profile'
import { BurgerMenu } from '@/widgets/Burger'
import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
	const isMedia1024 = useMediaQuery('(max-width:1024px)')
	const burger = useBurger(state => state.toggleBurger)
	const toggleBurger = useBurger(state => state.setToggleBurger)
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__content}>
					{isMedia1024 ? (
						<button className='pointer ' onClick={toggleBurger}>
							<BurgerIcon />
						</button>
					) : (
						<nav>
							<ul className={styles.header__left}>
								{header.map(content => (
									<li key={content.id}>
										<Link href={content.href}>{content.title}</Link>
									</li>
								))}
							</ul>
						</nav>
					)}
					<Link href={'/'}>
						<Logo />
					</Link>
					<div className={styles.header__right}>
						{isMedia1024 ? (
							<></>
						) : (
							<>
								<FavoritesLogo href={'/favorites'} />
								<ProfileLogo href={'/profile'} />
							</>
						)}
						<div className='relative'>
							<IconCart href={'/cart'} />
							<span className='absolute top-1 left-[10px] text-[11px]'>1</span>
						</div>
					</div>
					{isMedia1024 ? (
						<BurgerMenu active={burger} setActive={toggleBurger} />
					) : (
						<></>
					)}
				</div>
			</div>
		</header>
	)
}
