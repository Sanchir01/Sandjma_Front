import { ReactNode } from 'react'

export interface IEntityCartProps {
	priority?: boolean
	className?: string
	images: string[]
	children?: ReactNode
	price: number
	name: string
	slug: string
	colorId: number
}
