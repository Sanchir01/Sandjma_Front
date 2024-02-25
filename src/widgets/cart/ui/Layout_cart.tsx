'use client'
import styles from '@/shared/styles/Scrollbar.module.scss'
import {
	Button,
	Sheet,
	SheetClose,
	SheetContent,
	SheetDescription,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger
} from '@/shared/ui'
import { cn } from '@/shared/utils/utils'
import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'
export interface ICartLayout {
	content: ReactNode

	trigger: ReactNode
}

const LayoutCart: FC<ICartLayout> = ({ content, trigger }) => {
	const { push } = useRouter()
	return (
		<Sheet>
			<SheetTrigger asChild>{trigger}</SheetTrigger>
			<SheetContent className={cn('p-0', styles.scroll)}>
				<SheetHeader className='border-b-2 border-black pt-4 dark:border-white'>
					<div className='px-4 pb-4 '>
						<SheetTitle>Корзина</SheetTitle>
						<SheetDescription>Ваша корзина</SheetDescription>
					</div>
				</SheetHeader>
				{content}
				<SheetFooter className='mt-5 px-3'>
					<SheetClose asChild>
						<Button className='w-full' onClick={() => push('/order')}>
							оформить заказ
						</Button>
					</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	)
}

export default LayoutCart
