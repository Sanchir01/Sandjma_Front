import cn from 'clsx'
import { FC } from 'react'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

export interface ISliderProps {
	className: string
	image: string[]
	bgSlide: boolean
	spaceBetween?: number
	slidesPerView: number
	loop: boolean
}

export const Slider: FC<ISliderProps> = ({
	image,
	className,
	bgSlide = false,
	spaceBetween,
	slidesPerView = 1,
	loop = false
}) => {
	return (
		<Swiper
			spaceBetween={spaceBetween}
			slidesPerView={slidesPerView}
			loop={loop}
		>
			{image.map(img => (
				<SwiperSlide
					key={img}
					className={cn(className, bgSlide && `bg-[url(${img})]`)}
				>
					123
				</SwiperSlide>
			))}
		</Swiper>
	)
}
