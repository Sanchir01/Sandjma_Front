'use client'
import { HeroSlide } from '@/shared/HeroSlider/HeroSlider'
import { SliderBlock } from '@/shared/SliderBlock/SliderBlock'
import { productService } from '@/shared/service/products.service'
import { useQuery } from '@tanstack/react-query'

export function HomePage() {
	const { data: items, isFetching: LoadingNews } = useQuery({
		queryKey: ['news'],
		queryFn: () => productService.getAllProducts({ newProduct: true })
	})
	const { data, isFetching: fetchingFavorites } = useQuery({
		queryKey: ['favorites'],
		queryFn: () => productService.getAllProducts({ seller: true })
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
			<div className=''></div>
		</>
	)
}
