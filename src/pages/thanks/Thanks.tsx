import Link from 'next/link'
import { FC } from 'react'

const Thanks: FC = () => {
	return (
		<section className='flex justify-center items-center flex-col gap-3 main h-screen'>
			<h1 className='text-xl'>Спасибо за оформление заказа</h1>
			<Link href={'/catalog'} className='text-xl'>
				Перейти в каталог
			</Link>
		</section>
	)
}

export default Thanks
