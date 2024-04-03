import { useFavorites } from '@/Providers/store/useFavorites'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { LayoutCatalog } from '@/widgets/catalog/ui/LayoutCatalog'
import SellerSlider from '@/widgets/NewAndSeller/ui/SellerSlider'
import { GridFavorites } from './grid'

export default function Page() {
	return (
		<>
			<LayoutCatalog grid={<GridFavorites />} />
			<div className='mt-5'>
				<SellerSlider />
			</div>
		</>
	)
}
