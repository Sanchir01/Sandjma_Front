/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_GRAPHQL: process.env.NEXT_PUBLIC_SERVER_GRAPHQL,
		SERVER_URL: process.env.NEXT_PUBLIC_SERVER_URL
	}
}

module.exports = nextConfig
