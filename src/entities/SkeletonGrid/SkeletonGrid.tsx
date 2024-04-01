import styles from '@/shared/styles/Catalog.module.scss'
import { cn } from '@/shared/utils/utils'
import { SkeletonCart } from '../product/ui/Skeleton'
export const SkeletonGrid = ({
	className,
	numberSkeleton
}: {
	className?: string
	numberSkeleton: number
}) => (
	<div className={cn(styles.catalog__items, className)}>
		{[...Array(numberSkeleton)].map((_, i) => (
			<SkeletonCart key={i} />
		))}
	</div>
)
