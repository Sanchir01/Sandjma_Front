import { ColumnArr } from '@/shared/constants/FooterContent'
import style from '@/shared/styles/Footer.module.scss'
import { cn } from '@/shared/utils/utils'
import { FC } from 'react'
import { FooterColumn } from './FooterColumn'
import { LogoIcon } from '@/shared/icons/logo'
const LayoutFooter: FC = () => (
	<footer className={cn(style.footer, 'dark:bg-[#282828]')}>
		<div className={style.footer__container}>
			<div className={style.footer__top}>
				{ColumnArr.map((obj, index) => (
					<FooterColumn key={index} title={obj.title} column={obj.content} />
				))}
			</div>
			<div className={style.footer__bot}>
				<div className={style.footer__bot__left}>
					<div className={style.footer__bot__left__logo}>
						<LogoIcon />
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

export default LayoutFooter
