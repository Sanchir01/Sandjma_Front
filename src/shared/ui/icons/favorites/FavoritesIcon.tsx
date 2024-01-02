import { useGetAllQueriesData } from '@/shared/api/react-query.hooks'
import { userService } from '@/shared/service/user.service'
import { IIconProps } from '@/shared/types/Icons.interface'
import { GetUserFavoritesIdArrayQuery } from 'gql/gql/graphql'
import { Heart } from 'lucide-react'
import Link from 'next/link'
import { FC } from 'react'

export const FavoritesLogo: FC<IIconProps> = ({ size, color, href }) => {
	const { data: favorites, isLoading: loading } =
		useGetAllQueriesData<GetUserFavoritesIdArrayQuery>({
			key: 'favoritesLength',
			query: () => userService.getAllFavoritesArray()
		})
	return (
		<div className='relative'>
			<Link aria-label={'перехож в избранное'} href={href}>
				<Heart color={color} size={size} />
			</Link>
			<span className='absolute bottom-1 left-2 text-[12px]'>
				{loading || favorites?.getProfile.favorites?.length === 0
					? ''
					: favorites?.getProfile.favorites?.length}
			</span>
		</div>
	)
}
