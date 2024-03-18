/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "mutation createOrder($createOrderInput: CreateOrderInput!) {\n  placeOrderOne(createOrderInput: $createOrderInput)\n}": types.CreateOrderDocument,
    "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      email\n      isAdmin\n    }\n  }\n}\n\nmutation Register($authInput: AuthInput!) {\n  register(authInput: $authInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      email\n      isAdmin\n    }\n  }\n}\n\nmutation Logout {\n  logout\n}\n\nmutation GetNewTokens {\n  newToken {\n    user {\n      email\n      id\n      isAdmin\n    }\n    refreshToken\n  }\n}": types.LoginDocument,
    "query GetAllCategories {\n  getAllCategories {\n    id\n    name\n  }\n}\n\nquery GetAllInsolation {\n  getAllInsolation {\n    id\n    name\n  }\n}\n\nquery GetAllColors {\n  getAllColors {\n    id\n    imageCss\n    name\n  }\n}": types.GetAllCategoriesDocument,
    "query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      id\n      images\n      name\n      price\n      slug\n      productColorId\n      colors {\n        imageCss\n        id\n        name\n      }\n      size {\n        id\n        name\n      }\n      colors {\n        id\n        imageCss\n        name\n      }\n    }\n  }\n}\n\nquery GetProductByColor($getProductByColor: GetProductByColor!) {\n  getProductByColor(getProductByColor: $getProductByColor) {\n    id\n    colors {\n      id\n      imageCss\n      name\n    }\n    images\n    name\n    price\n    productColorId\n    description\n    categoryId\n    slug\n    size {\n      id\n      name\n    }\n  }\n}": types.GetAllProductsDashboardDocument,
    "query GetUserProfile {\n  getProfile {\n    id\n    isAdmin\n  }\n}": types.GetUserProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation createOrder($createOrderInput: CreateOrderInput!) {\n  placeOrderOne(createOrderInput: $createOrderInput)\n}"): (typeof documents)["mutation createOrder($createOrderInput: CreateOrderInput!) {\n  placeOrderOne(createOrderInput: $createOrderInput)\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      email\n      isAdmin\n    }\n  }\n}\n\nmutation Register($authInput: AuthInput!) {\n  register(authInput: $authInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      email\n      isAdmin\n    }\n  }\n}\n\nmutation Logout {\n  logout\n}\n\nmutation GetNewTokens {\n  newToken {\n    user {\n      email\n      id\n      isAdmin\n    }\n    refreshToken\n  }\n}"): (typeof documents)["mutation Login($loginInput: LoginInput!) {\n  login(loginInput: $loginInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      email\n      isAdmin\n    }\n  }\n}\n\nmutation Register($authInput: AuthInput!) {\n  register(authInput: $authInput) {\n    accessToken\n    refreshToken\n    user {\n      id\n      email\n      isAdmin\n    }\n  }\n}\n\nmutation Logout {\n  logout\n}\n\nmutation GetNewTokens {\n  newToken {\n    user {\n      email\n      id\n      isAdmin\n    }\n    refreshToken\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllCategories {\n  getAllCategories {\n    id\n    name\n  }\n}\n\nquery GetAllInsolation {\n  getAllInsolation {\n    id\n    name\n  }\n}\n\nquery GetAllColors {\n  getAllColors {\n    id\n    imageCss\n    name\n  }\n}"): (typeof documents)["query GetAllCategories {\n  getAllCategories {\n    id\n    name\n  }\n}\n\nquery GetAllInsolation {\n  getAllInsolation {\n    id\n    name\n  }\n}\n\nquery GetAllColors {\n  getAllColors {\n    id\n    imageCss\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      id\n      images\n      name\n      price\n      slug\n      productColorId\n      colors {\n        imageCss\n        id\n        name\n      }\n      size {\n        id\n        name\n      }\n      colors {\n        id\n        imageCss\n        name\n      }\n    }\n  }\n}\n\nquery GetProductByColor($getProductByColor: GetProductByColor!) {\n  getProductByColor(getProductByColor: $getProductByColor) {\n    id\n    colors {\n      id\n      imageCss\n      name\n    }\n    images\n    name\n    price\n    productColorId\n    description\n    categoryId\n    slug\n    size {\n      id\n      name\n    }\n  }\n}"): (typeof documents)["query GetAllProductsDashboard($getAllProductInput: GetAllProductInput!) {\n  getAllProducts(getAllProductInput: $getAllProductInput) {\n    length\n    products {\n      id\n      images\n      name\n      price\n      slug\n      productColorId\n      colors {\n        imageCss\n        id\n        name\n      }\n      size {\n        id\n        name\n      }\n      colors {\n        id\n        imageCss\n        name\n      }\n    }\n  }\n}\n\nquery GetProductByColor($getProductByColor: GetProductByColor!) {\n  getProductByColor(getProductByColor: $getProductByColor) {\n    id\n    colors {\n      id\n      imageCss\n      name\n    }\n    images\n    name\n    price\n    productColorId\n    description\n    categoryId\n    slug\n    size {\n      id\n      name\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUserProfile {\n  getProfile {\n    id\n    isAdmin\n  }\n}"): (typeof documents)["query GetUserProfile {\n  getProfile {\n    id\n    isAdmin\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;