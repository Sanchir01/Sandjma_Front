import React, { useState } from 'react'
import Image from 'next/image'
import { AddToFavorites } from '@/features/AddToFavorites'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/shared/ui/accordion/accordion'

import styles from '@/shared/styles/OneProduct.module.scss'
import { IOneProduct } from '@/shared/types/Slider.interface'
import { Button } from '@/shared/ui'

import cn from 'clsx'
import { ImageOneProduct } from '@/features/ImageOneProduct'

export const OneProduct: React.FC<IOneProduct> = ({
	id,
	colors,
	name,
	images,
	price,
	productColorId,
	slug,
	size
}) => {
	const [count, setCount] = useState(0)

	const increment = () => {
		setCount(prev => prev + 1)
	}

	const decrement = () => {
		setCount(prev => prev - 1)
	}

	return (
		<div className={styles.oneproduct}>
			<div className='container'>
				<div className={styles.oneproduct__wrapper}>
					{/* <ImageOneProduct /> */}
					{/* <div className={styles.oneproduct__images}>
						{images.map((image, i) => (
							<Image
								src={image}
								key={i}
								alt='картинка'
								width={480}
								height={480}
							/>
						))}
					</div> */}
					<div className={styles.oneproduct__content}>
						<div className={styles.oneproduct__content__order}>
							<div className={styles.oneproduct__content__order__title}>
								{name}
							</div>

							<div className={styles.oneproduct__content__order__price}>
								{price}₽
							</div>

							<div className={styles.oneproduct__content__order__colors}>
								{colors?.map(color => (
									<Button
										key={color.id}
										className={cn(
											styles.oneproduct__content__order__colors__color,
											color.id === productColorId
												? 'focus:border-black'
												: 'focus:border-black'
										)}
									>
										<div
											className={cn(
												`w-3 h-3 rounded-full border-2 border-collapse  `
											)}
											style={{ background: `${color.imageCss}` }}
										/>
									</Button>
								))}
							</div>
							{/* <div className={styles.oneproduct__content__order__quantity}>
								<div
									className={styles.oneproduct__content__order__quantity__text}
								>
									количество:
								</div>

								<div
									className={styles.oneproduct__content__order__quantity__num}
								>
									<Button
										className=''
										onClick={decrement}
										disabled={count === 0}
									>
										<Minus size={12} strokeWidth={4} />
									</Button>
									<span>{count}</span>
									<Button className='' onClick={increment}>
										<Plus size={12} strokeWidth={4} />
									</Button>
								</div>
							</div> */}
							<div className={styles.oneproduct__content__order__size}>
								{size.map(size => (
									<Button
										key={size.id}
										className={styles.oneproduct__content__order__size__btn}
									>
										{size.name}
									</Button>
								))}
							</div>
							<div className={styles.oneproduct__content__order__add}>
								<Button
									className={styles.oneproduct__content__order__add__cart}
								>
									добавить в карзину
								</Button>
								<Button
									className={styles.oneproduct__content__order__add__favorites}
								>
									{AddToFavorites({ id: 0 })}
								</Button>
							</div>
						</div>
						<div className={styles.oneproduct__content__description}>
							<Accordion type='single' collapsible className='w-full'>
								<AccordionItem value='item-1'>
									<AccordionTrigger
										className={styles.oneproduct__content__description__trigger}
									>
										детали о продукте
									</AccordionTrigger>
									<AccordionContent
										className={
											styles.oneproduct__content__description__acardcontent
										}
									>
										Мы постоянно обновляем наш ассортимент, чтобы предложить вам
										самые свежие и актуальные модели. Мы уверены, что каждый
										найдет у нас что-то по своему вкусу. Добро пожаловать в мир
										оверсайз и кэжуал стиля! Мы рады приветствовать вас на нашем
										сайте, где вы найдете самые модные и удобные вещи для вашего
										гардероба.
									</AccordionContent>
								</AccordionItem>
								<AccordionItem value='item-2'>
									<AccordionTrigger
										className={styles.oneproduct__content__description__trigger}
									>
										материалы производства
									</AccordionTrigger>
									<AccordionContent
										className={
											styles.oneproduct__content__description__acardcontent
										}
									>
										Мы постоянно обновляем наш ассортимент, чтобы предложить вам
										самые свежие и актуальные модели. Мы уверены, что каждый
										найдет у нас что-то по своему вкусу. Добро пожаловать в мир
										оверсайз и кэжуал стиля! Мы рады приветствовать вас на нашем
										сайте, где вы найдете самые модные и удобные вещи для вашего
										гардероба.
									</AccordionContent>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
