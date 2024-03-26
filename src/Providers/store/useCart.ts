import { IColors, ISize } from '@/shared/types/Slider.interface'
import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
export interface ICart {
	id: number
	image: string
	name: string
	price: number
	size: ISize
	color: IColors
	slug: string
	quantity: number
	productColorId: number
}

export interface IUseCartStore {
	cart: ICart[]
	toggleCartItem: (item: ICart) => void
	totalPrice: number
	minus: (id: number, size: ISize, color: IColors) => void
	plus: (id: number, size: ISize, color: IColors) => void
	resetCart: () => void
}

const useCartStore = create<IUseCartStore>()(
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
	)
)

export default useCartStore
