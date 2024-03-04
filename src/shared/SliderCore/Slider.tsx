import { FC } from 'react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper/modules'
import { Swiper } from 'swiper/react'
import { ISliderProps } from '../types/Slider.interface'
export const SliderDefault: FC<ISliderProps> = ({
	spaceBetween,
	slidesPerView = 1,
	loop = false,
	children,
	BreakIsExist = true,
	centerSlide = false,
	bullets
}) => (
	<Swiper
		spaceBetween={spaceBetween}
		slidesPerView={slidesPerView}
		loop={loop}
		modules={bullets ? [Pagination] : []}
		centeredSlides={centerSlide}
		pagination={bullets ? true : false}
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
