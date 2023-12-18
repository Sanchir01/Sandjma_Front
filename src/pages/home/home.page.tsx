import { HeroSlider } from '@/widgets/HeroSlider'
import { SliderBlock } from '@/widgets/Slider'
import { useQuery } from '@apollo/client'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'

export function HomePage() {
	const { data: items, loading: LoadingNews } = useQuery(
		GetAllProductsDashboardDocument,
		{
			variables: { getAllProductInput: { newProduct: true } }
		}
	)
	const { data, loading } = useQuery(GetAllProductsDashboardDocument, {
		variables: { getAllProductInput: { seller: true } }
	})
	return (
		<>
			<HeroSlider />
			{LoadingNews ? (
				<div className=''>Загрузка</div>
			) : (
				<SliderBlock
					products={items?.getAllProducts.products!}
					title='Новинки'
				/>
			)}
			{loading ? (
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
