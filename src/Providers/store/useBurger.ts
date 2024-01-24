import { create } from 'zustand'

export interface IUseBurger {
	toggleBurger: boolean
	setToggleBurger: () => void
}

export const useBurger = create<IUseBurger>((set, get) => ({
	toggleBurger: false,
	setToggleBurger: () => {
		const { toggleBurger } = get()
		toggleBurger
			? (document.body.style.overflow = '')
			: (document.body.style.overflow = 'hidden'),
			set({ toggleBurger: !toggleBurger })
	},
}))
