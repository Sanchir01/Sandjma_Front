import { OneCart } from '@/entities'
import { AddToFavorites } from '@/features'
import { FC } from 'react'

export interface ICartProduct {
	name: string
	price: number
	id: number
	images: string[]
	slug: string
	colorId: number
}

export const CartProduct: FC<ICartProduct> = ({
	price,
	id,
	images,
	name,
	slug,
	colorId
}) => {
	return (
		<OneCart
			colorId={colorId}
			slug={slug}
			images={images}
			price={price}
			name={name}
		>
			<AddToFavorites id={id} />
		</OneCart>
	)
}
