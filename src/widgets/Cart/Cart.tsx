import useCartStore from '@/app/store/useCart'
import { AddToCartItem } from '@/features'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import styles from '@/shared/styles/Cart.module.scss'
import { Button } from '@/shared/ui'
import { Modal } from '@/shared/ui/Modal'
import { IconCart } from '@/shared/ui/icons/cart'
import { Trash } from '@/shared/ui/icons/trash/Trash'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import cn from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
export const CartDrawer: FC = () => {
	const cart = useStoreZustand(useCartStore, state => state.cart)
	const toggleItem = useCartStore(state => state.toggleCartItem)
	const { replace } = useRouter()
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 400 })
	console.log(cart)
	return (
		<Modal
			className='min-w-[600px]'
			Icon={<IconCart />}
			side={'right'}
			title={<div>Корзина</div>}
			headerCn={'border-b-2 border-black pb-2 '}
			Button={
				<AddToCartItem
					className={'w-full h-10 bg-buttonBg text-white mt-5'}
					onClick={() => replace('/order')}
					text={'Оформить заказ'}
				/>
			}
		>
			<div ref={parent} className={styles.cart__wrapper}>
				{cart?.length === 0 ? (
					<div className='flex h-20 justify-center items-center'>
						Корзина пуста (
					</div>
				) : (
					cart?.map(item => (
						<div key={item.id} className={styles.cart__item}>
							<Image
								src={item.image}
								alt={item.name}
								width={150}
								height={190}
								priority
								draggable
							/>
							<div className={cn(styles.cart__content, 'w-full')}>
								<div className='flex flex-col gap-5 '>
									<div className='flex-col flex-1 flex gap-3'>
										<span className='text-balance '>{item.name}</span>
										<div className='flex gap-2 items-center'>
											<span
												className='w-2 h-2 rounded'
												style={{ backgroundColor: item.color.imageCss }}
											/>
											<span>{item.color.name}</span>
										</div>
									</div>
									<div className='flex gap-2 '>
										<div className=''>{item.size.name}</div>
										<div className=''>Количество</div>
										<div className=''>{item.price * item.quantity}</div>
									</div>
								</div>
								<div className='flex flex-col justify-self-end ml-auto items-center '>
									<span className='flex-1'>{item.price} Pублей</span>
									<Button onClick={() => toggleItem(item)}>
										<Trash />
									</Button>
								</div>
							</div>
						</div>
					))
				)}
			</div>
		</Modal>
	)
}
