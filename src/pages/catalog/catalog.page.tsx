import { useFilters } from '@/app/store/useFilters'
import { MySelect } from '@/features/Sort'
import { SortingArray } from '@/shared/constants/SortingArray'
import styles from '@/shared/styles/Catalog.module.scss'
import { IPropsCatalog } from '@/shared/types/Slider.interface'
import { Meta } from '@/shared/ui'
import { CartProduct, SkeletonCart } from '@/widgets'
import Filters from '@/widgets/Filters/Filters'
import { useQuery } from '@apollo/client'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'

export const Catalog: FC<IPropsCatalog> = ({ products }) => {
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
	const { data, loading } = useQuery(GetAllProductsDashboardDocument, {
		variables: {
			getAllProductInput: {
				page: '1',
				sort: sorting,
				categoryId: category,
				colorId: Number(color),
				getProductByInsulation: Number(insulation)
			}
		},
		fetchPolicy: 'cache-first'
	})

	return (
		<Meta title={'Catalog'} description='Super magaz'>
			<section className={styles.catalog}>
				<div className='container'>
					<div className='flex items-center mb-10 justify-between'>
						<div className=''>
							<Filters />
						</div>
						<div className={styles.catalog__filters}>
							<MySelect
								content={SortingArray}
								onChange={changeSorting}
								placeholder={'Выберите сортировку'}
							>
								<div className='flex gap-2 items-center'>
									<span>Сортировка </span>
									<span>по:</span>
								</div>
							</MySelect>
						</div>
					</div>
					{loading ? (
						<div className={styles.catalog__items}>
							{[...Array(10)].map((_, i) => (
								<SkeletonCart key={i} />
							))}
						</div>
					) : (
						products && (
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
						)
					)}
				</div>
			</section>
		</Meta>
	)
}
