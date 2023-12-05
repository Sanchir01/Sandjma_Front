import { ReactNode } from 'react'

export interface IEntityCartProps {
	priority?: boolean
	className?: string
	id: number
	images: string[]
	children?: ReactNode
	price: number
	name: string
}
