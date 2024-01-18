import { useFilters } from '@/app/store/useFilters'
import { MySelect } from '@/features/Sort'
import { useGetAllProductsQuery } from '@/shared/api/react-query.hooks'
import { SortingArray } from '@/shared/constants/SortingArray'
import styles from '@/shared/styles/Catalog.module.scss'
import { IOneProduct } from '@/shared/types/Slider.interface'
import { Meta } from '@/shared/ui'
import CatalogGrid from '@/widgets/CatalogGrid/Catalog'
import { Filters } from '@/widgets/Filters'
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
					<CatalogGrid
						data={data?.getAllProducts.products as unknown as IOneProduct[]}
						isFetching={isFetching}
					/>
				</div>
			</section>
		</Meta>
	)
}
