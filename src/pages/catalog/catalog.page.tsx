import { Sorting } from '@/features/Sort'
import styles from '@/shared/styles/Catalog.module.scss'
import { IItemsSliderProduct } from '@/shared/types/Slider.interface'
import { Meta } from '@/shared/ui'
import { CartProduct } from '@/widgets'
import { useQuery } from '@apollo/client'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import { FC } from 'react'

export interface IPropsCatalog {
	products: IItemsSliderProduct[]
}

export const Catalog: FC<IPropsCatalog> = ({ products }) => {
	const { data } = useQuery(GetAllProductsDashboardDocument, {
		variables: { getAllProductInput: { page: '1' } },
		fetchPolicy: 'cache-first'
	})

	return (
		<Meta title={'Catalog'} description='Super magaz'>
			<section className={styles.catalog}>
				<div className={styles.wrapper}>
					<div className=''>breadcrumb</div>
					<div className={styles.catalog__filters}>
						<Sorting />
					</div>
					{products.length && data ? (
						<div className={styles.catalog__items}>
							{data.getAllProducts.products.map(item => (
								<CartProduct
									key={item.id}
									id={item.id}
									images={item.images}
									name={item.name}
									price={item.price}
								/>
							))}
						</div>
					) : (
						<></>
					)}
				</div>
			</section>
		</Meta>
	)
}
