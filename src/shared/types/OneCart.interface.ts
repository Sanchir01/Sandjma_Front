import { ReactNode } from 'react'
import { IItemsSliderProduct } from './Slider.interface'

export interface IEntityCartProps {
	priority?: boolean
	className?: string
	product: IItemsSliderProduct
	id: number
	images: string[]
	children?: ReactNode
}
