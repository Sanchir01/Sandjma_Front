import useCartStore from '@/app/store/useCart'
import CartItem from '@/entities/CartItem/CartItem'
import { AddToCartItem } from '@/features'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import styles from '@/shared/styles/Cart.module.scss'
import { Modal } from '@/shared/ui/Modal'
import { IconCart } from '@/shared/ui/icons/cart'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useRouter } from 'next/navigation'
import { FC } from 'react'
export const CartDrawer: FC = () => {
	const cart = useStoreZustand(useCartStore, state => state.cart)

	const { replace } = useRouter()
	const [parent] = useAutoAnimate({ easing: 'ease-in-out', duration: 400 })

	return (
		<Modal
			className='min-[640px]:max-w-[600px]'
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
					<div className='flex h-20 justify-center items-center'>(</div>
				) : cart ? (
					cart?.map(item => <CartItem key={item.id} cartItem={item} />)
				) : (
					'Корзина пуста '
				)}
			</div>
		</Modal>
	)
}
