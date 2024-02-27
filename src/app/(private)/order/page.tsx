import Order from '@/widgets/order/Order'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Order'
}

export default function Page() {
	return <Order />
}
