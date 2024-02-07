import { ISliderProps } from '../types/Slider.interface'
import { FC } from 'react'
import 'swiper/css'
import { Swiper } from 'swiper/react'

export const SliderDefault: FC<ISliderProps> = ({
	spaceBetween,
	slidesPerView = 1,
	loop = false,
	children,
	BreakIsExist = true,
	centerSlide = false
}) => {
	return (
		<Swiper
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			loop={loop}
			centeredSlides={centerSlide}
			breakpoints={
				BreakIsExist
					? {
							319: {
								spaceBetween: 10,
								slidesPerView: 1.7
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
							1500: {
								slidesPerView: 4
							},
							1650: {
								slidesPerView: 4.5
							}
						}
					: {}
			}
		>
			{children}
		</Swiper>
	)
}
