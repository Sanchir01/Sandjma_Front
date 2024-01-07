import { useUser } from '@/app/store/useUser'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { IIconProps } from '@/shared/types/Icons.interface'
import { UsersRound } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

export const ProfileLogo: FC<IIconProps> = ({ size, color, aria_label }) => {
	const userProfile = useStoreZustand(useUser, state => state.user)
	return (
		<Link aria-label={aria_label} href={userProfile ? '/profile' : '/auth'}>
			<UsersRound color={color} size={size} />
		</Link>
	)
}
