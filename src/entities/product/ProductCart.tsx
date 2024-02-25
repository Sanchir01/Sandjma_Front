import st from '@/shared/styles/Catalog.module.scss'
import styles from '@/shared/styles/Slider.module.scss'
import { IEntityCartProps } from '@/shared/types/OneCart.interface'
import { IColors } from '@/shared/types/Slider.interface'
import { cn } from '@/shared/utils/utils'
import ImagesGallery from '@/widgets/catalog/ui/ImagesGallery'
import Link from 'next/link'
import { FC } from 'react'
import CircleColor from './ui/CircleColor'
export interface IOneCartProps extends IEntityCartProps {
	colors: IColors[]
	productColorId: number
}

export const OneCart: FC<IOneCartProps> = ({
	priority = false,
	children,
	name,
	price,
	images,
	colorId,
	slug,
	className,
	colors,
	productColorId
}) => {
	console.log()

	return (
		<article className={cn(st.catalog__items__article, className)}>
			<Link
				href={`/catalog/${slug}/${String(colorId)}`}
				className={styles.slider__imageBlock}
			>
				<ImagesGallery images={images} />
			</Link>
			<div className='flex justify-between mt-3 mr-3'>
				<div className='flex flex-col gap-1'>
					<div className={st.catalog__items__article__name}>{name}</div>
					<div className={st.catalog__items__article__price}>{price}</div>
					<CircleColor imageCss={colors[productColorId - 1]?.imageCss} />
				</div>
				{children}
			</div>
		</article>
	)
}
