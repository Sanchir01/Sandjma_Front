import { ICart } from '@/Providers/store/useCart'
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}
export const allItems = (item: ICart[]) => {
	const totalQuantity = item.reduce((total, item) => total + item.quantity, 0)
	return totalQuantity
}
