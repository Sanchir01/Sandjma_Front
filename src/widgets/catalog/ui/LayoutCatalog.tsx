import styles from '@/shared/styles/Catalog.module.scss'
import { FC, ReactNode } from 'react'
export interface ICatalogProps {
	filters?: ReactNode
	sorting?: ReactNode
	grid?: ReactNode
}
export const LayoutCatalog: FC<ICatalogProps> = ({
	grid,
	sorting,
	filters
}) => {
	const a = ''
	return (
		<section className={styles.catalog}>
			<div className='container'>
				<div className={styles.catalog__filters}>
					{filters}
					<div className='max-[998px]:hidden'>{sorting}</div>
				</div>

				{grid}
			</div>
		</section>
	)
}
