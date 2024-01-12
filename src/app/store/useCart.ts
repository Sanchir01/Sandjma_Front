import { IColors, ISize } from '@/shared/types/Slider.interface'
import { create } from 'zustand'
import { createJSONStorage, devtools, persist } from 'zustand/middleware'
export interface ICart {
	id: number
	image: string
	name: string
	price: number
	size: ISize
	color: IColors
	quantity: number
}

export interface IUseCartStore {
	cart: ICart[]
	toggleCartItem: (item: ICart) => void
	totalPrice: number
}

const useCartStore = create<IUseCartStore>()(
	devtools(
		persist(
			set => ({
				cart: [] as ICart[],
				totalPrice: 0,
				toggleCartItem: item =>
					set(state => {
						const index = state.cart?.findIndex(
							cartItem =>
								cartItem.id === item.id &&
								cartItem.size.id === item.size.id &&
								cartItem.color.id === item.color.id
						)

						if (index === -1) {
							state.cart?.push(item)
							state.totalPrice += item.price
						} else {
							state.cart?.splice(index, 1)
							state.totalPrice -= item.price
						}

						return { cart: [...state.cart], totalPrice: state.totalPrice }
					}),
				plus: (id: number, size: ISize, color: IColors) =>
					set(state => {
						const index = state.cart.findIndex(
							cartItem =>
								cartItem.id === id &&
								cartItem.size.id === size.id &&
								cartItem.color.id === color.id
						)

						state.cart[index].quantity += 1
						state.totalPrice += state.cart[index].price

						return { cart: [...state.cart], totalPrice: state.totalPrice }
					}),
				minus: (id: number, size: ISize, color: IColors) =>
					set(state => {
						const index = state.cart.findIndex(
							cartItem =>
								cartItem.id === id &&
								cartItem.size.id === size.id &&
								cartItem.color.id === color.id
						)

						state.cart[index].quantity -= 1
						state.totalPrice -= state.cart[index].price

						return { cart: [...state.cart], totalPrice: state.totalPrice }
					}),

				resetCart: () => set({ cart: [], totalPrice: 0 })
			}),
			{
				version: 0,
				name: 'cart',
				storage: createJSONStorage(() => localStorage)
			}
		),
		{
			name: 'cartStore',
			store: 'useCartStore'
		}
	)
)

export default useCartStore
