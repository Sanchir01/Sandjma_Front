import styles from '@/shared/styles/Scrollbar.module.scss'
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/ui'
import cn from 'clsx'
import { FC, ReactNode } from 'react'
export interface IModal {
	Icon: ReactNode
	triggerTitle?: string
	side: 'top' | 'bottom' | 'left' | 'right' | null
	title?: ReactNode
	children?: ReactNode
	headerCn?: string
	className?: string
	description?: string
	Button: ReactNode
}

export const Modal: FC<IModal> = ({
	Icon,
	triggerTitle,
	side,
	title,
	children,
	headerCn,
	description,
	Button,
	className
}) => {
	return (
		<Sheet>
			<SheetTrigger className='flex gap-2'>
				{Icon ? Icon : <></>}
				{triggerTitle}
			</SheetTrigger>
			<SheetContent
				side={side}
				className={cn('bg-white max-[650px]:w-full ', className, styles.scroll)}
			>
				<SheetHeader className={cn(headerCn)}>
					<SheetTitle className='flex justify-between'>{title}</SheetTitle>
					{description ? (
						<SheetDescription>{description}</SheetDescription>
					) : (
						<></>
					)}
				</SheetHeader>
				{children}
				<SheetFooter>
					<SheetClose asChild>{Button}</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}
