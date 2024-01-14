import styles from '@/shared/styles/Catalog.module.scss'
import { IOneProduct } from '@/shared/types/Slider.interface'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FC } from 'react'
import { CartProduct, SkeletonCart } from '..'

export interface ICatalogGrid {
	data: IOneProduct[]
	isFetching: boolean
}
const CatalogGrid: FC<ICatalogGrid> = ({ data, isFetching }) => {
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })
	return (
		<>
			{isFetching ? (
				<div className={styles.catalog__items}>
					{[...Array(10)].map((_, i) => (
						<SkeletonCart key={i} />
					))}
				</div>
			) : (
				data && (
					<div ref={parent} className={styles.catalog__items}>
						{data.map(item => (
							<CartProduct
								colorId={item.productColorId}
								slug={item.slug}
								key={item.id}
								id={item.id}
								images={item.images}
								name={item.name}
								price={item.price}
							/>
						))}
					</div>
				)
			)}
		</>
	)
}

export default CatalogGrid
