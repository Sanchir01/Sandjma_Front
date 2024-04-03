import type { CodegenConfig } from '@graphql-codegen/cli'

require('dotenv').config()

const config: CodegenConfig = {
	overwrite: true,
	schema: process.env.SERVER_GRAPHQL,
	documents: 'graphql/mySchemas/**/*.gql',
	generates: {
		'graphql/gql/': {
			preset: 'client',
			plugins: []
		}
	}
}

export default config
