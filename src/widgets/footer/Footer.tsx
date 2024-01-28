import { FC } from 'react'

import { FooterColumn } from '@/shared/FooterColumn'
import style from '@/shared/styles/Footer.module.scss'

import { ColumnArr } from '@/shared/constants/FooterContent'
import '@/shared/styles/_mixins.scss'
import { Logo } from '@/shared/ui/icons'

export interface ILogo {
	width: number
	height: number
}

export const Footer: FC = () => (
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
						<Logo />
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
