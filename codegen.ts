import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://sandjmaback-production.up.railway.app/graphql',
	documents: 'graphql/mySchemas/**/*.gql',
	generates: {
		'graphql/gql/': {
			preset: 'client',
			plugins: []
		}
	}
}

export default config
