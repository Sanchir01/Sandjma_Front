import useCartStore from '@/app/store/useCart'
import { IColors, ISize } from '@/shared/types/Slider.interface'
import { Button } from '@/shared/ui'
import { Minus, Plus } from 'lucide-react'
import { FC } from 'react'
import { useShallow } from 'zustand/react/shallow'

const Counter: FC<{
	color: IColors
	size: ISize
	quantity: number
	id: number
}> = ({ id, color, quantity, size }) => {
	const [plus, minus] = useCartStore(
		useShallow(state => [state.plus, state.minus])
	)

	return (
		<div className='flex gap-2 border-2 max-w-[100px] justify-center'>
			<Button
				disabled={quantity === 1}
				onClick={() => minus(id, size, color)}
				className='border-r-2 '
			>
				<Minus />
			</Button>
			<div className='p-1'>{quantity}</div>
			<Button onClick={() => plus(id, size, color)} className='border-l-2'>
				<Plus />
			</Button>
		</div>
	)
}

export default Counter
