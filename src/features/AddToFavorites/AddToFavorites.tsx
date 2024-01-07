import {
	useAllMutation,
	useGetAllQueriesData
} from '@/shared/api/react-query.hooks'
import { userService } from '@/shared/service/user.service'
import { Button } from '@/shared/ui'
import {
	GetUserFavoritesIdArrayQuery,
	ToggleFavoritesProfileMutation
} from 'gql/gql/graphql'
import { Heart } from 'lucide-react'
import { FC } from 'react'
import toast from 'react-hot-toast'

export interface IToggleFavoritesFeature {
	id: number
}

export const AddToFavorites: FC<IToggleFavoritesFeature> = ({ id }) => {
	const { mutateAsync } = useAllMutation<ToggleFavoritesProfileMutation>({
		key: ['addToFavorites'],
		mutation: () => userService.addToFavorites(id),
		invalidateQueryKey: ['favoritesLength']
	})
	const { data: favorites, isLoading: loading } =
		useGetAllQueriesData<GetUserFavoritesIdArrayQuery>({
			key: 'favoritesLength',
			query: () => userService.getAllFavoritesArray()
		})

	const toggle = async (id: number) => {
		mutateAsync(id)
			.then(res => toast.success(res.toggleFavoritesProfile))
			.catch(
				res => (toast.error('вам нужно пройти регистрацию'), console.log(res))
			)
	}

	const isExistFavorites = loading
		? false
		: favorites?.getProfile?.favorites?.some(el => el.id === id)
	return (
		<Button aria-label='Add to favorites' onClick={() => toggle(id)}>
			{isExistFavorites ? (
				<Heart size={20} fill={'black'} />
			) : (
				<Heart size={20} fill={'white'} />
			)}
		</Button>
	)
}
