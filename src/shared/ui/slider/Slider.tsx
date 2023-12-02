import styles from '@/shared/styles/Slider.module.scss'
import { ISliderProps } from '@/shared/types/Slider.interface'
import cn from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export const SliderDefault: FC<ISliderProps> = ({
	className,
	spaceBetween,
	slidesPerView = 1,
	loop = false,
	children,
	priority = false,
	products
}) => {
	return (
		<Swiper
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			loop={loop}
			breakpoints={{
				319: {
					spaceBetween: 10,
					slidesPerView: 1.4
				},
				560: {
					slidesPerView: 2.5
				},
				900: {
					slidesPerView: 3.2
				},
				1200: {
					slidesPerView: 3.8
				},
				1540: {
					slidesPerView: 4
				},
				1600: {
					slidesPerView: 4.5
				}
			}}
		>
			{products.map(({ id, images }) => (
				<SwiperSlide key={id}>
					<div className={cn(className, styles.slider__content)}>
						<Link href={`/catalog/${id}`} className={styles.slider__imageBlock}>
							<Image
								className={styles.slider__imageBlock__image}
								src={images[0]}
								alt={images[0]}
								width={400}
								height={400}
								priority={priority}
							/>
						</Link>

						{children}
					</div>
				</SwiperSlide>
			))}
		</Swiper>
	)
}
