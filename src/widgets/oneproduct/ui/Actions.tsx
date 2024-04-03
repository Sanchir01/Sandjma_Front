'use client'
import useCartStore from '@/Providers/store/useCart'
import CircleColor from '@/entities/product/ui/CircleColor'
import AddToCart from '@/features/AddToCart/addToCart'
import { AddToFavorites } from '@/features/AddTofavorites/AddTofavorites'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { Button } from '@/shared/ui'
import { cn } from '@/shared/utils/utils'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { IProductPage } from '../OneProduct'
export interface IOneProductActions extends IProductPage {}
const Actions: FC<IOneProductActions> = ({
	colors,
	id,
	productColorId,
	slug,
	size,
	images,
	price,
	name
}) => {
	const cartStore = useStoreZustand(useCartStore, state => state.cart)
	const [activeSize, setActiveSize] = useState(0)
	const selectColor = colors?.find(item => item.id === productColorId)

	const isExistCart = cartStore?.some(
		t =>
			t.id === id &&
			size[activeSize].id === t.size.id &&
			colors.find(item => item.id === t.color.id)
	)
	const { replace } = useRouter()
	return (
		<>
			<div className='mt-[10px] flex items-center gap-3'>
				{colors?.map(item => (
					<CircleColor
						key={item.id}
						onClick={() => replace(`/catalog/${slug}/${item.id}`)}
						className='cursor-pointer w-10 h-10'
						imageCss={item.imageCss}
					/>
				))}
			</div>
			<div className='flex gap-2 mt-9'>
				{size?.map((item, i) => (
					<Button
						onClick={() => setActiveSize(i)}
						variant={activeSize === i ? 'default' : 'secondary'}
						className={cn(
							'items-center h-8 w-8 p-2 justify-center flex',
							activeSize === i ? 'bg-[#383838] text-white' : 'bg-[#D9D9D9]'
						)}
						key={item.id}
					>
						<div className=''>{item.name}</div>
					</Button>
				))}
			</div>
			<div className='flex gap-3 items-center mt-10 w-20'>
				<AddToCart
					cart={{
						id,
						image: images[0],
						name,
						price,
						productColorId,
						slug,
						color: selectColor ? selectColor : colors[0],
						size: size[activeSize]
					}}
					text={isExistCart ? 'удалить из корзины' : 'добавить в корзину'}
				/>
				<AddToFavorites
					id={id}
					colors={colors}
					images={images}
					name={name}
					price={0}
					slug={slug}
					productColorId={productColorId}
				/>
			</div>
		</>
	)
}

export default Actions
