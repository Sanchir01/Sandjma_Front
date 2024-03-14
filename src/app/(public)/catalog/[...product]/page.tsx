import { productService } from '@/shared/service/products.service'
import { OneProduct } from '@/widgets/oneproduct/OneProduct'
import { redirect } from 'next/navigation'
export async function generateStaticParams() {
	const data = await productService.getAllProducts({ page: '1' })

	return data.getAllProducts.products.map(item => ({
		product: [item.slug, item.productColorId.toString()]
	}))
}
// export async function generateMetadata({
// 	params
// }: {
// 	params: { product: string[] }
// }): Promise<Metadata> {
// 	const { product } = params

// 	const { getProductByColor } = await productService.getOneProduct({
// 		slug: decodeURIComponent(product[0]),
// 		colorId: Number(product[1])
// 	})
// 	return {
// 		title: getProductByColor[0].name,
// 		description: getProductByColor[0].name,
// 		openGraph: {
// 			siteName: 'Sandjma',
// 			images: getProductByColor[0].images,
// 			type: 'website',
// 			locale: 'ru_Ru'
// 		},
// 		applicationName: 'Sandjma',
// 		authors: [{ name: 'sanchir' }],
// 		robots: {
// 			follow: true
// 		},
// 		generator: 'Sadjma',
// 		keywords: `Sadjma, sadjma, одежда, калмыцкая одежда, купить одежду, купить калмыцкую одежду, Санджирма, Национальная одежда Элисты, Элиста,
// 		 Калмыки, Калмыкия, Красивая одежда в Элисте, Магазины одежды в Элисте`,
// 		other: {
// 			'og:image': 'https://i.ibb.co/7JXBQPX/bg.jpg',
// 			'og:image:secure_url': 'https://i.ibb.co/7JXBQPX/bg.jpg',
// 			'og:image:type': 'image/jpg',
// 			'og:image:width': '1200',
// 			'og:image:height': '630',
// 			'og:url': 'https://frontsandjma.vercel.app/'
// 		},
// 		creator: 'Sanchir team',
// 		icons: { icon: '../favicon.ico' },
// 		category: 'cloth'
// 	}
// }

export default async function OneProductPage({
	params
}: {
	params: { product: string[] }
}) {
	const { product } = params

	const { getProductByColor } = await productService.getOneProduct({
		slug: decodeURIComponent(product[0]),
		colorId: Number(product[1])
	})

	return getProductByColor
		? getProductByColor.map(item => (
				<OneProduct
					key={item.id}
					categoryId={item.categoryId.toString()}
					description={item.description}
					id={item.id}
					images={item.images}
					name={item.name}
					price={item.price}
					slug={item.slug}
					productColorId={item.productColorId}
					size={item.size}
					colors={item.colors}
				/>
			))
		: redirect('/not-found')
}
