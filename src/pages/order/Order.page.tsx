import useCartStore from '@/app/store/useCart'
import CartItem from '@/entities/CartItem/CartItem'
import Counter from '@/features/Counter/Counter'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { Meta } from '@/shared/ui'
import { OrderForm } from '@/widgets/OrderForm'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Link from 'next/link'
import { FC } from 'react'

const OrderPage: FC = () => {
	const cart = useStoreZustand(useCartStore, state => state.cart)
	const [parent] = useAutoAnimate({ duration: 500, easing: 'ease-in-out' })
	return (
		<Meta title={'Оформление заказа'}>
			<section className='mt-10'>
				<div className='wrapper '>
					{cart?.length !== 0 ? (
						<div className='flex justify-evenly'>
							<div ref={parent} className='flex flex-col gap-10'>
								{cart?.map(item => (
									<CartItem key={item.id} cartItem={item}>
										<Counter
											id={item.id}
											color={item.color}
											size={item.size}
											quantity={item.quantity}
										/>
									</CartItem>
								))}
							</div>
							<OrderForm />
						</div>
					) : (
						<div className='flex flex-col justify-end items-center gap-5'>
							<div className=''>Корзина Пуста</div>
							<Link href={'./catalog'}>Перейти в каталог</Link>
						</div>
					)}
				</div>
			</section>
		</Meta>
	)
}

export default OrderPage
