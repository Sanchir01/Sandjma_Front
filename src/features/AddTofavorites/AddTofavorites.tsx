import { Button } from '@/shared/ui'
import { Heart } from 'lucide-react'
import { FC } from 'react'
import toast from 'react-hot-toast'
import {
	useAddToFavorites,
	useGetAllLengthFavorites
} from './api/FavoritesLenght'

export interface IToggleFavoritesFeature {
	id: number
}

export const AddToFavorites: FC<IToggleFavoritesFeature> = ({ id }) => {
	const { mutateAsync } = useAddToFavorites(id)
	const { data: favorites, isLoading: loading } = useGetAllLengthFavorites()

	const toggle = async (id: number) => {
		mutateAsync(id)
			.then(res => toast.success(res.toggleFavoritesProfile))
			.catch(res => toast.error('вам нужно пройти регистрацию'))
	}

	const isExistFavorites = loading
		? false
		: favorites?.getProfile?.favorites?.some(el => el.id === id)
	return (
		<Button
			aria-label='Add to favorites'
			variant={'secondary'}
			onClick={() => toggle(id)}
		>
			{isExistFavorites ? (
				<Heart size={20} fill={'black'} />
			) : (
				<Heart size={20} fill={'white'} />
			)}
		</Button>
	)
}
