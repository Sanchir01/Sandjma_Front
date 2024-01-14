/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  accessToken: Scalars['String']['output'];
  refreshToken: Scalars['String']['output'];
  user: ReturnUserFields;
};

export type CreateCategoryInput = {
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateColorInput = {
  imageCss: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateInsolationInput = {
  name: Scalars['String']['input'];
};

export type CreateOrderInput = {
  items: Array<OrderItemDto>;
};

export type CreateProductInput = {
  categorySlug: Scalars['String']['input'];
  colors: Array<Scalars['String']['input']>;
  description: Scalars['String']['input'];
  images: Array<Scalars['String']['input']>;
  insolation: Scalars['String']['input'];
  name: Scalars['String']['input'];
  news?: InputMaybe<Scalars['Boolean']['input']>;
  price: Scalars['Int']['input'];
  productColor: Scalars['String']['input'];
  sellers?: InputMaybe<Scalars['Boolean']['input']>;
  size: Array<Scalars['String']['input']>;
};

export type CreateSizeInput = {
  name: Scalars['String']['input'];
};

export type DeleteInsolationInput = {
  name: Scalars['String']['input'];
};

export type GetAllProductInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  colorId?: InputMaybe<Scalars['Float']['input']>;
  getProductByInsulation?: InputMaybe<Scalars['Float']['input']>;
  maxPrice?: InputMaybe<Scalars['String']['input']>;
  minPrice?: InputMaybe<Scalars['String']['input']>;
  newProduct?: InputMaybe<Scalars['Boolean']['input']>;
  page?: InputMaybe<Scalars['String']['input']>;
  perPage?: InputMaybe<Scalars['String']['input']>;
  searchTerm?: InputMaybe<Scalars['String']['input']>;
  seller?: InputMaybe<Scalars['Boolean']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type GetCategoryByIdInput = {
  id: Scalars['Int']['input'];
};

export type GetCategoryBySlugInput = {
  slug: Scalars['String']['input'];
};

export type GetProductByColor = {
  colorId: Scalars['Int']['input'];
  slug: Scalars['String']['input'];
};

export type GetProductById = {
  id: Scalars['Int']['input'];
};

export type Insolation = {
  __typename?: 'Insolation';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type LoginInput = {
  password: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  crateInsolation: Insolation;
  createCategory: ResponseCategory;
  createColor: ReturnColors;
  createProduct: ReturnFieldByCreateProduct;
  createProductColor: ProductColor;
  createSize: Size;
  deleteCategory: ResponseCategory;
  deleteColor: ReturnColors;
  deleteInsolation: Insolation;
  deleteProduct: Product;
  deleteProductColor: ProductColor;
  deleteSize: Size;
  login: AuthResponse;
  newToken: AuthResponse;
  placeOrderOne: Scalars['String']['output'];
  register: AuthResponse;
  toggleFavoritesProfile: Scalars['String']['output'];
  updateCategory: ResponseCategory;
  updateColor: ReturnColors;
  updateInsolation: Insolation;
  updateProductColor: ProductColor;
  updateProfile: User;
};


export type MutationCrateInsolationArgs = {
  createInsolationInput: CreateInsolationInput;
};


export type MutationCreateCategoryArgs = {
  createCategoryInput: CreateCategoryInput;
};


export type MutationCreateColorArgs = {
  createReturnColorsInput: CreateColorInput;
};


export type MutationCreateProductArgs = {
  createProductInput: CreateProductInput;
};


export type MutationCreateProductColorArgs = {
  productColorInput: ProductColorInput;
};


export type MutationCreateSizeArgs = {
  crateSizeInput: CreateSizeInput;
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['Float']['input'];
};


export type MutationDeleteColorArgs = {
  deleteReturnColorsInput: CreateColorInput;
};


export type MutationDeleteInsolationArgs = {
  deleteInsolationInput: DeleteInsolationInput;
};


export type MutationDeleteProductArgs = {
  deleteProductById: GetProductById;
};


export type MutationDeleteProductColorArgs = {
  productColorInput: ProductColorInput;
};


export type MutationDeleteSizeArgs = {
  id: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  loginInput: LoginInput;
};


export type MutationPlaceOrderOneArgs = {
  createOrderInput: CreateOrderInput;
};


export type MutationRegisterArgs = {
  authInput: AuthInput;
};


export type MutationToggleFavoritesProfileArgs = {
  productId: Scalars['Float']['input'];
};


export type MutationUpdateCategoryArgs = {
  updateCategoryInput: UpdateCategoryInput;
};


export type MutationUpdateColorArgs = {
  updateReturnColorsInput: CreateColorInput;
};


export type MutationUpdateInsolationArgs = {
  updateInsolationInput: UpdateInsolationInput;
};


export type MutationUpdateProductColorArgs = {
  productColorInput: ProductColorInput;
};


export type MutationUpdateProfileArgs = {
  updateUserProfileInput: UpdateUserProfileInput;
};

export type OrderItemDto = {
  price: Scalars['Int']['input'];
  productColor: Scalars['String']['input'];
  productId: Scalars['Int']['input'];
  productName: Scalars['String']['input'];
  quantity: Scalars['Int']['input'];
  size: Scalars['String']['input'];
};

export type Product = {
  __typename?: 'Product';
  categoryId: Scalars['Int']['output'];
  colors: Array<ReturnColors>;
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  insulationId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  productColorId: Scalars['Int']['output'];
  size: Array<Size>;
  slug: Scalars['String']['output'];
};

export type ProductColor = {
  __typename?: 'ProductColor';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ProductColorInput = {
  name: Scalars['String']['input'];
};

export type ProductFiled = {
  __typename?: 'ProductFiled';
  categoryId: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  /** allCategories */
  getAllCategories: Array<ResponseCategory>;
  getAllColors: Array<ReturnColors>;
  getAllInsolation: Array<Insolation>;
  getAllOrders: Scalars['String']['output'];
  getAllProduct: Array<ProductColor>;
  getAllProducts: AllProductsAndLength;
  getAllSize: Array<Size>;
  getCategoryById: ResponseCategory;
  /** nameGetCategoryBySlug */
  getCategoryBySlug: ResponseCategory;
  getProductByColor: Array<Product>;
  getProductById: Product;
  getProfile: User;
};


export type QueryGetAllProductsArgs = {
  getAllProductInput: GetAllProductInput;
};


export type QueryGetCategoryByIdArgs = {
  getCategoryByIdInput: GetCategoryByIdInput;
};


export type QueryGetCategoryBySlugArgs = {
  getCategoryBySlugInput: GetCategoryBySlugInput;
};


export type QueryGetProductByColorArgs = {
  getProductByColor: GetProductByColor;
};


export type QueryGetProductByIdArgs = {
  getProductById: GetProductById;
};

export type ResponseCategory = {
  __typename?: 'ResponseCategory';
  id: Scalars['Int']['output'];
  image: Scalars['String']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
};

export type ReturnColors = {
  __typename?: 'ReturnColors';
  id: Scalars['Int']['output'];
  imageCss: Scalars['String']['output'];
  name: Scalars['String']['output'];
  products: Array<ProductFiled>;
  slug: Scalars['String']['output'];
};

export type ReturnFieldByCreateProduct = {
  __typename?: 'ReturnFieldByCreateProduct';
  categoryId: Scalars['Int']['output'];
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  images: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price: Scalars['Int']['output'];
  slug: Scalars['String']['output'];
};

export type Size = {
  __typename?: 'Size';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UpdateCategoryInput = {
  id: Scalars['Int']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type UpdateInsolationInput = {
  name: Scalars['String']['input'];
};

export type UpdateUserProfileInput = {
  avatarPath?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  name?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
};

export type User = {
  __typename?: 'User';
  avatarPath: Scalars['String']['output'];
  email: Scalars['String']['output'];
  favorites?: Maybe<Array<Product>>;
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  password: Scalars['String']['output'];
};

export type AllProductsAndLength = {
  __typename?: 'allProductsAndLength';
  length: Scalars['Int']['output'];
  products: Array<Product>;
};

export type ReturnUserFields = {
  __typename?: 'returnUserFields';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  isAdmin: Scalars['Boolean']['output'];
};

export type CreateOrderMutationVariables = Exact<{
  createOrderInput: CreateOrderInput;
}>;


export type CreateOrderMutation = { __typename?: 'Mutation', placeOrderOne: string };

export type LoginMutationVariables = Exact<{
  loginInput: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'returnUserFields', id: number, isAdmin: boolean } } };

export type RegisterMutationVariables = Exact<{
  authInput: AuthInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AuthResponse', accessToken: string, refreshToken: string, user: { __typename?: 'returnUserFields', id: number, isAdmin: boolean } } };

export type GetNewTokensMutationVariables = Exact<{ [key: string]: never; }>;


export type GetNewTokensMutation = { __typename?: 'Mutation', newToken: { __typename?: 'AuthResponse', refreshToken: string, accessToken: string } };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', getAllCategories: Array<{ __typename?: 'ResponseCategory', id: number, name: string }> };

export type GetAllInsolationQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllInsolationQuery = { __typename?: 'Query', getAllInsolation: Array<{ __typename?: 'Insolation', id: number, name: string }> };

export type GetAllColorsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllColorsQuery = { __typename?: 'Query', getAllColors: Array<{ __typename?: 'ReturnColors', id: number, imageCss: string, name: string }> };

export type GetAllProductsDashboardQueryVariables = Exact<{
  getAllProductInput: GetAllProductInput;
}>;


export type GetAllProductsDashboardQuery = { __typename?: 'Query', getAllProducts: { __typename?: 'allProductsAndLength', length: number, products: Array<{ __typename?: 'Product', id: number, images: Array<string>, name: string, price: number, slug: string, productColorId: number, size: Array<{ __typename?: 'Size', id: number, name: string }>, colors: Array<{ __typename?: 'ReturnColors', id: number, imageCss: string, name: string }> }> } };

export type GetProductByColorQueryVariables = Exact<{
  getProductByColor: GetProductByColor;
}>;


export type GetProductByColorQuery = { __typename?: 'Query', getProductByColor: Array<{ __typename?: 'Product', id: number, images: Array<string>, name: string, price: number, productColorId: number, slug: string, colors: Array<{ __typename?: 'ReturnColors', id: number, imageCss: string, name: string }>, size: Array<{ __typename?: 'Size', id: number, name: string }> }> };

export type ToggleFavoritesProfileMutationVariables = Exact<{
  productId: Scalars['Float']['input'];
}>;


export type ToggleFavoritesProfileMutation = { __typename?: 'Mutation', toggleFavoritesProfile: string };

export type GetUserFavoritesIdArrayQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserFavoritesIdArrayQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', favorites?: Array<{ __typename?: 'Product', id: number }> | null } };

export type GetAllFavoritesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllFavoritesQuery = { __typename?: 'Query', getProfile: { __typename?: 'User', favorites?: Array<{ __typename?: 'Product', id: number, images: Array<string>, name: string, price: number, productColorId: number, slug: string }> | null } };


export const CreateOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CreateOrderInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"placeOrderOne"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"createOrderInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"createOrderInput"}}}]}]}}]} as unknown as DocumentNode<CreateOrderMutation, CreateOrderMutationVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"LoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"loginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const RegisterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Register"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"AuthInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"register"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"}},{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"isAdmin"}}]}}]}}]}}]} as unknown as DocumentNode<RegisterMutation, RegisterMutationVariables>;
export const GetNewTokensDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"GetNewTokens"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"newToken"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"refreshToken"}},{"kind":"Field","name":{"kind":"Name","value":"accessToken"}}]}}]}}]} as unknown as DocumentNode<GetNewTokensMutation, GetNewTokensMutationVariables>;
export const GetAllCategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllCategories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetAllInsolationDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllInsolation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllInsolation"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllInsolationQuery, GetAllInsolationQueryVariables>;
export const GetAllColorsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllColors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageCss"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetAllColorsQuery, GetAllColorsQueryVariables>;
export const GetAllProductsDashboardDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllProductsDashboard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getAllProductInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetAllProductInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getAllProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getAllProductInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getAllProductInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"length"}},{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"productColorId"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageCss"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllProductsDashboardQuery, GetAllProductsDashboardQueryVariables>;
export const GetProductByColorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductByColor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"getProductByColor"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"GetProductByColor"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProductByColor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"getProductByColor"},"value":{"kind":"Variable","name":{"kind":"Name","value":"getProductByColor"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"colors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"imageCss"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"productColorId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"size"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetProductByColorQuery, GetProductByColorQueryVariables>;
export const ToggleFavoritesProfileDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ToggleFavoritesProfile"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"productId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"toggleFavoritesProfile"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"productId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"productId"}}}]}]}}]} as unknown as DocumentNode<ToggleFavoritesProfileMutation, ToggleFavoritesProfileMutationVariables>;
export const GetUserFavoritesIdArrayDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetUserFavoritesIdArray"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetUserFavoritesIdArrayQuery, GetUserFavoritesIdArrayQueryVariables>;
export const GetAllFavoritesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllFavorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getProfile"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"favorites"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"productColorId"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllFavoritesQuery, GetAllFavoritesQueryVariables>;