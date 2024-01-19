import styles from '@/shared/styles/NotFound.module.scss'
import { Meta } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'

export const NotFound: FC = () => {
  return <Meta title='404'>
			<div className={styles.notfound_box}>
				<div className={styles.notfound_box_container}>
					<h1 className={styles.notfound_box_title}>
						<>404</>
					</h1>
					<span className={styles.notfound_box_description}>
						Извините, но такой страницы не существует
					</span>

					<Link href={'/catalog'} className={styles.notfound_box_link}>
						Назад в каталог
					</Link>
				</div>
			</div>
		</Meta>
}

