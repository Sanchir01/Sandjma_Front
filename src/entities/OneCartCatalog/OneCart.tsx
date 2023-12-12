import styles from '@/shared/styles/Slider.module.scss'
import { IEntityCartProps } from '@/shared/types/OneCart.interface'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export const OneCart: FC<IEntityCartProps> = ({
	priority = false,
	className,
	children,
	id,
	name,
	price,
	images
}) => {
	return (
		<article className={cn(className)}>
			<Link href={`/catalog/${id}`} className={styles.slider__imageBlock}>
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
				<div className='flex flex-col gap-1 '>
					<div className=''>{name}</div> 
					<div className=''>{price}</div>
				</div>
				{children}
			</div>
		</article>
	)
}
