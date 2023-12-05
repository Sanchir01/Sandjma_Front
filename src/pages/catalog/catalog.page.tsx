import { Sorting } from '@/features/Sort'
import styles from '@/shared/styles/Catalog.module.scss'
import { CartProduct } from '@/widgets'
import { useSuspenseQuery } from '@apollo/client'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import { FC } from 'react'
export const Catalog: FC = () => {
	const { data } = useSuspenseQuery(GetAllProductsDashboardDocument, {
		variables: { getAllProductInput: { page: '1' } }
	})
	return (
		<section className={styles.catalog}>
			<div className={styles.wrapper}>
				<div className=''>breadcrums</div>
				<div className={styles.catalog__filters}>
					<Sorting />
				</div>
				{data ? (
					<div className={styles.catalog__items}>
						{data.getAllProducts.products.map(item => (
							<CartProduct
								key={item.id}
								product={item}
								id={item.id}
								images={item.images}
							/>
						))}
					</div>
				) : (
					<></>
				)}
			</div>
		</section>
	)
}
