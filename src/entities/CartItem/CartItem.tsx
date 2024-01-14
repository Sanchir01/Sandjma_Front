import useCartStore, { ICart } from '@/app/store/useCart'
import styles from '@/shared/styles/Cart.module.scss'
import { Button } from '@/shared/ui'
import { Trash } from '@/shared/ui/icons/trash/Trash'
import cn from 'clsx'
import Image from 'next/image'
import { FC, ReactNode, memo } from 'react'
export interface ICartProps {
	cartItem: ICart
	children?: ReactNode
}
const CartItem: FC<ICartProps> = ({ cartItem, children }) => {
	const toggleItem = useCartStore(state => state.toggleCartItem)
	return (
		<div className={styles.cart__item}>
			<Image
				src={cartItem.image}
				alt={cartItem.name}
				width={150}
				height={190}
				priority
				draggable
				className={styles.cart__image}
			/>
			<div className={cn(styles.cart__content, 'w-full')}>
				<div className='flex flex-col gap-5 '>
					<div className='flex-col flex-1 flex gap-3'>
						<span className={cn('text-balance', styles.cart__name)}>
							{cartItem.name}
						</span>
						<div className='flex gap-2 items-center'>
							<span
								className='w-2 h-2 rounded'
								style={{ backgroundColor: cartItem.color?.imageCss }}
							/>
							<span className={styles.cart__color}>{cartItem.color?.name}</span>
						</div>
						{children}
					</div>
					<div className={cn('flex gap-2', styles.cart__quantity)}>
						<div className=''>{cartItem.size.name}</div>
						<div className=''>Количество</div>
						<div className=''>{cartItem.price * cartItem.quantity}</div>
					</div>
				</div>
				<div className='flex flex-col justify-self-end ml-auto items-center'>
					<span className={cn('flex-1', styles.cart__price)}>
						{cartItem.price} Pублей
					</span>
					<Button onClick={() => toggleItem(cartItem)}>
						<Trash />
					</Button>
				</div>
			</div>
		</div>
	)
}

export default memo(CartItem)
