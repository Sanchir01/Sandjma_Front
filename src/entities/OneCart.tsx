import styles from '@/shared/styles/Slider.module.scss'
import { IEntityCartProps } from '@/shared/types/OneCart.interface'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const OneCart: FC<IEntityCartProps> = ({
	priority = false,
	className,
	children,
	product
}) => {
	return (
		<article className={cn(className)}>
			<Link
				href={`/catalog/${product.id}`}
				className={styles.slider__imageBlock}
			>
				<Image
					className={styles.slider__imageBlock__image}
					src={product.images[0]}
					alt={product.images[0]}
					width={400}
					height={400}
					priority={priority}
				/>
			</Link>
			<div className='flex justify-between mt-3'>
				<div className='flex flex-col gap-1'>
					<div className=''>{product.name}</div>
					<div className=''>{product.price}</div>
				</div>
				{children}
			</div>
		</article>
	)
}

export default OneCart
