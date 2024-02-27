'use client'
import useCartStore from '@/Providers/store/useCart'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import styles from '@/shared/styles/Order.module.scss'
import { Button } from '@/shared/ui'
import Link from 'next/link'
import { FC } from 'react'
import Content from './Content'
import { OrderForm } from './OrderForm'
import RecommendedSlider from './RecomendedSlider'
const OrderLayout: FC = () => {
	const cart = useStoreZustand(useCartStore, state => state.cart)
	return (
		<section className={styles.order}>
			<div className='wrapper '>
				{cart !== undefined ? (
					<>
						<div className='flex flex-col justify-end items-center gap-5'>
							<div className=''>Корзина Пуста</div>
							<Link href={'./catalog'}>
								<Button>Перейти в каталог</Button>
							</Link>
						</div>
						<div className=''>
							<RecommendedSlider />
						</div>
					</>
				) : (
					<div className={styles.order__wrapper}>
						<Content />
						<OrderForm />
					</div>
				)}
			</div>
		</section>
	)
}

export default OrderLayout
