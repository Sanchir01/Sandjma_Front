import { IProductPage, OneProduct } from '@/myPages/oneproduct'
import { productService } from '@/shared/service/products.service'
import { GetProductByColorDocument } from 'gql/gql/graphql'
import request from 'graphql-request'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'

export const getStaticPaths = (async () => {
	const data = await productService.getAllProducts({ page: '1' })

	const paths = data.getAllProducts.products.map(item => ({
		params: {
			product: [item.slug, item.productColorId.toString()]
		}
	}))
	return {
		paths: paths,
		fallback: 'blocking'
	}
}) satisfies GetStaticPaths

export const getStaticProps = (async ({ params }: any) => {
	const [slug, productColorId] = params?.product

	const data = await request(
		process.env.SERVER_GRAPHQL as string,
		GetProductByColorDocument,
		{ getProductByColor: { colorId: Number(productColorId), slug } }
	)
	return {
		props: {
			product: data?.getProductByColor[0]
		},
		revalidate: 600
	}
}) satisfies GetStaticProps

export default function Page({ product }: { product: IProductPage }) {
	const router = useRouter()
	return (
		<OneProduct
			description={product.description}
			images={product.images}
			colors={product.colors}
			id={product.id}
			name={product.name}
			price={product.price}
			slug={product.slug}
			productColorId={product.productColorId}
			size={product.size}
			categoryId={product.categoryId.toString()}
		/>
	)
}
