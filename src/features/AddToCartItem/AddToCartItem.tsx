import useCartStore from '@/app/store/useCart'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import { Button } from '@/shared/ui'
import cn from 'clsx'
import { FC } from 'react'

export interface IAddToCartItem {
	className: string
	onClick: () => void
	text: string
}

export const AddToCartItem: FC<IAddToCartItem> = (
	{ className, onClick, text },
	...rest
) => {
	const cart = useStoreZustand(useCartStore, state => state.cart)
	return (
		<Button
			disabled={cart?.length === 0}
			{...rest}
			className={cn(className)}
			onClick={onClick}
		>
			{text}
		</Button>
	)
}
