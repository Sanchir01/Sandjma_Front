/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]?: Maybe<T[SubKey]>
}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
	[SubKey in K]: Maybe<T[SubKey]>
}
export type MakeEmpty<
	T extends { [key: string]: unknown },
	K extends keyof T
> = { [_ in K]?: never }
export type Incremental<T> =
	| T
	| {
			[P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never
	  }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: { input: string; output: string }
	String: { input: string; output: string }
	Boolean: { input: boolean; output: boolean }
	Int: { input: number; output: number }
	Float: { input: number; output: number }
}

export type AuthInput = {
	email: Scalars['String']['input']
	password: Scalars['String']['input']
	phone: Scalars['String']['input']
}

export type AuthResponse = {
	__typename?: 'AuthResponse'
	accessToken: Scalars['String']['output']
	refreshToken: Scalars['String']['output']
	user: ReturnUserFields
}

export type CreateCategoryInput = {
	image?: InputMaybe<Scalars['String']['input']>
	name: Scalars['String']['input']
}

export type CreateColorInput = {
	imageCss: Scalars['String']['input']
	name: Scalars['String']['input']
}

export type CreateInsolationInput = {
	name: Scalars['String']['input']
}

export type CreateProductInput = {
	categorySlug: Scalars['String']['input']
	colors: Array<Scalars['String']['input']>
	description: Scalars['String']['input']
	images: Array<Scalars['String']['input']>
	insolation: Scalars['String']['input']
	name: Scalars['String']['input']
	news?: InputMaybe<Scalars['Boolean']['input']>
	price: Scalars['Int']['input']
	productColor: Scalars['String']['input']
	sellers?: InputMaybe<Scalars['Boolean']['input']>
	size: Array<Scalars['String']['input']>
}

export type CreateSizeInput = {
	name: Scalars['String']['input']
}

export type DeleteInsolationInput = {
	name: Scalars['String']['input']
}

export type GetAllProductInput = {
	categoryId?: InputMaybe<Scalars['String']['input']>
	maxPrice?: InputMaybe<Scalars['String']['input']>
	minPrice?: InputMaybe<Scalars['String']['input']>
	newProduct?: InputMaybe<Scalars['Boolean']['input']>
	page?: InputMaybe<Scalars['String']['input']>
	perPage?: InputMaybe<Scalars['String']['input']>
	searchTerm?: InputMaybe<Scalars['String']['input']>
	seller?: InputMaybe<Scalars['Boolean']['input']>
	sort?: InputMaybe<Scalars['String']['input']>
}

export type GetCategoryByIdInput = {
	id: Scalars['Int']['input']
}

export type GetCategoryBySlugInput = {
	slug: Scalars['String']['input']
}

export type GetProductByColor = {
	colorId: Scalars['Int']['input']
	slug: Scalars['String']['input']
}

export type GetProductById = {
	id: Scalars['Int']['input']
}

export type Insolation = {
	__typename?: 'Insolation'
	id: Scalars['Int']['output']
	name: Scalars['String']['output']
	slug: Scalars['String']['output']
}

export type LoginInput = {
	password: Scalars['String']['input']
	phone: Scalars['String']['input']
}

export type Mutation = {
	__typename?: 'Mutation'
	crateInsolation: Insolation
	createCategory: ResponseCategory
	createColor: ReturnColors
	createProduct: ReturnFieldByCreateProduct
	createProductColor: ProductColor
	createSize: Size
	deleteCategory: ResponseCategory
	deleteColor: ReturnColors
	deleteInsolation: Insolation
	deleteProduct: Product
	deleteProductColor: ProductColor
	deleteSize: Size
	login: AuthResponse
	newToken: NewTokensResponse
	register: AuthResponse
	toggleFavoritesProfile: Scalars['String']['output']
	updateCategory: ResponseCategory
	updateColor: ReturnColors
	updateInsolation: Insolation
	updateProductColor: ProductColor
	updateProfile: User
}

export type MutationCrateInsolationArgs = {
	createInsolationInput: CreateInsolationInput
}

export type MutationCreateCategoryArgs = {
	createCategoryInput: CreateCategoryInput
}

export type MutationCreateColorArgs = {
	createReturnColorsInput: CreateColorInput
}

