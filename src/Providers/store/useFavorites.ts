import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'
import { ICart } from './useCart'

export interface IFavoritesItem extends Omit<ICart, 'quantity' | 'size'> {}

export interface IFavoritesStore {
	favorites: IFavoritesItem[]
	setFavorites: (favorites: IFavoritesItem) => void
}

export const useFavorites = create<IFavoritesStore>()(
	persist(
		set => ({
			favorites: [] as ICart[],
			setFavorites: item =>
				set(state => {
					const index = state.favorites?.findIndex(
						cartItem =>
							cartItem.id === item.id && cartItem.color.id === item.color.id
					)

					if (index === -1) {
						state.favorites?.push(item)
					} else {
						state.favorites?.splice(index, 1)
					}

					return { favorites: [...state.favorites] }
				})
		}),
		{
			name: 'favorites',
			version: 0,
			storage: createJSONStorage(() => localStorage)
		}
	)
)
