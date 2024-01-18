import useCartStore from '@/app/store/useCart'
import PushOrder from '@/features/PushOrder/PushOrder'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import styles from '@/shared/styles/Order.module.scss'
import { allItems } from '@/shared/utils'
import cn from 'clsx'
import { FC } from 'react'
export const OrderForm: FC = () => {
	const cart = useStoreZustand(useCartStore, state => state.cart)
	const totalPrice = useStoreZustand(useCartStore, state => state.totalPrice)

	const allQuantity = allItems(cart ? cart : [])

	return (
		<div
			className={cn(
				styles.order__form,
				'border rounded-lg shadow p-4 h-[400px] min-w-[500px]'
			)}
		>
			<h2 className='text-2xl font-semibold'>Ваш заказ</h2>
			<div className='flex flex-col items-center gap-2 w-full mt-10 border-b-2 pb-10'>
				{cart?.map((item, i) => (
					<div className='flex justify-between w-full' key={i}>
						<div className='flex gap-2'>
							<span>x{item.quantity}</span>
							<p>{item.name}</p>
						</div>
						<div className=''>{item.price}P</div>
					</div>
				))}
			</div>
			<div className='mt-10 flex flex-col gap-3'>
				<div className=' flex flex-col justify-between items-center'>
					<div className='flex gap-2'>
						<p>Всего товаров</p>
						<span>{allQuantity}</span>
					</div>
					<div className='flex gap-2 '>
						<p>Итоговая сумма:</p>
						<span>{totalPrice}</span>
					</div>
				</div>
				<PushOrder />
			</div>
		</div>
	)
}
