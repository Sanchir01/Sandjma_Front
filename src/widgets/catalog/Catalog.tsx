import { GetAllProductsDashboardQuery } from 'gql/gql/graphql'
import GridCatalog from './ui/Grid'
import { LayoutCatalog } from './ui/LayoutCatalog'
import Sorting from './ui/Sorting'

const Catalog = ({
	initialData
}: {
	initialData: GetAllProductsDashboardQuery
}) => (
	<LayoutCatalog
		grid={<GridCatalog initialData={initialData} />}
		sorting={<Sorting />}
	/>
)

export default Catalog