export type MutationCreateProductArgs = {
	createProductInput: CreateProductInput
}

export type MutationCreateProductColorArgs = {
	productColorInput: ProductColorInput
}

export type MutationCreateSizeArgs = {
	crateSizeInput: CreateSizeInput
}

export type MutationDeleteCategoryArgs = {
	id: Scalars['Float']['input']
}

export type MutationDeleteColorArgs = {
	deleteReturnColorsInput: CreateColorInput
}

export type MutationDeleteInsolationArgs = {
	deleteInsolationInput: DeleteInsolationInput
}

export type MutationDeleteProductArgs = {
	deleteProductById: GetProductById
}

export type MutationDeleteProductColorArgs = {
	productColorInput: ProductColorInput
}

export type MutationDeleteSizeArgs = {
	id: Scalars['Float']['input']
}

export type MutationLoginArgs = {
	loginInput: LoginInput
}

export type MutationRegisterArgs = {
	authInput: AuthInput
}

export type MutationToggleFavoritesProfileArgs = {
	productId: Scalars['Float']['input']
}

export type MutationUpdateCategoryArgs = {
	updateCategoryInput: UpdateCategoryInput
}

export type MutationUpdateColorArgs = {
	updateReturnColorsInput: CreateColorInput
}

export type MutationUpdateInsolationArgs = {
	updateInsolationInput: UpdateInsolationInput
}

export type MutationUpdateProductColorArgs = {
	productColorInput: ProductColorInput
}

export type MutationUpdateProfileArgs = {
	updateUserProfileInput: UpdateUserProfileInput
}

export type Product = {
	__typename?: 'Product'
	categoryId: Scalars['Int']['output']
	colors: Array<ReturnColors>
	description: Scalars['String']['output']
	id: Scalars['Int']['output']
	images: Array<Scalars['String']['output']>
	insulationId: Scalars['Int']['output']
	name: Scalars['String']['output']
	price: Scalars['Int']['output']
	size: Array<Size>
	slug: Scalars['String']['output']
}

export type ProductColor = {
	__typename?: 'ProductColor'
	id: Scalars['Int']['output']
	name: Scalars['String']['output']
	slug: Scalars['String']['output']
}

export type ProductColorInput = {
	name: Scalars['String']['input']
}

export type ProductFiled = {
	__typename?: 'ProductFiled'
	categoryId: Scalars['Int']['output']
	id: Scalars['Int']['output']
	name: Scalars['String']['output']
}

export type Query = {
	__typename?: 'Query'
	/** allCategories */
	getAllCategories: Array<ResponseCategory>
	getAllColors: Array<ReturnColors>
	getAllInsolation: Array<Insolation>
	getAllProduct: Array<ProductColor>
	getAllProducts: AllProductsAndLength
	getAllSize: Array<Size>
	getCategoryById: ResponseCategory
	/** nameGetCategoryBySlug */
	getCategoryBySlug: ResponseCategory
	getProductByColor: Array<Product>
	getProductById: Product
	getProfile: User
}

export type QueryGetAllProductsArgs = {
	getAllProductInput: GetAllProductInput
}

export type QueryGetCategoryByIdArgs = {
	getCategoryByIdInput: GetCategoryByIdInput
}

export type QueryGetCategoryBySlugArgs = {
	getCategoryBySlugInput: GetCategoryBySlugInput
}

export type QueryGetProductByColorArgs = {
	getProductByColor: GetProductByColor
}

export type QueryGetProductByIdArgs = {
	getProductById: GetProductById
}

export type ResponseCategory = {
	__typename?: 'ResponseCategory'
	id: Scalars['Int']['output']
	image: Scalars['String']['output']
	name: Scalars['String']['output']
	slug: Scalars['String']['output']
}

export type ReturnColors = {
	__typename?: 'ReturnColors'
	id: Scalars['Int']['output']
	imageCss: Scalars['String']['output']
	name: Scalars['String']['output']
	products: Array<ProductFiled>
	slug: Scalars['String']['output']
}

export type ReturnFieldByCreateProduct = {
	__typename?: 'ReturnFieldByCreateProduct'
	categoryId: Scalars['Int']['output']
	description: Scalars['String']['output']
	id: Scalars['Int']['output']
	images: Array<Scalars['String']['output']>
	name: Scalars['String']['output']
	price: Scalars['Int']['output']
	slug: Scalars['String']['output']
}

