'use client'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import { SliderBlock } from '@/entities/SliderBlock/SliderBlock'
import { FC } from 'react'

const SimilarSlider: FC<{ categoryId: string }> = ({ categoryId }) => {
	const { data, isFetching } = useGetAllProducts({ categoryId, page: '1' })
	return isFetching ? (
		<></>
	) : data?.getAllProducts.length ? (
		<div className='mt-10'>
			<SliderBlock
				loop
				title={'Похожие товары'}
				products={data.getAllProducts.products}
			/>
		</div>
	) : (
		<></>
	)
}

export default SimilarSlider
