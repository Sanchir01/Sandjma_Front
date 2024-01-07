import { useFilters } from '@/app/store/useFilters'
import { MySelect } from '@/features/Sort'
import { useGetAllProductsQuery } from '@/shared/api/react-query.hooks'
import { SortingArray } from '@/shared/constants/SortingArray'
import styles from '@/shared/styles/Catalog.module.scss'
import { Meta } from '@/shared/ui'
import { CartProduct, SkeletonCart } from '@/widgets'
import { Filters } from '@/widgets/Filters'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'

export const Catalog: FC<{ products: GetAllProductsDashboardQuery }> = ({
	products
}) => {
	const [sorting, changeSorting, category, color, insulation] = useFilters(
		useShallow(state => [
			state.sorting,
			state.changeSorting,
			state.category,
			state.color,
			state.insulation
		])
	)
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })

	const { data, isFetching } = useGetAllProductsQuery({
		colorId: Number(color),
		sort: sorting,
		page: '1',
		categoryId: category,
		getProductByInsulation: Number(insulation),
		initialData: products,
		enabled: !!products
	})

	return (
		<Meta title={'Catalog'} description='Super magaz'>
			<section className={styles.catalog}>
				<div className='container'>
					<div className={styles.catalog__filters}>
						<Filters />
						<div className={styles.catalog__sorting}>
							<MySelect
								defaultValue={'hight-price'}
								content={SortingArray}
								onChange={changeSorting}
								placeholder={'Выберите сортировку'}
							>
								<div className={styles.catalog__filters__title}>
									<span>Сортировка </span>
									<span>по:</span>
								</div>
							</MySelect>
						</div>
					</div>
					{isFetching ? (
						<div className={styles.catalog__items}>
							{[...Array(10)].map((_, i) => (
								<SkeletonCart key={i} />
							))}
						</div>
					) : (
						data && (
							<div ref={parent} className={styles.catalog__items}>
								{data.getAllProducts.products.map(item => (
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
				</div>
			</section>
		</Meta>
	)
}
