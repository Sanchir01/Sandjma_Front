'use client'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import { SliderBlock } from '@/entities/SliderBlock/SliderBlock'
import { FC } from 'react'

const NewSlider: FC = () => {
	const { data, isFetching } = useGetAllProducts({
		page: '1',
		newProduct: true
	})
	return isFetching ? (
		<>Loading</>
	) : (
		data && (
			<SliderBlock title={'Новинки'} products={data?.getAllProducts.products} />
		)
	)
}

export default NewSlider
