import useCartStore from '@/Providers/store/useCart'
import styles from '@/shared/styles/Cart.module.scss'
import { IColors, ISize } from '@/shared/types/Slider.interface'
import { Button } from '@/shared/ui'
import cn from 'clsx'
import { Minus, Plus } from 'lucide-react'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'
const Counter: FC<{
	color: IColors
	size: ISize
	quantity: number
	id: number
	className?: string
}> = ({ id, color, quantity, size }) => {
	const [plus, minus] = useCartStore(
		useShallow(state => [state.plus, state.minus])
	)

	return (
		<div className={cn('flex gap-2  max-w-[100px] items-center')}>
			<Button
				size={'icon'}
				disabled={quantity === 1}
				onClick={() => minus(id, size, color)}
				className={cn('rounded ', styles.cart__minus)}
			>
				<Minus size={14} />
			</Button>
			<div className='p-1'>{quantity}</div>
			<Button
				size={'icon'}
				onClick={() => plus(id, size, color)}
				className={cn('rounded  ', styles.cart__plus)}
			>
				<Plus size={14} />
			</Button>
		</div>
	)
}

export default Counter
