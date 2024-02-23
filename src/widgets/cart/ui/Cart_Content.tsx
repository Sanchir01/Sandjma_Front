'use client'
import useCartStore from '@/Providers/store/useCart'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { FC } from 'react'

const CartContent: FC = () => {
	const cartContetn = useStoreZustand(useCartStore, state => state.cart)
	if (cartContetn === undefined) {
		return 'Корзина пуста'
	}
	return cartContetn.map(item => (
		<div className='' key={item.id}>
			{item.name}
		</div>
	))
}

export default CartContent
