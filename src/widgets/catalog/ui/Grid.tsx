'use client'
import { useFilters } from '@/Providers/store/useFilters'
import { OneCart } from '@/entities/product/ProductCart'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import { SkeletonCart } from '@/entities/product/ui/Skeleton'
import { AddToFavorites } from '@/features/AddTofavorites/AddTofavorites'
import styles from '@/shared/styles/Catalog.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'
const GridCatalog = ({
	initialData
}: {
	initialData: GetAllProductsDashboardQuery
}) => {
	const sorting = useFilters(state => state.sorting)
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })
	const { data, isFetching, isPending } = useGetAllProducts({
		page: '1',
		initialData,
		sort: sorting
	})

	return (
		<>
			{isFetching ? (
				<div className={styles.catalog__items}>
					{[...Array(10)].map((_, i) => (
						<SkeletonCart key={i} />
					))}
				</div>
			) : data ? (
				<div ref={parent} className={styles.catalog__items}>
					{data.getAllProducts.products.map(item => (
						<OneCart
							key={item.id}
							images={item.images}
							price={item.price}
							name={item.name}
							slug={item.slug}
							colorId={item.productColorId}
						>
							<AddToFavorites id={item.id} />
						</OneCart>
					))}
				</div>
			) : (
				'Список товаров пуст'
			)}
		</>
	)
}

export default GridCatalog
