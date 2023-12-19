import { useFilters } from '@/app/store/useFilters'
import { Sorting } from '@/features/Sort'
import styles from '@/shared/styles/Catalog.module.scss'
import { IPropsCatalog } from '@/shared/types/Slider.interface'
import { Meta } from '@/shared/ui'
import { CartProduct, SkeletonCart } from '@/widgets'
import Filters from '@/widgets/Filters/Filters'
import { useQuery } from '@apollo/client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import { FC } from 'react'

export const Catalog: FC<IPropsCatalog> = ({ products }) => {
	const sorting = useFilters(state => state.sorting)
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })
	const { data, loading, error } = useQuery(GetAllProductsDashboardDocument, {
		variables: { getAllProductInput: { page: '1', sort: sorting } },
		fetchPolicy: 'cache-first'
	})
	console.log(products)
	return (
		<Meta title={'Catalog'} description='Super magaz'>
			<section className={styles.catalog}>
				<div className='container'>
					<div className='flex items-center mb-10 justify-between'>
						<div className=''>
							<Filters />
						</div>
						<div className={styles.catalog__filters}>
							<Sorting />
						</div>
					</div>
					{loading ? (
						<div className={styles.catalog__items}>
							{[...Array(10)].map((_, i) => (
								<SkeletonCart key={i} />
							))}
						</div>
					) : (
						<div ref={parent} className={styles.catalog__items}>
							{data?.getAllProducts.products.map(item => (
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
					)}
				</div>
			</section>
		</Meta>
	)
}
