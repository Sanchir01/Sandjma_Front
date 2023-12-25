import { Catalog } from '@/pages/catalog'
import { client } from '@/shared/api/apollo-client'
import { IPropsCatalog } from '@/shared/types/Slider.interface'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import { GetStaticProps, NextPage } from 'next'

export const getStaticProps = (async () => {
	const { data } = await client.query({
		query: GetAllProductsDashboardDocument,
		variables: { getAllProductInput: { page: '1', sort: 'hight-price' } },
		fetchPolicy: 'cache-first',
		context: {
			fetchOptions: {
				next: { revalidate: 600 }
			}
		}
	})

	return {
		props: { products: data?.getAllProducts.products },
		revalidate: 60
	}
}) satisfies GetStaticProps

const HomePage: NextPage<IPropsCatalog> = ({ products }) => {
	return <Catalog products={products} />
}

export default HomePage
