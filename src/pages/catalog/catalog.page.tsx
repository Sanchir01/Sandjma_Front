import { Sorting } from '@/features'
import styles from '@/shared/styles/Catalog.module.scss'
import { FC } from 'react'
export const Catalog: FC = () => {
	return (
		<section className={styles.catalog}>
			<div className={styles.wrapper}>
				.
				<div className={styles.catalog__filters}>
					<Sorting />
				</div>
				<div className={styles.catalog__items}></div>
			</div>
		</section>
	)
}