export type Size = {
	__typename?: 'Size'
	id: Scalars['Int']['output']
	name: Scalars['String']['output']
}

export type UpdateCategoryInput = {
	id: Scalars['Int']['input']
	image?: InputMaybe<Scalars['String']['input']>
	name: Scalars['String']['input']
}

export type UpdateInsolationInput = {
	name: Scalars['String']['input']
}

export type UpdateUserProfileInput = {
	avatarPath?: InputMaybe<Scalars['String']['input']>
	email: Scalars['String']['input']
	name?: InputMaybe<Scalars['String']['input']>
	password: Scalars['String']['input']
}

export type User = {
	__typename?: 'User'
	avatarPath: Scalars['String']['output']
	email: Scalars['String']['output']
	favorites?: Maybe<Array<Product>>
	id: Scalars['Int']['output']
	isAdmin: Scalars['Boolean']['output']
	name: Scalars['String']['output']
	password: Scalars['String']['output']
}

export type AllProductsAndLength = {
	__typename?: 'allProductsAndLength'
	length: Scalars['Int']['output']
	products: Array<Product>
}

export type NewTokensResponse = {
	__typename?: 'newTokensResponse'
	User: ReturnUserFields
	accessToken: Scalars['String']['output']
}

export type ReturnUserFields = {
	__typename?: 'returnUserFields'
	email: Scalars['String']['output']
	id: Scalars['Int']['output']
	isAdmin: Scalars['Boolean']['output']
}

export type GetAllProductsDashboardQueryVariables = Exact<{
	getAllProductInput: GetAllProductInput
}>

export type GetAllProductsDashboardQuery = {
	__typename?: 'Query'
	getAllProducts: {
		__typename?: 'allProductsAndLength'
		length: number
		products: Array<{
			__typename?: 'Product'
			id: number
			images: Array<string>
			name: string
			price: number
			size: Array<{ __typename?: 'Size'; id: number; name: string }>
		}>
	}
}

export const GetAllProductsDashboardDocument = {
	kind: 'Document',
	definitions: [
		{
			kind: 'OperationDefinition',
			operation: 'query',
			name: { kind: 'Name', value: 'GetAllProductsDashboard' },
			variableDefinitions: [
				{
					kind: 'VariableDefinition',
					variable: {
						kind: 'Variable',
						name: { kind: 'Name', value: 'getAllProductInput' }
					},
					type: {
						kind: 'NonNullType',
						type: {
							kind: 'NamedType',
							name: { kind: 'Name', value: 'GetAllProductInput' }
						}
					}
				}
			],
			selectionSet: {
				kind: 'SelectionSet',
				selections: [
					{
						kind: 'Field',
						name: { kind: 'Name', value: 'getAllProducts' },
						arguments: [
							{
								kind: 'Argument',
								name: { kind: 'Name', value: 'getAllProductInput' },
								value: {
									kind: 'Variable',
									name: { kind: 'Name', value: 'getAllProductInput' }
								}
							}
						],
						selectionSet: {
							kind: 'SelectionSet',
							selections: [
								{ kind: 'Field', name: { kind: 'Name', value: 'length' } },
								{
									kind: 'Field',
									name: { kind: 'Name', value: 'products' },
									selectionSet: {
										kind: 'SelectionSet',
										selections: [
											{ kind: 'Field', name: { kind: 'Name', value: 'id' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'images' }
											},
											{ kind: 'Field', name: { kind: 'Name', value: 'name' } },
											{ kind: 'Field', name: { kind: 'Name', value: 'price' } },
											{
												kind: 'Field',
												name: { kind: 'Name', value: 'size' },
												selectionSet: {
													kind: 'SelectionSet',
													selections: [
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'id' }
														},
														{
															kind: 'Field',
															name: { kind: 'Name', value: 'name' }
														}
													]
												}
											}
										]
									}
								}
							]
						}
					}
				]
			}
		}
	]
} as unknown as DocumentNode<
	GetAllProductsDashboardQuery,
	GetAllProductsDashboardQueryVariables
>
