import { Catalog } from '@/page/catalog'
import { productService } from '@/shared/service/products.service'
import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'
import { GetStaticProps, NextPage } from 'next'

export const getStaticProps = (async () => {
	const data = await productService.getAllProducts({
		page: '1',
		sort: 'hight-price'
	})

	return {
		props: { products: data },
		revalidate: 60
	}
}) satisfies GetStaticProps

const CatalogPage: NextPage<{
	products: GetAllProductsDashboardQuery
}> = ({ products }) => {
	return <Catalog products={products} />
}

export default CatalogPage
