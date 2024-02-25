'use client'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import { SliderBlock } from '@/widgets/slider/ui/SliderBlock'

export function NewAndSeller() {
	const {
		data: items,
		isFetching: LoadingNews,
		error
	} = useGetAllProducts({ newProduct: true, page: '1' })
	const { data, isFetching: fetchingFavorites } = useGetAllProducts({
		seller: true,
		page: '1'
	})

	return (
		<>
			{LoadingNews ? (
				<div className=''>Загрузка</div>
			) : (
				<SliderBlock
					products={items?.getAllProducts.products!}
					title='Новинки'
				/>
			)}
			{fetchingFavorites ? (
				<div className=''>загрузка</div>
			) : (
				<SliderBlock
					products={data?.getAllProducts.products!}
					title='Популярное'
				/>
			)}
			<div className=''>sasdasd</div>
		</>
	)
}
