import st from '@/shared/styles/Catalog.module.scss'
import styles from '@/shared/styles/Slider.module.scss'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { IEntityCartProps } from '../types/OneCart.interface'

export const OneCart: FC<IEntityCartProps> = ({
	priority = false,
	children,
	name,
	price,
	images,
	colorId,
	slug,
	className
}) => (
	<article className={cn(st.catalog__items__article, className)}>
		<Link
			href={`/catalog/${slug}/${String(colorId)}`}
			className={styles.slider__imageBlock}
		>
			<Image
				className={styles.slider__imageBlock__image}
				src={images[0]}
				alt={images[0]}
				width={400}
				height={400}
				priority={priority}
			/>
		</Link>
		<div className='flex justify-between mt-3 mr-3'>
			<div className='flex flex-col gap-1'>
				<div className={st.catalog__items__article__name}>{name}</div>
				<div className={st.catalog__items__article__price}>{price}</div>
			</div>
			{children}
		</div>
	</article>
)
