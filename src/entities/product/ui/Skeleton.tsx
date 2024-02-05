import styles from '@/shared/styles/Skeleton.module.scss'
import { Skeleton } from '@/shared/ui/skeleton'
import { cn } from '@/shared/utils/utils'

import { FC } from 'react'
export const SkeletonCart: FC = () => (
	<div className={styles.skeleton}>
		<Skeleton
			className={cn(
				styles.skeleton__image,
				'bg-skeleton min-h-[500px] w-auto rounded-xl'
			)}
		/>
		<div className='flex justify-between mt-4'>
			<div className='space-y-2  w-auto '>
				<Skeleton className='h-4 w-[100px] bg-skeleton rounded-xl' />
				<Skeleton className='h-4 w-[100px] bg-skeleton rounded-xl' />
			</div>
			<Skeleton className='bg-skeleton w-10 h-10 rounded-xl' />
		</div>
	</div>
)
