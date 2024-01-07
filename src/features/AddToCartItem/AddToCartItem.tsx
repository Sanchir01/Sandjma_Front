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
	return (
		<Button {...rest} className={cn(className)} onClick={onClick}>
			{text}
		</Button>
	)
}
