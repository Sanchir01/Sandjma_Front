import { OneCart } from '@/entities/product/ProductCart'
import { AddToFavorites } from '@/features/AddTofavorites/AddTofavorites'
import styles from '@/shared/styles/Slider.module.scss'
import React from 'react'
import { SwiperSlide } from 'swiper/react'
import { SliderDefault } from '../../../shared/SliderCore/Slider'
import { ISliderBlockProduct } from '../../../shared/types/Slider.interface'

export const SliderBlock: React.FC<ISliderBlockProduct> = ({
	products = [],
	title,
	loop
}) => (
	<section className={styles.slider}>
		<h2 className={styles.slider__title}>{title}</h2>
		<SliderDefault slidesPerView={5.1} spaceBetween={10} loop={loop}>
			{products.map(item => (
				<SwiperSlide key={item.id}>
					<OneCart
						className='max-w-[400px]'
						images={item.images}
						price={item.price}
						name={item.name}
						slug={item.slug}
						colorId={item.productColorId}
						colors={item.colors || []}
						productColorId={item.productColorId}
					>
						<AddToFavorites id={item.id} />
					</OneCart>
				</SwiperSlide>
			))}
		</SliderDefault>
	</section>
)
