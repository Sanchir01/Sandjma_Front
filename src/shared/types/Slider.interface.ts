import { ReactNode } from 'react'

export interface ISliderProps {
	spaceBetween?: number
	slidesPerView: number
	loop?: boolean

	children?: ReactNode
}
export interface IItemsSliderProduct {
	__typename?: string | undefined
	id: number
	images: string[]
	name: string
	price: number
}
export interface ISliderBlockProduct {
	title: string
	loop?: boolean
	product: IItemsSliderProduct[]
}
