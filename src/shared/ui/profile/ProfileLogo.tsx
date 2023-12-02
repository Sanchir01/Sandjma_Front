import { fallbackIcon } from '@/shared/constants/Suspense/IconSuspense'
import { IIconProps } from '@/shared/types/Icons.interface'
import { UsersRound } from 'lucide-react'
import Link from 'next/link'
import { FC, Suspense } from 'react'

const ProfileLogo: FC<IIconProps> = ({ size, color, href }) => {
	return (
		<Suspense fallback={fallbackIcon}>
			<Link href={href}>
				<UsersRound color={color} size={size} />
			</Link>
		</Suspense>
	)
}

export default ProfileLogo
