import { OneCart } from '@/entities'
import { AddToFavorites } from '@/features'
import { IItemsSliderProduct } from '@/shared/types/Slider.interface'
import { FC } from 'react'

export interface ICartProduct {
	product: IItemsSliderProduct
	id: number
	images: string[]
}

export const CartProduct: FC<ICartProduct> = ({ product, id, images }) => {
	return (
		<OneCart id={id} images={images} price={product.price} name={product.name}>
			<AddToFavorites id={id} />
		</OneCart>
	)
}
