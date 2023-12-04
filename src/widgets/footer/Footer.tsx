import { FC } from 'react'

import { FooterColumn } from '@/shared/FooterColumn'
import style from '@/shared/styles/Footer.module.scss'

import { ColumnArr } from '@/shared/constants/FooterContent'
import { useMediaQuery } from '@/shared/hooks'
import '@/shared/styles/_mixins.scss'
import { Logo } from '@/shared/ui/icons/logo'

export const Footer: FC = () => {
	const isMedia960 = useMediaQuery('(min-width: 1200px)')
	const isMedia640 = useMediaQuery('(min-width: 1200px)')

	return (
		<footer className={style.footer}>
			<div className={style.footer__container}>
				<div className={style.footer__top}>
					{ColumnArr.map((obj, index) => (
						<FooterColumn key={index} title={obj.title} column={obj.content} />
					))}
				</div>
				<div className={style.footer__bot}>
					<div className={style.footer__bot__left}>
						<div className={style.footer__bot__left__logo}>
							<Logo width={isMedia960 ? 135 : isMedia640 ? 112 : 99} />
						</div>
						<div className={style.footer__bot__left__text}>
							© 2024. Все права защищены
						</div>
					</div>
					<div className={style.footer__bot__right}>меняйся вместе с нами</div>
				</div>
			</div>
		</footer>
	)
}
