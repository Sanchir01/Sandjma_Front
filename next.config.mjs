/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co'
			}
		],
		formats: ['image/webp']
	},
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'ru'
	},
	optimizeFonts: true,
	compress: true
}

export default nextConfig
