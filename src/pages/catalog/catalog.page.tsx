import { Sorting } from '@/features/Sort'
import styles from '@/shared/styles/Catalog.module.scss'
import { CartProduct } from '@/widgets'
import { useSuspenseQuery } from '@apollo/client'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import { IPropsCatalog } from 'pages/catalog'
import { FC } from 'react'

export const Catalog: FC<IPropsCatalog> = ({ products }) => {
	const { data } = useSuspenseQuery(GetAllProductsDashboardDocument, {
        variables: { getAllProductInput: { page: '1' } },
        
	})

	console.log(products)
	return (
		<section className={styles.catalog}>
			<div className={styles.wrapper}>
				<div className=''>breadcrumb</div>
				<div className={styles.catalog__filters}>
					<Sorting />
				</div>
				{products ? (
					<div className={styles.catalog__items}>
						{products.map(item => (
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
	)
}
