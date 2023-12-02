import { SliderBlock } from '@/widgets/Slider'
import { useQuery } from '@apollo/client'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'

export function HomePage() {
	const { data: items } = useQuery(GetAllProductsDashboardDocument, {
		variables: { getAllProductInput: { page: '1', newProduct: true } }
	})

	return (
		<>{items && <SliderBlock product={items?.getAllProducts.products!} />}</>
	)
}
