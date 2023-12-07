import { Auth } from '@/pages/auth'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Авторизация',
	description: ''
}

export default function Page() {
	return <Auth />
}
