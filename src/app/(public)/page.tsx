import { HeroSlide } from '@/shared/HeroSlider/HeroSlider'
import { EnumTokens } from '@/shared/utils/Tokens.service'
import NewAndSeller from '@/widgets/NewAndSeller/NewAndSeller'
import { Metadata, Viewport } from 'next'
import { cookies } from 'next/headers'

export const viewport: Viewport = {
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: '#fff' },
		{ media: '(prefers-color-scheme: dark)', color: '#282828' }
	]
}

export const metadata: Metadata = {
	title: 'Sandjma | Главная',
	description: 'Super Magazin Sandjma',
	openGraph: {
		siteName: 'Sandjma'
	},
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
		'og:image:width': '800',
		'og:image:height': '630',
		'og:url': 'https://frontsandjma.vercel.app/'
	},
	creator: 'Sanchir team'
}
export default function Home() {
	const token = cookies().get(EnumTokens.REFRESH_TOKEN)?.value
	console.log(token)
	return (
		<>
			<HeroSlide />
			<NewAndSeller />
		</>
	)
}
