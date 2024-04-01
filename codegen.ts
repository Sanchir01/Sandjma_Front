import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.SERVER_URL as string,
	documents: 'graphql/mySchemas/**/*.gql',
	generates: {
		'graphql/gql/': {
			preset: 'client',
			plugins: []
		}
	}
}

export default config
