import React from 'react'

import { IOneProduct } from '@/shared/types/Slider.interface'

import Actions from './ui/Actions'
import BreadcrumbsOneProduct from './ui/Breadcrumbs'
import Descriptions from './ui/Descriptions'
import ImageGallery from './ui/ImageGallery'
import { LayoutOneProduct } from './ui/LayoutOneProduct'
import NameAndPrice from './ui/NameAndPrice'
import SimilarSlider from './ui/Similar'
export interface IProductPage extends IOneProduct {
	categoryId: string
	description: string
}
export const OneProduct: React.FC<IProductPage> = ({
	id,
	colors,
	name,
	images,
	price,
	productColorId,
	slug,
	size,
	description,
	categoryId
}) => (
	<LayoutOneProduct
		Actions={
			<Actions
				categoryId={categoryId}
				description={description}
				id={id}
				images={images}
				name={name}
				price={price}
				slug={slug}
				productColorId={productColorId}
				colors={colors}
				size={size}
			/>
		}
		Breadcrumbs={<BreadcrumbsOneProduct />}
		Descriptions={<Descriptions description={description} />}
		ImageGallery={<ImageGallery images={images} />}
		SimilarSlider={<SimilarSlider categoryId={categoryId} />}
		NameAndPrice={<NameAndPrice name={name} price={price} />}
	/>
)
