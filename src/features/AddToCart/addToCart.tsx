'use client'
import useCartStore, { ICart } from '@/Providers/store/useCart'
import { Button } from '@/shared/ui'

const AddToCart = ({ cart }: { cart: Omit<ICart, 'quantity'> }) => {
	const toggleCart = useCartStore(state => state.toggleCartItem)
	return (
		<Button
			onClick={() =>
				toggleCart({
					id: cart.id,
					image: cart.image,
					name: cart.name,
					price: cart.price,
					size: cart.size,
					color: cart.color,
					slug: cart.slug,
					quantity: 1,
					productColorId: cart.productColorId
				})
			}
		>
			Добавить в корзину )))
		</Button>
	)
}

export default AddToCart
