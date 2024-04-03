import { myRequest } from '@/shared/service/user.service'
import Catalog from '@/widgets/catalog/Catalog'
import { GetAllProductsDashboardDocument } from 'gql/gql/graphql'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
	title: 'Sandjma | Главная',
	description: 'Super Magazin Sandjma',
	openGraph: {
		siteName: 'Sandjma'
	},
	applicationName: 'Sandjma',
	authors: [{ name: 'sanchir' }],
	robots: {
		index: true,
		follow: true
	},
	generator: 'Sandjma',
	keywords: `Sandjma, Sandjma, одежда, калмыцкая одежда, купить одежду, купить калмыцкую одежду, Санджирма, Национальная одежда Элисты, Элиста,
		 Калмыки, Калмыкия, Красивая одежда в Элисте, Магазины одежды в Элисте`,
	other: {
		'og:image': 'https://i.ibb.co/7JXBQPX/bg.jpg',
		'og:image:secure_url': 'https://i.ibb.co/7JXBQPX/bg.jpg',
		'og:image:type': 'image/jpg',
		'og:image:width': '800',
		'og:image:height': '630',
		'og:url': 'https://sandjma.ru'
	},
	icons: { icon: '../../favicon.ico' },
	creator: 'Sanchir team'
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
