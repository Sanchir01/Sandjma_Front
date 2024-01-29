import { myRequest } from '@/shared/service/user.service'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import type { Metadata } from 'next'
export const revalidate = 3600

export const metadata: Metadata = {
	title: 'Sandjma | Каталог',
	description: 'Супер Магазин Одежды Sandjma'
}

const getProductsData = async () => {
	const data = await myRequest
		.request(GetAllProductsDashboardDocument, {
			getAllProductInput: { page: '1' }
		})
		.then(res => res.getAllProducts.products)

	return data ?? []
}

export default async function Page() {
	const data = await getProductsData()

	return (
		<section>
			{data.map(item => (
				<div className='' key={item.id}>
					{item.id}
				</div>
			))}
			aasdaawdaaqsa
		</section>
	)
}
