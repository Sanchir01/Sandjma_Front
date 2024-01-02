import { useBurger } from '@/app/store/useBurger'
import { useUser } from '@/app/store/useUser'
import { header } from '@/shared/constants/header'
import { useMediaQuery } from '@/shared/hooks'
import styles from '@/shared/styles/Header.module.scss'
import { Button } from '@/shared/ui'
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
	const toggleBurger = useBurger(state => state.setToggleBurger)

	const userProfile = useUser(state => state.user)
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__content}>
					{isMedia1024 ? (
						<Button
							aria-label='Открыть бургер меню'
							className='pointer '
							onClick={toggleBurger}
						>
							<BurgerIcon />
						</Button>
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
					<Link aria-label='Перейти на главную' href={'/'}>
						<Logo />
					</Link>
					<div className={styles.header__right}>
						<FavoritesLogo href={'/favorites'} />
						<IconCart href={'/cart'} />
						{isMedia1024 ? (
							<></>
						) : (
							<>
								<ProfileLogo
									aria_label='Перейти к профилю'
									href={userProfile ? '/profile' : '/auth'}
								/>
							</>
						)}
					</div>
					{isMedia1024 ? <BurgerMenu /> : <></>}
				</div>
			</div>
		</header>
	)
}
