'use client'
import { useFavorites } from '@/Providers/store/useFavorites'
import { useMediaQuery } from '@/shared/hooks'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { IOneProduct } from '@/shared/types/Slider.interface'
import { Button } from '@/shared/ui'
import { Heart } from 'lucide-react'
import { FC } from 'react'

export interface IToggleFavoritesFeature extends Omit<IOneProduct, 'size'> {}

export const AddToFavorites: FC<IToggleFavoritesFeature> = ({
	id,
	colors,
	slug,
	productColorId,
	name,
	price,
	images
}) => {
	const isMedia664 = useMediaQuery('(min-width: 640px)')

	const favorites = useStoreZustand(useFavorites, state => state.favorites)
	const toggleFavorites = useFavorites(state => state.setFavorites)
	const isExistColor = colors.find(item => item.id === productColorId)

	const isExistFavorites = favorites?.some(
		favorite => favorite.id === id && favorite.color.id === isExistColor?.id
	)

	const toggle = () => {
		toggleFavorites({
			id,
			color: isExistColor ? isExistColor : colors[0],
			image: images[0],
			name,
			price,
			slug,
			productColorId
		})
	}
	return (
		<Button
			aria-label='Add to favorites'
			variant={'secondary'}
			onClick={() => toggle()}
			size={'default'}
		>
			<Heart
				size={isMedia664 ? 20 : 15}
				fill={isExistFavorites ? 'black' : 'white'}
			/>
		</Button>
	)
}
