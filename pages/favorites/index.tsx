import { NextPageAuth } from '@/app/Auth_Provider/types'
import { FavoritesPageComponents } from '@/pages/Favorites'

const FavoritesPage: NextPageAuth = () => {
	return <FavoritesPageComponents />
}
FavoritesPage.isOnlyUser = true

export default FavoritesPage
