'use client'
import { useBurger } from '@/Providers/store/useBurger'
import { useMediaQuery } from '@/shared/hooks'
import styles from '@/shared/styles/Header.module.scss'
import { Button } from '@/shared/ui/button'
import cn from 'clsx'
import { Menu } from 'lucide-react'
import { FC } from 'react'
import { BurgerMenu } from './Burger'
export interface IHeaderLayout {
	logo?: React.ReactNode
	nav?: React.ReactNode
	profile?: React.ReactNode
	actions?: React.ReactNode
}
export const LayoutHeader: FC<IHeaderLayout> = ({
	logo,
	actions,
	profile,
	nav,
}) => {
	const isMedia1024 = useMediaQuery('(max-width:1024px)')
	const toggleBurger = useBurger(state => state.setToggleBurger)
	return (
		<header
			className={cn(
				styles.header,
				'dark:border-b border-white backdrop-blur supports-[backdrop-filter]:bg-background/60'
			)}
		>
			<div className='container'>
				<div className={styles.header__content}>
					{isMedia1024 ? (
						<Button
							aria-label='Открыть бургер меню'
							className='pointer '
							onClick={toggleBurger}
							variant={'ghost'}
							size={'icon'}
						>
							<Menu />
						</Button>
					) : (
						nav
					)}
					{logo}
					<div className={styles.header__right}>
						<div className=''>Cart</div>
						{isMedia1024 ? (
							<></>
						) : (
							<>
								{actions}
								{profile}
							</>
						)}
					</div>
					{isMedia1024 ? <BurgerMenu /> : <></>}
				</div>
			</div>
		</header>
	)
}
