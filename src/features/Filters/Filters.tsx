import { FC } from 'react'
import ContentFilters from './ui/Content'
import FiltersLayout from './ui/FiltersLayout'
import Sorting from './ui/Sorting'

const Filters: FC = () => (
	<FiltersLayout
		sorting={
			<div className='lg:hidden'>
				<Sorting />
			</div>
		}
		content={<ContentFilters />}
	/>
)

export default Filters
