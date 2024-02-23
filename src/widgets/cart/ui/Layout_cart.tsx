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
import { FC, ReactNode } from 'react'

export interface ICartLayout {
	content: ReactNode
	footerTrigger: ReactNode
	trigger: ReactNode
}

const LayoutCart: FC<ICartLayout> = ({ content, trigger, footerTrigger }) => {
	const a = ''
	return (
		<Sheet>
			<SheetTrigger asChild>{trigger}</SheetTrigger>
			<SheetContent className='p-0'>
				<SheetHeader className='border-b-2 border-black pt-4 dark:border-white'>
					<div className='px-4 pb-4 '>
						<SheetTitle>Корзина</SheetTitle>
						<SheetDescription>Ваша корзина</SheetDescription>
					</div>
				</SheetHeader>
				{content}
			</SheetContent>
			<SheetFooter>
				<SheetClose asChild>{footerTrigger}</SheetClose>
			</SheetFooter>
		</Sheet>
	)
}

export default LayoutCart
