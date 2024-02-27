import useCartStore, { ICart } from '@/Providers/store/useCart'
import styles from '@/shared/styles/Cart.module.scss'
import { Button } from '@/shared/ui'
import { cn } from '@/shared/utils/utils'
import { Trash } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { FC, ReactNode } from 'react'
import CircleColor from '../product/ui/CircleColor'
export interface ICartProps {
	cartItem: ICart
	children?: ReactNode
}
const CartItem: FC<ICartProps> = ({ cartItem, children }) => {
	const toggleItem = useCartStore(state => state.toggleCartItem)
	return (
		<div className={cn(styles.cart__item, 'dark:border-b-white')}>
			<Link href={`/catalog/${cartItem.slug}/${cartItem.productColorId}`}>
				<Image
					src={cartItem.image}
					alt={cartItem.name}
					width={150}
					height={190}
					priority
					draggable
					className={styles.cart__image}
				/>
			</Link>
			<div className={cn(styles.cart__content, 'w-full')}>
				<div className='flex flex-col gap-5 '>
					<div className='flex-col flex-1 flex gap-3'>
						<span className={cn('text-balance', styles.cart__name)}>
							{cartItem.name}
						</span>
						<div className='flex gap-2 items-center'>
							<CircleColor imageCss={cartItem.color?.imageCss} />
							<span className={styles.cart__color}>{cartItem.color?.name}</span>
						</div>
					</div>

					<div className={cn('flex gap-2 items-center', styles.cart__quantity)}>
						{children}
					</div>
				</div>
				<div className='flex flex-col justify-self-end ml-auto items-center'>
					<Button variant={'default'} onClick={() => toggleItem(cartItem)}>
						<Trash />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default CartItem
