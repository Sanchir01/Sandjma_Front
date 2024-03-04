'use client'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import { SliderBlock } from '@/entities/SliderBlock/SliderBlock'
import { FC } from 'react'

const SellerSlider: FC = () => {
	const { data, isFetching } = useGetAllProducts({ page: '1', seller: true })
	return isFetching ? (
		<>Loading</>
	) : (
		data && (
			<SliderBlock
				title={'хиты'}
				products={data?.getAllProducts.products}
			/>
		)
	)
}

export default SellerSlider
