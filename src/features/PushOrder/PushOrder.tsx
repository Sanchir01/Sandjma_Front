'use client'
import useCartStore from '@/Providers/store/useCart'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { OrderService } from '@/shared/service/order.service'
import { Button } from '@/shared/ui'
import { useMutation } from '@tanstack/react-query'
import { OrderItemDto } from 'gql/gql/graphql'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
const PushOrder = () => {
	const cartArray = useStoreZustand(useCartStore, state => state.cart)
	const resetCart = useCartStore(state => state.resetCart)
	const { replace } = useRouter()
	const { mutateAsync } = useMutation({
		mutationKey: ['order'],
		mutationFn: ({ cartItems }: { cartItems: OrderItemDto[] }) =>
			OrderService.createOrder({ cartItems })
	})
	const cartItems = cartArray?.map(item => ({
		price: item.price,
		productId: item.id,
		productName: item.name,
		quantity: item.quantity,
		size: item.size.name,
		productColor: item.color.name
	}))
	const pushOrder = async () => {
		if (cartItems) {
			await mutateAsync({ cartItems: cartItems })
				.then(
					() => (
						toast.success('Заказ оформлен'), resetCart(), replace('/thanks')
					)
				)
				.catch(
					er => (toast.error(er.response.errors[0].message), console.log(er))
				)
		}
	}
	return (
		<Button className='w-full' variant={'default'} onClick={pushOrder}>
			Отправить заказ
		</Button>
	)
}

export default PushOrder
