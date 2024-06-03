import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbList,
	BreadcrumbSeparator
} from '@/shared/ui/breadcrumb'
import Link from 'next/link'
import { FC } from 'react'

const BreadcrumbsOneProduct: FC = () => {
	const a = ''
	return (
		<Breadcrumb>
			<BreadcrumbList>
				<BreadcrumbItem>
					<Link href={'/'} className='transition-colors hover:text-foreground'>
						Home
					</Link>
				</BreadcrumbItem>
				<BreadcrumbSeparator />
				<BreadcrumbItem>
					<Link
						href={'/catalog'}
						className='transition-colors hover:text-foreground'
					>
						Catalog
					</Link>
				</BreadcrumbItem>
			</BreadcrumbList>
		</Breadcrumb>
	)
}

export default BreadcrumbsOneProduct
