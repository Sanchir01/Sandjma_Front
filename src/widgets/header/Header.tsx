import { Logo } from '@/shared/ui/logo'
import styles from '@/shared/styles/Header.module.scss'
import Link from 'next/link'
import { FC } from 'react'

export const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className='container'>
				<div className={styles.header__content}>
					<div className={styles.header__left}>
						<Link href={'/catalog'}>каталог</Link>
						<Link href={'/lookbook'}>лукбук</Link>
						<Link href={'/help '}>помощь</Link>
					</div>
					<Logo />
					<div className={styles.header__right}>
						<Link href={'/catalog'}>поиск</Link>
						<Link href={'/favorites'}>избранное</Link>
						<Link href={'/cart'}>корзина</Link>
						<Link href={'/porfile'}>кабинет</Link>
					</div>
				</div>
			</div>
		</header>
	)
}
