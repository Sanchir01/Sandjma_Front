import { MetadataRoute } from 'next'

export default function Robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/admin', '/auth/*', '/order']
		},
		host: 'sandjma.ru',
		sitemap: 'https://sandjma.ru'
	}
}
