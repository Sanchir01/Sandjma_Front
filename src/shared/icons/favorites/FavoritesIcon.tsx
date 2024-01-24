'use client'
import { userService } from '@/shared/service/user.service'
import { IIconProps } from '@/shared/types/Icons.interface'
import { useQuery } from '@tanstack/react-query'
import { GetUserFavoritesIdArrayQuery } from 'gql/gql/graphql'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

export const FavoritesLogo: FC<IIconProps> = ({ size, color }) => {
	const { data: favorites, isLoading: loading } =
		useQuery<GetUserFavoritesIdArrayQuery>({
			queryKey: ['favoritesLength'],
			queryFn: () => userService.getAllFavoritesArray(),
		})
	return (
		<Link
			className='relative'
			aria-label={'перехож в избранное'}
			href={'/favorites'}
		>
			<Heart />

			<span className='absolute bottom-1 left-2 text-[12px]'>
				{loading || favorites?.getProfile.favorites?.length === 0 ? (
					<></>
				) : (
					favorites?.getProfile.favorites?.length
				)}
			</span>
		</Link>
	)
}
