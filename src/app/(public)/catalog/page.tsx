import { myRequest } from '@/shared/service/user.service'
import Catalog from '@/widgets/catalog/Catalog'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import type { Metadata } from 'next'
export const revalidate = 3600

export const metadata: Metadata = {
	title: 'Sandjma | Каталог',
	description: 'Супер Магазин Одежды Sandjma'
}

const getProductsData = async () => {
	const data = await myRequest.request(GetAllProductsDashboardDocument, {
		getAllProductInput: { page: '1' }
	})

	return data ?? []
}

export default async function Page() {
	const data = await getProductsData()

	return <Catalog initialData={data} />
}
