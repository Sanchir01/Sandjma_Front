'use client'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import { SkeletonGrid } from '@/entities/SkeletonGrid/SkeletonGrid'
import { SliderBlock } from '@/entities/SliderBlock/SliderBlock'
import { FC } from 'react'
const SimilarSlider: FC<{ categoryId: string }> = ({ categoryId }) => {
	const { data, isFetching } = useGetAllProducts({ categoryId, page: '1' })
	return isFetching ? (
		<SkeletonGrid className='mt-10 px-5' numberSkeleton={5} />
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
