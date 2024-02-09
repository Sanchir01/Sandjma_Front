import styles from '@/shared/styles/NotFound.module.scss'
import { Button } from '@/shared/ui'
import { cn } from '@/shared/utils/utils'
import Link from 'next/link'
export default function Custom404() {
	return (
		<div
			className={cn(styles.notfound_box, 'dark:bg-darkThemeBg dark:text-white')}
		>
			<div className={styles.notfound_box_container}>
				<h1 className={styles.notfound_box_title}>404</h1>
				<span className={styles.notfound_box_description}>
					Извините, но такой страницы не существует
				</span>
				<Button>
					<Link href={'/catalog'} className={styles.notfound_box_link}>
						Назад в каталог
					</Link>
				</Button>
			</div>
		</div>
	)
}
