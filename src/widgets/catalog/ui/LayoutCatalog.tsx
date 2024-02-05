import styles from '@/shared/styles/Catalog.module.scss'
import { FC, ReactNode } from 'react'
export interface ICatalogProps {
	filters?: ReactNode
	sorting?: ReactNode
	grid?: ReactNode
}
export const LayoutCatalog: FC<ICatalogProps> = ({ grid, sorting }) => {
	const a = ''
	return (
		<section className={styles.catalog}>
			<div className='container'>
				<div className=''>
					<div className={styles.catalog__filters}>
						<div className={styles.catalog__sorting}></div>
						{sorting}
					</div>
				</div>
				{grid}
			</div>
		</section>
	)
}
