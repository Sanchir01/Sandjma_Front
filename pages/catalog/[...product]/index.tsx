import useCartStore from '@/app/store/useCart'
import { productService } from '@/shared/service/products.service'
import { IOneProduct } from '@/shared/types/Slider.interface'
import { Button } from '@/shared/ui'
import { GetProductByColorDocument } from 'gql/gql/graphql'
import request from 'graphql-request'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { useShallow } from 'zustand/react/shallow'

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

export default function Page({ product }: { product: IOneProduct }) {
	const router = useRouter()
	console.log(router.query.product, product.colors, '123213')
	const [cart, toggleCartItem] = useCartStore(
		useShallow(state => [state.cart, state.toggleCartItem])
	)
	return (
		<Button
			onClick={() =>
				toggleCartItem({
					id: product.id,
					image: product.images[0],
					name: product.name,
					price: product.price,
					quantity: 1,
					size: product.size![0],
					color: product.colors![product.productColorId!],
					slug: product.slug
				})
			}
		>
			{cart.length} sdsadsadsadsadasd
		</Button>
	)
}
