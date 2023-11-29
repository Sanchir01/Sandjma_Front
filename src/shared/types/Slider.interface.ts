import { ReactNode } from 'react'

export interface ISliderProps {
	className: string

	spaceBetween?: number
	slidesPerView: number
	loop: boolean
	priority?: boolean
	children?: ReactNode
	products: IItemsSliderProduct[]
}
export interface IItemsSliderProduct {
	__typename?: string | undefined
	id: number
	images: string[]
	name: string
	price: number
}
export interface ISliderBlockProduct {
	product: IItemsSliderProduct[]
}
