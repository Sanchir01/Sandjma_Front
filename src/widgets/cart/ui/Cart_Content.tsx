'use client'
import useCartStore from '@/Providers/store/useCart'
import CartItem from '@/entities/CartItem/CartItem'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FC } from 'react'
const CartContent: FC = () => {
	const cartContetn = useStoreZustand(useCartStore, state => state.cart)

	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 400 })
	if (cartContetn === undefined) {
		return 'Корзина пуста'
	}
	return (
		<div className='px-3' ref={parent}>
			{cartContetn.map(cartItem => (
				<CartItem cartItem={cartItem} key={cartItem.id} />
			))}
		</div>
	)
}

export default CartContent
