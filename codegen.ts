import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema:
		process.env.NODE_ENV === 'development'
			? `${process.env.TEST_ENV_BASE_TEST}/graphql`
			: process.env.SERVER_GRAPHQL,
	documents: 'graphql/mySchemas/**/*.gql',
	generates: {
		'graphql/gql/': {
			preset: 'client',
			plugins: []
		}
	}
}

export default config
