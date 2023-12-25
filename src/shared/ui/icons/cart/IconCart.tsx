import { fallbackIcon } from '@/shared/constants/Suspense/IconSuspense'
import { IIconProps } from '@/shared/types/Icons.interface'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { FC, Suspense } from 'react'

export const IconCart: FC<IIconProps> = ({ size, color, href, aria_label }) => {
	return (
		<Suspense fallback={fallbackIcon}>
			<Link aria-label={aria_label} href={href}>
				<ShoppingCart color={color} size={size} />
			</Link>
		</Suspense>
	)
}
