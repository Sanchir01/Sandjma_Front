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
		>
			{products.map(({ id, images }) => (
				<SwiperSlide key={id}>
					<div className={cn(className)}>
						<Link href={`/catalog/${id}`} className='h-[600px] w-[430px]'>
							<Image
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
