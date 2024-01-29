import { myRequest } from '@/shared/service/user.service'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sandjma | Каталог',
	description: 'Супер Магазин Одежды Sandjma'
}

export const getProductData = async () => {
	const { getAllProducts } = await myRequest.request(
		GetAllProductsDashboardDocument,
		{
			getAllProductInput: { page: '1' }
		}
	)
	return getAllProducts?.products
}

export default async function Page() {
	const data = await getProductData()

	return <section>
		
	</section>
}
