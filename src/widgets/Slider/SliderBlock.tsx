import OneCart from '@/entities/OneCart'
import { AddToFavorites } from '@/features'
import styles from '@/shared/styles/Slider.module.scss'
import { ISliderBlockProduct } from '@/shared/types/Slider.interface'
import { SliderDefault } from '@/shared/ui/icons/slider'
import React from 'react'
import { SwiperSlide } from 'swiper/react'

export const SliderBlock: React.FC<ISliderBlockProduct> = ({
	product,
	title,
	loop
}) => {
	return (
		<section className={styles.slider}>
			<h2 className={styles.slider__title}>{title}</h2>
			<SliderDefault slidesPerView={4.5} spaceBetween={15} loop={loop}>
				{product.map(item => (
					<SwiperSlide key={item.id}>
						<OneCart product={item} id={0} images={item.images}>
							<AddToFavorites />
						</OneCart>
					</SwiperSlide>
				))}
			</SliderDefault>
		</section>
	)
}
