import { CreateOrderDocument } from 'gql/gql/graphql'
import { OrderItemDto } from '../../../graphql/gql/graphql'
import { myRequest } from './user.service'
export const OrderService = {
	async createOrder({ cartItems }: { cartItems: OrderItemDto[] }) {
		return myRequest.request(CreateOrderDocument, {
			createOrderInput: { items: cartItems }
		})
	}
}
