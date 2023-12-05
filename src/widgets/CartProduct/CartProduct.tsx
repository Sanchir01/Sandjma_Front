import OneCart from '@/entities/OneCart'
import { IItemsSliderProduct } from '@/shared/types/Slider.interface'
import { FC } from 'react'

export interface ICartProduct {
	product: IItemsSliderProduct
	id: number
	images: string[]
}

export const CartProduct: FC<ICartProduct> = ({ product, id, images }) => {
	return <OneCart product={product} id={id} images={images}></OneCart>
}
