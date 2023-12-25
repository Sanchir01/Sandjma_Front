import { fallbackIcon } from '@/shared/constants/Suspense/IconSuspense'
import { IIconProps } from '@/shared/types/Icons.interface'
import { UsersRound } from 'lucide-react'
import Link from 'next/link'
import { FC, Suspense } from 'react'

export const ProfileLogo: FC<IIconProps> = ({
	size,
	color,
	href,
	aria_label
}) => {
	return (
		<Suspense fallback={fallbackIcon}>
			<Link aria-label={aria_label} href={href}>
				<UsersRound color={color} size={size} />
			</Link>
		</Suspense>
	)
}
