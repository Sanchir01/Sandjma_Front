import { ReactNode } from 'react'

export interface ISliderProps {
	spaceBetween?: number
	slidesPerView: number
	loop?: boolean
	children?: ReactNode
	BreakIsExist?: boolean
	centerSlide?: boolean
}

export interface ISize {
	__typename?: 'Size' | undefined
	id: number
	name: string
}
export interface IColors {
	id: number
	imageCss: string
	name: string
}
export interface IOneProduct {
	__typename?: string | undefined

	id: number
	images: string[]
	name: string
	price: number
	slug: string
	productColorId: number
	colors?: IColors[]
	size?: ISize[]
}

export interface IFavoritesGrid {
	__typename?: 'Product' | undefined
	id: number
	images: string[]
	name: string
	price: number
}
export interface IPropsCatalog {
	products: IOneProduct[]
}
export interface ISliderBlockProduct extends IPropsCatalog {
	title: string
	loop?: boolean
}
