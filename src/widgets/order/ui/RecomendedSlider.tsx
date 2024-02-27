'use client'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import { SliderBlock } from '@/widgets/slider/ui/SliderBlock'
import { FC } from 'react'

const RecommendedSlider: FC = () => {
	const { data, isLoading } = useGetAllProducts({ page: '1', seller: true })
	return isLoading ? (
		<></>
	) : (
		data && (
			<SliderBlock
				title={'Рекомендуемые'}
				products={data?.getAllProducts.products}
			/>
		)
	)
}

export default RecommendedSlider
