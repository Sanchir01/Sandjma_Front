'use client'
import { useFilters } from '@/Providers/store/useFilters'
import { OneCart } from '@/entities/product/ProductCart'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import { SkeletonCart } from '@/entities/product/ui/Skeleton'
import { AddToFavorites } from '@/features/AddTofavorites/AddTofavorites'
import styles from '@/shared/styles/Catalog.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'
import { useShallow } from 'zustand/react/shallow'
const GridCatalog = ({
	initialData
}: {
	initialData: GetAllProductsDashboardQuery
}) => {
	const [sorting, category, color, pagination] = useFilters(
		useShallow(state => [
			state.sorting,
			state.category,
			state.color,
			state.pagination
		])
	)
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })

	const { data, isFetching } = useGetAllProducts({
		page: pagination,
		initialData,
		sort: sorting,
		categoryId: category,
		colorId: +color
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
							focusImage
							key={item.id}
							images={item.images}
							price={item.price}
							name={item.name}
							slug={item.slug}
							colorId={item.productColorId}
							colors={item.colors}
							productColorId={item.productColorId}
						>
							<AddToFavorites
								id={item.id}
								colors={item.colors}
								images={item.images}
								name={item.name}
								price={item.price}
								slug={item.slug}
								productColorId={item.productColorId}
							/>
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
