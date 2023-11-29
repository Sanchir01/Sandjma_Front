import { fallbackIcon } from '@/shared/constants/Suspense/IconSuspense'
import { IIconProps } from '@/shared/types/Icons.interface'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { FC, Suspense } from 'react'



const FavoritesLogo: FC<IIconProps> = ({ size, color, href }) => {
	return (
		<Suspense fallback={fallbackIcon}>
			<Link href={href}>
				<Heart color={color} size={size} />
			</Link>
		</Suspense>
	)
}

export default FavoritesLogo
