import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema:
		process.env.NODE_ENV === 'production'
			? process.env.SERVER_GRAPHQL
			: `http://localhost:5000/graphql`,
	documents: 'graphql/mySchemas/**/*.gql',
	generates: {
		'graphql/gql/': {
			preset: 'client',
			plugins: []
		}
	}
}

export default config
