import { IIconProps } from '@/shared/types/Icons.interface'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

export const IconCart: FC<IIconProps> = ({ size, color, href, aria_label }) => {
	return (
		<div className='relative'>
			<Link aria-label={aria_label} href={href}>
				<ShoppingCart color={color} size={size} />
			</Link>
			<span className='absolute top-1 left-[10px] text-[11px]'>1</span>
		</div>
	)
}
