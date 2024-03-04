/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'i.ibb.co'
			},
			{
				protocol: 'https',
				hostname: 'ae04.alicdn.com'
			},
			{
				protocol: 'https',
				hostname: 'cdn.sela.ru'
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
		locales: ['en', 'ru'],
		defaultLocale: 'ru'
	},
	optimizeFonts: true,
	swcMinify: true
}

export default nextConfig
