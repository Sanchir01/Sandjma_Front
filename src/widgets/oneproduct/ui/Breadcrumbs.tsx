import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbSeparator
} from '@/shared/ui/breadcrumb'
import { FC } from 'react'

const BreadcrumbsOneProduct: FC = () => {
	const a = ''
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href='/'>Home</BreadcrumbLink>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default BreadcrumbsOneProduct
