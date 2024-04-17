'use client'
import { useFavorites } from '@/Providers/store/useFavorites'
import { SkeletonGrid } from '@/entities/SkeletonGrid/SkeletonGrid'
import { OneCart } from '@/entities/product/ProductCart'
import { AddToFavorites } from '@/features/AddTofavorites/AddTofavorites'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import styles from '@/shared/styles/Catalog.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
export const GridFavorites = () => {
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })
	const data = useStoreZustand(useFavorites, state => state.favorites)

	return (
		<>
			{data === undefined ? (
				<SkeletonGrid numberSkeleton={10} />
			) : data.length !== 0 ? (
				<div ref={parent} className={styles.catalog__items}>
					{data.map(item => (
						<OneCart
							focusImage={false}
							key={item.id}
							images={[item.image]}
							price={item.price}
							name={item.name}
							slug={item.slug}
							colorId={item.productColorId}
							colors={[item.color]}
							productColorId={item.productColorId}
						>
							<AddToFavorites
								id={item.id}
								colors={[item.color]}
								images={[item.image]}
								name={item.name}
								price={item.price}
								slug={item.slug}
								productColorId={item.productColorId}
							/>
						</OneCart>
					))}
				</div>
			) : (
				<div className='flex  justify-center items-center'>
					<span className='text-xl'> Ваш список избранного пуст</span>
				</div>
			)}
		</>
	)
}
