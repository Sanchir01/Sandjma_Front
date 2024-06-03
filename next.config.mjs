/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fastly.picsum.photos'
			},
			{
				protocol: 'https',
				hostname: 'picsum.photos'
			},
			{
				protocol: 'https',
				hostname: 'ae04.alicdn.com'
			},
			{
				protocol: 'https',
				hostname: 'loremflickr.com'
			},
			{
				protocol: 'https',
				hostname: 'basket-10.wbcontent.net'
			},
			{
				protocol: 'https',
				hostname: 'encrypted-tbn0.gstatic.com'
			},
			{
				protocol: 'https',
				hostname: 'little-bandit.com'
			},
			{
				protocol: 'https',
				hostname: 'hmonline.ru'
			},
			{
				protocol: 'https',
				hostname: 'static.insales-cdn.com'
			},
			{
				protocol: 'https',
				hostname: 'img.cachan.ru'
			},
			{
				protocol: 'https',
				hostname: 'cdn.finnflare.com'
			},
			{
				protocol: 'https',
				hostname: 'www.moodyhoody.ru'
			},
			{
				protocol: 'https',
				hostname: 'cdn.sellavi.com'
			}
		],
		formats: ['image/webp'],
		loader: 'default'
	},
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru'
	},
	compress: true,
	env: {
		CLIENT_DOMAIN: process.env.CLIENT_DOMAIN,
		SERVER_URL: process.env.SERVER_GRAPHQL,
		LOCAL_SERVER: process.env.TEST_ENV_BASE_TEST
	},
	optimizeFonts: true,
	swcMinify: true
}

export default nextConfig
