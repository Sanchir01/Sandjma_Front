import styles from '@/shared/styles/Catalog.module.scss'
import { FC, ReactNode } from 'react'
export interface ICatalogProps {
	filters?: ReactNode
	sorting?: ReactNode
	grid?: ReactNode
	pagination?: ReactNode
}
export const LayoutCatalog: FC<ICatalogProps> = ({
	grid,
	sorting,
	filters,
	pagination
}) => (
	<section className={styles.catalog}>
		<div className='container'>
			<div className={styles.catalog__filters}>
				{filters}
				<div className='max-[998px]:hidden'>{sorting}</div>
			</div>

			{grid}
			{pagination}
		</div>
	</section>
)
