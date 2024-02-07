import React from 'react'
import { SwiperSlide } from 'swiper/react'
import styles from '@/shared/styles/Slider.module.scss'
import { ISliderBlockProduct } from '../types/Slider.interface'
import { OneCart } from '../OneCartCatalog/OneCart'
import { AddToFavorites } from '@/features/AddTofavorites/AddTofavorites'
import { SliderDefault } from '../Slider/Slider'

export const SliderBlock: React.FC<ISliderBlockProduct> = ({
	products = [],
	title,
	loop
}) => {
	return (
		<section className={styles.slider}>
			<h2 className={styles.slider__title}>{title}</h2>
			<SliderDefault slidesPerView={4.5} spaceBetween={15} loop={loop}>
				{products.map(item => (
					<SwiperSlide key={item.id}>
						<OneCart
							className='max-w-[400px]'
							images={item.images}
							price={item.price}
							name={item.name}
							slug={item.slug}
							colorId={item.productColorId}
						>
							<AddToFavorites id={item.id} />
						</OneCart>
					</SwiperSlide>
				))}
			</SliderDefault>
		</section>
	)
}
