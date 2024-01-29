import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Sandjma | Главная',
	description: 'Super Magazin Sandjma',
	openGraph: {
		siteName: 'Sandjma'
	},
	themeColor: '#000',
	applicationName: 'Sandjma',
	authors: [{ name: 'sanchir' }],
	robots: {
		follow: true
	},
	generator: 'Sadjma',
	keywords: `Sadjma, sadjma, одежда, калмыцкая одежда, купить одежду, купить калмыцкую одежду, Санджирма, Национальная одежда Элисты, Элиста,
		 Калмыки, Калмыкия, Красивая одежда в Элисте, Магазины одежды в Элисте`,
	other: {
		
		'og:image': 'https://i.ibb.co/7JXBQPX/bg.jpg',
		'og:image:secure_url': 'https://i.ibb.co/7JXBQPX/bg.jpg',
		'og:image:type': 'image/jpg',
		'og:image:width': '1200',
		'og:image:height': '630',
		'og:vk':""
		
	},
	creator: "Sanchir",
	metadataBase: null,
	
	
	
}
export default function Home() {
	return <main className='main'></main>
}
