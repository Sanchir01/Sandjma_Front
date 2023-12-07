import { Catalog } from '@/pages/catalog'
import { IItemsSliderProduct } from '@/shared/types/Slider.interface'
import { GetStaticProps, NextPage } from 'next'
export interface IPropsCatalog {
	products: IItemsSliderProduct[]
}
export const getStaticProps = (async () => {
	const headers = {
		'content-type': 'application/json'
	}
	const graphqlQuery = {
		query: `query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {
		getAllProducts(getAllProductInput: $getAllProductInput) {
			length
			products {
				id
				images
				name
				price
				size {
					id
					name
				}
			}
		}
	}`,
		variables: {
			getAllProductInput: {
				page: '1'
			}
		}
	}

	const options = {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(graphqlQuery)
	}

	const products = (
		await fetch(process.env.SERVER_GRAPHQL as string, options)
			.then(res => res.json())
			.catch(er => console.log(er))
	).data.getAllProducts.products

	return {
		props: { products }
	}
}) satisfies GetStaticProps<IPropsCatalog>

// export const getStaticProps = async () => {
// 	const headers = {
// 		'content-type': 'application/json'
// 	}
// 	const graphqlQuery = {
// 		query: `query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {
// 		getAllProducts(getAllProductInput: $getAllProductInput) {
// 			length
// 			products {
// 				id
// 				images
// 				name
// 				price
// 				size {
// 					id
// 					name
// 				}
// 			}
// 		}
// 	}`,
// 		variables: {
// 			getAllProductInput: {
// 				page: '1'
// 			}
// 		}
// 	}

// 	const options = {
// 		method: 'POST',
// 		headers: headers,
// 		body: JSON.stringify(graphqlQuery)
// 	}

// 	const products = (
// 		await fetch(process.env.SERVER_GRAPHQL as string, options)
// 			.then(res => res.json())
// 			.catch(er => console.log(er))
// 	).data.getAllProducts.products

// 	console.log(products.getAllProducts.products)

// 	return {
// 		props: { products }
// 	}
// } satisfies GetStaticProps<IPropsCatalog>

const HomePage: NextPage<IPropsCatalog> = ({ products }) => {
	console.log(products, 'proдукты')
	return <Catalog products={products} />
}

export default HomePage
