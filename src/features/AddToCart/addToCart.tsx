'use client'
import useCartStore, { ICart } from '@/Providers/store/useCart'
import { Button } from '@/shared/ui'

const AddToCart = ({
	cart,
	text
}: {
	cart: Omit<ICart, 'quantity'>
	text: string
}) => {
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
			{text}
		</Button>
	)
}

export default AddToCart
