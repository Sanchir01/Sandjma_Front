'use client'

import { userService } from '@/shared/service/user.service'
import { useQuery } from '@tanstack/react-query'

export default function Page() {
	const { data, isFetching } = useQuery({
		queryKey: ['favvoritesArray'],
		queryFn: () => userService.getAllFavorites()
	})
	return isFetching ? (
		<div>Favo</div>
	) : (
		<div className=''>
			{data?.getProfile.favorites?.map(item => (
				<div key={item.id} className=''>
					{item.name}
				</div>
			))}
		</div>
	)
}
