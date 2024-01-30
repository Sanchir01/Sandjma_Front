import React from 'react'

import style from '@/shared/styles/FooterColumn.module.scss'
import Link from 'next/link'

export interface IFooterColumn {
	title: string
	column: IFooterColumnText[]
}

export interface IFooterColumnText {
	id: number
	text: string
	href: string
}

<<<<<<< HEAD
export const FooterColumn: React.FC<IFooterColumn> = ({ title, column }) => (
	<div className={style.footer__column}>
		<div className={style.footer__column__title}>{title}</div>
		<div className={style.footer__column__content}>
			{column.map(text => (
				<Link
					key={text.id}
					className={style.footer__column__content__text}
					href={text.href}
				>
					{text.text}
				</Link>
			))}
=======
export const FooterColumn: React.FC<IFooterColumn> = ({ title, column }) => {
	return (
		<div className={style.footer__column}>
			<div className={style.footer__column__title}>{title}</div>
			<div className={style.footer__column__content}>
				{column.map(text => (
					<Link
						key={text.id}
						className={style.footer__column__content__text}
						href={text.href}
						target='blank'
					>
						{text.text}
					</Link>
				))}
			</div>
>>>>>>> e9ef913d679fa0334312556ba76b45641d8e0a74
		</div>
	</div>
)
