import { Skeleton } from '@/shared/ui'
import cn from 'clsx'
import { FC } from 'react'
export const SkeletonCart: FC = () => {
	return (
		<div className='max-w-[350px] flex flex-col'>
			<Skeleton className={cn('bg-skeleton min-h-[500px] w-auto rounded-xl')} />
			<div className='flex justify-between mt-4'>
				<div className='space-y-2  w-auto '>
					<Skeleton className='h-4 w-[100px] bg-skeleton rounded-xl' />
					<Skeleton className='h-4 w-[100px] bg-skeleton rounded-xl' />
				</div>
				<Skeleton className='bg-skeleton w-10 h-10 rounded-xl' />
			</div>
		</div>
	)
}
