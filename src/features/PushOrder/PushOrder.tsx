'use client'
import useCartStore from '@/Providers/store/useCart'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { Button } from '@/shared/ui'
import { ApolloClient, InMemoryCache, useMutation } from '@apollo/client'
import { CreateOrderDocument } from 'gql/gql/graphql'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'
const client = new ApolloClient({
	uri:
		process.env.NODE_ENV === 'production'
			? (process.env.SERVER_GRAPHQL as string)
			: 'http://localhost:5000/graphql',
	credentials: 'include',
	cache: new InMemoryCache()
})
const PushOrder = () => {
	const cartArray = useStoreZustand(useCartStore, state => state.cart)
	const resetCart = useCartStore(state => state.resetCart)
	const { replace } = useRouter()
	// const { mutateAsync } = useMutation({
	// 	mutationKey: ['order'],
	// 	mutationFn: ({ cartItems }: { cartItems: OrderItemDto[] }) =>
	// 		OrderService.createOrder({ cartItems })
	// })
	const [mutateAsync, { data }] = useMutation(CreateOrderDocument, {
		client: client
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
			await mutateAsync({
				variables: { createOrderInput: { items: cartItems } }
			})
				.then(
					() => (
						toast.success('Заказ оформлен'),
						resetCart(),
						replace('/thanks'),
						console.log(data)
					)
				)
				.catch(
					er => (toast.error(er.response.errors[0].message), console.log(er))
				)
		}
	}
	return (
		<Button variant={'default'} onClick={pushOrder}>
			Отправить заказ
		</Button>
	)
}

export default PushOrder
