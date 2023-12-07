import { ReactNode } from 'react'

export interface ISliderProps {
	spaceBetween?: number
	slidesPerView: number
	loop?: boolean
	children?: ReactNode
}

export interface ISize {
	__typename?: 'Size' | undefined
	id: number
	name: string
}
export interface IItemsSliderProduct {
	__typename?: string | undefined
	id: number
	images: string[]
	name: string
	price: number
	size: ISize[]
}
export interface ISliderBlockProduct {
	title: string
	loop?: boolean
	product: IItemsSliderProduct[]
}
