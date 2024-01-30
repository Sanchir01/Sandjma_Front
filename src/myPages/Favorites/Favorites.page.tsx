import { useGetAllFavorites } from '@/shared/api/react-query.hooks'
import styles from '@/shared/styles/Catalog.module.scss'
import { IOneProduct } from '@/shared/types/Slider.interface'
import CatalogGrid from '@/widgets/CatalogGrid/Catalog'
import { FC } from 'react'
export const FavoritesPageComponents: FC = () => {
	const { data, isFetching } = useGetAllFavorites()

	console.log(data, 'asdsaasd')
	return (
		<section className={styles.catalog}>
			<div className='container'>
				<CatalogGrid data={data as IOneProduct[]} isFetching={isFetching} />
			</div>
		</section>
	)
}
