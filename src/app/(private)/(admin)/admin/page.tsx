import { NO_INDEX_PAGE } from '@/shared/constants/Seo.constants'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Admin',
	...NO_INDEX_PAGE
}

export default function Page() {
	return <div>Admin</div>
}
