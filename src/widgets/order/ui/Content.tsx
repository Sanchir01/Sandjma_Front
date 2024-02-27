import useCartStore from '@/Providers/store/useCart'
import CartItem from '@/entities/CartItem/CartItem'
import Counter from '@/features/Counter/Counter'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { FC } from 'react'

const Content: FC = () => {
	const cart = useStoreZustand(useCartStore, state => state.cart)
	const [parent] = useAutoAnimate({ duration: 500, easing: 'ease-in-out' })
	return (
		<div ref={parent} className='flex flex-col '>
			{cart?.map(item => (
				<CartItem key={item.id} cartItem={item}>
					<div className=''>{item.size.name}</div>
					<div className='flex items-center gap-2'>
						<Counter
							color={item.color}
							size={item.size}
							quantity={item.quantity}
							id={item.id}
						/>
					</div>
					<div className=''>{item.price * item.quantity}</div>
				</CartItem>
			))}
		</div>
	)
}

export default Content
