'use client'

import { useFavorites } from '@/Providers/store/useFavorites'
import { SliderBlock } from '@/entities/SliderBlock/SliderBlock'
import { useGetAllProducts } from '@/entities/product/api/useGetAllProducts'
import CircleColor from '@/entities/product/ui/CircleColor'
import { AddToFavorites } from '@/features/AddTofavorites/AddTofavorites'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
	const favorites = useStoreZustand(useFavorites, state => state.favorites)
	const { data, isLoading } = useGetAllProducts({ page: '1', newProduct: true })
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 500 })
	console.log(favorites)
	return (
		<div className='flex flex-col gap-10'>
			<div ref={parent} className='flex gap-2 flex-col'>
				{favorites?.length === 0 ? (
					<>У вас пуст список избраного</>
				) : favorites ? (
					favorites?.map(item => (
						<div key={item.id} className='flex gap-10 items-center'>
							<div className=''>{item.name}</div>
							<Link href={`/catalog/${item.slug}/${item.productColorId}`}>
								<Image
									width={100}
									height={100}
									src={item.image}
									alt={item.name}
								/>
							</Link>
							<CircleColor imageCss={item.color.imageCss} />
							<AddToFavorites
								images={[item.image]}
								colors={[item.color]}
								{...item}
							/>
						</div>
					))
				) : (
					<>Loading</>
				)}
			</div>
			{isLoading ? (
				<>Laoding</>
			) : (
				data && (
					<div className=''>
						<SliderBlock
							title={'Реккомендлуем'}
							products={data?.getAllProducts.products}
						/>
					</div>
				)
			)}
		</div>
	)
}
