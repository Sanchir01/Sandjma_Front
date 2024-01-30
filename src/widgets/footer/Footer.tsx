import { FC } from 'react'

import '@/shared/styles/_mixins.scss'
import LayoutFooter from './ui/layoutFooter'

export interface ILogo {
	width: number
	height: number
}

export const Footer: FC = () => <LayoutFooter />
