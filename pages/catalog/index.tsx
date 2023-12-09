import { Catalog } from '@/pages/catalog'
import { client } from '@/shared/api/apollo-client'
import { IItemsSliderProduct } from '@/shared/types/Slider.interface'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import { GetStaticProps, NextPage } from 'next'
export interface IPropsCatalog {
	products: IItemsSliderProduct[]
}
export const getStaticProps = (async () => {
	const { data } = await client.query({
		query: GetAllProductsDashboardDocument,
		variables: { getAllProductInput: { page: '1' } }
	})

	return {
		props: { products: data.getAllProducts.products },
		revalidate: 5
	}
}) satisfies GetStaticProps<IPropsCatalog>

const HomePage: NextPage<IPropsCatalog> = ({ products }) => {
	console.log(products, 'proдукты')
	return <Catalog products={products} />
}

export default HomePage
