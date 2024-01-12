import { useGetAllQueriesData } from '@/shared/api/react-query.hooks'
import { userService } from '@/shared/service/user.service'
import { FC } from 'react'

export const FavoritesPageComponents: FC = () => {
	const { data, isFetching } = useGetAllQueriesData({
		query: () => userService.getAllFavorites(),
		key: 'favoritesArray'
	})
	return (
		<div>
			{data?.getProfile.favorites?.map(item => (
				<div className='' key={item.id}>
					{item.name}
				</div>
			))}
		</div>
	)
}
