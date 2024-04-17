import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'

import Filters from '@/features/Filters/Filters'
import Sorting from '@/features/Filters/ui/Sorting'
import GridCatalog from './ui/Grid'
import { LayoutCatalog } from './ui/LayoutCatalog'
import PaginationCatalog from './ui/Pagination'

const Catalog = ({
	initialData
}: {
	initialData: GetAllProductsDashboardQuery
}) => (
	<LayoutCatalog
		filters={<Filters />}
		grid={<GridCatalog initialData={initialData} />}
		pagination={
			<PaginationCatalog length={initialData.getAllProducts.length} />
		}
		sorting={
			<div className='max-[1024px]:hidden'>
				<Sorting />
			</div>
		}
	/>
)

export default Catalog
