import styles from '@/shared/styles/OneProduct.module.scss'
import { FC } from 'react'
const NameAndPrice: FC<{ name: string; price: number }> = ({ name, price }) => (
	<>
		<div className={styles.oneProduct__title}>{name}</div>
		<div className={styles.oneProduct__price}>{price} ₽</div>
	</>
)

export default NameAndPrice
