import { OneCart } from '@/entities'
import { AddToFavorites } from '@/features'
import { FC } from 'react'

export interface ICartProduct {
	name: string
	price: number
	id: number
	images: string[]
}

export const CartProduct: FC<ICartProduct> = ({ price, id, images, name }) => {
	return (
		<OneCart id={id} images={images} price={price} name={name}>
			<AddToFavorites id={id} />
		</OneCart>
	)
}
