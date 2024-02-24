import AddToCart from '@/features/AddToCart/addToCart'
import { productService } from '@/shared/service/products.service'
import Image from 'next/image'
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

export default async function Page({
	params
}: {
	params: { product: string[] }
}) {
	const { product } = params

	const data = await productService.getOneProduct({
		slug: decodeURIComponent(product[0]),
		colorId: Number(product[1])
	})
	console.log(data.getProductByColor)
	return (
		<div>
			{data.getProductByColor.map(item => (
				<div key={item.id}>
					<div className=''>{item.name}</div>
					<Image alt='' width={400} height={400} src={item.images[0]} />
					<AddToCart
						cart={{
							color: item.colors[0],
							size: item.size[0],
							id: item.id,
							image: item.images[0],
							name: item.name,
							price: item.price,
							slug: item.slug,
							productColorId: item.productColorId
						}}
					/>
				</div>
			))}
		</div>
	)
}
