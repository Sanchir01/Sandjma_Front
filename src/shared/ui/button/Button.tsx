import cn from 'clsx'
import { ButtonHTMLAttributes, FC, PropsWithChildren, ReactNode } from 'react'

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string
	children?: ReactNode
	onClick?: () => void
}

export const Button: FC<PropsWithChildren<IButtonProps>> = ({
	className,
	children,
	onClick,
	...rest
}) => {
	return (
		<button {...rest} onClick={onClick} className={cn(className)}>
			{children}
		</button>
	)
}
