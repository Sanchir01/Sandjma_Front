/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		GOOGLE_KEY_RECPTCHA: process.env.GOOGLE_KEY_RECPTCHA
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co'
			}
		],
		formats: ['image/webp'],
		loader: 'default'
	},
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'ru'
	},
	optimizeFonts: true
}

export default nextConfig
