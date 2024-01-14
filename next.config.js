/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_GRAPHQL: process.env.NEXT_PUBLIC_SERVER_GRAPHQL,
		SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL,
		CLIENT_URL: process.env.NEXT_PUBLIC_CLIENT_URL
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co'
			}
		]
	},
	webpack(config, options) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: { and: [/\.(ts)x?$/] },
			use: [
				{
					loader: '@svgr/webpack',
					options: {
						svgoConfig: { plugins: [{ removeViewBox: false }] }
					}
				}
			]
		})

		return config
	}
}

module.exports = nextConfig
