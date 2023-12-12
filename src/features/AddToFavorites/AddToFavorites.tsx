import { Button } from '@/shared/ui'
import { useMutation, useQuery } from '@apollo/client'
import {
	GetUserFavoritesIdArrayDocument,
	ToggleFavoritesProfileDocument
} from 'gql/gql/graphql'
import { Heart } from 'lucide-react'
import { FC } from 'react'
import toast from 'react-hot-toast'

export interface IToggleFavoritesFeature {
	id: number
}

export const AddToFavorites: FC<IToggleFavoritesFeature> = ({ id }) => {
	const [mutate] = useMutation(ToggleFavoritesProfileDocument, {
		update(cache) {
			const ArrayId = cache.readQuery({
				query: GetUserFavoritesIdArrayDocument
			})
			const isArray = ArrayId?.getProfile.favorites?.find(el => el.id === id)
			const isDeleteFavorites = ArrayId?.getProfile.favorites?.filter(
				el => el.id !== id
			)

			if (!!isArray) {
				cache.writeQuery({
					query: GetUserFavoritesIdArrayDocument,
					data: {
						getProfile: {
							favorites: [...isDeleteFavorites!]
						}
					}
				})
			} else {
				cache.writeQuery({
					query: GetUserFavoritesIdArrayDocument,
					data: {
						getProfile: {
							favorites: [
								{ __typename: 'Product', id: id },
								...ArrayId?.getProfile.favorites!
							]
						}
					}
				})
			}
		},
		refetchQueries: []
	})
	const { data: favorites, loading } = useQuery(
		GetUserFavoritesIdArrayDocument,
		{ fetchPolicy: 'cache-first' }
	)
	console.log(favorites)
	const toggle = async (id: number) => {
		await mutate({ variables: { productId: id } })
			.then(res => toast.success(res.data?.toggleFavoritesProfile as string))
			.catch(er =>
				console.log(
					er.message === 'forbidden resource'
						? 'Вам нужно пройти регистрацию'
						: 'ошибкан а сервере'
				)
			)
	}

	const isExistFavorites = loading
		? false
		: favorites?.getProfile?.favorites?.some(el => el.id === id)
	return (
		<Button onClick={() => toggle(id)}>
			{isExistFavorites ? (
				<Heart size={20} fill={'black'} />
			) : (
				<Heart size={20} fill={'white'} />
			)}
		</Button>
	)
}
