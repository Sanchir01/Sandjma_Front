import { userService } from '@/shared/service/user.service'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

export const useGetAllLengthFavorites = () =>
	useQuery({
		queryKey: ['favoritesLength'],
		queryFn: () => userService.getAllFavoritesArray()
	})

export const useAddToFavorites = (id: number) => {
	const client = useQueryClient()
	return useMutation({
		mutationKey: ['addToFavorites'],
		mutationFn: (id: number) => userService.addToFavorites(id),
		onSuccess: () => {
			client.invalidateQueries({
				exact: true,
				queryKey: ['favoritesArray', 'favoritesLength']
			})
		}
	})
}
