import Image from 'next/image'
import React, { useState } from 'react'

import styles from '@/shared/styles/OneProduct.module.scss'
import { IOneProduct } from '@/shared/types/Slider.interface'

import useCartStore from '@/app/store/useCart'
import { AddToCartItem, AddToFavorites } from '@/features'
import { useGetSimilar } from '@/shared/api/react-query.hooks'
import { useMediaQuery } from '@/shared/hooks'
import { useStoreZustand } from '@/shared/hooks/useStoreZustand'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Button
} from '@/shared/ui'
import { SliderDefault } from '@/shared/ui/icons/slider'
import { SliderBlock } from '@/widgets/Slider'
import cn from 'clsx'

import { useRouter } from 'next/router'
import { SwiperSlide } from 'swiper/react'
export interface IProductPage extends IOneProduct {
	categoryId: string
	description: string
}
export const OneProduct: React.FC<IProductPage> = ({
	id,
	colors,
	name,
	images,
	price,
	productColorId,
	slug,
	size,
	description,
	categoryId
}) => {
	const pushCart = useCartStore(state => state.toggleCartItem)
	const cartStore = useStoreZustand(useCartStore, state => state.cart)
	const isMedia1024 = useMediaQuery('(max-width:1024px)')
	const { data, isFetching } = useGetSimilar({ categoryId })
	const [activeSize, setActiveSize] = useState(0)
	const [colorIndex, setColorIndex] = useState(0)
	const isExistCart = cartStore?.some(
		t =>
			t.id === id &&
			size![activeSize].id === t.size.id &&
			t.color.id === colors![colorIndex].id
	)
	console.log(colors![colorIndex], 'colors@#$@')
	const router = useRouter()
	console.log()
	const pushColor = ({
		id,
		index,
		slug
	}: {
		id: number
		index: number
		slug: string
	}) => {
		setColorIndex(index)

		router.replace(`/catalog/${slug}/${id}`)
	}

	return (
		<div className={styles.oneProduct}>
			<div className='wrapper'>
				<div className={styles.oneProduct__wrapper}>
					{isMedia1024 ? (
						<div className='flex justify-center items-center'>
							<SliderDefault
								centerSlide={true}
								BreakIsExist={false}
								slidesPerView={1.1}
								spaceBetween={15}
							>
								{images.map((image, i) => (
									<SwiperSlide key={i}>
										<Image
											src={image}
											alt={image}
											width={480}
											height={480}
											draggable
											priority
											style={{ width: '100dvh', height: 'auto' }}
										/>
									</SwiperSlide>
								))}
							</SliderDefault>
						</div>
					) : (
						<div className={styles.oneProduct__images}>
							{images.map((image, i) => (
								<Image
									src={image}
									key={i}
									alt='картинка'
									width={480}
									height={480}
									draggable
									priority
								/>
							))}
						</div>
					)}
					<div className={styles.oneProduct__content}>
						<div className={'flex flex-col gap-[10px]'}>
							<div className={styles.oneProduct__title}>{name}</div>
							<div className={styles.oneProduct__price}>{price} P</div>
							<div className='mt-[10px] flex gap-3'>
								{colors?.map((item, i) => (
									<Button
										onClick={() =>
											pushColor({ id: item.id, index: i, slug: slug })
										}
										key={item.id}
										className={cn(
											'w-4 h-4   rounded-full  flex items-center justify-center',
											{
												'border-2 border-[#999999]': colorIndex === i
											},
											item.imageCss === '#fff' ? styles.shadow : ''
										)}
									>
										<div
											className='w-2 h-2 rounded-full block '
											style={{ backgroundColor: `${item.imageCss}` }}
										></div>
									</Button>
								))}
							</div>
							<div className='flex gap-2 mt-9'>
								{size?.map((item, i) => (
									<Button
										onClick={() => setActiveSize(i)}
										className={cn(
											'items-center h-8 w-8 p-2 justify-center flex',
											activeSize === i
												? 'bg-[#383838] text-white'
												: 'bg-[#D9D9D9]'
										)}
										key={item.id}
									>
										<div className=''>{item.name}</div>
									</Button>
								))}
							</div>
							<div className='flex gap-3 items-center mt-10'>
								<AddToCartItem
									className={'bg-[#232323] text-white p-2 cursor-pointer'}
									onClick={() =>
										pushCart({
											id,
											image: images[0],
											name,
											slug,
											quantity: 1,
											price,
											size: size![activeSize],
											color: colors![colorIndex],
											productColorId: productColorId
										})
									}
									text={
										isExistCart ? 'Удалить из корзины' : 'Добавить в корзину'
									}
								/>
								<AddToFavorites id={id} />
							</div>
						</div>

						<div className='max-w-[500px]'>
							<div className={styles.oneProduct__content__description}>
								<Accordion type='single' collapsible className='w-full'>
									<AccordionItem value='item-1'>
										<AccordionTrigger
											className={
												styles.oneProduct__content__description__trigger
											}
										>
											детали о продукте
										</AccordionTrigger>
										<AccordionContent
											className={
												styles.oneProduct__content__description__acardcontent
											}
										>
											{description}
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value='item-2'>
										<AccordionTrigger
											className={
												styles.oneProduct__content__description__trigger
											}
										>
											материалы производства
										</AccordionTrigger>
										<AccordionContent
											className={
												styles.oneProduct__content__description__acardcontent
											}
										>
											Мы постоянно обновляем наш ассортимент, чтобы предложить
											вам самые свежие и актуальные модели. Мы уверены, что
											каждый найдет у нас что-то по своему вкусу. Добро
											пожаловать в мир оверсайз и кэжуал стиля! Мы рады
											приветствовать вас на нашем сайте, где вы найдете самые
											модные и удобные вещи для вашего гардероба.
										</AccordionContent>
									</AccordionItem>
									<AccordionItem value='item-1'>
										<AccordionTrigger
											className={
												styles.oneProduct__content__description__trigger
											}
										>
											Доставка
										</AccordionTrigger>
										<AccordionContent
											className={
												styles.oneProduct__content__description__acardcontent
											}
										>
											Самомвывоз по адресу: г. Элиста, 7 микрорайон, дом 1
										</AccordionContent>
									</AccordionItem>
								</Accordion>
							</div>
						</div>
					</div>
				</div>
				{isFetching ? (
					<></>
				) : data?.getAllProducts.length ? (
					<div className='mt-10'>
						<SliderBlock
							loop
							title={'Похожие товары'}
							products={data.getAllProducts.products}
						></SliderBlock>
					</div>
				) : (
					<></>
				)}
			</div>
		</div>
	)
}
