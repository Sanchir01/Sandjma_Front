import styles from '@/shared/styles/Slider.module.scss'
import { ISliderBlockProduct } from '@/shared/types/Slider.interface'
import { SliderDefault } from '@/shared/ui/slider'
import React from 'react'

export const SliderBlock: React.FC<ISliderBlockProduct> = ({
	product,
	title
}) => {
	return (
		<section className={styles.slider}>
			<h2 className={styles.slider__title}>{title}</h2>
			<SliderDefault
				priority={true}
				className={''}
				products={product}
				slidesPerView={4.5}
				spaceBetween={15}
			>
				<div className='mt-3'>123123</div>
			</SliderDefault>
		</section>
	)
}
