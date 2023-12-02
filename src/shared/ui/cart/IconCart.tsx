import { fallbackIcon } from '@/shared/constants/Suspense/IconSuspense'
import { IIconProps } from '@/shared/types/Icons.interface'
import { ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { FC, Suspense } from 'react'

export const IconCart: FC<IIconProps> = ({ size, color, href }) => {
	return (
		<Suspense fallback={fallbackIcon}>
			<Link href={href}>
				<ShoppingCart color={color} size={size} />
			</Link>
		</Suspense>
	)
}
