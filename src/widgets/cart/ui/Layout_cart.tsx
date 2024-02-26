'use client'
import useCartStore from '@/Providers/store/useCart'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
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
import { ShoppingCart } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FC, ReactNode } from 'react'
export interface ICartLayout {
	content: ReactNode
}

const LayoutCart: FC<ICartLayout> = ({ content }) => {
	const { push } = useRouter()
	const cart = useStoreZustand(useCartStore, state => state.cart)
	return (
		<Sheet>
			<SheetTrigger asChild>
				<div className='relative'>
					<ShoppingCart className='cursor-pointer' />
					{cart?.length === 0 ? (
						<></>
					) : (
						<span className='absolute top-1 left-[9px] text-[10px]'>
							{cart?.length}
						</span>
					)}
				</div>
			</SheetTrigger>
			<SheetContent
				className={cn(
					'p-0 max-[650px]:w-full min-[640px]:max-w-[600px]',
					styles.scroll
				)}
			>
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
